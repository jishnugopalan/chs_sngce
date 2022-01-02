import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcomplaintsPageRoutingModule } from './viewcomplaints-routing.module';

import { ViewcomplaintsPage } from './viewcomplaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewcomplaintsPageRoutingModule
  ],
  declarations: [ViewcomplaintsPage]
})
export class ViewcomplaintsPageModule {}
