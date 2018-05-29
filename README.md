# ngx-configure

Angular library to easily load a configuration file prior to application initialization and use it anywhere in your app.

In base of a Paul work Ng4-Cofigure ( https://github.com/mcdonaldp2/ng4-configure ) 

## Usage

1. Use NPM to install ngx-configure into your project.

``` 
npm install ngx-configure --save 
```

2. Create a JSON config file for your project and store it somewhere accessible by the browser or in another server if you want.

```json
{
  "name": "Catriel Müller",
  "favoriteColor": "Black",
  "google": "https://google.com",
  "ngx_configure_repo": "https://github.com/catrielmuller/ngx-configure/"
}
```

a) In the demo this is stored in src/assets/config.json
     
3. Create a custom options class that extends NgxConfigureOptions:

```javascript
import { NgxConfigureOptions } from 'ngx-configure';

export class AppOptions extends NgxConfigureOptions {
  ConfigurationURL = 'assets/appconfig.json';
  AppVersion = '0.0.0';
  BustCache = false;
}
```
4. Add NgxConfigureModule, NgxConfigureOptions and your custom NgxConfigureOptions into your AppModule. 
Make sure to provide your custom ConfigureOptions.  `app.module.ts` should look something like this:

```javascript
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
```
 
5.  Inject ConfigureService into any place in your project to access the config object in your code:

``` app.component.ts ```
```javascript
import { Component } from '@angular/core';
import { NgxConfigureService } from 'ngx-configure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public config: any;

  constructor (configService: NgxConfigureService) {
    this.config = configService.config;
  }
}
```

``` app.component.html ```
```html
<div style="text-align:center">
  <h1>
    Welcome to Ngx-Configure!
  </h1>  
</div>
<p>Loaded configuration from: <a href="/assets/appconfig.json" target="_blank">/assets/appconfig.json</a></p>
<pre>{{ config | json }}</pre>
 ```
    
## ConfigureOptions Attributes

#### ConfigurationURL
  Specifies the location of the configuration file.  By default this location is set to ```'assets/config.json'```
#### AppVersion
  Specifies the version of the application.  To ensure that client browsers are getting the latest version of your config file after a release and not just a version that is cached in the browser, change this value when doing releases. The version will be appended to the url like so: <br />
    ``` http://localhost:1495/assets/config.json?v=<AppVersion> ```
  By default this is blank and will not append anything to the ConfigurationURL.
#### BustCache
  If set to true, will generate a random value to end of the ConfigurationURL to ensure that the config file is never cached:
  ``` http://localhost:1495/assets/config.json?t=<random value> ```
  By default this is set to false.  
