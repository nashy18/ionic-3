import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';
import { SignInPage } from '../sign-in/sign-in';

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

  video: any = {
    url: 'https://www.youtube.com/watch?v=tqKpk1wABuI'
  };

  constructor(public navCtrl: NavController) {
    
  }
  
  openAboutUsPage() {

    this.navCtrl.push(AboutUsPage);
  }

  openSignInPage() {

    this.navCtrl.push(SignInPage);
  }
}
