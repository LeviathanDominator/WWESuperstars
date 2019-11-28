import { Injectable } from '@angular/core';
import { ShowService, Show } from './show.service';
import { SuperstarsService, Superstar } from './superstars.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {

  private championships: any[] = [
    {
      name: "WWE",
      image: "assets/img/titles/wwe.png",
      show: this._showService.getShow("0"),
      champions: [this._superstarsService.getSuperstar("16")]
    },
    {
      name: "Universal",
      image: "assets/img/titles/universal.png",
      show: this._showService.getShow("1"),
      champions: [this._superstarsService.getSuperstar("7")]
    },
    {
      name: "NXT",
      image: "assets/img/titles/nxtchamp.png",
      show: this._showService.getShow("2"),
      champions: [this._superstarsService.getSuperstar("0")]
    },
    {
      name: "RAW Women's",
      image: "assets/img/titles/raw_women.png",
      show: this._showService.getShow("0"),
      champions: [this._superstarsService.getSuperstar("11")]
    },
    {
      name: "SmackDown Women's",
      image: "assets/img/titles/smackdown_women.png",
      show: this._showService.getShow("1"),
      champions: [this._superstarsService.getSuperstar("22")]
    },
    {
      name: "NXT Women's",
      image: "assets/img/titles/nxt_women.png",
      show: this._showService.getShow("2"),
      champions: [this._superstarsService.getSuperstar("34")]
    },
    {
      name: "NXT UK",
      image: "assets/img/titles/united_kingdom.png",
      show: this._showService.getShow("3"),
      champions: [this._superstarsService.getSuperstar("20")]
    },
    {
      name: "NXT Tag Team",
      image: "assets/img/titles/nxt_tagteam.png",
      show: this._showService.getShow("2"),
      champions: [this._superstarsService.getSuperstar("1"), this._superstarsService.getSuperstar("2")]
    },
    {
      name: "NXT North American",
      image: "assets/img/titles/nxt_northamerican.png",
      show: this._showService.getShow("2"),
      champions: [this._superstarsService.getSuperstar("3")]
    },
    {
      name: "United States",
      image: "assets/img/titles/united_states.png",
      show: this._showService.getShow("0"),
      champions: [this._superstarsService.getSuperstar("12")]
    },
    {
      name: "Intercontinental",
      image: "assets/img/titles/intercontinental.png",
      show: this._showService.getShow("1"),
      champions: [this._superstarsService.getSuperstar("15")]
    },
    {
      name: "RAW Tag Team",
      image: "assets/img/titles/raw_tagteam.png",
      show: this._showService.getShow("0"),
      champions: [this._superstarsService.getSuperstar("35"), this._superstarsService.getSuperstar("36")]
    },
    {
      name: "24/7",
      image: "assets/img/titles/24_7.png",
      show: this._showService.getShow("5"),
      champions: [this._superstarsService.getSuperstar("37")]
    },
    {
      name: "Women's Tag Team",
      image: "assets/img/titles/wwe_women_tagteam.png",
      show: this._showService.getShow("5"),
      champions: [this._superstarsService.getSuperstar("38"), this._superstarsService.getSuperstar("39")]
    },
    {
      name: "SmackDown Tag Team",
      image: "assets/img/titles/smackdown_tagteam.png",
      show: this._showService.getShow("1"),
      champions: [this._superstarsService.getSuperstar("40"), this._superstarsService.getSuperstar("41")]
    },
    {
      name: "Cruiserweight",
      image: "assets/img/titles/cruiserweight.png",
      show: this._showService.getShow("4"),
      champions: [this._superstarsService.getSuperstar("50")]
    },
    {
      name: "NXT UK Women's",
      image: "assets/img/titles/united_kingdom_women.png",
      show: this._showService.getShow("3"),
      champions: [this._superstarsService.getSuperstar("67")]
    },
    {
      name: "NXT UK Tag Team",
      image: "assets/img/titles/united_kingdom_tagteam.png",
      show: this._showService.getShow("3"),
      champions: [this._superstarsService.getSuperstar("69"), this._superstarsService.getSuperstar("70"),]
    }
  ];

  constructor( private _showService: ShowService, private _superstarsService: SuperstarsService ) {}

  getChampionship( index: string ){
    return this.championships[index];
  }

  getChampionships(){
    return this.championships;
  }

  searchChampionship( search: string ): Championship[]{
    let championships: Championship[] = [];
    search = search.toLowerCase();

    for (let i = 0; i < this.championships.length; i++){
      let name = this.championships[i].name.toLowerCase();
      if ( name.indexOf(search) >= 0 ){
        championships.push(this.championships[i]);
      }
    }
    return championships;
  }
}

export class Championship {
  name: string;
  image: string;
  show: Show;
  champions: Superstar[];
}
