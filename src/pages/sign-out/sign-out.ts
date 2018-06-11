import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Global,APIActions,Enums  } from '../../providers/config/contsants';

/**
 * Generated class for the SignOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-sign-out',
  templateUrl: 'sign-out.html'
})
export class SignOutPage { 
  selectedVisitor: any;
  signOutForm: FormGroup;
  UserList: AbstractControl;
  data = { UserList:''};

  users = [
    { id: 101, name: 'Avinash kumar' },
    { id: 102, name: 'Mahesh Devda' },
    { id: 103, name: 'Raj Ali' }
  ];  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private formBuilder: FormBuilder, private alertCtrl: AlertController,
              private httpServiceProvider: HttpServiceProvider) {
    this.signOutForm = formBuilder.group({
      'UserList': ['', Validators.required]
    }); 
  }

  ionViewDidLoad() {
    this.getAllVisitors();
    console.log('ionViewDidLoad SignOutPage');
  }

  resetForm() {
    console.log('on clicked of reset()');
    this.data = { UserList:''};
  }

  onSubmit(value: any): void {

    if(this.signOutForm.valid) {
      console.log("Sign out Form is valid");
      console.log(this.data);
      this.showMsg();
      this.navCtrl.push(HomePage);
      //call function to update visitor signout status
      this.updateVisitorLog(this.selectedVisitor);
    } else {
      console.log("Sign out Form is invalid");
    }
       
  }

  userSelectChange(event: { component: SelectSearchableComponent, value: any }) {
    console.log('User Name:', event.value);
    this.selectedVisitor = event.value;
  }

  showMsg() {
    let alert = this.alertCtrl.create({
      title: 'Signed Out',
      subTitle: 'Successfully Signed Out.<br/>See You Soon.!',
      buttons: ['Ok']
    });
    alert.present();
  }

  getAllVisitors() {

    const requestData = {};
    requestData["action"] = APIActions.getAllVisitors;

    try {
      this.httpServiceProvider.get(requestData).subscribe((response: any) => {
        console.log(response.data);
        var list = response.data;
        this.users = [];
        if(list != null && list != undefined) {
          for (var i = 0; i < list.length; i++) {
            if(list[i] && !list[i].isLoggedOut){
              list[i]["fullName"] = list[i].firstName + ' ' + list[i].lastName;
              this.users.push(list[i]);
            }
          }
        }
      }, err => {
        console.log(err);
      });
    } catch(error) {
      console.log(error);
    }
  }

  updateVisitorLog(input) {
    try {
      if(!input) return alert("Please select the user");
      const requestData = {};
      requestData["action"] = APIActions.updateVisitor + "/" + input.id;
      requestData["body"] = {
        "isLoggedOut" : true,
        "dateModified" : Date.now()
      }
      this.httpServiceProvider.patch(requestData).subscribe((response: any) => {
        console.log(response.data);
      }, err => {
        console.log(err);
      });
    } catch(error) {
      console.log(error);
    }
  }
}
