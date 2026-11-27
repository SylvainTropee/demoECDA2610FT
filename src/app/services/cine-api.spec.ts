import { TestBed } from '@angular/core/testing';

import { CineApi } from './cine-api';

describe('CineApi', () => {
  let service: CineApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CineApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
