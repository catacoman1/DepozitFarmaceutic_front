import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduseComponent } from './Components/produse/produse.component';

import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { RaportComponent } from './Components/raport/raport.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduseComponent,
    RaportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
