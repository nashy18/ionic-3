import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, Events, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Global,APIActions,Enums  } from '../../providers/config/contsants';


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
              public toastController: ToastController, public events: Events) {
      
    this.loginForm=form.group({
    
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  
  onLogin(value: any): void{

    if(this.loginForm.valid) {debugger

      let loading = this.loadingController.create({content : "Loading..."});
      loading.present();

      try {
      
        const requestData = {};
        const request = {};
      
        request["username"] = value.username;
        request["password"] = value.password;
        requestData["action"] = APIActions.authenticateUser;
        requestData["body"] = request;
        
        this.httpServiceProvider.post(requestData).subscribe((response: any) => {
          console.log("Visitor created Successfully! "+response.data);

          if(response.data != null) {
           
            this.navCtrl.push(HomePage);
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
}
