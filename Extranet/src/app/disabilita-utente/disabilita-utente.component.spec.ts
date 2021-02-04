import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilitaUtenteComponent } from './disabilita-utente.component';

describe('DisabilitaUtenteComponent', () => {
  let component: DisabilitaUtenteComponent;
  let fixture: ComponentFixture<DisabilitaUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabilitaUtenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilitaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
