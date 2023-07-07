import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  producto: any = {}

  constructor(
    private productService: ConexionApiService,
    private router: Router
    ){}

  submitForm(){
    console.log(this.producto)
    this.productService.postProductos(this.producto)
    .subscribe(
      (res) => {
        console.log('Producto almacenado:', res);
        this.router.navigate(['/index'])
      },
      (err) => {
        alert('Error al almacenar producto');
      }
    )
  }
}
