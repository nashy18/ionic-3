import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SignInPage } from '../pages/sign-in/sign-in';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { HttpModule } from '@angular/http';
import { SignOutPage } from '../pages/sign-out/sign-out';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { SharedService } from '../service/shared.service';
import { SignaturePadModule } from 'angular2-signaturepad';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { SafePipe } from '../filters/safePipe';
import { HttpInterceptorProvider } from '../providers/http-interceptor/http-interceptor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutUsPage,
    SignInPage,
    SignOutPage,
    TermsAndConditionsPage,
    AuthenticationPage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    SelectSearchableModule,
    SignaturePadModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutUsPage,
    SignInPage,
    SignOutPage,
    TermsAndConditionsPage,
    AuthenticationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HttpServiceProvider,
    SharedService,
    InAppBrowser,
    
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptorProvider,
    //   multi: true
    // }
  ]
})
export class AppModule {}
