import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaavanzamentoComponent } from './modificaavanzamento.component';

describe('ModificaavanzamentoComponent', () => {
  let component: ModificaavanzamentoComponent;
  let fixture: ComponentFixture<ModificaavanzamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaavanzamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaavanzamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
