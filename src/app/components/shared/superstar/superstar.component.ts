import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SuperstarsService } from '../../../services/superstars.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ChampionshipService, Championship } from 'src/app/services/championship.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-superstar',
  templateUrl: './superstar.component.html',
  styleUrls: ['./superstar.component.css']
})
export class SuperstarComponent implements OnInit {

  superstar: any = {};
  championships: Championship[] = [];
  videoURL: string = "";
  safeURL: any;

  constructor( private router: Router, private activateRoute : ActivatedRoute, private _superstarsService: SuperstarsService,
  private _championshipService: ChampionshipService, private _showService: ShowService, private _sanitizer: DomSanitizer ) {
    this.activateRoute.params.subscribe(params => {
      this.superstar = this._superstarsService.getSuperstar(params['id']);
      this.videoURL = 'https://www.youtube.com/embed/' + this.superstar.music;
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
    });
  }

  ngOnInit() {
    for (let i = 0, j = 0; i < this._championshipService.getChampionships().length; i++) {
      if (this._championshipService.getChampionship(i + "").champions) {
        for (let k = 0; k < this._championshipService.getChampionship(i + "").champions.length; k++){
          if (this._championshipService.getChampionship(i + "").champions[k] == this.superstar){
            this.championships[j++] = this._championshipService.getChampionship(i + "");
          }
        }
      }
    }
    console.log(this.championships);
  }

  // Easter egg with superstar Bray Wyatt showing his in-ring persona.
  letHimIn(){
    if (this.superstar == this._superstarsService.getSuperstar(7+"")){
      if (Math.floor(Math.random() * 15) == 0){
        this._superstarsService.letHimIn();
      }
    }
  }

  getWeightClass(): string {
    if (this.superstar.weight >= 132){
      return "Super peso pesado";
    } else if (this.superstar.weight >= 97.5){
      return "Peso pesado";
    } else {
      return "Peso crucero";
    }
  }

  isChampion(){
    return this.championships.length != 0;
  }

  goToChampionship( selectedChampionship: Championship){
    for (let i = 0; i < this._championshipService.getChampionships().length; i++){
      let championship = this._championshipService.getChampionship(i+"");
      if (selectedChampionship == championship){
        this.router.navigate(['/championship', i]);
      }
    }
  }

  goToShow(){
    for (let i = 0; i < this._showService.getShows().length; i++){
      let show = this._showService.getShow(i+"");
      if (this.superstar.show == show){
        this.router.navigate(['/show', i]);
      }
    }
  }

  return() {
    this.router.navigate(['/superstars']);
  }

}
