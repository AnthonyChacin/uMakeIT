import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public products = [];
  public downloadURL: string;

  constructor(private productsService: ProductsService) {

  }
  ngOnInit() {
    this.productsService.getProducts().subscribe((productSnapshot) => {
      this.products = [];
      productSnapshot.forEach((productData: any) => {

        firebase.firestore().collection('/productos/').doc(productData.payload.doc.id).onSnapshot((data) => {
          const storage = firebase.storage();
          const storageRef = storage.ref();
          const imageRef = storageRef.child('platos_principales/' + data.get('name_img'));
          this.downloadURL = imageRef.getDownloadURL().toString();
        })
        this.products.push({
          id: productData.payload.doc.id,
          data: productData.payload.doc.data(),
          downloadURL: this.downloadURL
        })

      })
    })
  }

}
