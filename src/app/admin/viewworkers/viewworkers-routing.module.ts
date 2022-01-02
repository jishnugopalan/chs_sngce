import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewworkersPage } from './viewworkers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewworkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewworkersPageRoutingModule {}
