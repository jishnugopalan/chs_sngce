import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookedworkersPageRoutingModule } from './bookedworkers-routing.module';

import { BookedworkersPage } from './bookedworkers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookedworkersPageRoutingModule
  ],
  declarations: [BookedworkersPage]
})
export class BookedworkersPageModule {}
