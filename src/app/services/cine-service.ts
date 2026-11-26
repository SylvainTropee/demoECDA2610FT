import { Injectable } from '@angular/core';
import {Cinema} from '../models/cinema';

@Injectable({
  providedIn: 'root',
})
export class CineService {

  private cinemas : Cinema[];


  constructor() {
    // this.cinemas = [];
    this.cinemas = [
      {
        name: "L'espérance",
        city: "Rennes",
        openYear: 1985
      },
      {
        name: "L'arvor",
        city: "Rennes",
        openYear: 1992
      },
      {
        name: "Gaumont-Pathé",
        city: "Nantes",
        openYear: 2001
      }
    ];
  }

  public getAllCinemas(){
    return this.cinemas;
  }


  public addCinema(cinema : Cinema){
    this.cinemas.push(cinema)
  }

}
