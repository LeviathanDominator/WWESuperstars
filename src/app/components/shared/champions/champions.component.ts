import { Component, OnInit } from '@angular/core';
import { ChampionshipService, Championship } from 'src/app/services/championship.service';
import { SuperstarsService, Superstar } from 'src/app/services/superstars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  championships:any[] = [];
  superstars: any[] = [];

  constructor( private router: Router, private _championshipService: ChampionshipService, private _superstarsService: SuperstarsService) {
    this.championships = Object.assign([], this._championshipService.getChampionships());
    this.championships.sort((a, b) => b.show.name.localeCompare(a.show.name));
    this.superstars = this._superstarsService.getSuperstars();
  }

  ngOnInit() {}

  isChampion( championship: string, superstar: string): boolean {
    if (this._superstarsService.getSuperstar(superstar).title == undefined){
      return false;
    }
    return this.championships[championship].name === this._superstarsService.getSuperstar(superstar).title.name;
  }

  getChampionshipName( championship: string) {
    return this.championships[championship].name;
  }

  getChampionshipImage( championship: string) {
    return this.championships[championship].image;
  }

  getSuperstarName( superstar: Superstar) {
    return superstar.name;
  }

  getSuperstarImage( superstar: Superstar) {
    return superstar.img;
    //return this._superstarsService.getSuperstar(superstar).img;
  }

  goToSuperstar( superstar: Superstar ) {
    for (let i = 0; i < this._superstarsService.getSuperstars().length; i++){
      if (this._superstarsService.getSuperstar(i+"") == superstar ){
        this.router.navigate(['/superstar', i]);
        return;
      }
    }
  }

  goToChampionship( championship: Championship ) {
      for (let i = 0; i < this._championshipService.getChampionships().length; i++){
        if (this._championshipService.getChampionship(i+"") == championship ){
          this.router.navigate(['/championship', i]);
          return;
      }
    }
  }

}
