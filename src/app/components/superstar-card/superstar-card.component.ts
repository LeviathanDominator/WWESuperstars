import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';
import { SuperstarsService, Superstar } from 'src/app/services/superstars.service';

@Component({
  selector: 'app-superstar-card',
  templateUrl: './superstar-card.component.html',
  styleUrls: ['./superstar-card.component.css']
})
export class SuperstarCardComponent implements OnInit {

  @Input() superstar: any = {};
  @Input() index: number;
  filter: string;

  constructor( private router: Router, private _showService: ShowService, private _superstarsService: SuperstarsService ) { }

  ngOnInit() {
  }

  goToSuperstar(){
    let superstar: Superstar = this.superstar;
    console.log(this._superstarsService.getSuperstars());
    for (let i = 0; i < this._superstarsService.getSuperstars().length; i++){
      if (this._superstarsService.getSuperstar(i+"") == superstar ){
        this.router.navigate(['/superstar', i]);
        return;
      }
    }
  }

  filterByShow(): boolean {
    if (this._showService.filter == "Todos"){
      return true;
    }
    return this.superstar.show.name == this._showService.filter;
  }

  info(){
    if (this.superstar.faction != undefined){
      return "Equipo: " + this.superstar.faction;
    }
    return "Superstar de " + this.superstar.show.name;
  }

}
