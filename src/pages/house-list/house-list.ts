import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as $ from "jquery";
import { HouseBillPage } from '../house-bill/house-bill';
/**
 * Generated class for the HouseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-house-list',
  templateUrl: 'house-list.html',
})
export class HouseListPage {

  i: any;
  client_id: any;
  list: any;

  hide_label: boolean = false;
  hide_searchbar: boolean = true;

  house_array: any = [];
  searchTerm: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController,
    public http: Http, private toastCtrl: ToastController, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HouseListPage');

    Promise.all([this.storage.get('CLIENT_ID')])
      .then(val => {

        this.client_id = val[0];


        let loader = this.loadingController.create({
          content: "Please Wait..."
        });
        loader.present();

        this.http.get('https://www.lebutility.com/api/getHouseByClientId/' + this.client_id)
          .map(res => res.json()).subscribe(data => {

            this.list = data;

            var length = this.list.response.length;


            this.house_array = [];

            for (let i = 0; i < length; i++) {
              this.house_array.push({id: this.list.response[i].id});
            }

            if (this.list.response == 0) {
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

  // filterItems(searchTerm) {

  //   console.log(searchTerm);
  //   return this.house_array.filter((item) => {
  //     return item.id.to().indexOf(searchTerm.toLowerCase()) > -1;
  //   })
  // }


  // setFilteredItems() {
  //   this.house_array = this.filterItems(this.searchTerm);
  // }

  House_click(clients_house, i) {

    $(".back_white").removeClass("back_grey");
    $("#house_" + i).addClass('back_grey');

    console.log("Houseid", clients_house.id);



    this.storage.set("HOUSE_ID", clients_house.id);

    const animationsOptions = {
      animation: 'ios-transition',
      duration: 1000
    }

    this.navCtrl.push(HouseBillPage, {}, animationsOptions);
  }

}
