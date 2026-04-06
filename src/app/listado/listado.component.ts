import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UbicacionesQuery } from '../state/ubicaciones.query';
import { UbicacionesService } from '../state/ubicaciones.service';
import { Ubicacion } from '../state/ubicacion.model';
import { SeleccionService } from '../Seleccion/seleccion.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {

  ubicaciones$: Observable<Ubicacion[]>;
  loading$: Observable<boolean>;
  filtro: string = '';
  ubicacionSeleccionada: Ubicacion | null = null;
  private destroy$ = new Subject<void>();

  @Output() ubicacionSeleccionadaChange = new EventEmitter<Ubicacion>();

  constructor(
    private ubicacionesQuery: UbicacionesQuery,
    private ubicacionesService: UbicacionesService,
    public seleccionService: SeleccionService
  ) {
    this.ubicaciones$ = this.ubicacionesQuery.ubicacionesFiltradas$;
    this.loading$ = this.ubicacionesQuery.loading$;
  }

  ngOnInit() {
    this.ubicacionesQuery.filter$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filtro: string | null) => {
        this.filtro = filtro || '';
      });
  }

  toggleSeleccion(ubicacion: Ubicacion) {
    this.seleccionService.toggle(ubicacion);
  }

  estaSeleccionado(ubicacion: Ubicacion): boolean {
    return this.seleccionService.estaSeleccionado(ubicacion);
  }

  aplicarFiltro(nuevoFiltro: string) {
    this.ubicacionesService.setFilter(nuevoFiltro);
  }

  seleccionarUbicacion(ubicacion: Ubicacion) {
    this.ubicacionSeleccionada = ubicacion;
    this.ubicacionSeleccionadaChange.emit(ubicacion);
  }

  capitalizarPrimeraLetra(texto?: string): string {
    if (!texto) return '';
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
