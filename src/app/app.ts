import { Component, ViewChild } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { MapComponent } from './map/map.component';
import { Ubicacion } from './state/ubicacion.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoComponent, MapComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  @ViewChild(MapComponent) mapComponent!: MapComponent;

  centrarMapa(ubicacion: Ubicacion) {
    if (this.mapComponent) {
      this.mapComponent.centrarEn(ubicacion);
    }
  }
}
