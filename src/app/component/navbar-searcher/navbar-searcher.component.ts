import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-navbar-searcher',
  templateUrl: './navbar-searcher.component.html',
  styleUrls: ['./navbar-searcher.component.css']
})
export class NavbarSearcherComponent implements OnInit {

  public filteredTable: boolean;
  public product = {} as Product;

  constructor() {
    this.filteredTable = false;
  }

  onShowTableFiltered() {
    this.filteredTable = true;
  }

  ngOnInit() {
  }

}
