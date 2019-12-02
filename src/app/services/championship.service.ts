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
      date: "25 de abril de 1963",
      show: this._showService.getShow("0"),
      firstChampions: ["Buddy Rogers"],
      champions: [this._superstarsService.getSuperstar("16")]
    },
    {
      name: "Universal",
      image: "assets/img/titles/universal.png",
      date: "25 de julio de 2016",
      show: this._showService.getShow("1"),
      firstChampions: [this._superstarsService.getSuperstar("32").name],
      champions: [this._superstarsService.getSuperstar("7")]
    },
    {
      name: "NXT",
      image: "assets/img/titles/nxtchamp.png",
      date: "26 de julio de 2012",
      show: this._showService.getShow("2"),
      firstChampions: [this._superstarsService.getSuperstar("9").name],
      champions: [this._superstarsService.getSuperstar("0")]
    },
    {
      name: "RAW Women's",
      image: "assets/img/titles/raw_women.png",
      date: "30 de abril de 2016",
      show: this._showService.getShow("0"),
      firstChampions: [this._superstarsService.getSuperstar("26").name],
      champions: [this._superstarsService.getSuperstar("11")]
    },
    {
      name: "SmackDown Women's",
      image: "assets/img/titles/smackdown_women.png",
      date: "23 de agosto de 2016",
      show: this._showService.getShow("1"),
      firstChampions: [this._superstarsService.getSuperstar("11").name],
      champions: [this._superstarsService.getSuperstar("22")]
    },
    {
      name: "NXT Women's",
      image: "assets/img/titles/nxt_women.png",
      date: "5 de junio de 2013",
      show: this._showService.getShow("2"),
      firstChampions: [this._superstarsService.getSuperstar("57").name],
      champions: [this._superstarsService.getSuperstar("34")]
    },
    {
      name: "United Kingdom",
      image: "assets/img/titles/united_kingdom.png",
      date: "15 de diciembre de 2016",
      show: this._showService.getShow("3"),
      firstChampions: [this._superstarsService.getSuperstar("43").name],
      champions: [this._superstarsService.getSuperstar("20")]
    },
    {
      name: "NXT Tag Team",
      image: "assets/img/titles/nxt_tagteam.png",
      date: "23 de enero de 2013",
      show: this._showService.getShow("2"),
      firstChampions: [this._superstarsService.getSuperstar("155").name, "Oliver Grey"],
      champions: [this._superstarsService.getSuperstar("1"), this._superstarsService.getSuperstar("2")]
    },
    {
      name: "NXT North American",
      image: "assets/img/titles/nxt_northamerican.png",
      date: "7 de marzo de 2018",
      show: this._showService.getShow("2"),
      firstChampions: [this._superstarsService.getSuperstar("0").name],
      champions: [this._superstarsService.getSuperstar("3")]
    },
    {
      name: "United States",
      image: "assets/img/titles/united_states.png",
      date: "27 de junio de 2003",
      show: this._showService.getShow("0"),
      firstChampions: [this._superstarsService.getSuperstar("62").name],
      champions: [this._superstarsService.getSuperstar("12")]
    },
    {
      name: "Intercontinental",
      image: "assets/img/titles/intercontinental.png",
      date: "1 de septiembre de 1979",
      show: this._showService.getShow("1"),
      firstChampions: ["Pat Patterson"],
      champions: [this._superstarsService.getSuperstar("15")]
    },
    {
      name: "RAW Tag Team",
      image: "assets/img/titles/raw_tagteam.png",
      date: "20 de julio de 2002",
      show: this._showService.getShow("0"),
      firstChampions: [this._superstarsService.getSuperstar("106").name, "Chris Benoit"],
      champions: [this._superstarsService.getSuperstar("35"), this._superstarsService.getSuperstar("36")]
    },
    {
      name: "24/7",
      image: "assets/img/titles/24_7.png",
      date: "20 de mayo de 2019",
      show: this._showService.getShow("5"),
      firstChampions: [this._superstarsService.getSuperstar("129").name],
      champions: [this._superstarsService.getSuperstar("37")]
    },
    {
      name: "Women's Tag Team",
      image: "assets/img/titles/wwe_women_tagteam.png",
      date: "24 de diciembre de 2018",
      show: this._showService.getShow("5"),
      firstChampions: [this._superstarsService.getSuperstar("22").name, this._superstarsService.getSuperstar("31").name],
      champions: [this._superstarsService.getSuperstar("38"), this._superstarsService.getSuperstar("39")]
    },
    {
      name: "SmackDown Tag Team",
      image: "assets/img/titles/smackdown_tagteam.png",
      date: "23 de agosto de 2016",
      show: this._showService.getShow("1"),
      firstChampions: [this._superstarsService.getSuperstar("156").name, this._superstarsService.getSuperstar("157").name],
      champions: [this._superstarsService.getSuperstar("40"), this._superstarsService.getSuperstar("41")]
    },
    {
      name: "Cruiserweight",
      image: "assets/img/titles/cruiserweight.png",
      date: "14 de septiembre de 2016",
      show: this._showService.getShow("4"),
      firstChampions: [this._superstarsService.getSuperstar("158").name],
      champions: [this._superstarsService.getSuperstar("50")]
    },
    {
      name: "United Kingdom Women's",
      image: "assets/img/titles/united_kingdom_women.png",
      date: "18 de junio de 2018",
      show: this._showService.getShow("3"),
      firstChampions: [this._superstarsService.getSuperstar("75").name],
      champions: [this._superstarsService.getSuperstar("67")]
    },
    {
      name: "United Kingdom Tag Team",
      image: "assets/img/titles/united_kingdom_tagteam.png",
      date: "18 de junio de 2018",
      show: this._showService.getShow("3"),
      firstChampions: [this._superstarsService.getSuperstar("159").name, this._superstarsService.getSuperstar("160").name],
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

// Note: Array firstChampions is a string array instead of Superstar array, because there
// are champions that are not included in this database.

export class Championship {
  name: string;
  image: string;
  date: string;
  show: Show;
  firstChampions: string[];
  champions: Superstar[];
}
