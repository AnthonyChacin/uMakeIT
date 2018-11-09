import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent implements OnInit {

  public agregado: boolean;
  public product = {} as Product;
  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;
  public file: any;
  public filePath: any;

  constructor(private productsService: ProductsService, private storage: AngularFireStorage) {
    this.agregado = false;
  }

  uploadFile(event) {
    this.file = event.target.files[0];
    this.filePath = 'platos_principales/' + this.file.name;
  }
  onAgregar() {
    this.agregado = true;
  }

  onCreateProduct() {
    const task = this.storage.upload(this.filePath, this.file);

    //Observar cambios de porcentaje
    this.uploadPercent = task.percentageChanges();

    const data: Product = {
      name: this.product.name,
      price: this.product.price,
      available: this.product.available,
      name_img: this.file.name
    }
    this.productsService.createProduct(data);
  }

  ngOnInit() {
  }

}
