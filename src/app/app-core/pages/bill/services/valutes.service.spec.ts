import { TestBed } from '@angular/core/testing';

import { ValutesService } from './valutes.service';

describe('ValutesService', () => {
  let service: ValutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
