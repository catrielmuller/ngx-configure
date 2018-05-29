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
