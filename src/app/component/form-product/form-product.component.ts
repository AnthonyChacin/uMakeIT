import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import * as firebase from 'firebase';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  @Input() name: String;

  public docID: any;
  public product = {} as Product;
  public editado: boolean;
  public faltanDatos: boolean;
  public uploadPercent: Observable<number>;
  public downloadURL: any;
  public file: any;
  public filePath: any;
  public task: AngularFireUploadTask;


  constructor(private productsService: ProductsService, private storage: AngularFireStorage) {
    this.editado = false;
    this.faltanDatos = false;
  }

  uploadFile(event) {
    this.file = event.target.files[0];
    this.filePath = 'platos_principales/' + this.file.name;
  }

  onEditProduct() {
    if (this.product.name != "" && this.product.available != "" && this.product.name_img != "" && this.product.plato != "" && this.product.price != null) {
      this.task = this.storage.upload(this.filePath, this.file);
      //Observar cambios de porcentaje
      this.uploadPercent = this.task.percentageChanges();
      //this.downloadURL = this.task.snapshotChanges
      const data: Product = {
        name: this.product.name,
        plato: this.product.plato,
        price: this.product.price,
        available: this.product.available,
        name_img: this.product.name_img
      }
      this.productsService.updateProduct(data, this.docID);
      this.editado = true;
      this.faltanDatos = false;
    } else {
      this.editado = false;
      this.faltanDatos = true;
    }
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe((productSnapshot) => {
      productSnapshot.forEach((productData: any) => {
        firebase.firestore().collection('/products/').doc(productData.payload.doc.id).onSnapshot((data) => {
          if (data.get('name') === this.name) {
            this.product.name_img = data.get('name_img');
            this.product.name = data.get('name');
            this.product.plato = data.get('plato');
            this.product.price = data.get('price');
            this.product.available = data.get('available');
            this.docID = productData.payload.doc.id;
          }
        })
      })
    })
  }

}
