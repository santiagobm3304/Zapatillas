import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any = []
  myProducts: any = []
  priceProducts: any = []
  monto: any
  orden: any = {

  }
  
  constructor(
    private cartService: CartService,
    private productsService: ConexionApiService,
    private cdr: ChangeDetectorRef
  ) { }
  ngOnInit(): void {  
    this.cdr.detectChanges()
    this.myProducts = this.cartService.getAllProducts()
    this.cartService.getApiProductos()
    this.products = this.cartService.getProductosUpdate()
    console.log(this.myProducts)
    console.log(this.products)
  
    this.monto = this.cartService.getTotal()


  }
  aumentar(prod: any){
    this.cartService.incrementar(prod)
    this.monto = this.cartService.getTotal()
  }
  disminuir(prod: any){
    this.cartService.decrementar(prod)
    this.monto = this.cartService.getTotal()
  }

  eliminarProduct(productId: number){
    console.log(productId)
    this.cartService.deleteProduct(productId)
  }

  
  
}
