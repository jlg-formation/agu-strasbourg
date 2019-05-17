import { TestBed } from '@angular/core/testing';

import { QuizzServiceStubService } from './quizz-service-stub.service';

describe('QuizzServiceStubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizzServiceStubService = TestBed.get(QuizzServiceStubService);
    expect(service).toBeTruthy();
  });
});
