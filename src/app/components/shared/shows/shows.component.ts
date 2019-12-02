import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: any[] = [];

  constructor( private _showService: ShowService ) {
    this.shows = this._showService.getShows();
  }

  ngOnInit() {
  }

}
