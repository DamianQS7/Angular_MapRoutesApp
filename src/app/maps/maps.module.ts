import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapPageComponent } from './pages/map-page/map-page.component';

import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

import { environment } from '../../environments/environment.development';

import mapboxgl from 'mapbox-gl';
import { HttpClientModule } from '@angular/common/http';
(mapboxgl as any).accessToken = environment.MAPBOX_KEY;

@NgModule({
  declarations: [
    AngularLogoComponent,
    BtnMyLocationComponent,
    LoadingComponent, 
    MapPageComponent, 
    MapViewComponent,
    SearchBarComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [MapPageComponent]
})
export class MapsModule { }
