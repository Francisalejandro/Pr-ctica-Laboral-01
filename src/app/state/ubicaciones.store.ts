import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Ubicacion } from './ubicacion.model';

export interface UbicacionesState extends EntityState<Ubicacion, number> {
  filtro: string | null;
  ui: {
    loading: boolean;
    error: string | null;
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Ubicaciones' })
export class UbicacionesStore extends EntityStore<UbicacionesState, Ubicacion> {
  constructor() {
    super({
      filtro: '',
      ui: {
        loading: false,
        error: null
      }
    });
  }

  updateFiltro(filtro: string) {
    this.update({ filtro });
  }

  setUiLoading(loading: boolean) {
    this.update(state => ({
      ui: { ...state.ui, loading }
    }));
  }

  setUiError(error: string | null) {
    this.update(state => ({
      ui: { ...state.ui, error }
    }));
  }
}
