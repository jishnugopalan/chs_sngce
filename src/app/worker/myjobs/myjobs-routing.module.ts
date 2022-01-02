import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyjobsPage } from './myjobs.page';

const routes: Routes = [
  {
    path: '',
    component: MyjobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyjobsPageRoutingModule {}
