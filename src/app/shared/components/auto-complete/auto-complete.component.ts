import { Component, OnInit } from '@angular/core';
import { weatherService } from 'src/app/shared/services/weather.service';
import { City } from 'src/app/shared/interfaces/city';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  citiesList: City[] = [];
  city: City;

  constructor(private _weatherService: weatherService) { }

  ngOnInit() {
    this._weatherService.getCities().subscribe(data => {
      this.citiesList = data['cities'];
      // console.log('citiesList', this.citiesList);
    });

  }

  selectedCity(city: City): void {
    this._weatherService.setSelectedCityId(city);
    // console.log('cityName', city);
  }

}
