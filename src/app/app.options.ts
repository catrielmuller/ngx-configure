import { NgxConfigureOptions } from 'ngx-configure';

export class AppOptions extends NgxConfigureOptions {
  ConfigurationURL = 'assets/appconfig.json';
  AppVersion = '0.0.0';
  BustCache = false;
}
