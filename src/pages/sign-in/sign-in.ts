import { Component,ErrorHandler, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { EntryServiceProvider } from '../../providers/entry-service/entry-service';
import 'rxjs/add/operator/toPromise';
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

  private rootApi: string = "http://localhost:1337";

  signInForm: FormGroup;

  firstName: AbstractControl;
  lastName: AbstractControl;
  email: AbstractControl;
  company: AbstractControl;
  phone: AbstractControl;
  department: AbstractControl;
  nameOfPerson: AbstractControl;
  purpose: AbstractControl;
  controlledArea: AbstractControl;
  
  visitingArea = [];
  purposeVisitedArray = [];
  nameOfPersonArray = [];
  nameOfDepartmentArray = [];
  
  data = { firstName:'', lastName:'', phone:'', email:'' , company:'', department:'', personToBeVisit:'', purpose:'', controlledArea:''};
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder, public alertCtrl: AlertController,
              public entryServicePrider: EntryServiceProvider, private http: Http) {

       this.signInForm = formBuilder.group({
         'firstName': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)])],
         'lastName': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)])],
         'email': ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
         'company': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
         'phone': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])],
         'department': ['', Validators.required],
         'nameOfPerson': ['', Validators.required],
         'purpose': ['', Validators.required],
         'controlledArea': ['', Validators.required]
       });

      // Initializing Drop Down
      this.nameOfDepartmentArray = ["Finance", "HR", "Recruitment", "Testing", "UX", "Development"];
      this.nameOfPersonArray = ["Raj", "Avinash", "Mahesh", "Sean", "Luna", "Kathie"];
      this.purposeVisitedArray = ["Interview","Bank Work", "Personal", "Delivary"];
      this.visitingArea = ["Yes","No"];
      
  }

  onSubmit(value: any): void {
    if(this.signInForm.valid) {

      console.log("Sign in Form is valid");
      console.log(this.data);
      this.navCtrl.push(TermsAndConditionsPage);		
    } else {

      console.log("Sign in Form is invalid");
    }
    
  }

  resetForm() {		
    this.data = { firstName:'', lastName:'', phone:'', email:'' , company:'', department:'', personToBeVisit:'', purpose:'', controlledArea:''};		
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SignInPage');
  }

  private results;

  doGet() {
    
    console.log("DO GET");
    this.entryServicePrider.getCity(this.rootApi).subscribe(data => {

      this.results = data;
    });
  }

  doPost() {
    console.log("DO POST");
  }

  doPut() {
    console.log("DO PUT");
  }

  doDelete() {
    console.log("DO DELETE");
  }

  onChangeEvent() {
    console.log("Drop down Change event occured");
  }

  onCancelEvent() {
    console.log("Drop down Cancel event occured");
  }

  

  //   validate(): boolean {

  //     console.log("Validating!");
  //     if(this.signInForm.valid) {
  //       return true;
  //     }

  //     let errMsg = "<ul>";
  //     let showAlert = false;
  //     // validate each field
  //     let firstName = this.signInForm.controls['firstName'];
  //     if(!firstName.valid) {
  //       if(firstName['errors'].required) {

  //         showAlert = true;
  //         errMsg = errMsg+ "<li>First Name is missing.</li>";
  //       }
  //     }
      
  //     let lastName = this.signInForm.controls['lastName'];
  //     if(!lastName.valid) {
  //       if(lastName['errors'].required) {

  //         showAlert = true;
  //         errMsg = errMsg +"<br><li>Last Name is missing.</li>";
  //       }
  //     }

  //     let emailAddress = this.signInForm.controls['emailAddress'];
  //     if(!emailAddress.valid) {
  //       if(emailAddress['errors'].required) {

  //         showAlert = true;
  //         errMsg = errMsg + "<br><li text-left>Email Address is missing.</li>";
  //       }
  //     }

  //     let companyName = this.signInForm.controls['companyName'];
  //     if(!companyName.valid) {
  //       if(companyName['errors'].required) {

  //         showAlert = true;
  //         errMsg = errMsg + "<br><li>Company Name is missing.</li>";
  //       }
  //     }
      
  //     let phone = this.signInForm.controls['phone'];
  //     if(!phone.valid) {
  //       if(phone['errors'].required) {

  //         showAlert = true;
  //         errMsg = errMsg + "<br><li>Phone is missing.</li>";
  //       }
  //     }

  //     let departmentOfPerson = this.signInForm.controls['departmentOfPerson'];
  //     if(!departmentOfPerson.valid) {
  //       if(departmentOfPerson['errors'].required) {

  //         showAlert = true;
  //         errMsg = errMsg + "<br><li>Please select Department of tye person to be visited.</li>";
  //       }
  //     }

  //     let nameOfPerson = this.signInForm.controls['nameOfPerson'];
  //     if(!nameOfPerson.valid) {
  //       if(nameOfPerson['errors'].required) {

  //         showAlert = true;
  //         errMsg = errMsg + "<br><li>Please select name of the person.</li>";
  //       }
  //     }

  //     let purposeVisit = this.signInForm.controls['purposeVisit'];
  //     if(!purposeVisit.valid) {
  //       if(purposeVisit['errors'].required) {

  //         showAlert = true;
  //         errMsg = errMsg + "<br><li>Please select purpose of visit.</li>";
  //       }
  //     }

  //     let controlledAreaOption = this.signInForm.controls['controlledAreaOption'];
  //     if(!purposeVisit.valid) {
  //       if(controlledAreaOption['errors'].required) {

  //         showAlert = true;
  //         errMsg = errMsg + "<br><li>Please select are you visiting GML controlled area.</li>";
  //       }
  //     }

  //     errMsg = errMsg + "</ul>"

  //     if(showAlert) {
  //       let alert = this.alertCtrl.create({
  //         //title: 'New Friend!',
  //         subTitle: errMsg,
  //         cssClass:".alert-ios .alert-head {text-align: start !important ;padding: 12px 16px 7px;}",
  //         buttons: ['OK']
  //       });
  //       alert.present();
  //     }
      
  // }
}
