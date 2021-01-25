import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssegnarisorseComponent } from './assegnarisorse.component';

describe('AssegnarisorseComponent', () => {
  let component: AssegnarisorseComponent;
  let fixture: ComponentFixture<AssegnarisorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssegnarisorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssegnarisorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
