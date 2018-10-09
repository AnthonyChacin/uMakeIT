import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prepa5',
  templateUrl: './prepa5.component.html',
  styleUrls: ['./prepa5.component.css']
})
export class Prepa5Component implements OnInit {

  products = [
    
    {name: "Pizza",
    price: 5000,
    active: true,
    color: "blue",
    route: "/src/assets/ratatouille.jpg"},
    

    {name: "Hamburguesa",
    price: 6000,
    active: true,
    color: "green",
    route: "/src/assets/ratatouille.jpg"},

    {name: "Pan",
    price: 3000,
    active: false,
    color: "red",
    route: "/src/assets/ratatouille.jpg"}

  ]

  constructor() { }

  ngOnInit() {
  }

}
