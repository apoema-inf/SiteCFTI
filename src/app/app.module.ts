import { NgModule } from '@angular/core';
import { ROUTING } from "./app.routing";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { EventLogComponent } from './event-log.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosComponent } from './cursos/cursos.component';
import { Http } from '@angular/http/src/http';
import { HomeComponent } from './home/home.component';

import { CalendarModule } from "ap-angular2-fullcalendar";
import { CalendarComponent } from "ap-angular2-fullcalendar";

import { MomentModule } from 'angular2-moment';
import { SobreComponent } from './sobre/sobre.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, EventLogComponent, HomeComponent, SobreComponent, TemplatesComponent],
  imports: [MomentModule, MaterializeModule, BrowserModule, BrowserAnimationsModule, CalendarModule, CursosModule, ROUTING, HttpModule, FormsModule]
})

export class AppModule { }
