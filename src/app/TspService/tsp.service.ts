import { Injectable } from '@angular/core';

export interface Punto {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class TspService {

  resolverRuta(origen: Punto, destinos: Punto[]): Punto[] {
    const poblacion = this.generarPoblacion(destinos, 50);

    for (let i = 0; i < 100; i++) {
      const evaluados = poblacion
        .map(ruta => ({
          ruta,
          fitness: this.calcularDistanciaTotal(origen, ruta)
        }))
        .sort((a, b) => a.fitness - b.fitness);

      const seleccionados = evaluados.slice(0, 20).map(e => e.ruta);

      const nuevaPoblacion: Punto[][] = [];

      while (nuevaPoblacion.length < 50) {
        const padre1 = this.random(seleccionados);
        const padre2 = this.random(seleccionados);
        let hijo = this.cruzar(padre1, padre2);

        if (Math.random() < 0.1) {
          hijo = this.mutar(hijo);
        }

        nuevaPoblacion.push(hijo);
      }

      poblacion.splice(0, poblacion.length, ...nuevaPoblacion);
    }

    return poblacion.sort((a, b) =>
      this.calcularDistanciaTotal(origen, a) -
      this.calcularDistanciaTotal(origen, b)
    )[0];
  }

  private generarPoblacion(destinos: Punto[], size: number): Punto[][] {
    const poblacion: Punto[][] = [];
    for (let i = 0; i < size; i++) {
      poblacion.push(this.shuffle([...destinos]));
    }
    return poblacion;
  }

  private calcularDistanciaTotal(origen: Punto, ruta: Punto[]): number {
    let total = 0;
    let actual = origen;

    for (const punto of ruta) {
      total += this.distancia(actual, punto);
      actual = punto;
    }

    return total;
  }

  private distancia(a: Punto, b: Punto): number {
    const R = 6371;
    const dLat = this.toRad(b.lat - a.lat);
    const dLng = this.toRad(b.lng - a.lng);

    const lat1 = this.toRad(a.lat);
    const lat2 = this.toRad(b.lat);

    const x = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLng / 2) * Math.sin(dLng / 2) *
      Math.cos(lat1) * Math.cos(lat2);

    const y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));

    return R * y;
  }

  private toRad(value: number): number {
    return value * Math.PI / 180;
  }

  private cruzar(p1: Punto[], p2: Punto[]): Punto[] {
    const start = Math.floor(Math.random() * p1.length);
    const end = start + Math.floor(Math.random() * (p1.length - start));

    const segmento = p1.slice(start, end);
    const resto = p2.filter(p => !segmento.includes(p));

    return [...resto.slice(0, start), ...segmento, ...resto.slice(start)];
  }

  private mutar(ruta: Punto[]): Punto[] {
    const i = Math.floor(Math.random() * ruta.length);
    const j = Math.floor(Math.random() * ruta.length);

    const nueva = [...ruta];
    [nueva[i], nueva[j]] = [nueva[j], nueva[i]];

    return nueva;
  }

  private shuffle(array: Punto[]): Punto[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private random<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
