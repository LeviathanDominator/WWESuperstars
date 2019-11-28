import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: UserModel;
  rememberMe: boolean = false;
  image: string = "";

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.user = new UserModel();
    var num = Math.floor(Math.random() * 4) + 1;
    this.image = "/assets/img/signup_photos/" + num + ".jpg";
  }

  validateForm( form: NgForm ){
    if(form.invalid){
      return;
    }
    this.auth.newUser( this.user ).subscribe( resp => {
      console.log(resp);
      if (this.rememberMe) {
        localStorage.setItem('email', this.user.email);
      }
      this.router.navigateByUrl('/home');
    }, (error) => {
      console.log(error);
      console.log(error.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error de registro',
        text: this.errorMessage(error.error.error.message)
      });
    })
  }

  errorMessage(message: string){
    switch(message){
      case "EMAIL_EXISTS":
        return "El correo electrónico ya se encuentra en la base de datos. Por favor, introduce otro correo electrónico.";
      default:
        return message;
    }
  }

}
