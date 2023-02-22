import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PaymentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-details',
  templateUrl: 'payment-details.html',
})
export class PaymentDetailsPage {

  list: any;

  bill_id: any;

  total: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController,
    public http: Http, private toastCtrl: ToastController, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentDetailsPage');

    Promise.all([this.storage.get('BILL_ID')])
      .then(val => {

        this.bill_id = val[0];

        let loader = this.loadingController.create({
          content: "Please Wait..."
        });
        loader.present();

        this.http.get('https://www.lebutility.com/api/getBillDetailById/' + this.bill_id).map(res => res.json()).subscribe(data => {

          this.list = data;

          this.total = +this.list.response[0].amount + +this.list.response[0].TVA + +this.list.response[0].gouv_price;
        }
          ,
          err => console.warn(err),
          () => {

            loader.dismiss()

          });

      });
  }

}
