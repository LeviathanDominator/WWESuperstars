import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperstarsService } from '../../../services/superstars.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-superstars',
  templateUrl: './superstars.component.html',
  styleUrls: ['./superstars.component.css']
})
export class SuperstarsComponent implements OnInit {

  superstars:any[] = [];
  filter:number;

  constructor( private router: Router, private _superstarsService: SuperstarsService, private _showService: ShowService ) { }

  ngOnInit() {
    // Clones array.
    this.superstars = Object.assign([], this._superstarsService.getSuperstars());

    // Sorts array by name.
    this.superstars.sort((a, b) => a.name.localeCompare(b.name));

    this.filter = -1;
    this._showService.filter = "Todos";
  }

  goToSuperstar( index: number ){
    this.router.navigate(['/superstar', index]);
  }

  filterByShow(){
    this.filter++;
    if (this.filter > this._showService.getShows().length - 1){
      this.filter = -1;
    }
    this._showService.filter = this.getShowFilterName();
    this.superstars.filter( filter => filter.show.index == this.filter);
  }

  getShowFilter( index: number){
    if(this.filter){
      return this.superstars[index].show.name;
    } else {
      return this._showService.getShow(this.filter + "").name;
    }
  }

  getShowFilterName(){
    if (this.filter == -1){
      return "Todos";
    } else {
      return this._showService.getShow(this.filter + "").name;
    }
  }

}
