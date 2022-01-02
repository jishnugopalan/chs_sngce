import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcategoryPageRoutingModule } from './addcategory-routing.module';

import { AddcategoryPage } from './addcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddcategoryPageRoutingModule
  ],
  declarations: [AddcategoryPage]
})
export class AddcategoryPageModule {}
