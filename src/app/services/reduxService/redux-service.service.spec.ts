import { TestBed } from '@angular/core/testing';

import { ReduxServiceService } from './redux-service.service';

describe('ReduxServiceService', () => {
  let service: ReduxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReduxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
