import { Routes } from '@angular/router';
import { MapPageComponent } from './maps/pages/map-page/map-page.component';

export const routes: Routes = [
    { path: '', component: MapPageComponent },
    { path: '**', redirectTo: '' },
];
