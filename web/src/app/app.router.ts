/**
 * 定义路由跳转页面
 */
// 引入路由文件
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './page/login/login.component';
import {LayoutComponent} from './page/layout/layout.component';
import {LoveComponent} from './page/layout/love/love.component';
import {LifeComponent} from './page/layout/life/life.component';
// 引入挂载到路由上的组件
// 配置一个路由数组
const rootRouterConfig: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'zone', children: [
      {
        path: ':zoneType', component: LayoutComponent, children: [
          {path: ':tabType', component: LoveComponent},
          {path: ':tabType', component: LifeComponent}
        ]
      }
    ]
  }

];

// 对外暴漏出去
export const rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, {useHash: true});
