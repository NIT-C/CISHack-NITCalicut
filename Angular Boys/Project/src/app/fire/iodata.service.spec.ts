import { TestBed } from '@angular/core/testing';

import { IodataService } from './iodata.service';

describe('IodataService', () => {
  let service: IodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
