import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ConexionApiService } from '../services/conexion-api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(
    private authService: ConexionApiService,
    private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true; // Usuario es administrador, permitir acceso
    } else {
      this.router.navigate(['/index']); // Redirigir a la página principal si no es administrador
      return false;
    }
  }

}
