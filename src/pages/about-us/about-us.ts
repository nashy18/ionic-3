import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  constructor(public navCtrl: NavController) {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }
  
  exitAboutPage() {
    console.log('on clicked of exit()');
    this.navCtrl.push(HomePage);
  }

}



