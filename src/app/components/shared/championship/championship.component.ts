import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionshipService } from 'src/app/services/championship.service';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  championship: any[] = [];

  constructor( private activateRoute: ActivatedRoute, private router: Router, private _championshipService: ChampionshipService ) {
    this.activateRoute.params.subscribe(params => {
      this.championship = this._championshipService.getChampionship(params['id']);
      console.log(this.championship);
    });
  }

  ngOnInit() {
  }

  return() {
    this.router.navigate(['/championships']);
  }

}
