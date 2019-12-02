import { Component, OnInit, Input } from '@angular/core';
import { Show, ShowService } from 'src/app/services/show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  @Input() show: any = {};
  @Input() index: number;

  constructor( private router: Router, private _showService: ShowService ) { }

  ngOnInit() {
  }

  goToShow(){
    let show: Show = this.show;
    for (let i = 0; i < this._showService.getShows().length; i++){
      if (this._showService.getShow(i+"") == show ){
        this.router.navigate(['/show', i]);
        return;
      }
    }
  }

}
