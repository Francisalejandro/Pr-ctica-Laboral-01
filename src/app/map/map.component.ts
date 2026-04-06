import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { UbicacionesQuery } from '../state/ubicaciones.query';
import { Ubicacion } from '../state/ubicacion.model';
import { SeleccionService } from '../Seleccion/seleccion.service';
import { Subject, takeUntil } from 'rxjs';
import { GeocalizacionService } from '../geocalizacion/geocalizacion.service';
import { TspService, Punto } from '../TspService/tsp.service';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  private map: any;
  private markerGroup: any;
  private destroy$ = new Subject<void>();
  private userLocation: Punto | null = null;
  private routingControl: any;
  private L: any;
  private mapInicializado = false;
  private marcadores: Map<number, any> = new Map();

  ubicacionesActuales: Ubicacion[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ubicacionesQuery: UbicacionesQuery,
    private geoService: GeocalizacionService,
    private tspService: TspService,
    private seleccionService: SeleccionService
  ) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const leaflet = await import('leaflet');
      this.L = (leaflet as any).default ?? leaflet;
      (window as any).L = this.L;
      await import('leaflet-routing-machine');

      this.initMap();

      this.geoService.obtenerUbicacion().subscribe(pos => {
        if (!this.map) return;

        this.userLocation = { lat: pos.lat, lng: pos.lng };

        this.map.setView([pos.lat, pos.lng], 10);

        const iconoUsuario = this.getIcono('usuario');

        this.L.marker([pos.lat, pos.lng], { icon: iconoUsuario })
          .addTo(this.map)
          .bindPopup('Estas aqui')
          .openPopup();
      });

      this.ubicacionesQuery.ubicacionesFiltradas$
        .pipe(takeUntil(this.destroy$))
        .subscribe(ubicaciones => {
          this.ubicacionesActuales = ubicaciones;
          this.actualizarMarcadores(ubicaciones);
        });

      this.seleccionService.getSeleccionados$()
        .pipe(takeUntil(this.destroy$))
        .subscribe(seleccionados => {
          this.actualizarMarcadores(this.ubicacionesActuales);
          if (seleccionados.length === 0) {
            this.limpiarRuta();
          }
        });
    }
  }

  calcularRutaConAlgoritmo() {
    const seleccionados = this.seleccionService.getSeleccionados();

    if (!this.map || !this.userLocation || seleccionados.length === 0) return;

    const puntosDestino: Punto[] = seleccionados.map(u => ({
      lat: u.lat,
      lng: u.lng
    }));

    const rutaOptima = this.tspService.resolverRuta(
      this.userLocation,
      puntosDestino
    );

    const waypoints = [
      this.L.latLng(this.userLocation.lat, this.userLocation.lng),
      ...rutaOptima.map((p: Punto) => this.L.latLng(p.lat, p.lng))
    ];

    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }

    const LRM = (window as any).L.Routing;

    this.routingControl = LRM.control({
      waypoints: waypoints,
      routeWhileDragging: false,
      show: true,
      addWaypoints: false,
      fitSelectedRoutes: true,
      language: 'es',
      router: LRM.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1',
        language: 'es'
      })
    }).addTo(this.map);
  }

  limpiarRuta() {
    if (this.routingControl && this.map) {
      this.map.removeControl(this.routingControl);
      this.routingControl = null;
    }
  }

  centrarEn(ubicacion: Ubicacion) {
    if (this.map) {
      this.map.flyTo([ubicacion.lat, ubicacion.lng], 15);
    }
  }

  private getPopupContent(u: Ubicacion): string {
    const seleccionado = this.seleccionService.estaSeleccionado(u);
    const color = seleccionado ? '#e74c3c' : '#2ecc71';
    const texto = seleccionado ? '✓ Quitar selección' : '+ Seleccionar para ruta';
    return `
      <b>${u.nombre}</b><br>
      ${u.descripcion}<br><br>
      <span style="
        display:inline-block;
        background:${color};
        color:white;
        padding:4px 10px;
        border-radius:4px;
        cursor:pointer;
        font-size:12px;
      " id="btn-marker-${u.id}">
        ${texto}
      </span>
    `;
  }

  private actualizarPopup(ubicacion: Ubicacion) {
    const marker = this.marcadores.get(ubicacion.id);
    if (marker) {
      marker.setPopupContent(this.getPopupContent(ubicacion));
    }
  }

  private initMap() {
    if (this.mapInicializado) return;
    this.mapInicializado = true;

    this.map = this.L.map('map', { maxZoom: 19 }).setView([20.02183, -75.829486], 8);

    this.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(this.map);

    this.markerGroup = this.L.layerGroup().addTo(this.map);
  }

  private normalizarCategoria(categoria?: string): string {
    if (!categoria) return '';
    return categoria
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s/g, '');
  }

  private getIcono(categoria?: string) {
    const iconos: any = {
      hospital: 'assets/hospital.png',
      museo: 'assets/museo.png',
      parque: 'assets/parque.png',
      tienda: 'assets/tienda.png',
      agenciadeviajes: 'assets/agenciadeviajes.png',
      casadecambio: 'assets/casadecambio.png',
      hotel: 'assets/hotel.png',
      usuario: 'assets/usuario.gif'
    };

    const clave = this.normalizarCategoria(categoria);
    const iconUrl = iconos[clave] || 'assets/default.png';

    return this.L.icon({
      iconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });
  }

  private actualizarMarcadores(ubicaciones: Ubicacion[]) {
    if (!this.markerGroup || !this.map) return;

    this.markerGroup.clearLayers();
    this.marcadores.clear();

    ubicaciones.forEach(u => {
      const icono = this.getIcono(u.categoria);

      const marker = this.L.marker([u.lat, u.lng], { icon: icono })
        .bindPopup(this.getPopupContent(u));

      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-marker-${u.id}`);
        if (btn) {
          btn.addEventListener('click', () => {
            this.seleccionService.toggle(u);
            this.actualizarPopup(u);
          });
        }
      });

      this.marcadores.set(u.id, marker);
      marker.addTo(this.markerGroup);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.map) {
      this.map.remove();
      this.map = null;
      this.mapInicializado = false;
    }
  }
}
