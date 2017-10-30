import { TestBed, inject } from '@angular/core/testing';

import { SeriesService } from './series.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));
});
