import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AllCinemas} from './components/all-cinemas/all-cinemas';
import {CinemaDetail} from './components/cinema-detail/cinema-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllCinemas, CinemaDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demoECDA2610FT');
}
