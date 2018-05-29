import { TestBed, inject } from '@angular/core/testing';

import { NgxConfigureService } from './ngx-configure.service';

describe('NgxConfigureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxConfigureService]
    });
  });

  it('should be created', inject([NgxConfigureService], (service: NgxConfigureService) => {
    expect(service).toBeTruthy();
  }));
});
