import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { HouseListPage } from '../pages/house-list/house-list';
import { ClientHouselistPage } from '../pages/client-houselist/client-houselist';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any;

  isLoggedIn: boolean;
  loggedIn: boolean;

  role_id : any;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      

      this.storage.get('isLoggedIn').then((isLoggedIn) => {
        console.log('Is Logged in : ', isLoggedIn);

        Promise.all([this.storage.get('Role_ID')])
      .then(val => {

        this.role_id = val[0];

        if(this.role_id == "4"){

          this.rootPage = isLoggedIn ? ClientHouselistPage : LoginPage;
        }
        else{

        this.rootPage = isLoggedIn ? DashboardPage : LoginPage;

      }
        // this.loggedIn = isLoggedIn;
        // if(!this.loggedIn){
        //   this.rootPage = LoginPage;
        // }else if(this.loggedIn) {
        //   this.rootPage = DashboardPage;
        // }

      });

    });

    });
  }
}

