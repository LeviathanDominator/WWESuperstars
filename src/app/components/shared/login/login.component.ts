import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel;
  rememberMe: boolean = false;
  image: string = "";

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.user = new UserModel();

    if ( localStorage.getItem('email')){
      this.user.email = localStorage.getItem('email');
      this.rememberMe = true;
    }

    this.image = this.getImage();

  }

  login( form: NgForm ){
    console.log(form);
    if ( form.invalid ){
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere'
    });
    Swal.showLoading();

    this.auth.login( this.user ).subscribe( resp => {
      Swal.close();
      if (this.rememberMe){
        localStorage.setItem('email', this.user.email);
      }
      Swal.fire({
        icon: 'success',
        title: 'Éxito al autenticar',
        text: "Bienvenido"
      });
      console.log(resp);
      this.router.navigateByUrl('/home');
    }, (error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: this.errorMessage(error.error.error.message)
      });
    });

  }

  errorMessage(message: string){
    switch(message){
      case "EMAIL_NOT_FOUND":
        return "El correo electrónico no se encuentra en la base de datos.";
      case "INVALID_PASSWORD":
        return "La contraseña no es correcta.";
      case "TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts.  Please include reCaptcha verification or try again later":
        return "Demasiados intentos fallidos de inicio de sesión. Por favor, inténtelo más tarde.";
      default:
        return message;
    }
  }

  getImage(): string{
    let num = Math.floor(Math.random() * 11) + 1;
    return "assets/img/photos/" + num + ".jpg";
  }

}
