import { TestBed } from '@angular/core/testing';

import { AuditoriesService } from './auditories.service';

describe('AuditoriesService', () => {
  let service: AuditoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
