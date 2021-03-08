import { TestBed } from '@angular/core/testing';

import { RouteguardTipologiaService } from './routeguard-tipologia.service';

describe('RouteguardTipologiaService', () => {
  let service: RouteguardTipologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteguardTipologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
