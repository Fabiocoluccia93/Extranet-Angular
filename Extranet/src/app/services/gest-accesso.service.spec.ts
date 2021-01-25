import { TestBed } from '@angular/core/testing';

import { GestAccessoService } from './gest-accesso.service';

describe('GestAccessoService', () => {
  let service: GestAccessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestAccessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
