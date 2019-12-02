import { Component, OnInit, Input } from '@angular/core';
import { ChampionshipService, Championship } from 'src/app/services/championship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-championship-card',
  templateUrl: './championship-card.component.html',
  styleUrls: ['./championship-card.component.css']
})
export class ChampionshipCardComponent implements OnInit {

  @Input() championship: any = {};
  @Input() index: number;

  constructor( private router: Router, private _championshipService: ChampionshipService) { }

  ngOnInit() {
  }

  goToChampionship(){
    let championship: Championship = this.championship;
    for (let i = 0; i < this._championshipService.getChampionships().length; i++){
      if (this._championshipService.getChampionship(i+"") == championship ){
        this.router.navigate(['/championship', i]);
        return;
      }
    }
  }

}
