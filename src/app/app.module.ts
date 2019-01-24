import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UrlSerializer} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';


import { CustomUrlSerializer } from './custom-url-serializer';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
      { provide: UrlSerializer, useClass:   CustomUrlSerializer },
  ]
})
export class AppModule { }
