import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistroLoginComponent } from './view/registro-login/registro-login.component';
import { AlertModule } from 'ngx-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ComprasComponent } from './compras/compras.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './view/home/home.component';
import { LoginNavigationComponent } from './navigation/login-navigation/login-navigation.component';
import { HomeNavigationComponent } from './navigation/home-navigation/home-navigation.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroLoginComponent,
    DashboardComponent,
    FooterComponent,
    ComprasComponent,
    HomeComponent,
    LoginNavigationComponent,
    HomeNavigationComponent,
    RegistroLoginComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
