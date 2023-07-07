import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  misProductos: any = []
  allProducts: any = []
  venta: any = {}
  montoTotal: any
  
  constructor(
    private products: ConexionApiService,
    private cart: CartService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.misProductos = this.cart.getAllProducts()
    console.log(this.misProductos)
    this.montoTotal = this.cart.getTotal()
    console.log(this.montoTotal)
  }
  submitOrder() {
    const pedido = {
      nroventa: this.venta.nroventa,
      nombre: this.venta.nombre,
      pedido: this.misProductos,
      total: this.montoTotal
    };
    this.products.postVentas(pedido)
    .subscribe(
      (res) => {
        console.log('Compra completada:', res);
        alert('Gracias por comprar, su id de compra es:  1231321')
        this.router.navigate(['/index'])
      },
      (err) => {
        alert('Hubo un error al generar el pago');
        console.log(err)
      }
    );
  }
}
