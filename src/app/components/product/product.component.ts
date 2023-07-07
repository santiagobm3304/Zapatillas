import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ConexionApiService } from 'src/app/services/conexion-api.service';
import { GetProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  _id: number = 0
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public authService: ConexionApiService,
    private productService: ConexionApiService
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this._id = params['_id'];
      console.log(this._id);
      this.obtenerProductId(this._id)
    })

  }
  obtenerProductId(id: number){
    this.productService.getProductoById(id).subscribe(
      res => {
        this.product = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  agregarProduct(idProduct: any) {
    this.cartService.addProduct(idProduct)
  }
}
