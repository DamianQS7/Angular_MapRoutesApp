import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { environment } from '../../environments/environment.development';

import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = environment.MAPBOX_KEY;

@NgModule({
  declarations: [
    LoadingComponent, 
    MapPageComponent, 
    MapViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MapPageComponent]
})
export class MapsModule { }
