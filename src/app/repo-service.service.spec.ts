import { TestBed, inject } from '@angular/core/testing';

import { RepoServiceService } from './repo-service.service';

describe('RepoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoServiceService]
    });
  });

  it('should be created', inject([RepoServiceService], (service: RepoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
