import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanHousePage } from './scan-house';

@NgModule({
  declarations: [
    ScanHousePage,
  ],
  imports: [
    IonicPageModule.forChild(ScanHousePage),
  ],
})
export class ScanHousePageModule {}
