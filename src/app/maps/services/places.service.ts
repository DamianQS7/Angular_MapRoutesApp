import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places.interface';
import { environment } from '../../../environments/environment.development';
import { PlacesApiClient } from '../api/placesApiClient';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private placesHttp: PlacesApiClient = inject(PlacesApiClient);

  public userLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

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

  public getPlacesByQuery(query: string = '') {

    this.isLoadingPlaces = true;

    const endpoint = `https://api.mapbox.com/search/geocode/v6/forward?q=${query}&proximity=-74.02597083053519%2C40.77685293472018&language=en&access_token=${environment.MAPBOX_KEY}`;
    
    this.placesHttp.get<PlacesResponse>('?', {
      params: {
        q: query,
        proximity: this.userLocation!.join(',')
      }
    })
      .subscribe( response => {

        console.log(response.features);
        this.places = response.features;
        this.isLoadingPlaces = false;
      });

    
  }
}
