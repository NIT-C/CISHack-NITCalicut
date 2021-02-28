import { TestBed } from '@angular/core/testing';

import { FireQuestionService } from './fire-question.service';

describe('FireQuestionService', () => {
  let service: FireQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
