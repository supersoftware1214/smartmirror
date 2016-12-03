import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';

import { AppComponent }   from './components/app.component';
import { TimeComponent }   from './components/time.component';
import { MainComponent } from './components/main.component';
import { RoutesModule } from './routes.module';


@NgModule({
  imports:      [ BrowserModule, RoutesModule, HttpModule ],
  declarations: [ AppComponent, TimeComponent, MainComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ 
})
export class AppModule { }
