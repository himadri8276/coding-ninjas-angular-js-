import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './MyComponents/events/events.component';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
