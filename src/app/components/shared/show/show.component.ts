import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';
import { ChampionshipService, Championship } from 'src/app/services/championship.service';
import { SuperstarsService } from 'src/app/services/superstars.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  show: any[] = [];
  championships: any[] = [];

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _showService: ShowService, private _championshipService: ChampionshipService, private _superstarsService: SuperstarsService ) {
    this.activatedRoute.params.subscribe(params=>{
      this.show = this._showService.getShow(params['id']);
    });
  }

  ngOnInit() {
    let championships = this._championshipService.getChampionships();
    for (let i = 0, j = 0; i < championships.length; i++){
      if (championships[i].show == this.show){
        this.championships[j++] = championships[i];
      }
    }
  }

  goToChampionship( selectedChampionship: Championship){
    console.log(selectedChampionship);
    for (let i = 0; i < this._championshipService.getChampionships().length; i++){
      let championship = this._championshipService.getChampionship(i+"");
      if (selectedChampionship == championship){
        this.router.navigate(['/championship', i]);
      }
    }
  }

  getNumberOfSuperstars(): number {
    let counter = 0;
    for (let i = 0; i < this._superstarsService.getSuperstars().length; i++){
      if (this._superstarsService.getSuperstar(i+"").show == this.show){
        counter++;
      }
    }
    return counter;
  }

  return() {
    this.router.navigate(['/shows']);
  }

}
