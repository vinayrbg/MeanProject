import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {Http} from '@angular/http';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { DataService } from './service/data.service';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdComponent } from './prod/prod.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        {path: "" , component : HomeComponent},
        {path: "prod" , component : ProdComponent}
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
