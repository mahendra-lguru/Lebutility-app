import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CollectCounterPage } from '../collect-counter/collect-counter';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PayBillPage } from '../pay-bill/pay-bill';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import $ from 'jquery';

/**
 * Generated class for the HouseBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-house-bill',
  templateUrl: 'house-bill.html',
})
export class HouseBillPage {

  selectyear: any;
  list: any;
  house_id: any;
  year: any = 2020;
  login_id : any;
  role_id : any;

  status: string;
  count: any;

  errors: string;

  client_id : any;
  client_name : any;
  houseid : any;
  address : any;
  city : any;
  zone_name : any;
  
  bills: any;
  statuss : any;
  amount : any;
 
  background_color : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController,
    public http: Http, private toastCtrl: ToastController, public storage: Storage) {
 
      Promise.all([this.storage.get('HOUSE_ID'),this.storage.get('Role_ID'),this.storage.get('COLLECTOR_ID')])
    .then(val => {

      this.house_id = val[0];
      this.role_id = val[1];
      this.login_id = val[2];
      this.count = 1;

      let loader = this.loadingController.create({
        content: "Please Wait..."
      });
      loader.present();

      let postParams = {

        year: this.year,
        login_id: this.login_id,
        role_id : this.role_id,
        house_id : this.house_id

      };
      var headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers });

      return this.http.post('https://www.lebutility.com/api/getHouseDetailById', postParams, options)
        .map(res => res.json())
        .subscribe(data => {

            this.client_id =  data.response.house_detail[0].client_id;
            this.client_name =  data.response.house_detail[0].client_name;
            this.houseid =  data.response.house_detail[0].house_id;
            this.address =  data.response.house_detail[0].address;
            this.city =  data.response.house_detail[0].city;
            this.zone_name =  data.response.house_detail[0].zone_name;  

            this.bills = [];

            for(let i = 0; i < data.response.bill_detail.length; i++) {
                this.bills.push(data.response.bill_detail[i]);
            }
      
            
            
            this.storage.set("ZONE_ID",data.response.house_detail[0].zone_id );
            this.storage.set("CLIENT_ID",data.response.house_detail[0].client_id );
            this.storage.set('ADDRESS', data.response.house_detail[0].address);
            this.storage.set('CLIENT_NAME', data.response.house_detail[0].client_name);
            this.storage.set('CITY', data.response.house_detail[0].city);
            this.storage.set('ZONE_NAME', data.response.house_detail[0].zone_name);
            
            this.storage.set("UNIT", data.response.bill_detail[0].unit);
            

            this.status = this.statuss;

          loader.dismiss();

        }, error => {

          this.navCtrl.pop();

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad HouseBillPage');
  }

  House_Detail(item,i) {

    
    this.storage.set('MONTH', item.month);
    this.storage.set("BILL_ID",item.bill_id );
    this.storage.set("BILL_MONTH_DATE", item.bill_month_date);
    this.storage.set('STATUS', item.status);

    // $(".bill").css({'background-color': '#fff'});
    // $("#bg_"+i).css({'background-color': '#dddddd'});

   
      this.count = 0;

      const animationsOptions = {
        animation: 'ios-transition',
        duration: 1000
      }

      if (item.status == "Uncolllected") {
        this.navCtrl.push(CollectCounterPage, {}, animationsOptions);
      }
      else if (item.status == "Paid") {
        this.navCtrl.push(PaymentDetailsPage, {}, animationsOptions);
      }
      else if (item.status = "Unpaid") {
        this.navCtrl.push(PayBillPage, {}, animationsOptions);
      }

   

     
      this.count = 1;
    //}
  }

  getyear(selectyear) {

    Promise.all([this.storage.get('HOUSE_ID'),this.storage.get('Role_ID'),this.storage.get('COLLECTOR_ID')])
    .then(val => {

      this.house_id = val[0];
      this.role_id = val[1];
      this.login_id = val[2];
      this.count = 1;

      let loader = this.loadingController.create({
        content: "Please Wait..."
      });
      loader.present();

      let postParams = {

        year: selectyear,
        login_id: this.login_id,
        role_id : this.role_id,
        house_id : this.house_id

      };
      var headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers });

      return this.http.post('https://www.lebutility.com/api/getHouseDetailById', postParams, options)
        .map(res => res.json())
        .subscribe(data => {


            this.client_id =  data.response.house_detail[0].client_id;
            this.client_name =  data.response.house_detail[0].client_name;
            this.houseid =  data.response.house_detail[0].house_id;
            this.address =  data.response.house_detail[0].address;
            this.city =  data.response.house_detail[0].city;
            this.zone_name =  data.response.house_detail[0].zone_name;

            if(data.response.bill_detail[0] == null){
              
              let toast = this.toastCtrl.create({
                message: "Oops!Data isn't available",
                duration: 3000,
                position: 'bottom'
              });
    
              this.navCtrl.pop();
              toast.onDidDismiss(() => {
    
                
    
              });
    
              toast.present();
              loader.dismiss();
    

            }
            else{

       

            this.bills = [];

            for(let i = 0; i < data.response.bill_detail.length; i++) {
                this.bills.push(data.response.bill_detail[i]);
            }
        

            this.storage.set('MONTH', this.bills);
            this.storage.set('STATUS', this.statuss);
            this.storage.set("ZONE_ID",data.response.house_detail[0].zone_id );
            this.storage.set("CLIENT_ID",data.response.house_detail[0].client_id );
            this.storage.set('ADDRESS', data.response.house_detail[0].address);
            this.storage.set('CLIENT_NAME', data.response.house_detail[0].client_name);
            this.storage.set('CITY', data.response.house_detail[0].city);
            this.storage.set('ZONE_NAME', data.response.house_detail[0].zone_name);
            this.storage.set("BILL_ID",data.response.bill_detail[0].bill_id );
            this.storage.set("UNIT", data.response.bill_detail[0].unit);
            this.storage.set("BILL_MONTH_DATE", data.response.bill_detail[0].bill_month_date);

            this.status = this.statuss;

          loader.dismiss();
        }

        }, error => {

          this.navCtrl.pop();

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
