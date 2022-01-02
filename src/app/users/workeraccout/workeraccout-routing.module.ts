import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkeraccoutPage } from './workeraccout.page';

const routes: Routes = [
  {
    path: '',
    component: WorkeraccoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkeraccoutPageRoutingModule {}
