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

  shareService;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl : ViewController, public modalCtrl : ModalController,
              shareService: SharedService) {
    
    this.modalHeader = this.navParams.get('header');
    this.modalBody = this.navParams.get('body');
    this.modalType = this.navParams.get('type');

    this.shareService = shareService;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationModalPage');
  }

  closeModal(){
  
    this.shareService.setVal(true, true, 'cancel');
    this.viewCtrl.dismiss();
  }

  cancelModal(){
  
    this.shareService.setVal(true, true, 'cancel');
    this.viewCtrl.dismiss();
  }

  confirmClick() {

    this.viewCtrl.dismiss();
    this.shareService.setVal(false, false, this.modalType);

    //this.newMessage();
    //this.sendMessage();
    // var data = {GMPType: this.modalType}
    // var modalPage = this.modalCtrl.create('VisitorPassModalPage', data); 
    // modalPage.present();

    

    // //isSubmitDisabled = true;
    // modalPage.onDidDismiss((data) => {
    
    //   console.log("I have dismissed.");
    // });

    // modalPage.onWillDismiss((data) => {
    
    //   console.log("I'm about to dismiss");
    // });
  }
}
