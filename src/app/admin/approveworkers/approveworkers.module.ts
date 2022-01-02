import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveworkersPageRoutingModule } from './approveworkers-routing.module';

import { ApproveworkersPage } from './approveworkers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveworkersPageRoutingModule
  ],
  declarations: [ApproveworkersPage]
})
export class ApproveworkersPageModule {}
