import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ScanHousePage } from '../pages/scan-house/scan-house';
import { ScanBillPage } from '../pages/scan-bill/scan-bill';
import { HouseBillPage } from '../pages/house-bill/house-bill';
import { CollectCounterPage } from '../pages/collect-counter/collect-counter';
import { PayBillPage } from '../pages/pay-bill/pay-bill';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '../../node_modules/@ionic-native/barcode-scanner';
import { PaymentDetailsPage } from '../pages/payment-details/payment-details';
import { ClientListPage } from '../pages/client-list/client-list';


import { LoginPage } from '../pages/login/login';
import { HouseListPage } from '../pages/house-list/house-list';
import { ClientHouselistPage } from '../pages/client-houselist/client-houselist';
import { ClientHousebillPage } from '../pages/client-housebill/client-housebill';
import { BillsDetailPage } from '../pages/bills-detail/bills-detail';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    ScanHousePage,
    ScanBillPage,
    HouseBillPage,
    CollectCounterPage,
    PayBillPage,
    PaymentDetailsPage,
    ClientListPage,
    HouseListPage,
    ClientHouselistPage,
    ClientHousebillPage,
    BillsDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      scrollAssist: true, 
      autoFocusAssist: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DashboardPage,
    ScanHousePage,
    ScanBillPage,
    HouseBillPage,
    CollectCounterPage,
    PayBillPage,
    PaymentDetailsPage,
    ClientListPage,
    HouseListPage,
    ClientHouselistPage,
    ClientHousebillPage,
    BillsDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
