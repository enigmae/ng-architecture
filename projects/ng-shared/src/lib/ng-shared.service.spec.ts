import { TestBed } from '@angular/core/testing';

import { NgSharedService } from './ng-shared.service';

describe('NgSharedService', () => {
  let service: NgSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
