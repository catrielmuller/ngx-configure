import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { NgxConfigureModule, NgxConfigureOptions } from 'ngx-configure';
import { AppComponent } from './app.component';
import { AppOptions } from './app.options';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxConfigureModule.forRoot()
      ],
      providers: [
        { provide: NgxConfigureOptions, useClass: AppOptions }
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Ngx-Configure!');
  }));
});
