import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'health', pathMatch: 'full'},
      {path: 'health', loadChildren: () => import('./health/health.module').then(m => m.HealthModule)},
      {path: 'life', loadChildren: () => import('./life/life.module').then(m => m.LifeModule)},
      {path: 'love', loadChildren: () => import('./love/love.module').then(m => m.LoveModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
