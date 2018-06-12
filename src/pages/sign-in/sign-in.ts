import { Component, ErrorHandler, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { MyApp } from '../../app/app.component';
import {TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions'
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Global,APIActions,Enums  } from '../../providers/config/contsants';
import { HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';



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
              private http: Http, private httpServiceProvider: HttpServiceProvider,private storage: Storage) {
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

        this.visitingAreaList = [
          { id: 101, name: 'Yes' },
          { id: 102, name: 'No' }
        ];     
        
  }

  resetForm(){
    this.data = { firstName:'', lastName:'', phone:'', email:'' , company:'', department:'', nameOfPerson:'', purpose:'', controlledArea:''};
  }

  ionViewDidLoad() {
    this.getDepartentData();
    this.getAllPurposeData();
    console.log('ionViewDidLoad SignInPage');
  }

  onSubmit(value: any): void {

    this.submitAttempt=true;
    if(this.signInForm.valid) {

      try {

        const requestData = {};
        const request = {};
        request["firstName"] = value.firstName;
        request["lastName"] = value.lastName;
        request["email"] = value.email;
        request["mobileNumber"] = value.phone;
        request["companyName"] = value.company;
        request["departmentId"] = value.department.id;
        request["employeeId"] = value.nameOfPerson.id;
        request["visitPurposeId"] = value.purpose.id;
        request["visitingRestrictedAreas"] = (value.controlledArea.name == 'Yes') ? true : false;
        request["companyId"] = Global.companyId;

        requestData["action"] = APIActions.addVisitor;
        requestData["body"] = request;

        this.httpServiceProvider.post(requestData).subscribe((response: any) => {
          console.log("Visitor created Successfully! "+response.data);

          // Save visitor data in local storage
          this.storage.set('visitor', response.data);
          this.navCtrl.push(TermsAndConditionsPage);
        }, err => {
          console.log(err);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Sign in Form is invalid");
    }    
  }

  onChangeEvent(event, selectedValue, type) {
    console.log("Drop down Change event occured"+ selectedValue);

    // List employees belongs to selected department
    if(type =='department') {

      const requestData = {};
      const request = {};
      request["departmentId"] = selectedValue;
      requestData["action"] = APIActions.getEmployeesByDepartment;
      requestData["body"] = request;

      try {
        this.httpServiceProvider.post(requestData).subscribe((response: any) => {
          console.log("Employee Data: "+response.data);
          this.nameOfPersonList = response.data;  
          this.nameOfDepartmentList.forEach((item)=>{
            item.fullName = item.firstName + " " + item.lastName;
          })
        }, err => {
            console.log(err);
          });
        } catch (error) {
          console.log(error);
        }
    }
  }

  onCancelEvent() {
    console.log("Drop down Cancel event occured");
  }

  getDepartentData() {

    const request = {};
    request["action"] = APIActions.getAllDepartmets;
    try {
      this.httpServiceProvider.get(request).subscribe((response: any) => {
        console.log(response.data);
        this.nameOfDepartmentList = response.data;
        }, err => {
          console.log(err);
        });
      } catch (error) {
        console.log(error);
    }
  }

  getAllPurposeData(){

    const requestData = {};
    requestData["action"] = APIActions.getAllPurposes;

    try {
      this.httpServiceProvider.get(requestData).subscribe((response: any) => {
        console.log(response.data);
        this.purposeVisitedList = response.data;
      }, err => {
        console.log(err);
      });
    } catch(error) {
      console.log(error);
    }
  }

  userSelectChange(event: { component: SelectSearchableComponent, value: any }, type) {
    console.log('DropDown Value:', event.value);

    // List employees belongs to selected department
    if(type =='department') {
      this.data.nameOfPerson='';
      const requestData = {};
      const request = {};
      request["departmentId"] = event.value.id;
      requestData["action"] = APIActions.getEmployeesByDepartment;
      requestData["body"] = request;

      try {
        this.httpServiceProvider.post(requestData).subscribe((response: any) => {
          console.log("Employee Data: "+response.data);
          var list = response.data;
          if(list != null && list != undefined) {
            for (var i = 0; i < list.length; i++) {

              list[i]["fullName"] = list[i].firstName + ' ' + list[i].lastName;
            }
          }
          this.nameOfPersonList = list;  
        }, err => {
            console.log(err);
          });
        } catch (error) {
          console.log(error);
        }
    }
  }

}
