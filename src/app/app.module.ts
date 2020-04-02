import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import {
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { UploaderComponent } from './controllers/dashboard/uploader/uploader.component';
import { AboutComponent } from './controllers/dashboard/about/about.component';
import { HealthComponent } from './controllers/dashboard/health/health.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    UploaderComponent,
    AboutComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
