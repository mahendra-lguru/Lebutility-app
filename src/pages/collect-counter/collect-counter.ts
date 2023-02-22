import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the CollectCounterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collect-counter',
  templateUrl: 'collect-counter.html',
})
export class CollectCounterPage {

  errors: string;
  counter_no: string;
  clientname: any;
  client_id: any;
  address: any;
  city: any;
  zone_name: any;
  month: any;
  year: any;
  house_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController,
    public http: Http, private toastCtrl: ToastController, public storage: Storage) {
    Promise.all([this.storage.get('CLIENT_NAME'), this.storage.get('CLIENT_ID'), this.storage.get('ADDRESS'),
    this.storage.get('CITY'), this.storage.get('ZONE_NAME'), this.storage.get('MONTH'),
    this.storage.get('YEAR'), this.storage.get('HOUSE_ID')]).then(val => {

      this.clientname = val[0];
      this.client_id = val[1];
      this.address = val[2];
      this.city = val[3];
      this.zone_name = val[4];
      this.month = val[5];
      this.year = val[6];
      this.house_id = val[7];
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectCounterPage');
  }

  Submit() {

    Promise.all([this.storage.get('ZONE_ID'), this.storage.get('CLIENT_ID'), this.storage.get('HOUSE_ID'),
    this.storage.get('BILL_ID'), this.storage.get('COLLECTOR_ID'), this.storage.get('BILL_MONTH_DATE'),
    this.storage.get('Role_ID')
    ]).then(val => {

      let loader = this.loadingController.create({
        content: "Please Wait..."
      });
      loader.present();

      let postParams = {

        zone_id: val[0],
        client_id: val[1],
        house_id: val[2],
        bill_id: val[3],
        login_id: val[4],
        unit: this.counter_no,
        bill_month_date: val[5],
        role_id: val[6]

      };
      var headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers });

      return this.http.post('https://www.lebutility.com/api/setConsumption', postParams, options)
        .map(res => res.json())
        .subscribe(data => {

          let toast = this.toastCtrl.create({
            message: data.message,
            duration: 3000,
            position: 'bottom'
          });

          this.navCtrl.push(DashboardPage);

          toast.onDidDismiss(() => {

          });

          toast.present();
          loader.dismiss();

        }, error => {

          this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');

          let toast = this.toastCtrl.create({
            message: this.errors,
            duration: 3000,
            position: 'bottom'
          });

          toast.onDidDismiss(() => {

          });

          toast.present();
          loader.dismiss();

        });

    });
  }

  Cancel() {
    this.navCtrl.pop();
  }

}
