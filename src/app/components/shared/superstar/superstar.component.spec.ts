import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperstarComponent } from './superstar.component';

describe('SuperstarComponent', () => {
  let component: SuperstarComponent;
  let fixture: ComponentFixture<SuperstarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperstarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
