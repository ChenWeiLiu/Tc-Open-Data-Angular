import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentNumberComponent } from './components/tc/student-number/student-number.component';
import { StudentNumberDialogComponent } from './components/tc/student-number/student-number-dialog/student-number-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentNumberComponent,
    StudentNumberDialogComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
  ],
  entryComponents: [
    StudentNumberDialogComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
