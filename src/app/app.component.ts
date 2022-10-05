import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sTitle = 'weatherWidget';
  nLatitude = 0;
  nLongitude = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getGeolocationData();
  }

  getGeolocationData() {
    var api_key = '11f02996a84e40f9852bc1897df0e941';
    var sURL_Geolocation = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + api_key;

    this.http.get(sURL_Geolocation).subscribe((oResponse: any) => {
      console.log(oResponse)
      this.nLongitude = oResponse.longitude;
      this.nLatitude = oResponse.latitude;
      this.getWeatherData();
    })
  }

  getWeatherData() {
    var sURL_GetWeather = 'https://fcc-weather-api.glitch.me/api/current?lat=' + this.nLatitude + '&lon=' + this.nLongitude
    this.http.get(sURL_GetWeather).subscribe((oResponse: any) => {
      console.log(oResponse)
    })
  }
}
