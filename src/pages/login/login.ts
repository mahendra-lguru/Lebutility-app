import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ClientHouselistPage } from '../client-houselist/client-houselist';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  errors: string;

  submitted: boolean = false;

  isLoggedIn: boolean;
  loggedIn: boolean;

  role_id : any;

  constructor(public navCtrl: NavController, public http: Http, public loadingController: LoadingController,
    private toastCtrl: ToastController, public storage: Storage,platform: Platform) {

      platform.registerBackButtonAction(() => {
        platform.exitApp();
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Signin() {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.email == null) {
      let toast = this.toastCtrl.create({
        message: 'Please enter your email',
        duration: 3000,
        position: 'bottom',

      });

      toast.onDidDismiss(() => {

      });

      toast.present();
    }
    else if (!re.test(this.email)) {

      let toast = this.toastCtrl.create({
        message: 'Email id not valid',
        duration: 3000,
        position: 'bottom',

      });

      toast.onDidDismiss(() => {

      });

      toast.present();

    }

    else if (this.password == null) {
      let toast = this.toastCtrl.create({
        message: 'Please enter your password',
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {

      });

      toast.present();
    }
    else {

      this.submitted = true;

      let loader = this.loadingController.create({
        content: "Please Wait..."
      });
      loader.present();

      let postParams = {

        email: this.email,
        password: this.password

      };
      var headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers });

      return this.http.post('https://www.lebutility.com/api/login', postParams, options)
        .map(res => res.json())
        .subscribe(data => {

          let toast = this.toastCtrl.create({
            message: data.message,
            duration: 3000,
            position: 'bottom'
          });

          const animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
          }

          this.role_id = data.role_id;

          if(this.role_id == "4"){


            this.storage.set('isLoggedIn', this.submitted);
            this.storage.set('COLLECTOR_ID' , data.response.id);
            this.storage.set('Role_ID',data.role_id);

            this.navCtrl.push(ClientHouselistPage, {
              login: this.submitted
            }, animationsOptions);
          }
          else{

            this.storage.set('isLoggedIn', this.submitted);
            this.storage.set('COLLECTOR_ID' , data.response.id);
            this.storage.set('Role_ID',data.role_id); 
      
          this.navCtrl.push(DashboardPage, {
            login: this.submitted
          }, animationsOptions);

        }
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
    }
  }

}
