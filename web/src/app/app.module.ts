import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LayoutComponent} from './router/layout/layout.component';
import {LoginComponent} from './router/login/login.component';
import {rootRouterModule} from './app.router';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent
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
