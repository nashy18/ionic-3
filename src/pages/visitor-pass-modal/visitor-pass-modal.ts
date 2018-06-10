import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  modalData: any;

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
  
    this.modalData = {'status':'cancel'};
    this.viewCtrl.dismiss(this.modalData);
  }

  cancelPrint() {

    this.modalData = {'status':'cancel'};
    this.viewCtrl.dismiss(this.modalData);
  }

  printVisitorPass() {

    this.modalData = {'status':'confirmed'};
    this.viewCtrl.dismiss(this.modalData);
    //this.navCtrl.push(HomePage);
    
     let alert = this.alertCtrl.create({
       title: 'Please collect your visitor pass.',
       subTitle: '<strong>Thank you for visting natures touch. We wish you a pleasant day.</strong>',
       buttons: [{
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        }]
     });
      alert.present();
  }
}
