/**
 * 定义路由跳转页面
 */
// 引入路由文件
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './page/login/login.component';
import {LayoutComponent} from './page/layout/layout.component';
// 引入挂载到路由上的组件
// 配置一个路由数组
const rootRouterConfig: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'zone', component: LayoutComponent
  }

];

// 对外暴漏出去
export const rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, {useHash: true});
