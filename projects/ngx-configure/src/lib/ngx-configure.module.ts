import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { NgxConfigureService } from './ngx-configure.service';
import { NgxConfigureOptions } from './ngx-configure-options';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  exports: [],
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
})
export class NgxConfigureModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxConfigureModule,
      providers: [NgxConfigureService, NgxConfigureOptions]
    };
  }
}

export function init( configService: NgxConfigureService) {
  return () => configService.load();
}

