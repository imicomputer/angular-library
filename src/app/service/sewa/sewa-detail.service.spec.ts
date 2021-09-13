import { TestBed } from '@angular/core/testing';

import { SewaDetailService } from './sewa-detail.service';

describe('SewaDetailService', () => {
  let service: SewaDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SewaDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
