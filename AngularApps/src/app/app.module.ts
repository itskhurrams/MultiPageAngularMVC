import { NgModule,Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    WelcomeBannerComponent
  ],
  providers: [],
  entryComponents: [WelcomeBannerComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    customElements.define('app-welcome-banner', createCustomElement(WelcomeBannerComponent, { injector: this.injector }));
  }
 }
