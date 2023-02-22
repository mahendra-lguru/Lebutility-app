import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DashboardPage } from '../dashboard/dashboard';
import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the PayBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay-bill',
  templateUrl: 'pay-bill.html',
})
export class PayBillPage {
  @ViewChild('dateTime') sDate;

  amount: any;

  list: any;

  bill_id: any;
  month: any;
  year: any;
  collector_id: string;
  role_id: any;

  total: any;

  errors: string;
  selectdate : any;

  myDate:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController,
    public http: Http, private toastCtrl: ToastController, public storage: Storage
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayBillPage');

    Promise.all([this.storage.get('BILL_ID'), this.storage.get('MONTH'), this.storage.get('YEAR')])
      .then(val => {

        this.bill_id = val[0];
        this.month = val[1];
        this.year = val[2];

        let loader = this.loadingController.create({
          content: "Please Wait..."
        });
        loader.present();

        this.http.get('https://www.lebutility.com/api/getBillDetailById/' + this.bill_id).map(res => res.json()).subscribe(data => {

          this.list = data;

          this.amount = +this.list.response[0].amount + +this.list.response[0].TVA;

        }
          ,
          err => console.warn(err),
          () => {

            loader.dismiss()

          });
      });

  }

  Cancel() {
    this.navCtrl.pop();
  }
  Pay() {

    Promise.all([this.storage.get('BILL_ID'), this.storage.get('COLLECTOR_ID'), this.storage.get('Role_ID')])
      .then(val => {

        this.bill_id = val[0];
        this.collector_id = val[1];
        this.role_id = val[2];

        let loader = this.loadingController.create({
          content: "Please Wait..."
        });
        loader.present();

        let postParams = {

          bill_id: this.bill_id,
          amount: this.amount,
          login_id: this.collector_id,
          role_id: this.role_id
        };
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });


        return this.http.post('https://www.lebutility.com/api/setBillStatus', postParams, options)
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

  CollectionDate(){
  
    this.sDate.open();

  }

  dateChanged(){

    Promise.all([this.storage.get('BILL_ID')])
      .then(val => {

        this.bill_id = val[0];

        let loader = this.loadingController.create({
          content: "Please Wait..."
        });
        loader.present();

        let postParams = {

          bill_id : this.bill_id,
          date : this.selectdate
          
        };
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });


        return this.http.post('https://www.lebutility.com/api/updateNextCollectionDate', postParams, options)
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
  
}
