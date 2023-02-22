import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { CollectCounterPage } from '../collect-counter/collect-counter';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import { PayBillPage } from '../pay-bill/pay-bill';

/**
 * Generated class for the ScanBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-bill',
  templateUrl: 'scan-bill.html',
})
export class ScanBillPage {

  list: any;
  bill_id: any;

  scanData: {};
  encodeData: string;
  encodedData: {};
  options: BarcodeScannerOptions;

  status: any;
  errors: string;

  url_: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController,
    public http: Http, private toastCtrl: ToastController, public storage: Storage, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanBillPage');

  }

  Back() {
    this.navCtrl.pop();
  }
  Barcode() {
    this.options = {
      prompt: "Scan your barcode "
    }

    this.barcodeScanner.scan(this.options).then((barcodeData) => {

      if (barcodeData.cancelled == true) {
        console.log("User cancelled the action!");
        // this.navCtrl.pop();
        return false;
      }
      else {

        this.scanData = barcodeData;

        var barcode = barcodeData.text;

        var array = barcode.split('/');

        var lastsegment = array[array.length - 1];

        this.url_ = array[array.length - 2];

        if (this.url_ == "setBillStatus") {
          let loader = this.loadingController.create({
            content: "Please Wait..."
          });
          loader.present();

          this.http.get('https://www.lebutility.com/api/getBillDetailById/' + lastsegment)
            .map(res => res.json()).subscribe(data => {

              this.list = data;

              this.storage.set('BILL_ID', lastsegment);

              this.status = this.list.response[0].status;

              if (this.status == "Uncolllected") {
                this.navCtrl.push(CollectCounterPage);
              }
              else if (this.status == "Paid") {
                this.navCtrl.push(PaymentDetailsPage);
              }
              else if (this.status = "Unpaid") {
                this.navCtrl.push(PayBillPage);
              }

              loader.dismiss();
            }
              ,
              error => {

                this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');

                loader.dismiss();

                this.navCtrl.push(ScanBillPage);

                let toast = this.toastCtrl.create({
                  message: this.errors,
                  duration: 3000,
                  position: 'bottom'
                });

                toast.onDidDismiss(() => {

                });

                toast.present();

              });
        }
        else {
          let toast = this.toastCtrl.create({
            message: "Please Scan Only Bill QR Code",
            duration: 3000,
            position: 'bottom'
          });

          toast.onDidDismiss(() => {

          });

          toast.present();
        }
      }

    }, (err) => {
      console.log("Error occured : " + err);
    });
  }

  Search() {

    if (this.bill_id == null) {
      let toast = this.toastCtrl.create({
        message: "Please Enter Bill ID",
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {

      });

      toast.present();
    }
    else {

      let loader = this.loadingController.create({
        content: "Please Wait..."
      });
      loader.present();

      this.http.get('https://www.lebutility.com/api/getBillDetailById/' + this.bill_id).map(res => res.json()).subscribe(data => {

        this.list = data;

        this.storage.set('BILL_ID', this.bill_id);

        this.status = this.list.response[0].status;

        if (this.status == "Uncolllected") {
          this.navCtrl.push(CollectCounterPage);
        }
        else if (this.status == "Paid") {
          this.navCtrl.push(PaymentDetailsPage);
        }
        else if (this.status = "Unpaid") {
          this.navCtrl.push(PayBillPage);
        }


      }
        ,
        err => console.warn(err),
        () => {

          loader.dismiss()

        });

    }
  }

}
