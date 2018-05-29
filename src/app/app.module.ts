import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxConfigureModule, NgxConfigureOptions } from 'ngx-configure';
import { AppOptions } from './app.options';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxConfigureModule.forRoot()
  ],
  providers: [
    { provide: NgxConfigureOptions, useClass: AppOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
