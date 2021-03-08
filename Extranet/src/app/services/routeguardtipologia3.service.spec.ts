import { TestBed } from '@angular/core/testing';

import { Routeguardtipologia3Service } from './routeguardtipologia3.service';

describe('Routeguardtipologia3Service', () => {
  let service: Routeguardtipologia3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Routeguardtipologia3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
