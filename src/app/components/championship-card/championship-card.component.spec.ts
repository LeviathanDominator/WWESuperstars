import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipCardComponent } from './championship-card.component';

describe('ChampionshipCardComponent', () => {
  let component: ChampionshipCardComponent;
  let fixture: ComponentFixture<ChampionshipCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
