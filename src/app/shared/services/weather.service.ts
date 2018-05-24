import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City, CityInfo } from 'src/app/shared/interfaces/city';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class weatherService {
  selectedCityNameSubject = new Subject<City>();
  selectedCity: City;
  citiesMockUrl = 'assets/db.json';

  private weatherKey = '5b86d6b5fcdbd2a1fa253b8df0320b21';



  constructor(private http: HttpClient) { }


  getCities() {
    return this.http.get<City[]>(this.citiesMockUrl);
  }

  setSelectedCityId(_city: City): void {
    this.selectedCity = _city;
    this.selectedCityNameSubject.next(_city);
  }

  getSelectedCityInfo(cityId: number) {
    return this.http.get(`${environment.weatherUrl}`, {
      params: {
        id: cityId.toString(),
        APPID: this.weatherKey
      }
    });
  }
}
