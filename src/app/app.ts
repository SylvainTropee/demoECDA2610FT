import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AllCinemas} from './components/all-cinemas/all-cinemas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllCinemas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demoECDA2610FT');
}
