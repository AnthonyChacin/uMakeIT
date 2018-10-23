import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/service/data-base.service';

@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  public mostrarLogin:boolean;
  public mostrarRegistro:boolean;
  public users = [];

  form = {
    nombre: "",
    apellido: "",
    email: "",
    psw: "",
    rol: 0
  };

  constructor(private userService: DataBaseService) { 

    this.userService.getUsers().subscribe( (data) => {
      this.users = data.map(snap =>{
        let obj = {
          id: snap.payload.doc.id,
          ...snap.payload.doc.data()
        }
        return obj;
      })
    })

    this.form.nombre = "";
    this.form.apellido = "";
    this.form.email = "";
    this.form.psw = "";

    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }
  onShowHideRegistro(){
    this.mostrarLogin = false;
    this.mostrarRegistro = true;
  }
  onShowHideLogin(){
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }

  onCreateUser(){
    this.userService.createUser(this.form);
  }

  ngOnInit() {
  }

}
