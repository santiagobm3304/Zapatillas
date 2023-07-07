import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  producto: any = []
  constructor(
    public route: ActivatedRoute,
    private productService: ConexionApiService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const _id = params['id'];
      this.obtenerId(_id);
    });
  }
  obtenerId(_id: number) {
    this.productService.getProductoById(_id).subscribe(
      res => {
        this.producto = res.producto;
      },
      err => console.log(err)

    );
    console.log(this.producto)
  }
  updateForm() {
    this.route.params.subscribe(params => {
      const id = params['id']; // Aquí obtendrás el ID de la URL
      // Luego puedes utilizar el ID para enviar la consulta al servicio correspondiente

      this.productService.updateProductos(id, this.producto)
        .subscribe(
          (res) => {
            // La película se ha creado correctamente
            console.log('Película creada:', res);
            this.router.navigate(['/product/'+id])
          },
          (err) => {
            // Error al crear la película
            console.error('Error al crear la película:', err);
          }
        );
    });
  }
}
