import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {SharedService} from '../../service/shared.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms-and-conditions',
  templateUrl: 'terms-and-conditions.html'
})
export class TermsAndConditionsPage {

  @ViewChild(SignaturePad) public signaturePad : SignaturePad;
  
  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  @ViewChild(Content) content: Content;

  modalHeader: string;
  modalBody: string;
  modalType: string;

  agreeDefaultButtonBGColor: string = '#0000';
  disagreeDefaultButtonBGColor: string = '#0000';
  agreeBttnText: string = '#30d05f';
  disagreeBttnText: string = '#e93a3a'; 

  isSubmitDisabled:boolean = true;
  isSignatureBoxHidden: boolean = false;
  isAgreeDisabled: boolean = false;
  isDisagreeDisabled: boolean = false;

  policy = "Nature’s Touch grants you a revocable, non-exclusive, non-transferable, non-sublicensable, limited right to Use the Site, subject to the present Terms and Conditions. Anything in the Site may be subject to other intellectual property rights reserved by Nature’s Touch or any other party. Nothing contained herein shall be construed as conferring by implication, estoppel or otherwise any license or right under any patent or trademark of Nature’s Touch or any other party. Except as provided above, nothing contained herein shall be construed as conferring any license or right under any Nature’s Touch or any other party copyright. Nothing contained on the Site should be construed as granting any license or right to use any trademark displayed on the Site without the written permission of Nature’s Touch or such third party that may own the trademarks. You acknowledge that Nature’s Touch does not have an obligation to monitor any Content, accessible through the Site. However, you agree that Nature’s Touch has the right to monitor the Site from time to time and to disclose any information as necessary or required to comply with applicable laws, regulations or administrative or governmental or judicial requests, to operate the Site properly, to ensure the enforcement of and the compliance with the Terms and Conditions. The Site may contain some Content such as health related information, which is provided for educational purposes only and should not be interpreted as a recommendation for a specific treatment plan, product or course of action. Use of the Site and of this type of Content does not constitute medical advice and does not replace consultations with a qualified medical or other relevant professional. Some of the Content so provided may even be outdated. Nature’s Touch shall not, directly or indirectly, in any way be responsible for any loss or damage of any kind incurred as a result of, or in connection with your Use of the Site or reliance on, any such Content. By posting any Content on the Site, you agree to grant Nature’s Touch a royalty-free, world-wide license to use, copy, adapt, transmit, disclose and distribute your Content. This Site, including without limitation all Content, is protected by Canadian and worldwide copyrights laws and treaty provisions. Any unauthorized copying, redistribution, reproduction or modification of the Content by any person may be a violation of trade-mark and/or copyright laws and could result in legal action. You agree to comply with all applicable copyright laws.";
  disclaimer = "Nature’s Touch take no responsibility for the accuracy, validity or suitability for any purpose of the Site and of any Content contained therein, which are all provided on an “as IS” basis, without warranty of any kind, expressed or implied including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. By using this Site, you agree that your access to the Site and / or use of its contents is at your own risk. Nature’s Touch, its employees, directors, officers, agents and/or affiliates, as well as any other party involved in the creation or delivery of the Site, will not, in any event, at any time, be held responsible for any damages whatsoever, including direct, incidental, special, consequential, indirect and punitive damages or injury arising from visitor access and/or Use or inability to Use this Site or any Content and information contained and/or provided therein whether generally set out in this Site or specifically in response to visitors";
  
  shareService;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl : ViewController, public modalCtrl : ModalController) {
   
      this.modalHeader = this.navParams.get('header');
      this.modalBody = this.navParams.get('body');
      this.modalType = this.navParams.get('type');
  }
  
  signature = '';
  
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad TermsAndConditionsPage');
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.signaturePad.clear();
  }
 
  drawComplete() {
    console.log("Draw completed");
  }
 
  drawStart() {
    console.log("drawStart");
  }
 
  clearPad() {
    console.log("Signature pad is cleared");
    this.signaturePad.clear();
  }
  openAgreeModal() {

    this.agreeDefaultButtonBGColor = '#30d05f';
    this.agreeBttnText= '#ffffff';

    var data = { header: 'Confirmation', body : 'Please wait, your contact has been notified to receive you shortly. Please collect your visitor pass from the printer.', type: 'agree' };
    var modalPage = this.modalCtrl.create('ConfirmationModalPage', data); 
    modalPage.present();

    modalPage.onDidDismiss((obj) => {
      console.log("I have dismissed." + obj);
      
      if(obj.status == 'confirmed') {

        this.isSubmitDisabled = false; //used to enable submit button after click agree button on modal
        //this.isSignatureBoxHidden = false; //used to enable signature box after click agree button on modal
      
        // Changing the button background-color & text color on agree button click.
        this.agreeDefaultButtonBGColor = '#30d05f';
        this.agreeBttnText= '#ffffff';
        // If click on agree then removing highlight from disagree button
        this.disagreeDefaultButtonBGColor = "#0000";
        this.disagreeBttnText = '#e93a3a';
      } else {

        this.isSubmitDisabled = true; //used to disable submit button after click cancel button on modal
        //this.isSignatureBoxHidden = true; //used to disable signature box after click cancel button on modal
      
        // Changing the button background-color & text color on cancel button click.
        this.agreeDefaultButtonBGColor = '#0000';
        this.agreeBttnText= '#30d05f';
      }
    });

    modalPage.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });

  }

  openDisagreeModal() {

    this.disagreeDefaultButtonBGColor = "#e93a3a";
    this.disagreeBttnText = '#ffffff';
    
    var data = { header: 'Confirmation', body : 'Please note your access will be restricted to non-GMP compliant areas only.', type: 'disagree' };
    var modalPage = this.modalCtrl.create('ConfirmationModalPage', data); 
    modalPage.present();

    modalPage.onDidDismiss((obj) => {
      console.log("I have dismissed."+obj);
      
      if(obj.status == 'confirmed') {

        this.isSubmitDisabled = false; //used to enable submit button after click agree button on modal
        //this.isSignatureBoxHidden = false; //used to enable signature box after click agree button on modal

        // Changing the button background-color & text color on Disagree button click.
        this.disagreeDefaultButtonBGColor = "#e93a3a";
        this.disagreeBttnText = '#ffffff';

        // If click on disagree removing highlight from agree button
        this.agreeDefaultButtonBGColor = '#0000';
        this.agreeBttnText= '#30d05f';
      } else {

        this.isSubmitDisabled = true; //used to disable submit button after click cancel button on modal
        //this.isSignatureBoxHidden = true; //used to disable signature box after click cancel button on modal
        
        // Changing the button background-color & text color on Disagree button click.
        this.disagreeDefaultButtonBGColor = "#0000";
        this.disagreeBttnText = '#e93a3a';
      }
    });

    modalPage.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });
  }

  submit() {

    this.viewCtrl.dismiss();
    
    this.signature = this.signaturePad.toDataURL();
    console.log("Signature: "+this.signature);
    this.signaturePad.clear();

    var data = {GMPType: this.modalType}
    var modalPage = this.modalCtrl.create('VisitorPassModalPage', data); 
    modalPage.present();

    modalPage.onDidDismiss((data) => {
    
      console.log("I have dismissed.");
    });

    modalPage.onWillDismiss((data) => {
    
      console.log("I'm about to dismiss");
    });
  }
  scrollToTop() {
    this.content.scrollToTop();
  }
}
