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

  iconsUrl = 'http://openweathermap.org/img/w';
  public icon: string;

  constructor(private _weatherService: weatherService) {
  }

  ngOnInit() {
    this._weatherService.selectedCityNameSubject.subscribe(data => {
      this._weatherService.getSelectedCityInfo(data.id).subscribe((data: CityInfo) => {
        this.cityInfo = data,
          this.icon = `${this.iconsUrl}/${this.cityInfo.weather[0].icon}.png`;
        console.log(this.cityInfo);
      });
    });
  }

 

}
