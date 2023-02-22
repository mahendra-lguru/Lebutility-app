import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseListPage } from './house-list';

@NgModule({
  declarations: [
    HouseListPage,
  ],
  imports: [
    IonicPageModule.forChild(HouseListPage),
  ],
})
export class HouseListPageModule {}
