import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController,LoadingController, ToastController } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';
import { SignInPage } from '../sign-in/sign-in';
import { SignOutPage } from '../sign-out/sign-out';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Global } from "../../providers/config/contsants";
import { Storage } from '@ionic/storage';
import { DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the Home page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * @author: MaheshDe
 * @since: 11/05/2018
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Pipe({
  name: 'safe'
})

export class HomePage {
  lang:any;

  companyConfigData: any;
  companyLogo;
  companyName;
  companyDescription;
  companyVideo;
  poweredByLogo;

  video: any = {
    url: 'https://www.youtube.com/watch?v=P_aO2quAPuY'
  };

  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser, public storage: Storage,
              public domSanitizer: DomSanitizer, public loadingController: LoadingController,
              public toastController: ToastController) {

    console.log('home ctrl loaded');
    this.getCompanyConfig();
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad Home');
  }

  openAboutUsPage() {

    this.navCtrl.push(AboutUsPage);

  }

  openSignInPage() {

    this.navCtrl.push(SignInPage);
  }

  signOut() {

    this.navCtrl.push(SignOutPage);
  }

  getCompanyConfig() {

    let loading = this.loadingController.create({content : "Loading..."});
    loading.present();

    this.storage.get('companyConfig').then((obj) => {

      loading.dismissAll();

      this.companyName = obj.companyName;
      this.companyDescription = obj.companyDescription.changingThisBreaksApplicationSecurity;
      this.companyLogo = obj.companyLogo.changingThisBreaksApplicationSecurity;
      this.companyVideo = obj.companyVideo.changingThisBreaksApplicationSecurity;
      this.poweredByLogo = obj.poweredByLogo.changingThisBreaksApplicationSecurity;

      console.log("Name: "+this.companyName);
      console.log("Desc: "+this.companyDescription);
      console.log("logo: "+this.companyLogo);
      console.log("video: "+this.companyVideo);
      console.log("poweredbylogo: "+this.poweredByLogo);
      
    });
  }
}
