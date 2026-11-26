import { Component } from '@angular/core';
import {Cinema} from '../../models/cinema';
import {CineService} from '../../services/cine-service';

@Component({
  selector: 'app-cinema-detail',
  imports: [],
  templateUrl: './cinema-detail.html',
  styleUrl: './cinema-detail.css',
})
export class CinemaDetail {

  public cinema : Cinema


  constructor(private cineService : CineService) {
    this.cinema = this.cineService.getCinema()
  }

}
