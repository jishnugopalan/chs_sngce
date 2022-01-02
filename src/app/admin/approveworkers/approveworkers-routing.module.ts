import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveworkersPage } from './approveworkers.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveworkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveworkersPageRoutingModule {}
