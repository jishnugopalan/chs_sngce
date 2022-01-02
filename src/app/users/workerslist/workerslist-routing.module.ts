import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerslistPage } from './workerslist.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerslistPageRoutingModule {}
