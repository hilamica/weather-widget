import { Component, OnInit } from '@angular/core';
import { weatherService } from 'src/app/shared/services/weather.service';
import { CityInfo } from '../../interfaces/city';

@Component({
  selector: 'app-selected-city',
  templateUrl: './selected-city.component.html',
  styleUrls: ['./selected-city.component.css']
})
export class SelectedCityComponent implements OnInit {

  public cityInfo: CityInfo;

  constructor(private _weatherService: weatherService) {
  }

  ngOnInit() {
    this._weatherService.selectedCityNameSubject.subscribe(data => {
      this._weatherService.getSelectedCityInfo(data.id).subscribe((data: CityInfo) => {
        this.cityInfo = data;
        console.log(this.cityInfo);

        // this._weatherService.getSelectedCityInfo(data.id).subscribe((data: CityInfo) => {
        // // this.cityInfo.id = data.id,
        //   this.cityInfo.main.humidity = data.main.humidity,
        //   this.cityInfo.main.pressure = data.main.pressure,
        //   this.cityInfo.main.temp = data.main.temp,
        //   this.cityInfo.weather.description = data.weather.description,
        //   this.cityInfo.weather.icon = data.weather.icon

      })

    });

  }



}
