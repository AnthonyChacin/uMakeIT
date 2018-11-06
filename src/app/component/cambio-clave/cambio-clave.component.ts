import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {

  public cambioClave: boolean;
  public nonEqual: boolean;
  public user = {} as User;

  constructor() {
    this.cambioClave = false;
    this.nonEqual = false;
  }

  onChangePassword() {
    var user = firebase.auth().currentUser;
    if (this.user.pswn == this.user.pswnc) {
      var newPassword = this.user.pswnc;
      user.updatePassword(newPassword).then(function () {
      }).catch(function (error) {
        console.log(error);
      });
      this.nonEqual = false;
      this.cambioClave = true;

    } else {
      this.cambioClave = false;
      this.nonEqual = true;
    }
  }

  ngOnInit() {
  }

}
