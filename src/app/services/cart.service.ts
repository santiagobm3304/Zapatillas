import { Injectable, OnInit } from '@angular/core';
import { ConexionApiService } from './conexion-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  arrayProducts: any[] = []
  products: any = []
  URL = ''
  total: number = 0
  obtuvoDatos: boolean = false
  constructor(
    private http: HttpClient
  ) {

  }

  getApiProductos() {
    if (this.obtuvoDatos != true) {
      this.obtuvoDatos = true
      const url = "http://localhost:8080"
      this.http.get<any>(url + "/productos/").subscribe(
        res => {
          this.products = res;
          this.products.forEach((producto: any) => {
            producto.cantidad = 1;
          });
          console.log(this.products)
        },
        err => console.log(err)
      )
    }

  }

  addProduct(product: any) {
    if (this.arrayProducts.includes(product)) {
      alert('Product already added')
    } else {
      this.arrayProducts.push(product)
      this.getTotal()
      console.log(this.arrayProducts)
    }
  }
  // Operación de lectura (Obtener todos los productos)
  getAllProducts() {
    return this.arrayProducts;
  }
  getProductosUpdate() {
    return this.products
  }

  // Operación de eliminación (Eliminar un producto)
  deleteProduct(id: number) {
    this.arrayProducts.splice(id, 1);
    this.getTotal()

  }
  decrementar(item: any) {

    if (item.cantidad < 2) {
      item.eliminarProduct(item._id)
    } else {
      item.cantidad--
      console.log(item)
      this.getTotal()
    }
  }
  incrementar(item: any) {
    console.log(item)
    item.cantidad++
    console.log(this.arrayProducts)
    this.getTotal()
  };

  getTotal(): any {
    return this.products.reduce((total: number, prod: { _id: number; precio: number; cantidad: number; }) => {

      if (this.arrayProducts.includes(prod._id)) {
        return total + (prod.precio * prod.cantidad)

      }
      console.log(total)

      return total;
    }, 0);
  }
}