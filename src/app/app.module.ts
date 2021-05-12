import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateDrivenComponent } from './composants/formulaires/template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { NgxBootstrapModule } from './shared/modules/ngx-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { MaterialTableComponent } from './composants/material/material-table/material-table.component';
import { AuthComponent } from './composants/auth/auth.component';
import { VehiculeModule } from './modules/vehicule/vehicule.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StagiaireComponent,
    AdresseComponent,
    ErrorComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    PersonneComponent,
    PersonneDetailsComponent,
    MaterialTableComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapModule,
    BrowserAnimationsModule,
    MaterialModule,
    VehiculeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("app-module");
  }
}
