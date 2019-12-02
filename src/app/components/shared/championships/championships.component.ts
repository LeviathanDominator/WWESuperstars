import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from 'src/app/services/championship.service';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  championships: any[] = [];
  champions: any[] = [];

  constructor( private _championshipService: ChampionshipService ) {
    this.championships = Object.assign([], this._championshipService.getChampionships());
    this.championships.sort((a, b) => b.show.name.localeCompare(a.show.name));
  }

  ngOnInit() {
    
  }

}
