import { TestBed, inject } from '@angular/core/testing';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { NgxConfigureService } from './ngx-configure.service';
import { NgxConfigureOptions } from './ngx-configure-options';
import {APP_INITIALIZER} from '@angular/core';
import {init} from './ngx-configure.module';

describe('NgxConfigureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        NgxConfigureService,
        NgxConfigureOptions,
        {
          provide: APP_INITIALIZER,
          useFactory: init,
          multi: true,
          deps: [NgxConfigureService, HttpBackend]
        }
      ]
    });
  });

  it('should be created', inject([NgxConfigureService], (service: NgxConfigureService) => {
    expect(service).toBeTruthy();
  }));
});
