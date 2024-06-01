import { TestBed } from '@angular/core/testing';

import { CoffeeProviderService } from './coffee-provider.service';

describe('CoffeeProviderService', () => {
  let service: CoffeeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
