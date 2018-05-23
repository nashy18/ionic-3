import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Http } from '@angular/http';
import { EntryServiceProvider } from '../../providers/entry-service/entry-service';



import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})

export class SignInPage {

  private rootApi: string = "http://localhost:1337";

  entryForm: FormGroup;

  // firstName: AbstractControl;
  // lastName: AbstractControl;
  // emailAddress: AbstractControl;
  // companyName: AbstractControl;
  // phone: AbstractControl;
  // departmentOfPerson: AbstractControl;
  // nameOfPerson: AbstractControl;
  // purposeVisit: AbstractControl;
  // controlledAreaOption: AbstractControl;
  
  // selectedDepartmentOfPerson: string;
  // selectedNameOfPerson: string;
  // selectedVisitPurpose: string;
  // selectedVisitingArea: string;

  visitingArea = [];
  purposeVisitedArray = [];
  nameOfPersonArray = [];
  nameOfDepartmentArray = [];
  
  data = { firstName:'', lastName:'', phone:'', email:'' , company:'', department:'', personToBeVisit:'', purpose:'', controlledArea:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,
                private formBuilder: FormBuilder, public alertCtrl: AlertController,
              public entryServicePrider: EntryServiceProvider, private http: Http) {

      // this.entryForm = this.formBuilder.group({
      //   'firstName': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      //   'lastName': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      //   'emailAddress': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      //   'companyName': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      //   'phone': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      //   'departmentOfPerson': ['', Validators.required],
      //   'nameOfPerson': ['', Validators.required],
      //   'purposeVisit': ['', Validators.required],
      //   'controlledAreaOption': ['', Validators.required]
      // });

      // this.firstName = this.entryForm.controls['firstName'];
      // this.lastName = this.entryForm.controls['lastName'];
      // this.emailAddress = this.entryForm.controls['emailAddress'];
      // this.companyName = this.entryForm.controls['companyName'];
      // this.phone = this.entryForm.contains['phone'];
      // this.departmentOfPerson = this.entryForm['departmentOfPerson'];
      // this.nameOfPerson = this.entryForm['nameOfPerson'];
      // this.purposeVisit = this.entryForm['purposeVisit'];
      // this.controlledAreaOption = this.entryForm['controlledAreaOption'];

      this.nameOfDepartmentArray = ["Finance", "HR", "Recruitment", "Testing", "UX", "Development"];
      this.nameOfPersonArray = ["Raj", "Avinash", "Mahesh", "Sean", "Luna", "Kathie"];
      this.purposeVisitedArray = ["Interview","Bank Work", "Personal", "Delivary"];
      this.visitingArea = ["yes","No"];
      
  }

  validate(): boolean {

    console.log("Validating!");
    if(this.entryForm.valid) {
      return true;
    }

    let errMsg = "<ul>";
    let showAlert = false;
    // validate each field
    let firstName = this.entryForm.controls['firstName'];
    if(!firstName.valid) {
      if(firstName['errors'].required) {

        showAlert = true;
        errMsg = errMsg+ "<li>First Name is missing.</li>";
      }
    }
    
    let lastName = this.entryForm.controls['lastName'];
    if(!lastName.valid) {
      if(lastName['errors'].required) {

        showAlert = true;
        errMsg = errMsg +"<br><li>Last Name is missing.</li>";
      }
    }

    let emailAddress = this.entryForm.controls['emailAddress'];
    if(!emailAddress.valid) {
      if(emailAddress['errors'].required) {

        showAlert = true;
        errMsg = errMsg + "<br><li text-left>Email Address is missing.</li>";
      }
    }

    let companyName = this.entryForm.controls['companyName'];
    if(!companyName.valid) {
      if(companyName['errors'].required) {

        showAlert = true;
        errMsg = errMsg + "<br><li>Company Name is missing.</li>";
      }
    }
    
    let phone = this.entryForm.controls['phone'];
    if(!phone.valid) {
      if(phone['errors'].required) {

        showAlert = true;
        errMsg = errMsg + "<br><li>Phone is missing.</li>";
      }
    }

    let departmentOfPerson = this.entryForm.controls['departmentOfPerson'];
    if(!departmentOfPerson.valid) {
      if(departmentOfPerson['errors'].required) {

        showAlert = true;
        errMsg = errMsg + "<br><li>Please select Department of tye person to be visited.</li>";
      }
    }

    let nameOfPerson = this.entryForm.controls['nameOfPerson'];
    if(!nameOfPerson.valid) {
      if(nameOfPerson['errors'].required) {

        showAlert = true;
        errMsg = errMsg + "<br><li>Please select name of the person.</li>";
      }
    }

    let purposeVisit = this.entryForm.controls['purposeVisit'];
    if(!purposeVisit.valid) {
      if(purposeVisit['errors'].required) {

        showAlert = true;
        errMsg = errMsg + "<br><li>Please select purpose of visit.</li>";
      }
    }

    let controlledAreaOption = this.entryForm.controls['controlledAreaOption'];
    if(!purposeVisit.valid) {
      if(controlledAreaOption['errors'].required) {

        showAlert = true;
        errMsg = errMsg + "<br><li>Please select are you visiting GML controlled area.</li>";
      }
    }

    errMsg = errMsg + "</ul>"

    if(showAlert) {
      let alert = this.alertCtrl.create({
        //title: 'New Friend!',
        subTitle: errMsg,
        cssClass:".alert-ios .alert-head {text-align: start !important ;padding: 12px 16px 7px;}",
        buttons: ['OK']
      });
      alert.present();
    }
    
}

  submit(): void {
    // if(this.validate()) {
    //   //process
    // }

    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  private results;

  doGet() {debugger
    
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




}
