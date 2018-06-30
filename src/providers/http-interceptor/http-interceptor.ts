import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { IonicPage, ToastController, Events, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { Storage } from '@ionic/storage';
import { AuthenticationPage } from '../../pages/authentication/authentication';

/*
  Generated class for the InterceptorHttpInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpInterceptorProvider {

  constructor(public http: HttpClient, public storage: Storage, public loadingController: LoadingController,
              public toastController: ToastController, public events: Events) {

    console.log('Hello HttpInterceptorProvider Provider');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {debugger

    console.log("intercepted request ... ");
    if(!req.url.includes("login")) {

      this.storage.get('loggedOnUser').then((obj) => {

        if(obj != null) {
 
         return next.handle(req)
          .catch((error, caught) => {
 
             //intercept the respons error and displace it to the console
             console.log("Error Occurred");
             console.log(error);
             //return the error to the method that called it
             return Observable.throw(error);
           }) as any;        
        } else {
 
          // If local storage is empty
          this.events.publish('toastr', 'Your session has been expired. Please login again!');
          //this.navCtrl.push(AuthenticationPage);
 
          return Observable.empty(); 
        }
      });
    } else {

      // This block will execute only for login API
      return next.handle(req)
        .catch((error, caught) => {

          //intercept the respons error and displace it to the console
          console.log("Error Occurred");
          console.log(error);
          //return the error to the method that called it
          return Observable.throw(error);
        }) as any; 
    }
  }
}
