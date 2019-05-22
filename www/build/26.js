webpackJsonp([26],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthPageModule = (function () {
    function AuthPageModule() {
    }
    AuthPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]),
            ],
        })
    ], AuthPageModule);
    return AuthPageModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
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



// import {HomePage} from "../home/home";
// import {RegisterPage} from "../register/register";
var AuthPage = (function () {
    function AuthPage(_fb, nav, forgotCtrl, menu, toastCtrl) {
        this._fb = _fb;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.auth = "login";
        this.menu.swipeEnable(false);
    }
    AuthPage.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
        this.onRegisterForm = this._fb.group({
            fullName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    // go to register page
    // register() {
    //   this.nav.setRoot(RegisterPage);
    // }
    // login and go to home page
    AuthPage.prototype.login = function () {
        this.nav.setRoot('page-home');
    };
    AuthPage.prototype.forgotPass = function () {
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
                            cssClass: 'dark-trans',
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
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\extras\auth\auth.html"*/'<ion-header class="animated fadeInDown">\n\n\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Authentication</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<!-- -->\n\n<ion-content padding class="animated fadeIn login auth-page">\n\n	<div class="login-content">\n\n\n\n		<!-- Logo -->\n\n		<div padding-horizontal text-center class="animated fadeInDown">\n\n			<div class="logo">\n\n			</div>\n\n			<h2 ion-text class="text-white" no-margin>\n\n				Easy<strong>Parking</strong>\n\n			</h2>\n\n		</div>\n\n\n\n		<div padding-vertical>\n\n		  <ion-segment [(ngModel)]="auth" color="light">\n\n		    <ion-segment-button value="login">\n\n		      Login\n\n		    </ion-segment-button>\n\n		    <ion-segment-button value="register">\n\n		      Register\n\n		    </ion-segment-button>\n\n		  </ion-segment>\n\n		</div>\n\n\n\n		<div [ngSwitch]="auth">\n\n			<!-- Login form -->\n\n			<div id="loginForm" *ngSwitchCase="\'login\'">\n\n				<form [formGroup]="onLoginForm" class="list-form">\n\n					<ion-item>\n\n						<ion-label floating>\n\n							<ion-icon name="mail" item-start class="text-white"></ion-icon>\n\n							Email\n\n						</ion-label>\n\n						<ion-input type="email" formControlName="email"></ion-input>\n\n					</ion-item>\n\n					<p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n\n\n					<ion-item>\n\n						<ion-label floating>\n\n							<ion-icon name="lock" item-start class="text-white"></ion-icon>\n\n							Password\n\n						</ion-label>\n\n						<ion-input type="password" formControlName="password"></ion-input>\n\n					</ion-item>\n\n					<p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">This field is required</p>\n\n				</form>\n\n\n\n				<p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n\n\n				<div>\n\n					<button ion-button icon-start block outline color="light" (click)="login()" [disabled]="!onLoginForm.valid">\n\n						<ion-icon name="log-in"></ion-icon>\n\n						SIGN IN\n\n					</button>\n\n\n\n					<p text-center ion-text color="light">Or Sign in with:</p>\n\n\n\n					<ion-grid class="btn-group">\n\n						<ion-row>\n\n							<button ion-button icon-only block class="btn-facebook col col-4">\n\n								<ion-icon name="logo-facebook"></ion-icon>\n\n							</button>\n\n							<button ion-button icon-only block class="btn-twitter col col-4">\n\n								<ion-icon name="logo-twitter"></ion-icon>\n\n							</button>\n\n							<button ion-button icon-only block class="btn-gplus col col-4">\n\n								<ion-icon name="logo-googleplus"></ion-icon>\n\n							</button>\n\n						</ion-row>\n\n					</ion-grid>\n\n\n\n				</div>\n\n			</div>\n\n\n\n			<div id="registerForm" *ngSwitchCase="\'register\'">\n\n		    <!-- Register form -->\n\n		    <form [formGroup]="onRegisterForm" class="list-form">\n\n		      <ion-item>\n\n		        <ion-label floating>\n\n		          <ion-icon name="person" item-start class="text-white"></ion-icon>\n\n		          Full Name\n\n		        </ion-label>\n\n		        <ion-input type="text" formControlName="fullName"></ion-input>\n\n		      </ion-item>\n\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'fullName\').touched && onRegisterForm.get(\'fullName\').hasError(\'required\')">This field is required</p>\n\n\n\n		      <ion-item>\n\n		        <ion-label floating>\n\n		          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n\n		          Email\n\n		        </ion-label>\n\n		        <ion-input type="email" formControlName="email"></ion-input>\n\n		      </ion-item>\n\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'email\').touched && onRegisterForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n\n\n		      <ion-item>\n\n		        <ion-label floating>\n\n		          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n\n		          Password\n\n		        </ion-label>\n\n		        <ion-input type="password" formControlName="password"></ion-input>\n\n		      </ion-item>\n\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'password\').touched && onRegisterForm.get(\'password\').hasError(\'required\')">This field is required</p>\n\n		    </form>\n\n\n\n		    <div margin-top>\n\n		      <button ion-button block outline color="light" (click)="login()" [disabled]="!onRegisterForm.valid">\n\n		        SIGN UP\n\n		      </button>\n\n\n\n		      <p text-center ion-text color="light">Or Sign Up with:</p>\n\n\n\n		      <ion-grid class="btn-group">\n\n		        <ion-row>\n\n		          <button ion-button icon-only block class="btn-facebook col col-4">\n\n		            <ion-icon name="logo-facebook"></ion-icon>\n\n		          </button>\n\n		          <button ion-button icon-only block class="btn-twitter col col-4">\n\n		            <ion-icon name="logo-twitter"></ion-icon>\n\n		          </button>\n\n		          <button ion-button icon-only block class="btn-gplus col col-4">\n\n		            <ion-icon name="logo-googleplus"></ion-icon>\n\n		          </button>\n\n		        </ion-row>\n\n		      </ion-grid>\n\n		    </div>\n\n		  </div>\n\n\n\n		</div>\n\n\n\n\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\extras\auth\auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ })

});
//# sourceMappingURL=26.js.map