import { TestBed, inject } from '@angular/core/testing';

import { ComicStateService } from './comic-state.service';

describe('ComicStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicStateService]
    });
  });

  it('should be created', inject([ComicStateService], (service: ComicStateService) => {
    expect(service).toBeTruthy();
  }));
});
