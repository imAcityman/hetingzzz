/**
 * 定义路由跳转页面
 */
// 引入路由文件
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {NgModule} from '@angular/core';
// 引入挂载到路由上的组件
// 配置一个路由数组
const router: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main', loadChildren: () => import('./page/main/main.module').then(m => m.MainModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      router,
      {enableTracing: false, useHash: true, scrollPositionRestoration: 'top'} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
