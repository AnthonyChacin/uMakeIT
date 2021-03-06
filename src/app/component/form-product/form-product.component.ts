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
  public subiendoImagen: boolean;
  public subirImagen: boolean;
  public imagenSubida: boolean;
  public downloadURL: string;
  public file: any;
  public filePath: any;


  constructor(private productsService: ProductsService, private storage: AngularFireStorage) {
    this.editado = false;
    this.faltanDatos = false;
    this.subiendoImagen = false;
    this.imagenSubida = false;
    this.subirImagen = false;
  }

  uploadFile(event) {
    this.subirImagen = true;
    this.file = event.target.files[0];
    this.filePath = 'platos_principales/' + this.file.name;
  }

  onEditProduct() {
    if (this.product.name != "" && this.product.available != "" && this.product.name_img != "" && this.product.plato != "" && this.product.price != null) {
      
    if(this.subirImagen === true){

      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(this.filePath).put(this.file);
      this.subiendoImagen = true;

      uploadTask.on('state_changed', (snapshot) =>{

        const barraProgreso = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes)*100;
        document.getElementById('barra-progreso-edit').style.width = barraProgreso + "%";
        
        if(uploadTask.snapshot.bytesTransferred === uploadTask.snapshot.totalBytes){
          this.subiendoImagen = false;
          this.imagenSubida = true;
        }
          
      }, (error) =>{
            console.log(error);
      }, ()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
          this.downloadURL = downloadURL;
          this.product.url_img = this.downloadURL;
          const data: Product = {
            name: this.product.name,
            plato: this.product.plato,
            price: this.product.price,
            available: this.product.available,
            name_img: this.file.name,
            url_img: this.downloadURL
          }
          this.subiendoImagen = false;
          this.productsService.updateProduct(data, this.docID);
          this.editado = true;
          this.faltanDatos = false;
          console.log(this.downloadURL);
          this.imagenSubida = true;
          document.getElementById('barra-progreso-edit').style.width = "0%";
        })
        
      })
    }else{
      const data: Product = {
        name: this.product.name,
        plato: this.product.plato,
        price: this.product.price,
        available: this.product.available,
        name_img: this.product.name_img,
        url_img: this.product.url_img
      }
      this.productsService.updateProduct(data, this.docID);
      this.editado = true;
      this.faltanDatos = false;
      console.log(this.product.url_img);
    }  
        
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
            this.product.url_img = data.get('url_img');
            this.docID = productData.payload.doc.id;
          }
        })
      })
    })
  }

}
