import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { HomePage } from '../home/home';

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
 // users: Array<object>;
  users = [
    { id: 101, name: 'Avinash kumar' },
    { id: 102, name: 'Mahesh Devda' },
    { id: 103, name: 'Raj Ali' }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignOutPage');
  }

  reset() {
    console.log('on clicked of reset()');
   
  }

  submit() {
    console.log('on clicked of submit()');
    this.navCtrl.push(HomePage);
  }

  userSelectChange(event: { component: SelectSearchableComponent, value: any }) {
    console.log('User Name:', event.value);
  }
}
