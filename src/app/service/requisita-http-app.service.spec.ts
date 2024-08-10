import { TestBed } from '@angular/core/testing';

import { RequisitaHttpAppService } from './requisita-http-app.service';

describe('RequisitaHttpAppService', () => {
  let service: RequisitaHttpAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequisitaHttpAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
