import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Ubicacion} from '../state/ubicacion.model';

@Injectable({ providedIn: 'root' })
export class SeleccionService {
  private seleccionados$ = new BehaviorSubject<Ubicacion[]>([]);

  getSeleccionados$() {
    return this.seleccionados$.asObservable();
  }

  getSeleccionados(): Ubicacion[] {
    return this.seleccionados$.getValue();
  }

  toggle(ubicacion: Ubicacion) {
    const actuales = this.seleccionados$.getValue();
    const existe = actuales.find(u => u.id === ubicacion.id);
    if (existe) {
      this.seleccionados$.next(actuales.filter(u => u.id !== ubicacion.id));
    } else {
      this.seleccionados$.next([...actuales, ubicacion]);
    }
  }

  estaSeleccionado(ubicacion: Ubicacion): boolean {
    return !!this.seleccionados$.getValue().find(u => u.id === ubicacion.id);
  }

  limpiar() {
    this.seleccionados$.next([]);
  }
}
