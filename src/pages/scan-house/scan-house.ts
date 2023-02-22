import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HouseBillPage } from '../house-bill/house-bill';


/**
 * Generated class for the ScanHousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-house',
  templateUrl: 'scan-house.html',
})
export class ScanHousePage {

  scanData: {};
  encodeData: string;
  encodedData: {};
  options: BarcodeScannerOptions;

  house_id: any;

  url_: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanHousePage');
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

        this.url_ = array[array.length - 4];

        if (this.url_ == "setconsumption") {
          this.storage.set('HOUSE_ID', lastsegment);

          const animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
          }

          this.navCtrl.push(HouseBillPage, {
            HOUSE_ID: lastsegment
          }, animationsOptions);
        }
        else {
          let toast = this.toastCtrl.create({
            message: "Please Scan Only House QR Code",
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

    if (this.house_id == null) {
      let toast = this.toastCtrl.create({
        message: "Please Enter House ID",
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {

      });

      toast.present();
    }
    else {

      const animationsOptions = {
        animation: 'ios-transition',
        duration: 1000
      }

      this.navCtrl.push(HouseBillPage, {
        HOUSE_ID: this.house_id
      }, animationsOptions);

      this.storage.set('HOUSE_ID', this.house_id);
    }
  }

}
