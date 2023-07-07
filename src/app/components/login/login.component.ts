import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mostrarError = ''
  constructor(
    private authService: ConexionApiService,
    private router: Router
  ) { }

  signIn(form: any): void {

    this.authService.findUser(form.value)
      .subscribe(
        (res) => {
          localStorage.setItem('rol', res.user.rol)
          console.log(res.user.rol)
          this.router.navigate(['/index']);
        },
        err => {
          alert('Usuario o Contraseña Incorrecta')
        }
      )
      console.log(form.value)

  }
}
