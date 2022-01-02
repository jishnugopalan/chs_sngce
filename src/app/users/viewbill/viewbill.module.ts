import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewbillPageRoutingModule } from './viewbill-routing.module';

import { ViewbillPage } from './viewbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewbillPageRoutingModule
  ],
  declarations: [ViewbillPage]
})
export class ViewbillPageModule {}
