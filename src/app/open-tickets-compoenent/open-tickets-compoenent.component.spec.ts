import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTicketsCompoenentComponent } from './open-tickets-compoenent.component';

describe('OpenTicketsCompoenentComponent', () => {
  let component: OpenTicketsCompoenentComponent;
  let fixture: ComponentFixture<OpenTicketsCompoenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenTicketsCompoenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTicketsCompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
