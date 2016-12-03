import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'time',
    templateUrl: '../html/time.component.html',
    styleUrls: [ '../css/time.component.css']

})
export class TimeComponent {

clock = Observable
        .interval(1000)
        .map(()=> new Date());

date = Observable
        .interval(1000)
        .map(()=> new Date());


}
