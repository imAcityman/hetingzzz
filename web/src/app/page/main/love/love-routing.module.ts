import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoveComponent} from './love.component';
import {BigDateComponent} from './big-date/big-date.component';
import {BoardComponent} from './board/board.component';

const routes: Routes = [{
  path: '', component: LoveComponent, children: [
    {path: '', redirectTo: 'big-date', pathMatch: 'full'},
    {path: 'big-date', component: BigDateComponent},
    {path: 'board', component: BoardComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoveRoutingModule {
}
