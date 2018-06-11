webpackJsonp([1],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalPageModule", function() { return ConfirmationModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmation_modal__ = __webpack_require__(690);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmationModalPageModule = /** @class */ (function () {
    function ConfirmationModalPageModule() {
    }
    ConfirmationModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmation_modal__["a" /* ConfirmationModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmation_modal__["a" /* ConfirmationModalPage */]),
            ],
        })
    ], ConfirmationModalPageModule);
    return ConfirmationModalPageModule;
}());

//# sourceMappingURL=confirmation-modal.module.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the ConfirmationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmationModalPage = /** @class */ (function () {
    function ConfirmationModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.modalHeader = this.navParams.get('header');
        this.modalBody = this.navParams.get('body');
        this.modalType = this.navParams.get('type');
    }
    ConfirmationModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmationModalPage');
    };
    ConfirmationModalPage.prototype.closeModal = function () {
        this.modalData = { 'status': 'cancel' };
        this.viewCtrl.dismiss(this.modalData);
    };
    ConfirmationModalPage.prototype.cancelModal = function () {
        this.modalData = { 'status': 'cancel' };
        this.viewCtrl.dismiss(this.modalData);
    };
    ConfirmationModalPage.prototype.confirmClick = function () {
        this.modalData = { 'status': 'confirmed' };
        this.viewCtrl.dismiss(this.modalData);
        // modalPage.onDidDismiss((data) => {
        //   console.log("I have dismissed.");
        // });
        // modalPage.onWillDismiss((data) => {
        //   console.log("I'm about to dismiss");
        // });
    };
    ConfirmationModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmation-modal',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\confirmation-modal\confirmation-modal.html"*/'<!--\n  Generated template for the ConfirmationModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title text-center>{{modalHeader}}</ion-title>\n      <ion-buttons end>\n      <button class="close-btn" ion-button (click)="closeModal()"><ion-icon name="close-circle"></ion-icon></button>\n      </ion-buttons>\n  </ion-navbar>\n </ion-header>\n<ion-content padding class="">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n        <ion-label text-wrap><strong>{{modalBody}}</strong></ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding-top>\n        <button ion-button color="danger"outline round (click)="cancelModal()">Cancel</button>\n        <button ion-button color="secondary" outline round (click)="confirmClick()">Confirm</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\confirmation-modal\confirmation-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ConfirmationModalPage);
    return ConfirmationModalPage;
}());

//# sourceMappingURL=confirmation-modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map