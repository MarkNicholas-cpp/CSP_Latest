import { TestBed } from '@angular/core/testing';

import { RiceServiceService } from './rice-service.service';

describe('RiceServiceService', () => {
  let service: RiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
