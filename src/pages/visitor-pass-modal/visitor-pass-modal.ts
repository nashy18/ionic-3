import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

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
  name: string;
  company: string;
  signInDateTime: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,
              public alertCtrl: AlertController, private storage: Storage) {
      
    //this.GMPType = this.navParams.get('GMPType');

    // if(this.navParams.get('GMPType') == 'agree') {
    //   this.GMPType = "Yes";
    // } else {
    //   this.GMPType = "No";
    // }
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad VisitorPassModalPage');
    this.getVisitorFromLocalStorage();
  }

  getVisitorFromLocalStorage() {

    this.storage.get('visitor').then((obj) => {
    
      this.name = obj.firstName +" "+ obj.lastName;
      this.company = obj.companyName;
      this.GMPType = (obj.visitingRestrictedAreas) ? "Yes" : "No";
      var date = new Date(obj.dateCreated);
      this.signInDateTime = date.toString();
    });
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
