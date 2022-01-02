import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewbillPage } from './viewbill.page';

const routes: Routes = [
  {
    path: '',
    component: ViewbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewbillPageRoutingModule {}
