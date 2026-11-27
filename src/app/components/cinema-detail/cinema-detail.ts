import {Component, Signal} from '@angular/core';
import {Cinema} from '../../models/cinema';
import {CineService} from '../../services/cine-service';
import {CineApi} from '../../services/cine-api';

@Component({
  selector: 'app-cinema-detail',
  imports: [],
  templateUrl: './cinema-detail.html',
  styleUrl: './cinema-detail.css',
})
export class CinemaDetail {

  public cinema: Cinema
  public cinemas : Signal<Cinema[] | null>


  constructor(private cineService: CineService, private cineApi: CineApi) {
    this.cinema = this.cineService.getCinema()
    //this.cineService = cineService
    //this.cinemas = this.cineService.getAllCinemas()
    this.cinemas = this.cineService.cinemas
    // this.cinemas = []
    // this.cineApi.findAllCinemas().subscribe(
    //   data => this.cinemas = data
    // )
  }

}
