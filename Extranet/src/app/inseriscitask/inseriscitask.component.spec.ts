import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InseriscitaskComponent } from './inseriscitask.component';

describe('InseriscitaskComponent', () => {
  let component: InseriscitaskComponent;
  let fixture: ComponentFixture<InseriscitaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InseriscitaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InseriscitaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
