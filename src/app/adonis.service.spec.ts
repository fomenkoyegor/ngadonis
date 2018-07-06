import { TestBed, inject } from '@angular/core/testing';

import { AdonisService } from './adonis.service';

describe('AdonisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdonisService]
    });
  });

  it('should be created', inject([AdonisService], (service: AdonisService) => {
    expect(service).toBeTruthy();
  }));
});
