import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewworkerPage } from './viewworker.page';

const routes: Routes = [
  {
    path: '',
    component: ViewworkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewworkerPageRoutingModule {}
