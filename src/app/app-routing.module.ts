import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { RegistroLoginComponent } from './view/registro-login/registro-login.component';
import { HomeNavigationComponent } from './navigation/home-navigation/home-navigation.component';
import { LoginNavigationComponent } from './navigation/login-navigation/login-navigation.component';
import { HomeComponent } from './view/home/home.component';
import { ViewDashboardComponent} from './view/view-dashboard/view-dashboard.component';
import { ViewComprasComponent } from './view/view-compras/view-compras.component';
import { ViewOrdenComponent } from './view/view-orden/view-orden.component';

const routes: Routes = [
  { 
    path: '',
    children:[
      {path: '', redirectTo:'/login', pathMatch:'full'},
      {path: 'login', component:RegistroLoginComponent}
    ],component: HomeNavigationComponent
  },
  { 
    path: 'dashboard',
    children:[
      {path: '', redirectTo:'/dashboard', pathMatch:'full'},
      {path: 'dashboard', component:ViewDashboardComponent}
    ],component: ViewDashboardComponent
  },
  { 
    path: 'compras',
    children:[
      {path: '', redirectTo:'/compras', pathMatch:'full'},
      {path: 'compras', component:ViewComprasComponent}
    ],component: ViewComprasComponent
  },
  { 
    path: 'orden',
    children:[
      {path: '', redirectTo:'/orden', pathMatch:'full'},
      {path: 'orden', component:ViewOrdenComponent}
    ],component: ViewOrdenComponent
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
