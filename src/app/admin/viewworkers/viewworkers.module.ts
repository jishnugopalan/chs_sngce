import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewworkersPageRoutingModule } from './viewworkers-routing.module';

import { ViewworkersPage } from './viewworkers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewworkersPageRoutingModule
  ],
  declarations: [ViewworkersPage]
})
export class ViewworkersPageModule {}
