import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { RegistroLoginComponent } from './view/registro-login/registro-login.component';
import { HomeNavigationComponent } from './navigation/home-navigation/home-navigation.component';
import { LoginNavigationComponent } from './navigation/login-navigation/login-navigation.component';
import { HomeComponent } from './view/home/home.component';
import { ViewComprasComponent } from './view/view-compras/view-compras.component';
import { ViewOrdenComponent } from './view/view-orden/view-orden.component';
import { ViewCambioClaveComponent} from './view/view-cambio-clave/view-cambio-clave.component';
import { ViewProductCustomizationComponent} from './view/view-product-customization/view-product-customization.component';
const routes: Routes = [
  { 
    path: '',
    children:[
      {path: '', redirectTo:'/login', pathMatch:'full'},
      {path: 'login', component:RegistroLoginComponent}
    ],component: LoginNavigationComponent
  },
  { 
    path: '',
    children:[
      {path: '', redirectTo:'/home', pathMatch:'full'},
      {path: 'home', component:HomeComponent}
    ],component: HomeNavigationComponent
  },

  { 
    path: 'home',
    children:[
      {path: 'home', redirectTo:'/home/compras', pathMatch:'full'},
      {path: 'compras', component:ViewComprasComponent},
      {path: 'home', redirectTo:'/home/orden', pathMatch:'full'},
      {path: 'orden', component:ViewOrdenComponent},
      {path: 'home', redirectTo:'/home/cambio-clave', pathMatch:'full'},
      {path: 'cambio-clave', component:ViewCambioClaveComponent},
      {path: 'home', redirectTo:'/home/product-customization', pathMatch:'full'},
      {path: 'product-customization', component:ViewProductCustomizationComponent}
    ],component: HomeNavigationComponent
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
