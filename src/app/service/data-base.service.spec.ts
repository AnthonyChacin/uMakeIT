import { TestBed } from '@angular/core/testing';

import { DataBaseService } from './data-base.service';

describe('DataBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBaseService = TestBed.get(DataBaseService);
    expect(service).toBeTruthy();
  });
});
