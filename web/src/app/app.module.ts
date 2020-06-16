import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutComponent} from './page/layout/layout.component';
import {LoginComponent} from './page/login/login.component';
import {rootRouterModule} from './app.router';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MenstruationComponent} from './page/layout/menstruation/menstruation.component';
import {Interceptor} from './service/Interceptor.service';
import {BoardComponent} from './page/layout/love/board/board.component';
import {BigDateComponent} from './page/layout/love/big-date/big-date.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularWebStorageModule} from 'angular-web-storage';
import {PictureWallComponent} from './page/layout/love/picture-wall/picture-wall.component';
import {LoadingComponent} from './component/loading/loading.component';
import {MineComponent} from './page/layout/mine/mine.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CountdownComponent} from './page/layout/love/countdown/countdown.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ShareModule} from './module/share/share.module';
import {LoveComponent} from './page/layout/love/love.component';
import {InputIosPopupDirective} from './directive/input-ios-popup.directive';
import { LifeComponent } from './page/layout/life/life.component';
import { OilComponent } from './page/layout/life/oil/oil.component';
import { OilPriceComponent } from './page/layout/life/oil/oil-price/oil-price.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

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
    LoveComponent,
    InputIosPopupDirective,
    LifeComponent,
    OilComponent,
    OilPriceComponent,
    NavBarComponent
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
  }, {provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
