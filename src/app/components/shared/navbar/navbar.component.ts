import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchOption: string;

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.searchOption = "superstar";
  }

  changeSearchOption( searchOption: string ){
    console.log(searchOption);
    this.searchOption = searchOption;
  }

  searchSuperstar( word: string ){
    if (word.length == 0){
      return;
    }
    this.router.navigateByUrl('/search/' + this.searchOption + '/' + word);
  }

  loggedIn(): boolean {
    return this.auth.checkIfAuth();
  }

  exitSession() {
    this.auth.exit();
    this.router.navigateByUrl('/home');
  }

}
