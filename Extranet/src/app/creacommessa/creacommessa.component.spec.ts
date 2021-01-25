import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacommessaComponent } from './creacommessa.component';

describe('CreacommessaComponent', () => {
  let component: CreacommessaComponent;
  let fixture: ComponentFixture<CreacommessaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacommessaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacommessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
