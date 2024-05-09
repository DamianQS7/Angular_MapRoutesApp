import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { PlacesService } from '@services/places.service';
import { Map, Marker, Popup } from 'mapbox-gl';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {
  
  private placesService: PlacesService = inject(PlacesService);

  @ViewChild('mapDiv')
  public mapDivElement!: ElementRef;

  ngAfterViewInit(): void {
    
    if( !this.placesService.userLocation) throw Error('No geolocation enabled.');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    const popup = new Popup().setHTML(`
      <h6>I'm here!</h6>
      <span>Standing on this spot...</span>
    `);

    new Marker({ color: 'red' })
    .setLngLat(this.placesService.userLocation)
    .setPopup(popup)
    .addTo(map);
  }
}
