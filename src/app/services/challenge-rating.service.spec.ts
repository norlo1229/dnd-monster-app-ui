import { TestBed } from '@angular/core/testing';

import { ChallengeRatingService } from './challenge-rating.service';

describe('ChallengeRatingService', () => {
  let service: ChallengeRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengeRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
