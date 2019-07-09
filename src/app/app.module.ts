import { CulturaModule } from './cultura/cultura.module';
import { SoloService } from './solo/solo.service';
import { AuthUtilService } from './login/auth-util.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SoloModule } from './solo/solo.module';
import { DataFormModule } from './data-form/data-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataFormModule,
    FormsModule,
    ReactiveFormsModule, // importa esse module globalmente para todo o projeto app // se importar no modulo de funcionalidade é necessário importar aqui tmb????
    SoloModule,
    HttpClientModule,
    LoginModule,
    CulturaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
