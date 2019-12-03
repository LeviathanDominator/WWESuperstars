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
      desc: ["También conocido como \"Monday Night Raw\", se lleva transmitiendo sin interrupciones desde el 11 de enero de 1993 hasta la fecha, desde Estados Unidos por medio de la cadena USA Network. Se emite todos los lunes.\n\nRAW es, junto con SmackDown, uno de los shows más importantes de WWE, donde se encuentran las mejores superestrellas y organizan los eventos más imporantes del año, como Wrestlemania, Survivor Series, Royal Rumble y Summerslam."]
    },
    {
      name: "SmackDown",
      logo: "assets/img/shows/smackdown.png",
      photo: "assets/img/show_photos/smackdown.jpg",
      color: "rgb(140, 155, 255)",
      colorButton: "rgb(100, 139, 255)",
      background: "assets/img/show_background/smackdown.jpg",
      backgroundFull: "assets/img/show_background/smackdown_full.jpg",
      desc: ["También conocido como \"Friday Night SmackDown\", empezó a transmitirse desde el 29 de abril de 1999. Originalmente fue creado para competir con el programa Thunder de la WCW, su competencia en ese momento, que en su momento era conocido como \"WWF SmackDown!\". Consistía en dos horas de Divas (nombre que tenían las luchadoras en ese entonces), pero al no funcionar se convirtió en un programa que sería para complementar a RAW."]
    },
    {
      name: "NXT",
      logo: "assets/img/shows/nxt.png",
      photo: "assets/img/show_photos/nxt.png",
      color: "rgb(255, 245, 174)",
      colorButton: "rgb(255, 208, 66)",
      background: "assets/img/show_background/nxt.jpg",
      backgroundFull: "assets/img/show_background/nxt_full.jpg",
      desc: ["\"NXT\" fue creado en 2010 con el objetivo de formar nuevas superestrellas para que puedan competir en los shows principales (RAW y SmackDown). Consistía en una competición con distintas pruebas para determinar el ganador. En 2012 cambiaron la estructura del evento y se convirtió en un show semanal con una estructura similar a la de los shows principales.", "Debido a la alta calidad de los combates y las rivalidades del programa y de la creciente popularidad del show, se estrenó en televisión en 2019."]
    },
    {
      name: "NXT UK",
      logo: "assets/img/shows/nxt_uk.png",
      photo: "assets/img/show_photos/nxtuk.jpg",
      color: "rgb(170, 170, 170)",
      colorButton: "rgb(237, 215, 71)",
      background: "assets/img/show_background/nxt_uk.jpg",
      backgroundFull: "assets/img/show_background/nxt_uk_full.jpg",
      desc: ["\"NXT\" dispone de una división europea llamada \"NXT UK\", donde compiten superestrellas de países europeos y luchan con un estilo de lucha libre más británico, centrándose más en llaves y agarres por encima de los ataques aereos. Comenzó a emitirse el 17 de octubre de 2018 y crearon distintos campeonatos cuando se creó la división.","El objetivo de \"NXT UK\" es conseguir que superestrellas europeas se den a conocer por el público americano, con la posibilidad de competir en las marcas principales."]
    },
    {
      name: "205 Live",
      logo: "assets/img/shows/205_live.png",
      photo: "assets/img/show_photos/205live.jpg",
      color: "rgb(196, 150, 255)",
      colorButton: "rgb(132, 36, 255)",
      background: "assets/img/show_background/205_live.jpg",
      backgroundFull: "assets/img/show_background/205_live_full.jpg",
      desc: ["Después del gran éxito que supuso el torneo de peso crucero de WWE, decidieron crear un show aparte para que las superestrellas que pesen menos de 205 libras (93kg) compitan en su propio show con un estilo más ágil y rápido, creando así combates donde la espectacularidad es lo primero. A finales de noviembre de 2016 el show comenzó a emitirse cada semana justo después de \"SmackDown\".", "Por desgracia, debido a su horario, los espectadores de \"SmackDown\" se suelen encontrar demasiado cansados para ver una hora de 205 Live, al no centrarse tanto en las historias de las rivalidades de sus superestrellas. Por tanto, empezaron a insertar combates de \"205 Live\" entre algunos combates de \"RAW\" y \"SmackDown\". Se rumorea que están planeando cancelar el show y llevar el elenco de \"205 Live\" a \"NXT\", convirtiéndolo en otra división de la marca amarilla."]
    },
    {
      name: "Hall of Fame",
      logo: "assets/img/shows/hof.png",
      photo: "assets/img/show_photos/hof.jpg",
      color: "rgb(129, 212, 201)",
      colorButton: "rgb(255, 202, 43)",
      background: "assets/img/show_background/hof.jpg",
      backgroundFull: "assets/img/show_background/hof_full.jpg",
      desc: ["Las superestrellas que marcaron un antes y un después en la historia de la lucha libre profesional son reconocidas en la \"Hall of Fame\" de WWE. Ahí aparecen las superestrellas más relevantes de cualquiera de las distintas eras de WWE.","La \"Hall of Fame\" también incluye personas famosas que no son superestrellas, pero que se han visto involucrados en algunas historias, como Arnold Schwarzenegger o Donald Trump, pero que no se incluyen en esta base de datos. En su lugar he incluido en esta categoría superestrellas que ya no trabajan en WWE pero que han sido muy importantes para la industria, como Chris Jericho o Dean Ambrose."]
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

  searchShow(search: string): Show[] {
    let shows: Show[] = [];
    search = search.toLowerCase();

    for (let i = 0; i < this.shows.length; i++){
      let name = this.shows[i].name.toLowerCase();
      if ( name.indexOf(search) >= 0 ){
        shows.push(this.shows[i]);
      }
    }
    return shows;
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
