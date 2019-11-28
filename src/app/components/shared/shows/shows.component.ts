import { Component, OnInit } from '@angular/core';
import { ShowService, Show } from 'src/app/services/show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: any[] = [];

  constructor( private router: Router, private _showService: ShowService ) {
    this.shows = this._showService.getShows();
  }

  ngOnInit() {
  }

  goToShow(index: string){
    this.router.navigate(['/show', index]);
  }

}
