import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/productoModel';

@Pipe({
  name: 'filtroProduct'
})
export class FiltroProductPipe implements PipeTransform {

  transform(products: Producto[], search: string = ''): Producto[] {

    const filtrandoProduct = products.filter(product => product.nombre.includes(search));
    
    return filtrandoProduct
  }

}
