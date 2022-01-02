import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyjobsPageRoutingModule } from './myjobs-routing.module';

import { MyjobsPage } from './myjobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyjobsPageRoutingModule
  ],
  declarations: [MyjobsPage]
})
export class MyjobsPageModule {}
