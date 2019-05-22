webpackJsonp([5],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(651);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]
            ]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginPage = (function () {
    function LoginPage(authProvider, app, _fb, nav, forgotCtrl, menu, loadingCtrl, local, toastCtrl) {
        this.authProvider = authProvider;
        this.app = app;
        this._fb = _fb;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.local = local;
        this.toastCtrl = toastCtrl;
        this.menu.swipeEnable(false);
        this.menu.enable(false);
    }
    LoginPage.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
        /** setting default value **/
        this.onLoginForm.get('email').setValue('amazingskill2014@outlook.com');
        this.onLoginForm.get('password').setValue('123456');
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot('page-register');
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, email, password, loginUser_1, error_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        email = this.onLoginForm.value.email;
                        password = this.onLoginForm.value.password;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.authProvider.loginUser(email, password)];
                    case 2:
                        loginUser_1 = _a.sent();
                        this.authProvider.fillUser(loginUser_1.uid).then(function (sfDoc) {
                            console.log('fillUser');
                            var userObject = sfDoc.data();
                            _this.app.userProfile = {
                                id: loginUser_1.uid,
                                email: userObject.email,
                                full_name: userObject.full_name,
                                address: userObject.address,
                                city: userObject.city,
                                state: userObject.state,
                                user_type: userObject.user_type
                            };
                            console.log(_this.app.userProfile);
                            _this.local.set('userProfile', _this.app.userProfile);
                            loading.dismiss();
                            _this.nav.setRoot('page-home');
                        });
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        return [4 /*yield*/, loading.dismiss()];
                    case 4:
                        _a.sent();
                        alert_1 = this.forgotCtrl.create({
                            message: 'Error: ' + error_1.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        });
                        alert_1.present();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.forgotPass = function () {
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\login\login.html"*/'<!-- -->\n\n<ion-content padding class="animated fadeIn login auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding-horizontal text-center class="animated fadeInDown">\n\n      <div class="logo"></div>\n\n      <h2 ion-text class="text-white" no-margin>\n\n        Easy<strong>Parking</strong>\n\n      </h2>\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n    <form [formGroup]="onLoginForm" class="list-form">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">This field is required</p>\n\n    </form>\n\n\n\n    <p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n\n\n    <div>\n\n      <button ion-button icon-start block color="dark" tappable (click)="login()" [disabled]="!onLoginForm.valid">\n\n        <ion-icon name="log-in"></ion-icon>\n\n        SIGN IN\n\n      </button>\n\n\n\n      <p text-center ion-text color="light">Or Sign in with:</p>\n\n\n\n      <ion-grid class="btn-group">\n\n        <ion-row>\n\n          <button ion-button icon-only block class="btn-facebook col col-4">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only block class="btn-twitter col col-4">\n\n            <ion-icon name="logo-twitter"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only block class="btn-gplus col col-4">\n\n            <ion-icon name="logo-googleplus"></ion-icon>\n\n          </button>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </div>\n\n\n\n\n\n    <!-- Other links -->\n\n    <div text-center margin-top>\n\n      <span ion-text color="light" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* easyParkingApp */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(649);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(nav) {
        this.nav = nav;
    }
    // logout
    AccountPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\account\account.html"*/'<!-- -->\n\n<ion-header class="no-shadow">\n\n\n\n  <ion-navbar class="no-border" color="primary">\n\n    <ion-title>\n\n      <ion-icon name="cog"></ion-icon>\n\n      Settings\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="common-bg">\n\n  <!-- User settings-->\n\n  <ion-item-group>\n\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n\n    <ion-item>\n\n      <ion-label>Language</ion-label>\n\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n\n        <ion-option value="en-GB">English (UK)</ion-option>\n\n        <ion-option value="en-CA">English (CA)</ion-option>\n\n        <ion-option value="en-AU">English (AU)</ion-option>\n\n        <ion-option value="en-IN">English (IN)</ion-option>\n\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Currency</ion-label>\n\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n\n        <ion-option value="EUR">Euro (€)</ion-option>\n\n        <ion-option value="GBP">Pound (£)</ion-option>\n\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Units</ion-label>\n\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n\n        <ion-option value="K">Kilometers (m²)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Notifications?</ion-label>\n\n      <ion-toggle checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </ion-item-group>\n\n  <!-- App settings-->\n\n  <ion-item-group>\n\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n\n    <ion-item>\n\n      <span>Clear Private Data</span>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Push Notifications?</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span>Privacy Policy</span>\n\n    </ion-item>\n\n  </ion-item-group>  \n\n\n\n  <!--sign out button-->\n\n  <button ion-button color="secondary" full tappable (click)="logout()">LOG OUT</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=5.js.map