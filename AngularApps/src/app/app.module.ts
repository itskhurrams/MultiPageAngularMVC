import { NgModule,Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { BannerModule} from './banner/banner.module';
import { WelcomeComponent } from './banner/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BannerModule
  ],
  providers: [],
  entryComponents: [WelcomeComponent]

})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    customElements.define('app-welcome', createCustomElement(WelcomeComponent, { injector: this.injector }));
  }
 }
