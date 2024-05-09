import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if (!navigator.geolocation) {
  alert('Geolocation feature is not supported by your browser.');
  throw new Error('Geolocation feature is not supported by your browser.');
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
