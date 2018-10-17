import { TestBed, inject } from '@angular/core/testing';

import { CommonparamService } from './commonparam.service';

describe('CommonparamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonparamService]
    });
  });

  it('should be created', inject([CommonparamService], (service: CommonparamService) => {
    expect(service).toBeTruthy();
  }));
});
