/**
 * 定义路由跳转页面
 */
// 引入路由文件
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './router/login/login.component';
import {LayoutComponent} from './router/layout/layout.component';
import {MenstruationComponent} from './router/layout/menstruation/menstruation.component';
import {BoardComponent} from './router/layout/love/board/board.component';
import {BigDateComponent} from './router/layout/love/big-date/big-date.component';
import {MineComponent} from './router/layout/mine/mine.component';
import {CountdownComponent} from './router/layout/love/countdown/countdown.component';
import {LoveComponent} from './router/layout/love/love.component';
// 引入挂载到路由上的组件
// 配置一个路由数组
const rootRouterConfig: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'zone', children: [
      {
        path: ':zoneType', component: LayoutComponent, children: [
          {path: ':tabType', component: LoveComponent}
        ]
      }
    ]
  }

];

// 对外暴漏出去
export const rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, {useHash: true});
