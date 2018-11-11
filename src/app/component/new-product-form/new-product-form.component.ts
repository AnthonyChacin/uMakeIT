import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent implements OnInit {

  public agregado: boolean;
  public faltanDatos: boolean;
  public subiendoImagen: boolean;
  public imagenSubida: boolean;
  public product = {} as Product;
  public uploadPercent: number;
  public downloadURL: string;
  public file: any;
  public filePath: any;
  public task: AngularFireUploadTask;

  constructor(private productsService: ProductsService, private storage: AngularFireStorage) {
    this.agregado = false;
    this.faltanDatos = false;
    this.subiendoImagen = false;
    this.imagenSubida = false;
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
    if (this.product.name != "" && this.product.name_img != "" && this.product.price != null && this.product.plato != "" && this.product.available != "") {

      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(this.filePath).put(this.file);
      this.subiendoImagen = true;
      uploadTask.on('state_changed', (snapshot) => {

        const barraProgreso = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes)*100
        document.getElementById('barra-progreso').style.width = barraProgreso + "%";
      },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.downloadURL = downloadURL;
            const data: Product = {
              name: this.product.name,
              plato: this.product.plato,
              price: this.product.price,
              available: this.product.available,
              name_img: this.file.name,
              url_img: this.downloadURL
            }
            this.subiendoImagen = false;
            document.getElementById('barra-progreso').style.width = "0%";
            this.productsService.createProduct(data);
            this.agregado = true;
            this.faltanDatos = false;
            console.log(this.downloadURL);
            this.imagenSubida = true;
          });    
        })

    } else {
      this.faltanDatos = true;
    }

  }

  ngOnInit() {
  }

}