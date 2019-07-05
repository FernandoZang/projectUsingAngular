import { TestBed } from '@angular/core/testing';

import { SoloService } from './solo.service';

describe('SoloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoloService = TestBed.get(SoloService);
    expect(service).toBeTruthy();
  });
});
