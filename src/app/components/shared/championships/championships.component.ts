import { Component, OnInit } from '@angular/core';
import { ChampionshipService, Championship } from 'src/app/services/championship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  championships: any[] = [];
  champions: any[] = [];

  constructor( private router: Router, private _championshipService: ChampionshipService ) {
    this.championships = Object.assign([], this._championshipService.getChampionships());
    this.championships.sort((a, b) => b.show.name.localeCompare(a.show.name));
  }

  ngOnInit() {
    console.log(this.championships);
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
