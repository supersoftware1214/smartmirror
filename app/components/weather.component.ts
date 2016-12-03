import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {Observable} from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'weather',
    templateUrl: '../html/weather.component.html',
    providers: [ WeatherService]
})
export class WeatherComponent implements OnInit {
    weather: Observable<string>;

    constructor(private wService: WeatherService) { }

    ngOnInit() {
        this.gweather();
        console.log(this.weather);
     }

     gweather() {
         this.weather = this.wService.getWeather();
     }
}