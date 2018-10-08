import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user-registration-form',
  templateUrl: './new-user-registration-form.component.html',
  styleUrls: ['./new-user-registration-form.component.css']
})
export class NewUserRegistrationFormComponent implements OnInit {

  public newAdmin: boolean;

  constructor() {
    this.newAdmin = false;
  }

  onRegisterNewAdmin(){
    this.newAdmin = true;
  }

  ngOnInit() {
  }

}
