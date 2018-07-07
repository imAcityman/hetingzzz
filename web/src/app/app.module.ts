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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    MenstruationComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    rootRouterModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
