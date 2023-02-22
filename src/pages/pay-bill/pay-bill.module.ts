import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayBillPage } from './pay-bill';

@NgModule({
  declarations: [
    PayBillPage,
  ],
  imports: [
    IonicPageModule.forChild(PayBillPage),
  ],
})
export class PayBillPageModule {}
