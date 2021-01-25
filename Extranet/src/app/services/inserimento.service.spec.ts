import { TestBed } from '@angular/core/testing';

import { InserimentoService } from './inserimento.service';

describe('InserimentoService', () => {
  let service: InserimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InserimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
