import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];

  public get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor() { 
    this.getUserLocation();
  }

  public getUserLocation(): Promise<[number, number]> {
    
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve([coords.longitude, coords.latitude])
        },
        ( error ) => {
          alert('Not able to obtain the geolocation');
          console.log(error);
          reject();
        }
      );
    }); 
  }
}
