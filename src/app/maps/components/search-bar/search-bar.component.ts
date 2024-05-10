import { Component, inject } from '@angular/core';
import { PlacesService } from '@services/places.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;
  private placesService: PlacesService = inject(PlacesService);

  public onQueryChanged(query: string = '') {

    if( this.debounceTimer ) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery(query);
    }, 500);
  }
}
