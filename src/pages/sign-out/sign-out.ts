import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { Global,APIActions,Enums  } from '../../providers/config/contsants';
import { LoadingController } from 'ionic-angular';

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
  selectedVisitor: any;
  signOutForm: FormGroup;
  UserList: AbstractControl;
  data = { UserList:''};

  users = [
    { id: 101, name: 'Avinash kumar' },
    { id: 102, name: 'Mahesh Devda' },
    { id: 103, name: 'Raj Ali' }
  ];  

  @ViewChild(Slides) signOutSlides: Slides;
  signOutSlideImages;
  defaultSlideImages
  hasSlideimages;
  thumbsPaths :String[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private formBuilder: FormBuilder, private alertCtrl: AlertController,
              private httpServiceProvider: HttpServiceProvider, public loadingController:LoadingController) {
    this.signOutForm = formBuilder.group({
      'UserList': ['', Validators.required]
    }); 

    this.setSlider();
  }

  ionViewDidLoad() {
    this.hasSlideimages = false;
    this.getAllVisitors();
    this.getSignOutSliderData();
  }

  ionViewDidEnter() {
    if(this.hasSlideimages){
      setTimeout(() => {
        this.signOutSlides.startAutoplay();
        this.signOutSlides.autoplay = 2000;
        this.signOutSlides.autoplayDisableOnInteraction = false;      
      }, 1000);
    }           
  }

  ionViewWillLeave(){
    if(this.hasSlideimages){
      this.signOutSlides.stopAutoplay();
    }
  }

  onSignOutSlideChange() { 

    //this.signOutSlides.realIndex;
  }

  resetForm() {
    console.log('on clicked of reset()');
    this.data = { UserList:''};
  }

  onSubmit(value: any): void {

    if(this.signOutForm.valid) {

      let loading = this.loadingController.create({content : "Loading..."});
      loading.present();

      console.log("Sign out Form is valid");
      console.log(this.data);
      
      //call function to update visitor signout status
      this.updateVisitorLog(this.selectedVisitor, loading);

      this.showMsg();
      this.navCtrl.push(HomePage);
    } else {
      console.log("Sign out Form is invalid");
    }
       
  }

  userSelectChange(event: { component: SelectSearchableComponent, value: any }) {
    console.log('User Name:', event.value);
    this.selectedVisitor = event.value;
  }

  showMsg() {
    let alert = this.alertCtrl.create({
      title: 'Signed Out',
      subTitle: 'Successfully Signed Out.<br/>See You Soon.!',
      buttons: ['Ok']
    });
    alert.present();
  }

  getAllVisitors() {

    let loading = this.loadingController.create({content : "Loading..."});
    loading.present();

    const requestData = {};
    requestData["action"] = APIActions.getAllVisitors;

    try {
      this.httpServiceProvider.get(requestData).subscribe((response: any) => {
        console.log(response.data);
        var list = response.data;
        this.users = [];
        var userDataList = [];
        if(list != null && list != undefined) {
          for (var i = 0; i < list.length; i++) {
            if(list[i] && !list[i].isLoggedOut){
              list[i]["fullName"] = list[i].firstName + ' ' + list[i].lastName;
              userDataList.push(list[i]);
            }
          }
        }
        this.users = this.getListByOrderASC(userDataList);
        loading.dismissAll();
      }, err => {
        console.log(err);
        loading.dismissAll();
      });
    } catch(error) {
      console.log(error);
      loading.dismissAll();
    }
  }

  updateVisitorLog(input, loading) {
    try {
      if(!input) return alert("Please select the user");
      const requestData = {};
      requestData["action"] = APIActions.updateVisitor + "/" + input.id;
      requestData["body"] = {
        "isLoggedOut" : true,
        "dateModified" : Date.now()
      }
      this.httpServiceProvider.patch(requestData).subscribe((response: any) => {
        console.log(response.data);
        loading.dismissAll();
      }, err => {
        console.log(err);
        loading.dismissAll();
      });
    } catch(error) {
      console.log(error);
      loading.dismissAll();
    }
  }

  getListByOrderASC(list){
    if(list == undefined || list == null){
      return list;
    }

    return list.sort(function(a, b) {
      var nameA = a.fullName.toUpperCase(); 
      var nameB = b.fullName.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }        
      // names must be equal
      return 0;
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

  getSignOutSliderData() {
    this.signOutSlideImages = 'something of list';
    this.defaultSlideImages = 'default video link'; 
    
    if(this.signOutSlideImages != null){
      this.hasSlideimages = true;          
    }

    this.setSlider();
  }
}
