import { Component } from '@angular/core';
import { Platform, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HomePage } from '../pages/home/home';
import { AuthenticationPage } from '../pages/authentication/authentication';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AuthenticationPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public events: Events, public toastController: ToastController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    events.subscribe('toastr', (msg) => {
      this.presentToast(msg);
    });
  }

  presentToast(msg) {
    let toast = this.toastController.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}

