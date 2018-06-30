import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, Events, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Global,APIActions,Enums  } from '../../providers/config/contsants';
import { DomSanitizer} from '@angular/platform-browser';


/**
 * Generated class for the AuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {

  username: AbstractControl;
  password: AbstractControl;

  loginForm:FormGroup;
  
  data = { username:'', password:''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
              public form:FormBuilder, public storage:Storage, private http: Http, 
              private httpServiceProvider: HttpServiceProvider, public loadingController: LoadingController,
              public toastController: ToastController, public events: Events, public domSanitizer: DomSanitizer) {
      
    this.storage.remove('companyConfig');
    this.loginForm=form.group({
    
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  
  
  onLogin(value: any): void{

    if(this.loginForm.valid) {

      let loading = this.loadingController.create({content : "Loading..."});
      loading.present();

      try {
      
        const requestData = {};
        const request = {};
      
        request["username"] = value.username;
        request["password"] = value.password;
        requestData["action"] = APIActions.authenticateUser;
        requestData["body"] = request;
        
        this.httpServiceProvider.post(requestData).subscribe((response: any) => {debugger
          console.log("Successfully logged in! "+response.data);

          if(response.data != null) {debugger
           
            // Store authtoken in localstorage
            this.storage.remove('authToken');
            this.storage.set('authToken', response.data.token);

            // Store logged in user data in local storage
            this.storage.remove('loggedOnUser');
            // removing password field before storing
            delete response.data.user['password'];
            this.storage.set('loggedOnUser', response.data.user);

            // company related data in local storage
            this.addCompanyInLocalStorage();
          } else {

            this.events.publish('toastr', 'User not found!');
          }
          
          loading.dismissAll();
        }, err => {
          console.log(err);
          loading.dismissAll();
          this.events.publish('toastr', 'Something is wrong. Please try again!');
        });
      } catch (error) {
        console.log(error);
        loading.dismissAll();
        this.events.publish('toastr', 'Something is wrong. Please try again!');
      }
    }
  }

  addCompanyInLocalStorage() {

    var requestData = {};
    var request = {};
    request["companyId"] = "5af6b480789aa61d98736751";
    requestData["action"] = APIActions.getCompanyConfigByCompanyId;
    requestData["body"] = request;

    try {

      this.httpServiceProvider.post(requestData).subscribe((response: any) => {debugger

        if(response.data != null) {

          let data = {};
          data["companyLogo"] = this.domSanitizer.bypassSecurityTrustResourceUrl(response.data[0].json.logo);
          data["companyName"] = response.data[0].companyId.name;
          data["companyDescription"] = this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.description);
          data["companyVideo"] = this.domSanitizer.bypassSecurityTrustResourceUrl(response.data[0].json.videoURL);
          data["poweredByLogo"] = this.domSanitizer.bypassSecurityTrustResourceUrl(response.data[0].json.poweredByLogo);
          data["aboutUs"] = this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.aboutUs);
          data["companyWebsiteURL"] =  this.domSanitizer.bypassSecurityTrustResourceUrl(response.data[0].json.companyWebsiteURL);
          data["signInPageDescription"] =  this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.signInPageDescription);
          data["termsAndConditions"] =  this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.termsAndConditions);
          data["aboutUsWhoWeAreLearnMore"] = this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.aboutUsWhoWeAreLearnMore);
          data["aboutUsMoreInfo"] = this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.aboutUsMoreInfo);
          data["aboutUsProduct"] = this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.aboutUsProduct);
          data["aboutUsProductLearnmore"] = this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.aboutUsProductLearnmore);

          this.storage.remove('companyConfig');
          this.storage.set('companyConfig', data);
          this.navCtrl.push(HomePage);
        } else {

          this.events.publish('toastr', 'Failed to get company data');
        }
      });
    } catch(err) {debugger

      this.events.publish('toastr', 'Something is wrong while storing company data');
      console.log(err);
    }
  }

  resetForm() {
    this.data = { username: '', password: '' };
  }

  ionViewDidLeave() {
    this.resetForm();
  }
}
