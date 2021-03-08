import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaRisorseComponent } from './visualizza-risorse.component';

describe('VisualizzaRisorseComponent', () => {
  let component: VisualizzaRisorseComponent;
  let fixture: ComponentFixture<VisualizzaRisorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaRisorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaRisorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
