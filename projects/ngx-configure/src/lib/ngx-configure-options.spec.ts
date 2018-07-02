import { TestBed, inject } from '@angular/core/testing';
import { NgxConfigureOptions } from './ngx-configure-options';

describe('NgxConfigureOptions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxConfigureOptions]
    });
  });

  it('should be created', inject([NgxConfigureOptions], (service: NgxConfigureOptions) => {
    expect(service).toBeTruthy();
  }));
});
