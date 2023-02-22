import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanHousePage } from '../scan-house/scan-house';
import { ScanBillPage } from '../scan-bill/scan-bill';
import { ClientListPage } from '../client-list/client-list';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  submitted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  Scan_House() {

    const animationsOptions = {
      animation: 'ios-transition',
      duration: 1000
    }
    this.navCtrl.push(ScanHousePage, {}, animationsOptions);
  }

  Collect_Bill() {

    const animationsOptions = {
      animation: 'ios-transition',
      duration: 1000
    }

    this.navCtrl.push(ScanBillPage, {}, animationsOptions);
  }

  Clients(){

    const animationsOptions = {
      animation: 'ios-transition',
      duration: 1000
    }

    this.navCtrl.push(ClientListPage, {}, animationsOptions);
  }

  Logout() {

    this.submitted = false;
    this.storage.set('isLoggedIn', this.submitted);

    this.navCtrl.push(LoginPage);
  }

}
