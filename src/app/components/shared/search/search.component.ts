import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperstarsService } from 'src/app/services/superstars.service';
import { ChampionshipService } from 'src/app/services/championship.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: any[] = [];
  word: string;
  option: string;

  constructor( private _activatedRoute: ActivatedRoute, private _superstarsService: SuperstarsService, private _championshipService: ChampionshipService, private _showService: ShowService ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.word = params['word'];
      this.option = params['option'];
      console.log(this.word);
      console.log(this.option);
      switch(this.option){
        case "superstar":
          this.searchResults = this._superstarsService.searchSuperstar(this.word, false);
          break;
        case "faction":
          this.searchResults = this._superstarsService.searchSuperstar(this.word, true);
          break;
        case "championship":
          this.searchResults = this._championshipService.searchChampionship(this.word);
          break;
        case "show":
          this.searchResults = this._showService.searchShow(this.word)
      }
    });
  }

}
