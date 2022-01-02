import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookedworkersPage } from './bookedworkers.page';

const routes: Routes = [
  {
    path: '',
    component: BookedworkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookedworkersPageRoutingModule {}
