import { TestBed } from '@angular/core/testing';

import { DataTransferService } from './data-transfer.service';

describe('DataTranswerService', () => {
  let service: DataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
