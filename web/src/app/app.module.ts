import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './page/login/login.component';
import {AppRouterModule} from './app.router.module';
import {RouteReuseStrategy} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from './service/Interceptor.service';
import {AngularWebStorageModule} from 'angular-web-storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {CommonModule, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ShareModule} from './module/share/share.module';
import {IonicRouteStrategy} from '@ionic/angular';
import {ComponentModule} from './component/component.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularWebStorageModule,
    ShareModule,
    AppRouterModule,
    ComponentModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }, {provide: NZ_I18N, useValue: zh_CN}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
