import { TestBed } from '@angular/core/testing';

import { SubscribersService } from './subscribers.service';

describe('SubscribersService', () => {
  let service: SubscribersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribersService);
  });

});
