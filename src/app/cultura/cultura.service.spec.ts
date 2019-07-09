import { TestBed } from '@angular/core/testing';

import { CulturaService } from './cultura.service';

describe('CulturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CulturaService = TestBed.get(CulturaService);
    expect(service).toBeTruthy();
  });
});
