import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CineService} from '../../services/cine-service';

@Component({
  selector: 'app-all-cinemas',
  imports: [
    FormsModule
  ],
  templateUrl: './all-cinemas.html',
  styleUrl: './all-cinemas.css',
})
export class AllCinemas{


  public cinemas : string[];
  public cinema! : string;

  //private cineService : CineService

  constructor(private cineService : CineService) {
    //this.cineService = cineService
    this.cinemas = this.cineService.getAllCinemas()
  }

  public addCinema(){
    console.log(this.cinema)
    this.cineService.addCinema(this.cinema)
    //this.cinemas = this.cineService.getAllCinemas()
    //this.cinemas.push(this.cinema)
  }


  ngOnInit() {
  }


}
