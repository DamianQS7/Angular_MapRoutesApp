import { Component, inject } from '@angular/core';
import { PlacesService } from '@services/places.service';
import { Feature } from '../../interfaces/places.interface';
import { MapService } from '@services/map.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  private placesService: PlacesService = inject(PlacesService);
  private mapService: MapService = inject(MapService);

  public selectedId: string = '';

  public get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  public get places(): Feature[] {
    return this.placesService.places;
  }

  public flyTo( place: Feature ) {
    this.selectedId = place.id;
    
    const [ lng, lat ] = place.geometry.coordinates;

    this.mapService.flyTo([ lng, lat ]);
  }
}
