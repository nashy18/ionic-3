import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';
import { SignInPage } from '../sign-in/sign-in';
import { SignOutPage } from '../sign-out/sign-out';

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

export class HomePage {
  lang:any;
  video: any = {
    url: 'https://www.youtube.com/watch?v=P_aO2quAPuY'
  };

  constructor(public navCtrl: NavController) {

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
}
