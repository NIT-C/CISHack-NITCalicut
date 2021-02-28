import { TestBed } from '@angular/core/testing';

import { CommentAnsService } from './comment-ans.service';

describe('CommentAnsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentAnsService = TestBed.get(CommentAnsService);
    expect(service).toBeTruthy();
  });
});
