import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectCounterPage } from './collect-counter';

@NgModule({
  declarations: [
    CollectCounterPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectCounterPage),
  ],
})
export class CollectCounterPageModule {}
