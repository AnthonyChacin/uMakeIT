import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-customization',
  templateUrl: './view-product-customization.component.html',
  styleUrls: ['./view-product-customization.component.css']
})
export class ViewProductCustomizationComponent implements OnInit {
  name: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
