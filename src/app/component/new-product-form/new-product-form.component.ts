import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent implements OnInit {

  public agregado: boolean;
  public faltanDatos: boolean;
  public product = {} as Product;
  public ref: AngularFireStorageReference;
  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;
  public file: any;
  public filePath: any;
  public task: AngularFireUploadTask;

  constructor(private productsService: ProductsService, private storage: AngularFireStorage) {
    this.agregado = false;
    this.faltanDatos = false;
    this.product.name = "";
    this.product.name_img = "";
  }

  uploadFile(event) {
    this.file = event.target.files[0];
    this.filePath = 'platos_principales/' + this.file.name;
  }
  onAgregar() {
    this.agregado = true;
  }

  onCreateProduct() {
    if ( this.product.name != "" && this.product.name_img != "") {

      this.task = this.storage.ref('/platos_principales/'+this.file.name).put(this.file);
      this.task.then(res => {
        this.downloadURL = this.storage.ref('/platos_principales/'+this.file.name).getDownloadURL();
      })
      this.uploadPercent = this.task.percentageChanges();

      /* let storageRef = firebase.storage().ref();
      let uploadTask = storageRef.child(`${this.filePath}`).put(this.file).then(res => {
        console.log(res);
      }); */
      //Observar cambios de porcentaje
      //this.uploadPercent = this.task.percentageChanges();

      const data: Product = {
        name: this.product.name,
        plato: this.product.plato,
        price: this.product.price,
        available: this.product.available,
        name_img: this.file.name
      }
      this.productsService.createProduct(data);
      this.agregado = true;
      this.faltanDatos = false;
    }else{
      this.faltanDatos = true;
    }

  }

  ngOnInit() {
  }

}
