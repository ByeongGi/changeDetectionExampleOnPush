import { TestBed, inject } from '@angular/core/testing';

import { CheckEventService } from './check-event.service';

describe('CheckEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckEventService]
    });
  });

  it('should be created', inject([CheckEventService], (service: CheckEventService) => {
    expect(service).toBeTruthy();
  }));
});
