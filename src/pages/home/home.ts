import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';
import { SignInPage } from '../sign-in/sign-in';

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
  
  aboutUs() {

    this.navCtrl.push(AboutUsPage);
  }

  signIn() {

    this.navCtrl.push(SignInPage);
  }
}
