import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UbicacionesStore, UbicacionesState } from './ubicaciones.store';
import { Ubicacion } from './ubicacion.model';
import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UbicacionesQuery extends QueryEntity<UbicacionesState> {

  filter$: Observable<string>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  ubicacionesFiltradas$: Observable<Ubicacion[]>;


  constructor(protected override store: UbicacionesStore) {
    super(store);

    this.filter$ = this.select(state => state.filtro ?? '');
    this.loading$ = this.select(state => state.ui.loading);
    this.error$ = this.select(state => state.ui.error);

    this.ubicacionesFiltradas$ = combineLatest([
      this.selectAll(),
      this.filter$
    ]).pipe(
      map(([ubicaciones, filtro]) => {

        if (!filtro) return ubicaciones;

        const f = filtro.toLowerCase();

        return ubicaciones.filter(u =>
          (u.nombre?.toLowerCase() ?? '').includes(f) ||
          (u.descripcion?.toLowerCase() ?? '').includes(f) ||
          (u.categoria?.toLowerCase() ?? '').includes(f)
        );
      })
    );
  }
}
