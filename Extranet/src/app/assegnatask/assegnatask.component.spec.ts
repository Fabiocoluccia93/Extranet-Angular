import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssegnataskComponent } from './assegnatask.component';

describe('AssegnataskComponent', () => {
  let component: AssegnataskComponent;
  let fixture: ComponentFixture<AssegnataskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssegnataskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssegnataskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
