import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { SharedService } from '../../service/shared.service';


/**
 * Generated class for the ConfirmationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-modal',
  templateUrl: 'confirmation-modal.html'
})
export class ConfirmationModalPage {

  modalHeader: string;
  modalBody: string;
  modalType: string;
  modalData: any;

  shareService;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl : ViewController, public modalCtrl : ModalController) {
    
    this.modalHeader = this.navParams.get('header');
    this.modalBody = this.navParams.get('body');
    this.modalType = this.navParams.get('type');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationModalPage');
  }

  closeModal(){
  
    this.modalData = {'status':'cancel'};
    this.viewCtrl.dismiss(this.modalData);
  }

  cancelModal(){
  
    this.modalData = {'status':'cancel'};
    this.viewCtrl.dismiss(this.modalData);
  }

  confirmClick() {

    this.modalData = {'status':'confirmed'};
    this.viewCtrl.dismiss(this.modalData);
    
    // modalPage.onDidDismiss((data) => {
    
    //   console.log("I have dismissed.");
    // });

    // modalPage.onWillDismiss((data) => {
    
    //   console.log("I'm about to dismiss");
    // });
  }
}
