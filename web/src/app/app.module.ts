import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LayoutComponent} from './router/layout/layout.component';
import {LoginComponent} from './router/login/login.component';
import {rootRouterModule} from './app.router';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MenstruationComponent } from './router/layout/menstruation/menstruation.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    MenstruationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    rootRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
