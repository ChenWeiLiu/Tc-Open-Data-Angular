import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentNumberComponent } from './components/tc/student-number/student-number.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
