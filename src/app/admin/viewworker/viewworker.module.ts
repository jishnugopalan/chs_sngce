import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewworkerPageRoutingModule } from './viewworker-routing.module';

import { ViewworkerPage } from './viewworker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewworkerPageRoutingModule
  ],
  declarations: [ViewworkerPage]
})
export class ViewworkerPageModule {}
