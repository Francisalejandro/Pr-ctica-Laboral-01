import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocalizacionService {

  obtenerUbicacion(): Observable<{ lat: number, lng: number }> {
    return new Observable(observer => {
      if (!navigator.geolocation) {
        observer.error('Geocalizacion no Soportada')
        return
      }
      navigator.geolocation.getCurrentPosition(position => {
        observer.next({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        observer.complete()
      }, error => {
        observer.error(error.message)
      })
    })
  }

  observarUbicacion(): Observable<{ lat: number, lng: number }> {
    return new Observable(observer => {
      if (!navigator.geolocation) {
        observer.error('Geocalizacion no Soportada')
        return
      }
      const watchId = navigator.geolocation.watchPosition(position => {
        observer.next({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      }, error => {
        observer.error(error.message)
      })

      return () => {
        navigator.geolocation.clearWatch(watchId)
      }
    })
  }
}

