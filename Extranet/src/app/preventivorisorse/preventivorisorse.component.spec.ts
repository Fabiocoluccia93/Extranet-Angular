import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventivorisorseComponent } from './preventivorisorse.component';

describe('PreventivorisorseComponent', () => {
  let component: PreventivorisorseComponent;
  let fixture: ComponentFixture<PreventivorisorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventivorisorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventivorisorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
