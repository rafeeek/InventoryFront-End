import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { ProcessComponent } from './UI/process/process.component';
import { HomeComponent } from './UI/home/home.component';
import { AddnewProcessComponent } from './UI/addnew-process/addnew-process.component';
import { DataTablesModule } from "angular-datatables";
import { UpdateProcessComponent } from './UI/update-process/update-process.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProcessComponent,
    HomeComponent,
    AddnewProcessComponent,
    UpdateProcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        preventDuplicates: true,
        
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
