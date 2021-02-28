import { TestBed } from '@angular/core/testing';

import { FireAnswerService } from './fire-answer.service';

describe('FireAnswerService', () => {
  let service: FireAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
