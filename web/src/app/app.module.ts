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
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {CommonModule, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ShareModule} from './module/share/share.module';
import {IonicRouteStrategy} from '@ionic/angular';
import {ComponentModule} from './component/component.module';

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
    NgZorroAntdMobileModule,
    ShareModule,
    AppRouterModule,
    ComponentModule
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
