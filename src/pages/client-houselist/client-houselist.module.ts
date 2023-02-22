import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientHouselistPage } from './client-houselist';

@NgModule({
  declarations: [
    ClientHouselistPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientHouselistPage),
  ],
})
export class ClientHouselistPageModule {}
