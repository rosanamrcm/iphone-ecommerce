import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Iphone16Component } from './pages/iphone16/iphone16.component';
import { Iphone17Component } from './pages/iphone17/iphone17.component';
import { Iphone17ProComponent } from './pages/iphone17-pro/iphone17-pro.component';
import { Iphone17AirComponent } from './pages/iphone17-air/iphone17-air.component';
import { Iphone17eComponent } from './pages/iphone17e/iphone17e.component';
import { AirPodsComponent } from './pages/air-pods/air-pods.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'iphone-16', component: Iphone16Component },
  { path: 'iphone-17', component: Iphone17Component },
  { path: 'iphone-17-pro', component: Iphone17ProComponent },
  { path: 'iphone-17-air', component: Iphone17AirComponent },
  { path: 'iphone-17e', component: Iphone17eComponent },
  { path: 'air-pods', component: AirPodsComponent }
];
