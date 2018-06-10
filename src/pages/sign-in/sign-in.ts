import { Component, ErrorHandler, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { MyApp } from '../../app/app.component';
import {TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions'

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * @author: MaheshDe
 * @since: 11/05/2018
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})

export class SignInPage {
  submitAttempt: boolean = false;
  signInForm : FormGroup;
  
  firstName: AbstractControl;
  lastName: AbstractControl;
  phone: AbstractControl;
  email: AbstractControl;
  company: AbstractControl;  
  department: AbstractControl;
  nameOfPerson: AbstractControl;
  purpose: AbstractControl;
  controlledArea: AbstractControl;
  
  nameOfDepartmentList = [];
  nameOfPersonList = [];
  purposeVisitedList = [];
  visitingAreaList = [];

  phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  data = { firstName:'', lastName:'', phone:'', email:'' , company:'', department:'', nameOfPerson:'', purpose:'', controlledArea:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public alertCtrl: AlertController,
              private http: Http) {
          this.signInForm = fb.group({
            firstName : ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)])],     
            lastName : ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)])],  
            phone : ['', Validators.compose([Validators.required, Validators.pattern(this.phonePattern)])],
            email : ['', Validators.compose([Validators.pattern(/^[a-z0-9!#$%&'+\/=?^_`{|}~.-]+@\w+([\.-]?\w+)?(\.\w{2,4})+$/i), Validators.required])], 
            company : ['', Validators.required],  
            department : ['', Validators.required], 
            nameOfPerson : ['', Validators.required],
            purpose : ['', Validators.required],
            controlledArea : ['', Validators.required],

        });  

        // Initializing Drop Down
        this.nameOfDepartmentList = [
          { id: 101, name: 'Finance'},
          { id: 102, name: 'Recruitment'},
          { id: 103, name: 'Administration'},
          { id: 104, name: 'Sales'},
          { id: 105, name: 'Development'}
        ];

        this.nameOfPersonList = [
          { id: 101, name: 'Alex'},
          { id: 102, name: 'John'},
          { id: 103, name: 'Martin'},
          { id: 104, name: 'Sofia'},
          { id: 105, name: 'Gustavo'},
          { id: 106, name: 'Kathie'}
        ];

        this.purposeVisitedList = [
          { id: 101, name: 'Interview'},
          { id: 102, name: 'Bank Work'},
          { id: 103, name: 'Personal'},
          { id: 104, name: 'Delivery'}
        ];

        this.visitingAreaList = [
          { id: 101, name: 'Yes' },
          { id: 102, name: 'No' }
        ];     
        
  }

  resetForm(){
    this.data = { firstName:'', lastName:'', phone:'', email:'' , company:'', department:'', nameOfPerson:'', purpose:'', controlledArea:''};
  }

  onSubmit(value: any): void {
    this.submitAttempt=true;
    if(this.signInForm.valid) {
      this.navCtrl.push(TermsAndConditionsPage);		
    } else {
      console.log("Sign in Form is invalid");
    }    
  }

  onChangeEvent() {
    console.log("Drop down Change event occured");
  }

  onCancelEvent() {
    console.log("Drop down Cancel event occured");
  }

  userSelectChange(event: { component: SelectSearchableComponent, value: any }) {
    console.log('DropDown Value:', event.value);
  }

  nextPage(){
    console.log("<<<<< nextPage >>>>>");
    if( this.signInForm.valid){
      console.log("<<<<< valid Data >>>>>");
    } else{
      console.log("<<<<< Invalid Data >>>>>");
    } 
  } 
}
