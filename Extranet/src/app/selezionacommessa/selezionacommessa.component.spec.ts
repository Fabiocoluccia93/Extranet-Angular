import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelezionacommessaComponent } from './selezionacommessa.component';

describe('SelezionacommessaComponent', () => {
  let component: SelezionacommessaComponent;
  let fixture: ComponentFixture<SelezionacommessaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelezionacommessaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelezionacommessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
