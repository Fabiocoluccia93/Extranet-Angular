import { TestBed } from '@angular/core/testing';

import { Routeguardtipologia2Service } from './routeguardtipologia2.service';

describe('Routeguardtipologia2Service', () => {
  let service: Routeguardtipologia2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Routeguardtipologia2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
