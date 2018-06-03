import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the ConfirmationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-modal',
  templateUrl: 'confirmation-modal.html',
})
export class ConfirmationModalPage {

  modalHeader: string;
  modalBody: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl : ViewController, public modalCtrl : ModalController) {
    
    this.modalHeader = this.navParams.get('header');
    this.modalBody = this.navParams.get('body');

    console.log("Header: "+ this.modalHeader);
    console.log("Header: "+ this.modalBody);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationModalPage');
    console.log("Header: "+this.navParams.get('header'));
    console.log("Header: "+this.navParams.get('body'));
    
  }

  closeModal(){
  
    this.viewCtrl.dismiss();
  }

  cancelModal(){
  
    this.viewCtrl.dismiss();
  }

  confirmClick() {

    this.viewCtrl.dismiss();

    var modalPage = this.modalCtrl.create('VisitorPassModalPage'); 
    modalPage.present();

    modalPage.onDidDismiss((data) => {
    
      console.log("I have dismissed.");
    });

    modalPage.onWillDismiss((data) => {
    
      console.log("I'm about to dismiss");
    });
  }
}
