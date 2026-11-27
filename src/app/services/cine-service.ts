import {Injectable, signal} from '@angular/core';
import {Cinema} from '../models/cinema';
import {CineApi} from './cine-api';

@Injectable({
  providedIn: 'root',
})
export class CineService {

  private readonly _cinemas  = signal<Cinema[] | null>(null);
  public readonly cinemas = this._cinemas.asReadonly()


  constructor(private cineApi : CineApi) {
    // this.cinemas = [];

  }

  public getAllCinemas(){
    this.cineApi.findAllCinemas().subscribe(
      data => this._cinemas.set(data)
    )
  }

  public getCinema() : Cinema {
    return {name : "Test", openYear : 2100, city : "Test12"};
  }


  public addCinema(cinema : Cinema){
    //this.cinemas.push(cinema)
  }

}
