import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcomplaintbyadminPage } from './viewcomplaintbyadmin.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcomplaintbyadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcomplaintbyadminPageRoutingModule {}
