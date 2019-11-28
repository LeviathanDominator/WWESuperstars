import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  filter: string;
  private shows: any[] = [
    {
      name: "RAW",
      logo: "assets/img/shows/raw.png",
      photo: "assets/img/show_photos/raw.jpg",
      color: "rgb(255, 105, 105)",
      colorButton: "rgb(255, 43, 43)",
      background: "assets/img/show_background/raw.jpg",
      backgroundFull: "assets/img/show_background/raw_full.jpg",
      desc: ["También conocido como Monday Night Raw, se lleva transmitiendo sin interrupciones desde el 11 de enero de 1993 hasta la fecha, desde Estados Unidos por medio de la cadena USA Network. Se emite todos los lunes.\n\nRAW es, junto con SmackDown, uno de los shows más importantes de WWE, donde se encuentran las mejores superestrellas y organizan los eventos más imporantes del año, como Wrestlemania, Survivor Series, Royal Rumble y Summerslam."]
    },
    {
      name: "SmackDown",
      logo: "assets/img/shows/smackdown.png",
      photo: "assets/img/show_photos/smackdown.jpg",
      color: "rgb(140, 155, 255)",
      colorButton: "rgb(100, 139, 255)",
      background: "assets/img/show_background/smackdown.jpg",
      backgroundFull: "assets/img/show_background/smackdown_full.jpg",
      desc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
    },
    {
      name: "NXT",
      logo: "assets/img/shows/nxt.png",
      photo: "assets/img/show_photos/nxt.png",
      color: "rgb(255, 245, 174)",
      colorButton: "rgb(255, 208, 66)",
      background: "assets/img/show_background/nxt.jpg",
      backgroundFull: "assets/img/show_background/nxt_full.jpg",
      desc: ["NXT fue creado en 2010 con el objetivo de formar nuevas superestrellas para que puedan competir en los shows principales (RAW y SmackDown). Consistía en una competición con distintas pruebas para determinar el ganador. En 2012 cambiaron la estructura del evento y se convirtió en un show semanal con una estructura similar a la de los shows principales.", "Debido a la alta calidad de los combates y las rivalidades del programa y de la creciente popularidad del show, se estrenó en televisión en 2019."]
    },
    {
      name: "NXT UK",
      logo: "assets/img/shows/nxt_uk.png",
      photo: "assets/img/show_photos/nxtuk.jpg",
      color: "rgb(170, 170, 170)",
      colorButton: "rgb(237, 215, 71)",
      background: "assets/img/show_background/nxt_uk.jpg",
      backgroundFull: "assets/img/show_background/nxt_uk_full.jpg",
      desc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
    },
    {
      name: "205 Live",
      logo: "assets/img/shows/205_live.png",
      photo: "assets/img/show_photos/205live.jpg",
      color: "rgb(196, 150, 255)",
      colorButton: "rgb(132, 36, 255)",
      background: "assets/img/show_background/205_live.jpg",
      backgroundFull: "assets/img/show_background/205_live_full.jpg",
      desc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
    },
    {
      name: "Hall of Fame",
      logo: "assets/img/shows/hof.png",
      photo: "assets/img/show_photos/hof.jpg",
      color: "rgb(129, 212, 201)",
      colorButton: "rgb(255, 202, 43)",
      background: "assets/img/show_background/hof.jpg",
      backgroundFull: "assets/img/show_background/hof_full.jpg",
      desc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
    }
  ];

  constructor() {
    this.resetFilter();
  }

  resetFilter(){
    this.filter = "Todos";
  }

  getShow( index: string ){
    return this.shows[index];
  }

  getShows(){
    return this.shows;
  }

}
export interface Show {
  name: string;
  logo: string;
  photo: string;
  color: string;
  colorButton: string;
  background: string;
  backgroundFull: string;
  desc: string[];
}
