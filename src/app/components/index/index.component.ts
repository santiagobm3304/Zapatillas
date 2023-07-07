import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/get-products.service';
import { Product } from 'src/app/product.model';
import { map } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  products: any = [];
  search: string = ''
  constructor(
    private productsService: ConexionApiService,
    public authService: ConexionApiService,
    private cartService: CartService
  ) { }
  ngOnInit(): void {
    this.productsService.getProductos()
    .subscribe(
        res => {
          this.products = res;
          console.log(this.products)
        },
        err => console.log(err)
      )
  }

  onSearchProduct(search: string) {
    this.search = search
  }
}
