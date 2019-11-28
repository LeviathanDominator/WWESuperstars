import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1/accounts";
  private key = "AIzaSyC2S1K7dgFcDHXb3Z6qzEjc_tWSCULqxfU";
  private userToken: string;

  constructor( private http: HttpClient ) {
    if (localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = "";
    }
  }

  exit(){
    localStorage.removeItem('token');
    this.userToken = '';
  }

  newUser(user: UserModel){
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }

    return this.http.post(`${ this.url }:signUp?key=${ this.key }`, authData)
    .pipe(map( resp => {
      this.saveToken( resp['idToken']);
      return resp;
    }));

  }

  login(user: UserModel){
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }

    return this.http.post(`${ this.url }:signInWithPassword?key=${ this.key }`, authData)
    .pipe(map( resp => {
      this.saveToken( resp['idToken']);
      return resp;
    }));;
  }

  checkIfAuth(): boolean {
    return this.userToken.length > 2;
  }

  saveToken( token: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }

}
