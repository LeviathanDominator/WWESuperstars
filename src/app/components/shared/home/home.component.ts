import { Component, OnInit } from '@angular/core';
import { SuperstarsService } from 'src/app/services/superstars.service';
import { Router } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  superstar: any = null;
  superstars: any[] = [];
  superstarIndex: number;

  constructor( private router: Router, private _superstarsService: SuperstarsService, private _showService: ShowService ) { }

  ngOnInit() {
    // Gets a random superstar of the day for the home page.
    this.superstarIndex = Math.floor(Math.random() * this._superstarsService.getSuperstars().length);
    this.superstar = this._superstarsService.getSuperstar(this.superstarIndex + "");
    this.superstars = this._superstarsService.getSuperstars();
    console.log(this.superstar.name);
  }

  checkSuperstar(){
    this.router.navigate(['/superstar', this.superstarIndex]);
  }

  goToShow( index: string) {
    this.router.navigate(['/show', index]);
  }

  getShow( index: string){
    return this._showService.getShow(index);
  }

  getNumberOfSuperstarsInShow ( index: string ){
    var count: number = 0;
    for (var i = 0; i < this.superstars.length; i++){
      if (this._superstarsService.getSuperstar(i+"").show.name + "" === this._showService.getShow(index).name){
        count++;
      }
    }
    return count;
  }

}
