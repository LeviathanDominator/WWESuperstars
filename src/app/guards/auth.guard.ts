import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //This class forces user to login.
  constructor( private auth: AuthService, private router: Router ){}

  canActivate(): boolean {
    if (this.auth.checkIfAuth()){
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
