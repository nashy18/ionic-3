webpackJsonp([4],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_contsants__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServiceProvider = /** @class */ (function () {
    function HttpServiceProvider(http) {
        this.http = http;
        this._options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
        this.baseURL = __WEBPACK_IMPORTED_MODULE_2__providers_config_contsants__["b" /* Global */].BaseAPIURL;
        console.log('Hello HttpServiceProvider Provider');
    }
    HttpServiceProvider.prototype.post = function (req) {
        return this.http.post(this.baseURL + req.action, req.body, this._options);
    };
    HttpServiceProvider.prototype.get = function (req) {
        return this.http.get(this.baseURL + req.action);
    };
    HttpServiceProvider.prototype.patch = function (req) {
        return this.http.patch(this.baseURL + req.action, req.body, this._options);
    };
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_and_conditions_terms_and_conditions__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_service_http_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * @author: MaheshDe
 * @since: 11/05/2018
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, fb, alertCtrl, http, httpServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.httpServiceProvider = httpServiceProvider;
        this.submitAttempt = false;
        this.nameOfDepartmentList = [];
        this.nameOfPersonList = [];
        this.purposeVisitedList = [];
        this.visitingAreaList = [];
        this.phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.data = { firstName: '', lastName: '', phone: '', email: '', company: '', department: '', nameOfPerson: '', purpose: '', controlledArea: '' };
        this.signInForm = fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(this.phonePattern)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/^[a-z0-9!#$%&'+\/=?^_`{|}~.-]+@\w+([\.-]?\w+)?(\.\w{2,4})+$/i), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            department: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            nameOfPerson: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            purpose: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            controlledArea: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
        // Initializing Drop Down
        // this.nameOfDepartmentList = [
        //   { id: 101, name: 'Finance'},
        //   { id: 102, name: 'Recruitment'},
        //   { id: 103, name: 'Administration'},
        //   { id: 104, name: 'Sales'},
        //   { id: 105, name: 'Development'}
        // ];
        // this.nameOfPersonList = [
        //   { id: 101, name: 'Alex'},
        //   { id: 102, name: 'John'},
        //   { id: 103, name: 'Martin'},
        //   { id: 104, name: 'Sofia'},
        //   { id: 105, name: 'Gustavo'},
        //   { id: 106, name: 'Kathie'}
        // ];
        // this.purposeVisitedList = [
        //   { id: 101, name: 'Interview'},
        //   { id: 102, name: 'Bank Work'},
        //   { id: 103, name: 'Personal'},
        //   { id: 104, name: 'Delivery'}
        // ];
        this.visitingAreaList = [
            { id: 101, name: 'Yes' },
            { id: 102, name: 'No' }
        ];
    }
    SignInPage.prototype.resetForm = function () {
        this.data = { firstName: '', lastName: '', phone: '', email: '', company: '', department: '', nameOfPerson: '', purpose: '', controlledArea: '' };
    };
    SignInPage.prototype.ionViewDidLoad = function () {
        this.getDepartentData();
        this.getAllPurposeData();
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.onSubmit = function (value) {
        var _this = this;
        this.submitAttempt = true;
        if (this.signInForm.valid) {
            try {
                var requestData = {};
                var request = {};
                request["firstName"] = value.firstName;
                request["lastName"] = value.lastName;
                request["email"] = value.email;
                request["mobileNumber"] = value.phone;
                request["companyName"] = value.company;
                request["departmentId"] = value.department.id;
                request["employeeId"] = value.nameOfPerson.id;
                request["visitPurposeId"] = value.purpose.id;
                request["visitingRestrictedAreas"] = (value.controlledArea == 'Yes') ? true : false;
                request["companyId"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["b" /* Global */].companyId;
                requestData["action"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["a" /* APIActions */].addVisitor;
                requestData["body"] = request;
                this.httpServiceProvider.post(requestData).subscribe(function (response) {
                    console.log("Visitor created Successfully! " + response.data);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]);
                }, function (err) {
                    console.log(err);
                });
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            console.log("Sign in Form is invalid");
        }
    };
    SignInPage.prototype.onChangeEvent = function (event, selectedValue, type) {
        var _this = this;
        console.log("Drop down Change event occured" + selectedValue);
        // List employees belongs to selected department
        if (type == 'department') {
            var requestData = {};
            var request = {};
            request["departmentId"] = selectedValue;
            requestData["action"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["a" /* APIActions */].getEmployeesByDepartment;
            requestData["body"] = request;
            try {
                this.httpServiceProvider.post(requestData).subscribe(function (response) {
                    console.log("Employee Data: " + response.data);
                    _this.nameOfPersonList = response.data;
                }, function (err) {
                    console.log(err);
                });
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    SignInPage.prototype.onCancelEvent = function () {
        console.log("Drop down Cancel event occured");
    };
    SignInPage.prototype.getDepartentData = function () {
        var _this = this;
        var request = {};
        request["action"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["a" /* APIActions */].getAllDepartmets;
        try {
            this.httpServiceProvider.get(request).subscribe(function (response) {
                console.log(response.data);
                _this.nameOfDepartmentList = response.data;
            }, function (err) {
                console.log(err);
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    SignInPage.prototype.getAllPurposeData = function () {
        var _this = this;
        var requestData = {};
        requestData["action"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["a" /* APIActions */].getAllPurposes;
        try {
            this.httpServiceProvider.get(requestData).subscribe(function (response) {
                console.log(response.data);
                _this.purposeVisitedList = response.data;
            }, function (err) {
                console.log(err);
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    SignInPage.prototype.userSelectChange = function (event, type) {
        var _this = this;
        console.log('DropDown Value:', event.value);
        // List employees belongs to selected department
        if (type == 'department') {
            var requestData = {};
            var request = {};
            request["departmentId"] = event.value.id;
            requestData["action"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["a" /* APIActions */].getEmployeesByDepartment;
            requestData["body"] = request;
            try {
                this.httpServiceProvider.post(requestData).subscribe(function (response) {
                    console.log("Employee Data: " + response.data);
                    var list = response.data;
                    if (list != null && list != undefined) {
                        for (var i = 0; i < list.length; i++) {
                            list[i]["fullName"] = list[i].firstName + ' ' + list[i].lastName;
                        }
                    }
                    _this.nameOfPersonList = list;
                }, function (err) {
                    console.log(err);
                });
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-in',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\sign-in\sign-in.html"*/'<!--\n  Generated template for the SignInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Visitor Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="item-bg-color">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12 col-lg-5 col-md-5 col-sm-12 col-xs-12>\n        <img class="sign-in-img" width="100%" height="auto" src="assets/imgs/sign-in.png" />\n      </ion-col>\n      <ion-col col-12 col-lg-7 col-md-7 col-sm-12 col-xs-12 padding-horizontal>\n        <div class="sign-in-bg-color">\n          <form [formGroup]="signInForm" >\n            <ion-row>\n             <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n               <ion-label text-wrap text-center class="page-title">We make your visit clutter free.</ion-label>\n               <!-- <ion-label text-wrap text-justify>Food safety Food Safety 1.svg Terms Foodborne illness Hazard analysis and critical control points (HACCP)</ion-label>\n               <ion-label text-wrap text-justify>• Hazard analysis and risk-based preventive controls (HARPC) Critical control point Critical factors FAT TOM pH Water activity (aw) Bacterial pathogens Clostridium botulinum Escherichia coli Listeria Salmonella Vibrio cholerae Cronobacter spp Viral pathogens Enterovirus Hepatitis A Norovirus Rotavirus Parasitic pathogens Cryptosporidium Entamoeba histolytica Giardia Trichinella v t e Food safety is a scientific discipline describing handling, preparation, and storage of food in ways that prevent food-borne illness.</ion-label>\n               <ion-label text-wrap text-justify>The occurrence of two or more cases of a similar illnesses resulting from the ingestion of a common food is known as a food-borne disease outbreak.</ion-label>\n               <ion-label text-wrap text-justify>[1] This includes a number of routines that should be followed to avoid potential health hazards.</ion-label> -->\n             </ion-col>\n           </ion-row>\n           <!-- <ion-row>\n            <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n              <ion-label class="form-title">\n                Sign in\n              </ion-label>\n            </ion-col>\n           </ion-row> -->\n           <ion-row>&nbsp;</ion-row>\n           <ion-row>\n             <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>\n               <ion-label class="label_name">Scan business card here or enter below </ion-label>\n             </ion-col>                \n             <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left padding-top>\n               <ion-img width="100" height="25" src="assets/imgs/bar_code.png"></ion-img>\n             </ion-col>\n           </ion-row>            \n           <ion-row>\n            <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n              <ion-label class="label_name">First Name<span class="astrik"> * </span></ion-label>  \n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="data.firstName" formControlName="firstName" [class.invalid]="!signInForm.controls.firstName.valid && \n                   (signInForm.controls.firstName.dirty)"></ion-input>\n                  <button class="tooltip" clear item-right style="background-color: transparent;margin:0px;width:25px;height:25px">\n                    <img class="tooltip" src="assets/imgs/help_outline.svg">\n                     <span class="tooltiptext">Enter Your First Name</span>\n                  </button>\n                </ion-item> \n                <div class="req-lbl" *ngIf="signInForm.controls.firstName.hasError(\'required\')  &&\n                  (signInForm.controls.firstName.touched)">* First Name is required!</div>\n                <div class="req-lbl" *ngIf="signInForm.controls.firstName.hasError(\'minlength\')  &&\n                  (signInForm.controls.firstName.touched )">* Minimum First Name length is 2!</div>                \n            </ion-col>\n            <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n              <ion-label class="label_name">Last Name<span class="astrik"> * </span></ion-label>  \n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="data.lastName" formControlName="lastName" [class.invalid]="!signInForm.controls.lastName.valid && \n                   (signInForm.controls.lastName.dirty)"></ion-input>\n                    <button class="tooltip" clear item-right style="background-color: transparent;margin:0px;width:25px;height:25px">\n                     <img class="tooltip" src="assets/imgs/help_outline.svg">\n                     <span class="tooltiptext">Enter Your Last Name</span>\n                    </button>\n                </ion-item> \n                <div class="req-lbl" *ngIf="signInForm.controls.lastName.hasError(\'required\')  &&\n                  (signInForm.controls.lastName.touched )">* Last Name is required!</div>  \n                <div class="req-lbl" *ngIf="signInForm.controls.lastName.hasError(\'minlength\')  &&\n                  (signInForm.controls.lastName.touched )">* Minimum Last Name length is 2!</div>                \n             </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                <ion-label class="label_name">Phone<span class="astrik"> * </span></ion-label>  \n                  <ion-item>\n                    <ion-input type="tel" [(ngModel)]="data.phone" formControlName="phone" [class.invalid]="!signInForm.controls.phone.valid && \n                      (signInForm.controls.phone.dirty)"></ion-input>\n                      <button class="tooltip" clear item-right style="background-color: transparent;margin:0px;width:25px;height:25px">\n                       <img class="tooltip" src="assets/imgs/help_outline.svg">\n                       <span class="tooltiptext">Enter Your Contact Number</span>\n                      </button>\n                  </ion-item> \n                  <div class="req-lbl" *ngIf="!signInForm.controls.phone.valid && \n                    (signInForm.controls.phone.touched )">* Phone is required (10 digit)!</div>             \n              </ion-col>\n              <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                <ion-label class="label_name">Email-Id<span class="astrik"> * </span></ion-label>  \n                  <ion-item>\n                    <ion-input type="text" [(ngModel)]="data.email" formControlName="email" [class.invalid]="!signInForm.controls.email.valid && \n                      (signInForm.controls.email.dirty)"></ion-input>\n                      <button class="tooltip" clear item-right style="background-color: transparent;margin:0px;width:25px;height:25px">\n                       <img class="tooltip" src="assets/imgs/help_outline.svg">\n                       <span class="tooltiptext">Enter Your Email-Id</span>\n                      </button>\n                  </ion-item> \n                  <div class="req-lbl" *ngIf="!signInForm.controls.email.valid  &&\n                    (signInForm.controls.email.touched )">* Email-Id is required!</div>                \n               </ion-col>\n              </ion-row>\n              <ion-row>\n               <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12>    \n                 <ion-label class="label_name">Company<span class="astrik"> * </span></ion-label>  \n                   <ion-item>\n                    <ion-input type="text" [(ngModel)]="data.company" formControlName="company" [class.invalid]="!signInForm.controls.company.valid && \n                     (signInForm.controls.company.dirty)"></ion-input>\n                     <button class="tooltip" clear item-right style="background-color: transparent;margin:0px;width:25px;height:25px">\n                      <img class="tooltip" src="assets/imgs/help_outline.svg">\n                      <span class="tooltiptext">Enter Company Name</span>\n                     </button>\n                   </ion-item> \n                   <div class="req-lbl" *ngIf="!signInForm.controls.company.valid  &&\n                    (signInForm.controls.company.touched )">* Company is required!</div>                \n                </ion-col>                  \n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                    <ion-label class="label_name">Department of the person to be visited<span class="astrik"> * </span></ion-label>  \n                      <ion-item>                          \n                        <select-searchable class="select-option" formControlName="department" [(ngModel)]="data.department" [items]="nameOfDepartmentList" itemValueField="id" itemTextField="name" [canSearch]="true" (onChange)="userSelectChange($event, \'department\')"> \n                        </select-searchable>\n                        <button class="tooltip" clear item-right style="background-color: transparent;margin:0px;width:25px;height:25px">\n                          <img class="tooltip" src="assets/imgs/help_outline.svg">\n                          <span class="tooltiptext">Select Department Name</span>\n                        </button>\n                      </ion-item> \n                      <div class="req-lbl" *ngIf="!signInForm.controls.department.valid  &&\n                       (signInForm.controls.department.dirty )">* Department is required!</div>                \n                  </ion-col>\n                  <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                    <ion-label class="label_name">Name of the person to be visiting<span class="astrik"> * </span></ion-label>  \n                      <ion-item>                              \n                        <select-searchable class="select-option" formControlName="nameOfPerson" [(ngModel)]="data.nameOfPerson" [items]="nameOfPersonList" itemValueField="id" itemTextField="name" [canSearch]="true" (onChange)="userSelectChange($event, \'emplyee\')"> \n                        </select-searchable>\n                        <button class="tooltip" clear item-right style="background-color: transparent;margin:0px;width:25px;height:25px">\n                          <img class="tooltip" src="assets/imgs/help_outline.svg">\n                          <span class="tooltiptext">Select Person Name</span>\n                        </button>\n                      </ion-item> \n                      <div class="req-lbl" *ngIf="!signInForm.controls.nameOfPerson.valid  &&\n                        (signInForm.controls.nameOfPerson.dirty )">* Name of person is required!</div>                \n                   </ion-col>\n                  </ion-row> \n                  <ion-row>\n                    <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                      <ion-label class="label_name">Purpose of visit<span class="astrik"> * </span></ion-label>  \n                        <ion-item>\n                          <select-searchable class="select-option" formControlName="purpose" [(ngModel)]="data.purpose" [items]="purposeVisitedList" itemValueField="id" itemTextField="name" [canSearch]="true" (onChange)="userSelectChange($event, \'purpose\')"> \n                          </select-searchable>\n                          <button class="tooltip" clear item-right style="background-color: transparent;margin:0px;width:25px;height:25px">\n                           <img class="tooltip" src="assets/imgs/help_outline.svg">\n                           <span class="tooltiptext">Select Purpose of visiting</span>\n                          </button>\n                       </ion-item> \n                       <div class="req-lbl" *ngIf="!signInForm.controls.purpose.valid  &&\n                        (signInForm.controls.purpose.dirty )">* Purpose is required!</div>                \n                    </ion-col>\n                    <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                      <ion-label class="label_name">Are you visiting GMP controlled area?<span class="astrik"> * </span></ion-label>  \n                        <ion-item>\n                          <select-searchable class="select-option" formControlName="controlledArea" [(ngModel)]="data.controlledArea" [items]="visitingAreaList" itemValueField="id" itemTextField="name" [canSearch]="true" (onChange)="userSelectChange($event, \'controlledArea\')"> \n                          </select-searchable>\n                        <button class="tooltip" clear item-right style="background-color: transparent;margin:0px;width:25px;height:25px">\n                         <img class="tooltip" src="assets/imgs/help_outline.svg">\n                         <span class="tooltiptext">Select appropriate option</span>\n                        </button>\n                       </ion-item> \n                       <div class="req-lbl" *ngIf="!signInForm.controls.controlledArea.valid  &&\n                        (signInForm.controls.controlledArea.dirty )">* GMP is required!</div>                \n                     </ion-col>\n                   </ion-row> \n                   <ion-row>\n                      <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center>\n                        <p *ngIf="submitAttempt && !signInForm.valid" class="req-lbl">(*) Please fill all mandatory details.</p>\n                      </ion-col>\n                   </ion-row>\n                   <ion-row>\n                      <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center>\n                        <button ion-button color="danger" outline round (click)="resetForm();">Reset</button>\n                        <button ion-button color="secondary" (click)="onSubmit(signInForm.value);" type="submit" outline round>Submit</button>\n                     </ion-col>\n                   </ion-row>\n            </form>\n          </div>          \n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsAndConditionsPage = /** @class */ (function () {
    function TermsAndConditionsPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.signaturePadOptions = {
            'minWidth': 2,
            'canvasWidth': 400,
            'canvasHeight': 200,
            'backgroundColor': '#f6fbff',
            'penColor': '#666a73'
        };
        this.agreeDefaultButtonBGColor = '#0000';
        this.disagreeDefaultButtonBGColor = '#0000';
        this.agreeBttnText = '#30d05f';
        this.disagreeBttnText = '#e93a3a';
        this.isSubmitDisabled = true;
        this.isSignatureBoxHidden = false;
        this.isAgreeDisabled = false;
        this.isDisagreeDisabled = false;
        this.policy = "Nature’s Touch grants you a revocable, non-exclusive, non-transferable, non-sublicensable, limited right to Use the Site, subject to the present Terms and Conditions. Anything in the Site may be subject to other intellectual property rights reserved by Nature’s Touch or any other party. Nothing contained herein shall be construed as conferring by implication, estoppel or otherwise any license or right under any patent or trademark of Nature’s Touch or any other party. Except as provided above, nothing contained herein shall be construed as conferring any license or right under any Nature’s Touch or any other party copyright. Nothing contained on the Site should be construed as granting any license or right to use any trademark displayed on the Site without the written permission of Nature’s Touch or such third party that may own the trademarks. You acknowledge that Nature’s Touch does not have an obligation to monitor any Content, accessible through the Site. However, you agree that Nature’s Touch has the right to monitor the Site from time to time and to disclose any information as necessary or required to comply with applicable laws, regulations or administrative or governmental or judicial requests, to operate the Site properly, to ensure the enforcement of and the compliance with the Terms and Conditions. The Site may contain some Content such as health related information, which is provided for educational purposes only and should not be interpreted as a recommendation for a specific treatment plan, product or course of action. Use of the Site and of this type of Content does not constitute medical advice and does not replace consultations with a qualified medical or other relevant professional. Some of the Content so provided may even be outdated. Nature’s Touch shall not, directly or indirectly, in any way be responsible for any loss or damage of any kind incurred as a result of, or in connection with your Use of the Site or reliance on, any such Content. By posting any Content on the Site, you agree to grant Nature’s Touch a royalty-free, world-wide license to use, copy, adapt, transmit, disclose and distribute your Content. This Site, including without limitation all Content, is protected by Canadian and worldwide copyrights laws and treaty provisions. Any unauthorized copying, redistribution, reproduction or modification of the Content by any person may be a violation of trade-mark and/or copyright laws and could result in legal action. You agree to comply with all applicable copyright laws.";
        this.disclaimer = "Nature’s Touch take no responsibility for the accuracy, validity or suitability for any purpose of the Site and of any Content contained therein, which are all provided on an “as IS” basis, without warranty of any kind, expressed or implied including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. By using this Site, you agree that your access to the Site and / or use of its contents is at your own risk. Nature’s Touch, its employees, directors, officers, agents and/or affiliates, as well as any other party involved in the creation or delivery of the Site, will not, in any event, at any time, be held responsible for any damages whatsoever, including direct, incidental, special, consequential, indirect and punitive damages or injury arising from visitor access and/or Use or inability to Use this Site or any Content and information contained and/or provided therein whether generally set out in this Site or specifically in response to visitors";
        this.signature = '';
        this.modalHeader = this.navParams.get('header');
        this.modalBody = this.navParams.get('body');
        this.modalType = this.navParams.get('type');
    }
    TermsAndConditionsPage_1 = TermsAndConditionsPage;
    TermsAndConditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsAndConditionsPage');
    };
    TermsAndConditionsPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter");
        this.signaturePad.clear();
    };
    TermsAndConditionsPage.prototype.drawComplete = function () {
        console.log("Draw completed");
    };
    TermsAndConditionsPage.prototype.drawStart = function () {
        console.log("drawStart");
    };
    TermsAndConditionsPage.prototype.clearPad = function () {
        console.log("Signature pad is cleared");
        this.signaturePad.clear();
    };
    TermsAndConditionsPage.prototype.openAgreeModal = function () {
        // Changing the button background-color & text color on agree button click.
        this.agreeDefaultButtonBGColor = '#30d05f';
        this.agreeBttnText = '#ffffff';
        // If click on agree then removing highlight from disagree button
        this.disagreeDefaultButtonBGColor = "#0000";
        this.disagreeBttnText = '#e93a3a';
        this.isSubmitDisabled = false; //used to enable submit button after click agree button on modal
        //this.isSignatureBoxHidden = false; //used to enable signature box after click agree button on modal
    };
    TermsAndConditionsPage.prototype.openDisagreeModal = function () {
        var _this = this;
        var data = { header: 'Confirmation', body: 'Please note your access will be restricted to non-GMP compliant areas only.', type: 'disagree' };
        var modalPage = this.modalCtrl.create('ConfirmationModalPage', data);
        modalPage.present();
        modalPage.onDidDismiss(function (obj) {
            console.log("I have dismissed." + obj);
            if (obj.status == 'confirmed') {
                _this.isSubmitDisabled = false; //used to enable submit button after click agree button on modal
                //this.isSignatureBoxHidden = false; //used to enable signature box after click agree button on modal
                // Changing the button background-color & text color on Disagree button click.
                _this.disagreeDefaultButtonBGColor = "#e93a3a";
                _this.disagreeBttnText = '#ffffff';
                // If click on disagree removing highlight from agree button
                _this.agreeDefaultButtonBGColor = '#0000';
                _this.agreeBttnText = '#30d05f';
            }
            else {
                //this.isSubmitDisabled = true; //used to disable submit button after click cancel button on modal
                //this.isSignatureBoxHidden = true; //used to disable signature box after click cancel button on modal
                // Changing the button background-color & text color on Disagree button click.
                _this.disagreeDefaultButtonBGColor = "#0000";
                _this.disagreeBttnText = '#e93a3a';
            }
        });
        modalPage.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    TermsAndConditionsPage.prototype.submit = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        this.signature = this.signaturePad.toDataURL();
        console.log("Signature: " + this.signature);
        this.signaturePad.clear();
        // var data = {GMPType: this.modalType}
        // var modalPage = this.modalCtrl.create('VisitorPassModalPage', data); 
        // modalPage.present();
        var data = { header: 'Confirmation', body: 'Please wait, your contact has been notified to receive you shortly. Please collect your visitor pass from the printer.', type: 'agree' };
        var modalPage = this.modalCtrl.create('ConfirmationModalPage', data);
        modalPage.present();
        modalPage.onDidDismiss(function (obj) {
            console.log("I have dismissed " + obj);
            if (obj.status == 'confirmed') {
                var data = { GMPType: _this.modalType };
                var printModalPage = _this.modalCtrl.create('VisitorPassModalPage', data);
                printModalPage.present();
                printModalPage.onDidDismiss(function (obj) {
                    console.log("I have dismissed " + obj);
                    if (obj.status != 'confirmed') {
                        _this.navCtrl.push(TermsAndConditionsPage_1);
                    }
                });
                printModalPage.onWillDismiss(function (obj) {
                    console.log("I'm about to dismiss " + obj);
                });
            }
            else {
                _this.navCtrl.push(TermsAndConditionsPage_1);
            }
        });
        modalPage.onWillDismiss(function (obj) {
            console.log("I'm about to dismiss " + obj);
        });
    };
    TermsAndConditionsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], TermsAndConditionsPage.prototype, "signaturePad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], TermsAndConditionsPage.prototype, "content", void 0);
    TermsAndConditionsPage = TermsAndConditionsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms-and-conditions',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\terms-and-conditions\terms-and-conditions.html"*/'<!--\n  Generated template for the TermsAndConditionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Visitor Policy</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid fixed>\n    <ion-row> \n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n        <ion-content text-wrap style="height:355px;">\n          <ion-row>\n            <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n              <ion-label><strong>The following health condition questions to be asked to all visitors/contractors intending to enter production areas of the factory. Visitors must appropriately signed in, read the GMP’s and be accompanied by management.</strong></ion-label>\n            </ion-col> \n          </ion-row>\n          <ion-row>\n            <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n              <ion-label>\n                  Please note that this Site is jointly owned by, controlled by and/or maintained by Nature’s Touch Frozen\n                  Foods Inc. and/or one or more of its subsidiaries or affiliates (individually and collectively, <strong>"Nature’s\n                  Touch"</strong>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n              {{policy}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n              <ion-label text-center><strong><u>DISCLAIMER</u></strong></ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n              <ion-label><strong><i>No Warranty and Limitation of Liability</i></strong></ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n              {{disclaimer}}\n            </ion-col>\n          </ion-row>\n        </ion-content>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-top>\n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center>\n        <button ion-button class="custom-btn" [disabled]="isAgreeDisabled" [ngStyle]="{\'background-color\': agreeDefaultButtonBGColor, \'color\': agreeBttnText}" color="secondary" (click)="openAgreeModal();" outline round>Agree</button>\n        <button ion-button class="custom-btn" [disabled]="isDisagreeDisabled" [ngStyle]="{\'background-color\': disagreeDefaultButtonBGColor, \'color\': disagreeBttnText}" color="danger" (click)="openDisagreeModal();" outline round>Disagree</button>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row *ngIf="!isSignatureBoxHidden">\n      <ion-col text-center class="digital-signature" col-lg-12 col-md-12 col-sm-12 col-xs-12>\n        <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>\n      </ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12>\n        <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>\n        <button (click)="clearPad()">\n          <ion-icon item-right ios="ios-refresh" md="md-refresh" style="font-size: 26px;"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n   <ion-row>\n      <ion-col text-center col-lg-12 col-md-12 col-sm-12 col-xs-12>\n        <button ion-button class="custom-btn" color="default" (click)="submit();" [disabled]="isSubmitDisabled" outline round>Submit</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\terms-and-conditions\terms-and-conditions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
    var TermsAndConditionsPage_1;
}());

//# sourceMappingURL=terms-and-conditions.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/confirmation-modal/confirmation-modal.module": [
		686,
		1
	],
	"../pages/sign-in/sign-in.module": [
		687,
		3
	],
	"../pages/terms-and-conditions/terms-and-conditions.module": [
		688,
		2
	],
	"../pages/visitor-pass-modal/visitor-pass-modal.module": [
		689,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_contsants__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, iab) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
            footer: 'yes'
        };
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        //https://www.techiediaries.com/inappbrowser-ionic-v3/
        this.openWithCordovaBrowser(__WEBPACK_IMPORTED_MODULE_4__providers_config_contsants__["b" /* Global */].AboutUsURL);
    };
    AboutUsPage.prototype.exitAboutPage = function () {
        console.log('on clicked of exit()');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AboutUsPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.iab.create(url, target, this.options);
    };
    AboutUsPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.iab.create(url, target, this.options);
    };
    AboutUsPage.prototype.openWithCordovaBrowser = function (url) {
        var target = "_self";
        this.iab.create(url, target, this.options);
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\about-us\about-us.html"*/'<!--\n  Generated template for the AboutUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>About Us</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<!-- <ion-content padding class="item-bg-color">\n  <ion-grid fixed>\n      <ion-row>\n        <ion-col>\n          <ion-row>\n            <ion-col col-x-2 col-sm-2 col-md-2 col-lg-2 col-xl-2>\n              <ion-img class="comp-logo-img" width="100%" height="auto" src="assets/imgs/natures-logo-header.png">               \n              </ion-img>              \n            </ion-col>\n            <ion-col col-x-10 col-sm-10 col-md-10 col-lg-10 col-xl-10>               \n              <ion-label>\n                  <h3>Nature\'s Touch</h3>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <div>\n              <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n                <ion-card class="visitor-entry-card-bg">\n                  <ion-card-content text-wrap class="para-lbl">\n                      <ion-label text-justify>\n                          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n                          laborum. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in re                   \n                      </ion-label>\n                      <ion-label text-justify>\n                          prehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n                          officia deserunt mollit anim id est laborum. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d\n                      </ion-label>\n                      <ion-label text-justify>\n                          olor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n                          culpa qui officia deserunt mollit anim id est laborum. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n                          labore et dolore mag\n                      </ion-label>\n                      <ion-label text-justify>\n                          na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n                          officia deserunt mollit anim id est laborum. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n                          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in                           \n                      </ion-label>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n              </div>\n          </ion-row>\n          <ion-row padding-top>\n            <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right>\n              <button class="exit-btn" ion-button color="default" outline round (click)="exitAboutPage()">Exit</button>\n            </ion-col>\n          </ion-row>\n        </ion-col>        \n      </ion-row>\n    </ion-grid>\n</ion-content> -->'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_contsants__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SignOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignOutPage = /** @class */ (function () {
    function SignOutPage(navCtrl, navParams, formBuilder, alertCtrl, httpServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.httpServiceProvider = httpServiceProvider;
        this.data = { UserList: '' };
        this.users = [
            { id: 101, name: 'Avinash kumar' },
            { id: 102, name: 'Mahesh Devda' },
            { id: 103, name: 'Raj Ali' }
        ];
        this.signOutForm = formBuilder.group({
            'UserList': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    }
    SignOutPage.prototype.ionViewDidLoad = function () {
        this.getAllVisitors();
        console.log('ionViewDidLoad SignOutPage');
    };
    SignOutPage.prototype.resetForm = function () {
        console.log('on clicked of reset()');
        this.data = { UserList: '' };
    };
    SignOutPage.prototype.onSubmit = function (value) {
        if (this.signOutForm.valid) {
            console.log("Sign out Form is valid");
            console.log(this.data);
            this.showMsg();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            //call function to update visitor signout status
            this.updateVisitorLog(this.selectedVisitor);
        }
        else {
            console.log("Sign out Form is invalid");
        }
    };
    SignOutPage.prototype.userSelectChange = function (event) {
        console.log('User Name:', event.value);
        this.selectedVisitor = event.value;
    };
    SignOutPage.prototype.showMsg = function () {
        var alert = this.alertCtrl.create({
            title: 'Signed Out',
            subTitle: 'Successfully Signed Out.<br/>See You Soon.!',
            buttons: ['Ok']
        });
        alert.present();
    };
    SignOutPage.prototype.getAllVisitors = function () {
        var _this = this;
        var requestData = {};
        requestData["action"] = __WEBPACK_IMPORTED_MODULE_5__providers_config_contsants__["a" /* APIActions */].getAllVisitors;
        try {
            this.httpServiceProvider.get(requestData).subscribe(function (response) {
                console.log(response.data);
                var list = response.data;
                if (list != null && list != undefined) {
                    for (var i = 0; i < list.length; i++) {
                        if (!list[i].isLoggedOut) {
                            list[i]["fullName"] = list[i].firstName + ' ' + list[i].lastName;
                        }
                    }
                }
                _this.users = list;
            }, function (err) {
                console.log(err);
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    SignOutPage.prototype.updateVisitorLog = function (input) {
        try {
            if (!input)
                return alert("Please select the user");
            var requestData = {}, date = new Date(), milliseconds = date.getMilliseconds();
            requestData["action"] = __WEBPACK_IMPORTED_MODULE_5__providers_config_contsants__["a" /* APIActions */].updateVisitor + "/" + input.Id;
            requestData["body"] = {
                "isLoggedOut": true,
                "dateModified": milliseconds
            };
            this.httpServiceProvider.patch(requestData).subscribe(function (response) {
                console.log(response.data);
            }, function (err) {
                console.log(err);
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    SignOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-out',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\sign-out\sign-out.html"*/'<!--\n  Generated template for the SignOutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign-out</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="item-bg-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-lg-4 col-sm-12 col-md-12 col-xs-12>\n        <ion-img class="sign-out-img" src="assets/imgs/sign-out.png"></ion-img>\n      </ion-col>\n      <ion-col col-lg-8 col-sm-12 col-md-12 col-xs-12 padding-horizontal>\n        <ion-row>\n          <ion-col>\n            <ion-label class="font-x-lg font-wt-500">\n              Thank\'s for visiting!\n            </ion-label>\n            <ion-label text-wrap text-justify>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor insididunt ut labore et dolore magna aliqua.\n              Culpa qui officia deserunt mollit anim id est laborum.\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>          \n          <ion-col>\n            <form [formGroup]="signOutForm">\n              <ion-row>\n                <ion-col>\n                  <h6>Sign out</h6>\n                </ion-col>\n              </ion-row>\n              <ion-row>              \n                <ion-col>\n                  <ion-item>\n                    <select-searchable formControlName="UserList" [(ngModel)]="data.UserList" [items]="users" itemValueField="id" itemTextField="fullName" [canSearch]="true" (onChange)="userSelectChange($event)">\n                      <ng-template selectSearchableLabelTemplate>\n                        Name\n                      </ng-template>\n                    </select-searchable>\n                  </ion-item>                  \n                </ion-col>\n              </ion-row>\n              <ion-row text-center>\n                <ion-col></ion-col>\n              </ion-row>\n              <ion-row text-center>\n                <ion-col>\n                  <button ion-button color="danger" outline round (click)="resetForm();">Reset</button>               \n                  <button ion-button color="secondary" [disabled]="!signOutForm.valid" (click)="onSubmit(signOutForm.value);" type="submit" outline round>Submit</button>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\sign-out\sign-out.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], SignOutPage);
    return SignOutPage;
}());

//# sourceMappingURL=sign-out.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_service_http_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sign_out_sign_out__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_terms_and_conditions_terms_and_conditions__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_shared_service__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_signaturepad__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_out_sign_out__["a" /* SignOutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/confirmation-modal/confirmation-modal.module#ConfirmationModalPageModule', name: 'ConfirmationModalPage', segment: 'confirmation-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule', name: 'TermsAndConditionsPage', segment: 'terms-and-conditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visitor-pass-modal/visitor-pass-modal.module#VisitorPassModalPageModule', name: 'VisitorPassModalPage', segment: 'visitor-pass-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_17_angular2_signaturepad__["SignaturePadModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_out_sign_out__["a" /* SignOutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_http_service_http_service__["a" /* HttpServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__service_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us_about_us__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_out_sign_out__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Home page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * @author: MaheshDe
 * @since: 11/05/2018
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.video = {
            url: 'https://www.youtube.com/watch?v=P_aO2quAPuY'
        };
    }
    HomePage.prototype.openAboutUsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_us_about_us__["a" /* AboutUsPage */]);
    };
    HomePage.prototype.openSignInPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__["a" /* SignInPage */]);
    };
    HomePage.prototype.signOut = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_out_sign_out__["a" /* SignOutPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="item-bg-color">\n  <ion-grid fixed>\n    <ion-row justify-content-center class="heading">\n      <ion-col class="comp-title" col-2>\n        <ion-img class="comp-title-img" *ngIf="!url" src="assets/imgs/natures-logo-header.png"></ion-img>\n      </ion-col>\n      <ion-col class="comp-title-pad" col-10 text-wrap>\n        <ion-label class="comp-title-pad-lbl">\n          Welcome to Nature\'s Touch: Montreal Facility\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12>\n        <ion-row>\n          <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n            <ion-label text-wrap class="comp-para-lbl">\n              <span class="comp-para-lbl-spn">It’s in our Nature<br/></span> Like you, we’re always seeking the best. We\n              travel extensively to bring great-tasting, high-quality products directly from the farm to your table.\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 text-right>\n            <ion-img width="100" height="25" src="assets/imgs/sfs-transp.png"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="video-container">\n              <iframe width="560" height="415" src="https://www.youtube.com/embed/P_aO2quAPuY" frameborder="0" allow="autoplay; encrypted-media"\n                allowfullscreen></iframe>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class="home-lft-col" col-lg-6 col-md-12 col-sm-12 col-xs-12>\n        <div>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-xs-12 class="container-left-panel">\n                <ion-card class="about-us-card-bg" (click)="openAboutUsPage()">\n                  <ion-card-content text-center>\n                    <img text-center class="home-img" width="25" height="75" src="assets/imgs/about-us.png" />\n                    <ion-label class="font-wt-700">About Us</ion-label>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-xs-12>\n                <ion-card class="visitor-entry-card-bg" (click)="openSignInPage()">\n                  <ion-card-content text-center>\n                    <!-- <ion-thumbnail> -->\n                    <img text-center class="home-img" width="25" height="75" src="assets/imgs/visitor-entry.png" />\n                    <ion-label class="font-wt-700">Visitor Sign In</ion-label>\n                    <!-- </ion-thumbnail> -->\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-xs-12>\n                <ion-card class="visitor-exit-card-bg" (click)="signOut()">\n                  <ion-card-content text-center>\n                    <img text-center class="home-img" width="25" height="75" src="assets/imgs/visitor-exit.png" />\n                    <ion-label class="font-wt-700">Visitor Sign Out</ion-label>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = "https://restcountries.eu/rest/v2/all";
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getCountries = function () {
        return this.http.get(this.apiUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.isSubmitDisabled = false;
        this.isSignatureBoxHidden = false;
        this.isagreeDisabled = false;
        this.isDisagreeDisabled = false;
    }
    SharedService.prototype.setVal = function (isSubmitDisabled, isSignatureBoxHidden, type) {
        this.isSubmitDisabled = isSubmitDisabled;
        this.isSignatureBoxHidden = isSignatureBoxHidden;
        if (type) {
            if (type == 'agree') {
                this.isagreeDisabled = false;
                this.isDisagreeDisabled = true;
            }
            else if ('disagree') {
                this.isagreeDisabled = true;
                this.isDisagreeDisabled = false;
            }
            else {
                this.isagreeDisabled = false;
                this.isDisagreeDisabled = false;
            }
        }
    };
    SharedService.prototype.getVal = function () {
        return { 'buttonDisabled': this.isSubmitDisabled, 'signatureHidden': this.isSignatureBoxHidden,
            'isagreeDisabled': this.isagreeDisabled, 'isDisagreeDisabled': this.isDisagreeDisabled };
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Global; });
/* unused harmony export Enums */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIActions; });
var Global = Object.freeze({
    //"BaseAPIURL" :"http://localhost:1337/",
    "BaseAPIURL": "https://smartfoodsafe-api.herokuapp.com/",
    "companyId": "5af6b480789aa61d98736751",
    "AboutUsURL": "https://www.naturestouchfrozenfoods.com/en/about-us"
});
var Enums = Object.freeze({});
var APIActions = Object.freeze({
    "addVisitor": "visitor",
    "updateVisitor": "visitor",
    "getAllDepartmets": "department",
    "getEmployeesByDepartment": "user/search",
    "getAllPurposes": "visitPurpose",
    "getAllVisitors": "visitor"
});
//# sourceMappingURL=contsants.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map