import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperstarCardComponent } from './superstar-card.component';

describe('SuperstarCardComponent', () => {
  let component: SuperstarCardComponent;
  let fixture: ComponentFixture<SuperstarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperstarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperstarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
