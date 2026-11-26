import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CineService} from '../../services/cine-service';
import {Cinema} from '../../models/cinema';

@Component({
  selector: 'app-all-cinemas',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './all-cinemas.html',
  styleUrl: './all-cinemas.css',
})
export class AllCinemas {


  public cinemas: Cinema[];
  public cinema!: string;
  public form: FormGroup

  //private cineService : CineService

  constructor(private cineService: CineService) {
    //this.cineService = cineService
    this.cinemas = this.cineService.getAllCinemas()
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        year: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(2030)]),
      }
    )
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
    }else{
      console.log("C'est pas bon !")
      this.form.markAllAsTouched()
    }
  }
}
