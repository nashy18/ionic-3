import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the VisitorPassModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitor-pass-modal',
  templateUrl: 'visitor-pass-modal.html',
})
export class VisitorPassModalPage {

  GMPType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,
              public alertCtrl: AlertController) {
      
    //this.GMPType = this.navParams.get('GMPType');

    if(this.navParams.get('GMPType') == 'agree') {
      this.GMPType = "Yes";
    } else {
      this.GMPType = "No";
    }
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad VisitorPassModalPage');
  }

  closeModal(){
  
    this.viewCtrl.dismiss();
  }

  cancelPrint() {

    this.viewCtrl.dismiss();
  }

  printVisitorPass() {

    this.viewCtrl.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Print Successfully Completed!',
      subTitle: '<strong>Please collect your visitor pass.</strong>',
      buttons: ['Ok']
    });
     alert.present();
  }
}
