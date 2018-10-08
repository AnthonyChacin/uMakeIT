import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { RegistroLoginComponent } from './view/registro-login/registro-login.component';
import { AlertModule } from 'ngx-bootstrap';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { ComprasComponent } from './component/compras/compras.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './view/home/home.component';
import { LoginNavigationComponent } from './navigation/login-navigation/login-navigation.component';
import { HomeNavigationComponent } from './navigation/home-navigation/home-navigation.component';
import { ViewDashboardComponent } from './view/view-dashboard/view-dashboard.component';
import { ViewComprasComponent } from './view/view-compras/view-compras.component';
import { OrdenComponent } from './component/orden/orden.component';
import { ViewOrdenComponent } from './view/view-orden/view-orden.component';
import { HeaderClienteComponent } from './component/header-cliente/header-cliente.component';
import { CambioClaveComponent } from './component/cambio-clave/cambio-clave.component';
import { ViewCambioClaveComponent } from './view/view-cambio-clave/view-cambio-clave.component';
import { ProductCustomizationComponent } from './component/product-customization/product-customization.component';
import { ViewProductCustomizationComponent } from './view/view-product-customization/view-product-customization.component';
import { AdministratorHomeNavigationComponent } from './navigation/administrator-home-navigation/administrator-home-navigation.component';
import { ProductSearchViewComponent } from './view/product-search-view/product-search-view.component';

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
    RegistroLoginComponent,
    ViewDashboardComponent,
    ViewComprasComponent,
    OrdenComponent,
    ViewOrdenComponent,
    HeaderClienteComponent,
    CambioClaveComponent,
    ViewCambioClaveComponent,
    ProductCustomizationComponent,
    ViewProductCustomizationComponent,
    AdministratorHomeNavigationComponent,
    ProductSearchViewComponent
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
