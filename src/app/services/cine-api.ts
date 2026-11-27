import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';
import {Cinema} from '../models/cinema';

@Injectable({
  providedIn: 'root',
})
export class CineApi {

  private readonly BASE_URL = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/osm-france-cinema/records/";


  constructor(private http: HttpClient) {
  }


  public findAllCinemas() {

    return this.http.get<any>(this.BASE_URL, {
      params: {
        limit: 100,
        offset: 0
      }
    }).pipe(
      map(
        data => {
          const cinemas: Cinema[] = data.results.map(
            (cinema: any): Cinema => {
              return {
                name: cinema.name,
                city: cinema.meta_name_com,
                openYear: 2026
              }
            }
          )
          return cinemas
        }
      )
    )

  }


}
