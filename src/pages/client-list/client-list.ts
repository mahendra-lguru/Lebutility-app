import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HouseListPage } from '../house-list/house-list';
import * as $ from "jquery";

/**
 * Generated class for the ClientListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-list',
  templateUrl: 'client-list.html',
})
export class ClientListPage {

  public list: any;
  role_id : any;
  client_id : any;
  searchTerm: string = '';
  client_array : any = [];

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController,
    public http: Http, private toastCtrl: ToastController, public storage: Storage) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientListPage');
    this.setFilteredItems();

     Promise.all([this.storage.get('Role_ID'),this.storage.get('COLLECTOR_ID')])
      .then(val => {

        this.role_id = val[0];
        this.client_id = val[1];

        let loader = this.loadingController.create({
          content: "Please Wait..."
        });
        loader.present();

        this.http.get('https://www.lebutility.com/api/getClientsById/' + this.role_id + "/" + this.client_id)
        .map(res => res.json()).subscribe(data => {

          this.list = data;
          var length = this.list.response.length;
          this.client_array = [];

         
          for(let i = 0;i  < length; i++){
              this.client_array.push({name: this.list.response[i].name, id: this.list.response[i].id});
          }
          
          
        }
          ,
          err => console.warn(err),
          () => {

            loader.dismiss()

          });

      });
    }

    initializeItems() {
      Promise.all([this.storage.get('Role_ID'),this.storage.get('COLLECTOR_ID')])
      .then(val => {

        this.role_id = val[0];
        this.client_id = val[1];

        let loader = this.loadingController.create({
          content: "Please Wait..."
        });
        loader.present();

        this.http.get('https://www.lebutility.com/api/getClientsById/' + this.role_id + "/" + this.client_id)
        .map(res => res.json()).subscribe(data => {

          this.list = data;
          var length = this.list.response.length;
          this.client_array = [];

         
          for(let i = 0;i  < length; i++){
              this.client_array.push({name: this.list.response[i].name, id: this.list.response[i].id});
          }
          
          
        }
          ,
          err => console.warn(err),
          () => {

            loader.dismiss()

          });

      });
    }

    getItems(ev: any) {
      // Reset items back to all of the items
      
  
      // set val to the value of the searchbar
      const val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.client_array = this.client_array.filter((item) => {
          return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
      else{
        this.initializeItems();
      }
    }

   onCancel(ev) { 
    // Reset the field
    ev.target.value = '';
  }
    
    filterItems(searchTerm){
          return this.client_array.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        })
    }

   
    setFilteredItems() {
      
      this.client_array = this.filterItems(this.searchTerm);
    }

    // onCancel(){

    //   return this.client_array;
      // alert();
      // var length = this.list.response.length;

      // console.log("len",length);

    //   for(let i = 0;i  < length; i++){
    //     this.client_array.push({name: this.list.response[i].name, id: this.list.response[i].id});
    // }
    // }
    

    Client_click(clients,i){

      $(".back_white").removeClass("back_grey");
      $("#client_"+i).addClass('back_grey');
      
      this.storage.set("CLIENT_ID",clients.id);

      console.log("cliid",clients.id);

      const animationsOptions = {
        animation: 'ios-transition',
        duration: 1000
      }

      this.navCtrl.push(HouseListPage , {} , animationsOptions);

    }

    
  
  }


