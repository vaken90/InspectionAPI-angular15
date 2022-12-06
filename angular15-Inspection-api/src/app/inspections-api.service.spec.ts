import { TestBed } from '@angular/core/testing';

import { InspectionsApiService } from './inspections-api.service';

describe('InspectionsApiService', () => {
  let service: InspectionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
