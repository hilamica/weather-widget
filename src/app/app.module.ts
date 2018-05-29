import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { weatherService } from 'src/app/shared/services/weather.service';
import { AutoCompleteComponent } from './shared/components/auto-complete/auto-complete.component';
import { SelectedCityComponent } from './shared/components/selected-city/selected-city.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    SelectedCityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule


  ],
  providers: [weatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
