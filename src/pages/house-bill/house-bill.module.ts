import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseBillPage } from './house-bill';

@NgModule({
  declarations: [
    HouseBillPage,
  ],
  imports: [
    IonicPageModule.forChild(HouseBillPage),
  ],
})
export class HouseBillPageModule {}
