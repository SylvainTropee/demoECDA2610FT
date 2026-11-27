import {Component, OnInit, Signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CineService} from '../../services/cine-service';
import {Cinema} from '../../models/cinema';
import {CineApi} from '../../services/cine-api';
import {CinemaDetail} from '../cinema-detail/cinema-detail';

@Component({
  selector: 'app-all-cinemas',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CinemaDetail
  ],
  templateUrl: './all-cinemas.html',
  styleUrl: './all-cinemas.css',
})
export class AllCinemas {


  public cinemas : Signal<Cinema[] | null>
  public cinema!: string;
  public form: FormGroup

  //private cineService : CineService

  constructor(private cineService: CineService, private cineApi: CineApi) {
    //this.cineService = cineService
    this.cinemas = this.cineService.cinemas
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        year: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(2030)]),
      }
    )
  }

  public loadCinemas(){
    this.cineService.getAllCinemas()

    // this.cineApi.findAllCinemas().subscribe(
    //   data => this.cinemas = data
    // )
  }

  public addCinema(cine: Cinema) {
    this.cineService.addCinema(cine)

    //this.cinemas = this.cineService.getAllCinemas()
    //this.cinemas.push(this.cinema)
  }


  ngOnInit() {
  }


  protected onSubmit() {
    if (this.form.valid) {
      //si tout est ok, on récupère les données
      console.log(this.form.value)
      let cine: Cinema = {name: this.form.value.name, city: this.form.value.city, openYear: this.form.value.year}
      this.addCinema(cine)
    } else {
      console.log("C'est pas bon !")
      this.form.markAllAsTouched()
    }
  }
}
