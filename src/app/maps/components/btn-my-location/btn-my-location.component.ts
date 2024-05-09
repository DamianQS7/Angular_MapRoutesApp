import { Component, inject } from '@angular/core';
import { MapService } from '@services/map.service';
import { PlacesService } from '@services/places.service';

@Component({
  selector: 'btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  private placesService: PlacesService = inject(PlacesService);
  private mapService: MapService = inject(MapService);

  public goToMyLocation() {

    if (!this.placesService.isUserLocationReady) throw Error('Location required.');
    if (!this.mapService.isMapReady) throw Error('Map is required');


    const coords = this.placesService.userLocation;
    this.mapService.flyTo(coords!)
  }
}
