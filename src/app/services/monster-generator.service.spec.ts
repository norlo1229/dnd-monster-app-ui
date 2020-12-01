import { TestBed } from '@angular/core/testing';

import { MonsterGeneratorService } from './monster-generator.service';

describe('MonsterGeneratorService', () => {
  let service: MonsterGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
