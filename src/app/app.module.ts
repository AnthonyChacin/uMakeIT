import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';
import { AlertModule } from 'ngx-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ComprasComponent } from './compras/compras.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroLoginComponent,
    DashboardComponent,
    FooterComponent,
    ComprasComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
