import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanBillPage } from './scan-bill';

@NgModule({
  declarations: [
    ScanBillPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanBillPage),
  ],
})
export class ScanBillPageModule {}
