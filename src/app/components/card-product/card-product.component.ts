import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  @Input() product: any
  constructor(
    private cartService: CartService
  ){}

  agregarProduct(idProduct: any) {
    this.cartService.addProduct(idProduct)
    this.cartService.getTotal()
  }
}
