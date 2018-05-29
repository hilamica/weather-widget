import { Component, OnInit } from '@angular/core';
import { weatherService } from 'src/app/shared/services/weather.service';
import { City } from 'src/app/shared/interfaces/city';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  citiesList: City[] = [];
  public citiesForm;

  filteredCities: City[];

  constructor(private _weatherService: weatherService) {
    this.citiesForm = new FormGroup({
      city: new FormControl()
    });
  }

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

  search(event) {
    let query = event.query;
      // this.filteredCities = this.citiesList;
      this.filteredCities = this.citiesList.filter((item: City) => {
        if (item.name.includes(query)) {
          return item;
        }
      });
  }

  // filterCountry(query, cities: City[]): any[] {
  //   //in a real application, make a request to a remote url with the query and return filtered results, 
  //   // for demo we filter at client side
  //   let filtered: any[] = [];
  //   for (let i = 0; i < cities.length; i++) {
  //     let country = cities[i];
  //     if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
  //       filtered.push(country);
  //     }
  //   }
  //   return filtered;
  // }

}
