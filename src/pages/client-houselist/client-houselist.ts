import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as $ from "jquery";
import { HouseBillPage } from '../house-bill/house-bill';
import { LoginPage } from '../login/login';
import { ClientHousebillPage } from '../client-housebill/client-housebill';

/**
 * Generated class for the ClientHouselistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-houselist',
  templateUrl: 'client-houselist.html',
})
export class ClientHouselistPage {

  i : any ;
  client_id : any;
  list : any;
  role_id : any;

  hide_label: boolean = false;
  hide_searchbar : boolean = true;

  hide_logout : boolean = false;

  submitted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController,
    public http: Http, private toastCtrl: ToastController, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientHouselistPage');

    // this.client_id = this.navParams.get('COLLECTOR_ID');

    console.log("coll",this.client_id);

    Promise.all([this.storage.get('COLLECTOR_ID')])
    .then(val => {

      this.client_id = val[0];
     

      let loader = this.loadingController.create({
        content: "Please Wait..."
      });
      loader.present();

      this.http.get('https://www.lebutility.com/api/getHouseByClientId/' + this.client_id)
        .map(res => res.json()).subscribe(data => {

          this.list = data;

          console.log(this.list.response);

          if(this.list.response == 0){
            this.hide_label = true;
            this.hide_searchbar = false;
          }


          this.i++;


        }
          ,
          err => console.warn(err),
          () => {

            loader.dismiss()

          });

    });

  }

  House_click(clients_house,i){

    $(".back_white").removeClass("back_grey");
      $("#house_"+i).addClass('back_grey');

      console.log("Houseid", clients_house.id);


      
      this.storage.set("HOUSE_ID",clients_house.id);

      const animationsOptions = {
        animation: 'ios-transition',
        duration: 1000
      }

      this.navCtrl.push(ClientHousebillPage , {} , animationsOptions);
  }

  Logout() {

    this.submitted = false;
    this.storage.set('isLoggedIn', this.submitted);

    this.navCtrl.push(LoginPage);
  }

}
