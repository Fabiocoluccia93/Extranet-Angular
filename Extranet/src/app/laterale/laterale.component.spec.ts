import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateraleComponent } from './laterale.component';

describe('LateraleComponent', () => {
  let component: LateraleComponent;
  let fixture: ComponentFixture<LateraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
