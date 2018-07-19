import { Component, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { NavController,LoadingController, ToastController, ViewController, Events, Slides, Nav } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';
import { SignInPage } from '../sign-in/sign-in';
import { SignOutPage } from '../sign-out/sign-out';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Global } from "../../providers/config/contsants";
import { Storage } from '@ionic/storage';
import { DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the Home page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * @author: MaheshDe
 * @since: 11/05/2018
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Pipe({
  name: 'safe'
})

export class HomePage {
  lang:any;

  companyConfigData: any;
  companyLogo;
  companyName;
  companyDescription;
  companyVideo;
  poweredByLogo;
  valuesLoaded;
  hasSlideimages;
  companySlideImages;
  defaultVideo;
  @ViewChild(Slides) homeSlides: Slides;
  @ViewChild(Nav) nav: Nav;
  video: any = {
    url: 'https://www.youtube.com/watch?v=P_aO2quAPuY'
  };

  thumbsPaths :String[];
  constructor(private viewCtrl: ViewController, public navCtrl: NavController, private inAppBrowser: InAppBrowser, public storage: Storage,
              public domSanitizer: DomSanitizer, public loadingController: LoadingController,
              public toastController: ToastController, public events: Events) {
    this.getCompanyConfig();
    this.setSlider();
  }

  ionViewDidLoad() {    
    this.valuesLoaded = false;
    this.hasSlideimages = false;
  }

   ionViewDidEnter() {      
    setTimeout(() => {
      if(this.hasSlideimages){
        this.homeSlides.startAutoplay();
        this.homeSlides.autoplay = 2000;
        this.homeSlides.autoplayDisableOnInteraction = false;
      }            
    }, 1000);            
  }

  ionViewWillLeave(){
    if(this.hasSlideimages){
      this.homeSlides.stopAutoplay();
    }    
  }

  onHomePageSlideChange() { 

    //this.homeSlides.realIndex;
  }

  openAboutUsPage() {

    //this.navCtrl.push(AboutUsPage);
    //this.nav.setRoot(AboutUsPage);
    this.navCtrl.setRoot(AboutUsPage);
  }

  openSignInPage() {

    //this.navCtrl.push(SignInPage);
    //this.nav.setRoot(SignInPage);
    this.navCtrl.setRoot(SignInPage);
  }
 
  signOut() {

    //this.navCtrl.push(SignOutPage);
    //this.nav.setRoot(SignOutPage);
    this.navCtrl.setRoot(SignOutPage);
  }

  openAppLogOutPage() {
    
    this.events.publish('toastr', 'Page is under construction.We\'ll be here soon..');
  }

  getCompanyConfig() {

    // let loading = this.loadingController.create({content : "Loading..."});
    // loading.present();

    this.storage.get('companyConfig').then((obj) => {

     // loading.dismissAll();

      if(obj != null) {
        
        this.companyName = obj.companyName;
        this.companyDescription = obj.companyDescription.changingThisBreaksApplicationSecurity;
        this.companyLogo = obj.companyLogo.changingThisBreaksApplicationSecurity;
        this.companyVideo = obj.companyVideo.changingThisBreaksApplicationSecurity;
        this.poweredByLogo = obj.poweredByLogo.changingThisBreaksApplicationSecurity;
        this.companySlideImages = null;
        this.defaultVideo = 'default video link';

        if(this.companySlideImages != null){
          this.hasSlideimages = true;          
        }else if(this.companyVideo == null) {
          this.companyVideo = this.defaultVideo;          
        }
        this.valuesLoaded = true;
      }  
      
    });
  }

  setSlider() {
    this.thumbsPaths = [
      "../assets/imgs/slide-img-1.png",
      "../assets/imgs/slide-img-2.png",
      "../assets/imgs/slide-img-3.png",
      "../assets/imgs/slide-img-4.png",
      "../assets/imgs/slide-img-5.png",
      "../assets/imgs/slide-img-6.png"
    ];
  }
}
