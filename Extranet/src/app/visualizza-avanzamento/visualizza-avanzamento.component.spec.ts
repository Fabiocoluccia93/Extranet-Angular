import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaAvanzamentoComponent } from './visualizza-avanzamento.component';

describe('VisualizzaAvanzamentoComponent', () => {
  let component: VisualizzaAvanzamentoComponent;
  let fixture: ComponentFixture<VisualizzaAvanzamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaAvanzamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaAvanzamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
