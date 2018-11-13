import { TestBed } from '@angular/core/testing';

import { PlatesService } from './plates.service';

describe('PlatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatesService = TestBed.get(PlatesService);
    expect(service).toBeTruthy();
  });
});
