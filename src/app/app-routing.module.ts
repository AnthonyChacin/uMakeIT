import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { RegistroLoginComponent } from './view/registro-login/registro-login.component';
import { HomeNavigationComponent } from './navigation/home-navigation/home-navigation.component';
import { LoginNavigationComponent } from './navigation/login-navigation/login-navigation.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { 
    path: "",
    children:[
      {path: '', redirectTo:'/home', pathMatch:'full'},
      {path: 'home', component:HomeComponent}
    ],component: HomeNavigationComponent
  },
  { 
    path: "login",
    children:[
      {path: '', component:RegistroLoginComponent}
    ],component: LoginNavigationComponent
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
