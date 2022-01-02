import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerslistPageRoutingModule } from './workerslist-routing.module';

import { WorkerslistPage } from './workerslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerslistPageRoutingModule
  ],
  declarations: [WorkerslistPage]
})
export class WorkerslistPageModule {}
