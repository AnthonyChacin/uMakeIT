import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';
import { AlertModule } from 'ngx-bootstrap';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> 20e291efeec8ab8afdf32e56a0daa14c12fade2c
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    RegistroLoginComponent,
<<<<<<< HEAD
    FooterComponent
=======
    DashboardComponent
>>>>>>> 20e291efeec8ab8afdf32e56a0daa14c12fade2c
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
