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
import { BoardComponent } from './router/layout/board/board.component';
import { BigDateComponent } from './router/layout/big-date/big-date.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularWebStorageModule} from 'angular-web-storage';
import { PictureWallComponent } from './router/layout/picture-wall/picture-wall.component';
import { LoadingComponent } from './component/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    MenstruationComponent,
    BoardComponent,
    BigDateComponent,
    PictureWallComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    rootRouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularWebStorageModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
