import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillsDetailPage } from './bills-detail';

@NgModule({
  declarations: [
    BillsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BillsDetailPage),
  ],
})
export class BillsDetailPageModule {}
