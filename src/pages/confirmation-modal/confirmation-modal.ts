import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Nav, ToastController, Events } from 'ionic-angular';
import { SharedService } from '../../service/shared.service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AuthenticationPage } from '../../pages/authentication/authentication';

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

  @ViewChild(Nav) nav: Nav;
  @ViewChild('myNav') navCtrl: NavController
  
  modalHeader: string;
  modalBody: string;
  modalType: string;
  modalData: any;
  isAdminValidate: boolean;
  shareService;
  
  adminEmail = { email:'' };

  confirmationForm : FormGroup;
  email: AbstractControl;

  constructor(public navParams: NavParams,  private fb: FormBuilder,
            public viewCtrl : ViewController, public modalCtrl : ModalController, public storage: Storage,
            public toastController: ToastController, public events: Events) {
    
    this.modalHeader = this.navParams.get('header');
    this.modalBody = this.navParams.get('body');
    this.modalType = this.navParams.get('type');

    this.confirmationForm = fb.group({
      email : [''], 
    });

    if(this.modalType == "adminLogOut") {

      this.isAdminValidate = true;
    }

    
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

  confirmClick(data) {

    if(data) {

      // validate adming email with the localhost

      this.storage.get('loggedOnUser').then((obj) => {
    
        if(data.email == obj.email) {
          
          this.storage.remove('loggedOnUser');
          this.storage.remove('authToken');
          this.events.publish("toastr", "Successfully Sign Out!");

          this.modalData = {'status':'confirmed'};
          this.viewCtrl.dismiss(this.modalData);
        } else {

          if(this.isAdminValidate) {

            this.viewCtrl.dismiss();
            this.events.publish("toastr", "Email id doesn't match. Please try again!");
          } else {

            this.modalData = {'status':'confirmed'};
            this.viewCtrl.dismiss(this.modalData);
          }
        }
      });
    } else {

      this.modalData = {'status':'confirmed'};
      this.viewCtrl.dismiss(this.modalData);
    }
    
    // modalPage.onDidDismiss((data) => {
    
    //   console.log("I have dismissed.");
    // });

    // modalPage.onWillDismiss((data) => {
    
    //   console.log("I'm about to dismiss");
    // });
  }
}
