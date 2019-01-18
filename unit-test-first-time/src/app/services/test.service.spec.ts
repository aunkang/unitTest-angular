import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
});
