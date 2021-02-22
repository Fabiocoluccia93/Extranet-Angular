import { TestBed } from '@angular/core/testing';

import { SessionUtenteService } from './session-utente.service';

describe('SessionUtenteService', () => {
  let service: SessionUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
