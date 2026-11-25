import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CineService {

  private cinemas : string[];
  private cinema! : string;

  constructor() {
    // this.cinemas = [];
    this.cinemas = [
      "L'espérance",
      "L'arvor",
      "Gaumont-Pathé"
    ];
  }

  public getAllCinemas(){
    return this.cinemas;
  }


  public addCinema(cinema : string){
    this.cinemas.push(cinema)
  }

}
