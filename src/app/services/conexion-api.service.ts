import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/ventaModel';
import { Product } from '../product.model';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {
  private url = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  //Productos
  getProductos():Observable<any>{
    return this.http.get<any>(this.url+"/productos/");
  }
  getProductoById(id: number):Observable<any>{
    const url = "http://localhost:8080/productos/";
    return this.http.get<any>(url+id)
  }
  postProductos(datos: Product){
    const url = "http://localhost:8080/productos/";
    return this.http.post(url,datos);
  }
  updateProductos(id:number,datos: Product):Observable<any>{
    const url = "http://localhost:8080/productos/"+id+"/update";
    return this.http.post(url,datos);
  }
  deleteProductos(id:number,datos: Product):Observable<any>{
    const url = "http://localhost:8080/productos/"+id+"/delete";
    return this.http.post(url,datos);
  }

  //Ventas
  getVentas():Observable<any>{
    return this.http.get<any>(this.url+"/ventas/");
  }
  postVentas(datos: Venta){
    const url = "http://localhost:8080/ventas/";
    return this.http.post(url,datos);
  }
  updateVenta(id:number,datos: Venta):Observable<any>{
    const url = "http://localhost:8080/ventas/"+id+"/update";
    return this.http.post(url,datos);
  }
  deleteVentas(id:number,datos: Product):Observable<any>{
    const url = "http://localhost:8080/ventas/"+id+"/delete";
    return this.http.post(url,datos);
  }

  //Usuarios
  findUser(usuario:{}): Observable<any>{
    const url = "http://localhost:8080/login/login";
    console.log(usuario);
    return this.http.post(url,usuario);
  }

  getToken(){
    return localStorage.getItem('rol')
  }
  
  isAdmin(){
    const rol = localStorage.getItem('rol');
    if(rol==='admin'){
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('rol');
  }
  
}
