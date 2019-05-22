webpackJsonp([19],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login5PageModule", function() { return Login5PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login5__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Login5PageModule = (function () {
    function Login5PageModule() {
    }
    Login5PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login5__["a" /* Login5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login5__["a" /* Login5Page */]),
            ],
        })
    ], Login5PageModule);
    return Login5PageModule;
}());

//# sourceMappingURL=login5.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login5Page = (function () {
    function Login5Page(_fb, nav, forgotCtrl, menu, toastCtrl) {
        this._fb = _fb;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.menu.swipeEnable(false);
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad Login1Page');
    // }
    Login5Page.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    Login5Page.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    Login5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login5',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\extras\login5\login5.html"*/'<ion-header class="animated fadeInDown">\n\n\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login 5 (Video Bg)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<!-- -->\n\n<ion-content padding class="animated fadeIn login auth-page">\n\n  <video webkit-playsinline autoplay loop muted class="video-bg">\n\n    <source src="assets/video/beach-waves-loop.mp4" type=\'video/mp4; codecs="h.264"\'>\n\n    <source src="assets/video/beach-waves-loop.webm" type="video/webm">\n\n  </video>\n\n\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding-horizontal text-center class="animated fadeInDown">\n\n      <div class="logo"></div>\n\n      <h4 ion-text class="text-white" no-margin>\n\n        Easy<strong>Parking</strong>\n\n      </h4>\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n    <form [formGroup]="onLoginForm" class="list-form">\n\n      <ion-item class="animated fadeInUp">\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <p ion-text class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n\n\n      <ion-item class="animated fadeInUp">\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">This field is required</p>\n\n    </form>\n\n\n\n    <p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n\n\n    <div>\n\n      <button ion-button icon-start block color="dark" tappable [disabled]="!onLoginForm.valid">\n\n        <ion-icon name="log-in"></ion-icon>\n\n        SIGN IN\n\n      </button>\n\n\n\n      <p text-center ion-text color="light">Or Sign in with:</p>\n\n\n\n      <ion-grid class="btn-group">\n\n        <ion-row>\n\n          <button ion-button icon-only block class="btn-facebook col col-4">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only block class="btn-twitter col col-4">\n\n            <ion-icon name="logo-twitter"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only block class="btn-gplus col col-4">\n\n            <ion-icon name="logo-googleplus"></ion-icon>\n\n          </button>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </div>\n\n\n\n\n\n    <!-- Other links -->\n\n    <div text-center margin-top>\n\n      <span ion-text color="light" tappable>New here? <strong>Sign up</strong></span>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\extras\login5\login5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], Login5Page);
    return Login5Page;
}());

//# sourceMappingURL=login5.js.map

/***/ })

});
//# sourceMappingURL=19.js.map