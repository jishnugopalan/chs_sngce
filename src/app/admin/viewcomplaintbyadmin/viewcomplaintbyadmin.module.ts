import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcomplaintbyadminPageRoutingModule } from './viewcomplaintbyadmin-routing.module';

import { ViewcomplaintbyadminPage } from './viewcomplaintbyadmin.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ViewcomplaintbyadminPageRoutingModule
  ],
  declarations: [ViewcomplaintbyadminPage]
})
export class ViewcomplaintbyadminPageModule {}
