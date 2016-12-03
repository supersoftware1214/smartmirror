import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
    url: string = 'http://api.openweathermap.org/data/2.5/forecast/city?id=4460243&APPID=9ad2d4abdf01ba1157c3b0f01627184e'

    constructor(private http: Http) { }

    getWeather(): Observable<any> {
        return this.http.get(this.url)
                    .map(respone => respone.json());
        
    }
   
}