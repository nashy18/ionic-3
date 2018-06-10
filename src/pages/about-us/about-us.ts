import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Global } from "../../providers/config/contsants";
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
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
    footer: 'yes'
  }

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }

  ionViewDidLoad() {
    //https://www.techiediaries.com/inappbrowser-ionic-v3/
    this.openWithCordovaBrowser(Global.AboutUsURL);
  }

  exitAboutPage() {
    console.log('on clicked of exit()');
    this.navCtrl.push(HomePage);
  }

  openWithSystemBrowser(url: string) {
    let target = "_system";
    this.iab.create(url, target, this.options);
  }
  openWithInAppBrowser(url: string) {
    let target = "_blank";
    this.iab.create(url, target, this.options);
  }
  openWithCordovaBrowser(url: string) {
    let target = "_self";
    this.iab.create(url, target, this.options);
  }

}



