import { Injectable } from '@angular/core';
import { NgxConfigureOptions } from './ngx-configure-options';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgxConfigureService {
  public config: any;

  private http: HttpClient;

  constructor(public configOptions: NgxConfigureOptions, private handler: HttpBackend) {
    // See: https://stackoverflow.com/a/49013534/13278 (bypass all interceptors)
    this.http = new HttpClient(handler);
  }

  load(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.buildUrl()).subscribe(data => {
        this.config = data;
        resolve();
      }, error => {
        reject(error);
      });
    });
    return promise;
  }

  private buildUrl(): string {
    let url = this.configOptions.ConfigurationURL;
    if (this.configOptions.AppVersion !== '') {
      url += '?v=' + this.configOptions.AppVersion;
    }
    if (this.configOptions.BustCache) {
      if (this.configOptions.AppVersion !== '') {
        url += '&';
      } else {
        url += '?';
      }
      url += 't=' + this.makeId();
    }
    return url;
  }

  private makeId() {
    let text = '';
    const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += list.charAt(Math.floor(Math.random() * list.length));
    }
    return text;
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }
}
