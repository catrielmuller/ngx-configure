import { Injectable } from '@angular/core';

@Injectable()
export class NgxConfigureOptions {
  ConfigurationURL = 'assets/config.json';
  AppVersion =  '';
  BustCache  = false;
}
