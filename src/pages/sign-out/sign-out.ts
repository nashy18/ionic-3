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
    } else {
      console.log("Sign out Form is invalid");
    }
       
  }

  userSelectChange(event: { component: SelectSearchableComponent, value: any }) {
    console.log('User Name:', event.value);
  }

  showMsg() {
    let alert = this.alertCtrl.create({
      title: 'Signed Out',
      subTitle: 'Successfully Signed Out.<br/>See You Soon.!',
      buttons: ['Ok']
    });
    alert.present();
  }

  getAllVisitors() {debugger

    const requestData = {};
    requestData["action"] = APIActions.getAllVisitors;

    try {
      this.httpServiceProvider.get(requestData).subscribe((response: any) => {debugger
        console.log(response.data);
        var list = response.data;
        for (var i = 0; i < list.length; i++) {debugger

          list[i]["fullName"] = list[i].firstName + ' ' + list[i].lastName;
        }
        this.users = list;
      }, err => {
        console.log(err);
      });
    } catch(error) {
      console.log(error);
    }
  }
}
