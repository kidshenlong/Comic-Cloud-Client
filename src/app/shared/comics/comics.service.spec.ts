import { TestBed, inject } from '@angular/core/testing';

import { ComicsService } from './comics.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ComicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicsService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([ComicsService], (service: ComicsService) => {
    expect(service).toBeTruthy();
  }));
});
