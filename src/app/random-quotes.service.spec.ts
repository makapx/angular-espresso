import { TestBed } from '@angular/core/testing';

import { RandomQuotesService } from './random-quotes.service';

describe('RandomQuotesService', () => {
  let service: RandomQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
