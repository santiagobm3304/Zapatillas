import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  displayCarrito: boolean = false;

  constructor(
    public authService: ConexionApiService
  ){}
  ngOnInit(): void {
  }

  mostrarCart(){
    this.displayCarrito = true;
  }
  ocultarCart(){
    this.displayCarrito = false;
  }



}
