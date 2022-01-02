import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddworkerPageRoutingModule } from './addworker-routing.module';

import { AddworkerPage } from './addworker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddworkerPageRoutingModule
  ],
  declarations: [AddworkerPage]
})
export class AddworkerPageModule {}
