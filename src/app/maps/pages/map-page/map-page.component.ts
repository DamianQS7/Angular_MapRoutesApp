import { Component, inject } from '@angular/core';
import { PlacesService } from '@services/places.service';

@Component({
  selector: 'maps-map-page',
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css'
})
export class MapPageComponent {
  private placesService: PlacesService = inject(PlacesService);

  public get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }
}
