import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { ViewjobdetailsPageRoutingModule } from './viewjobdetails-routing.module';

import { ViewjobdetailsPage } from './viewjobdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewjobdetailsPageRoutingModule
  ],
  providers:[
    Geolocation
  ],
  declarations: [ViewjobdetailsPage]
})
export class ViewjobdetailsPageModule {}
