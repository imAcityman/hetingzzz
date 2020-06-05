import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LayoutComponent} from './router/layout/layout.component';
import {LoginComponent} from './router/login/login.component';
import {rootRouterModule} from './app.router';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MenstruationComponent } from './router/layout/menstruation/menstruation.component';
import {Interceptor} from './service/Interceptor.service';
import { BoardComponent } from './router/layout/love/board/board.component';
import { BigDateComponent } from './router/layout/love/big-date/big-date.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularWebStorageModule} from 'angular-web-storage';
import { PictureWallComponent } from './router/layout/love/picture-wall/picture-wall.component';
import { LoadingComponent } from './component/loading/loading.component';
import { MineComponent } from './router/layout/mine/mine.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CountdownComponent } from './router/layout/love/countdown/countdown.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ShareModule} from './module/share/share.module';
import { LoveComponent } from './router/layout/love/love.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    MenstruationComponent,
    BoardComponent,
    BigDateComponent,
    PictureWallComponent,
    LoadingComponent,
    MineComponent,
    CountdownComponent,
    LoveComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    rootRouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularWebStorageModule,
    NgZorroAntdMobileModule,
    ShareModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true,
  }, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
