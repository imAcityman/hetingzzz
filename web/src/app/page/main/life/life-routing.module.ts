import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LifeComponent} from './life.component';
import {OilComponent} from './oil/oil.component';

const routes: Routes = [{
  path: '', component: LifeComponent, children: [
    {path: '', redirectTo: 'oil', pathMatch: 'full'},
    {path: 'oil', component: OilComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeRoutingModule {
}
