import { Routes } from '@angular/router';
import {AllCinemas} from './components/all-cinemas/all-cinemas';
import {CinemaDetail} from './components/cinema-detail/cinema-detail';

export const routes: Routes = [
  {component : AllCinemas, path : ''},
  {component : CinemaDetail, path : 'detail/:id'},
];
