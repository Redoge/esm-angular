import { TestBed } from '@angular/core/testing';

import { AuthorizedGuardService } from './authorized-guard.service';

describe('GuardService', () => {
  let service: AuthorizedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
