webpackJsonp([12],{

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(674);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(375);
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




var RegisterPage = (function () {
    function RegisterPage(authProvider, _fb, nav, menu) {
        this.authProvider = authProvider;
        this._fb = _fb;
        this.nav = nav;
        this.menu = menu;
        this.menu.swipeEnable(false);
        this.menu.enable(false);
    }
    RegisterPage.prototype.ngOnInit = function () {
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
    // register and go to home page
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authProvider.signupUser(this.onRegisterForm.value.email, this.onRegisterForm.value.password, this.onRegisterForm.value.fullName)];
                    case 1:
                        _a.sent();
                        this.nav.setRoot('page-login');
                        return [2 /*return*/];
                }
            });
        });
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot('page-login');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\register\register.html"*/'<!-- -->\n\n<ion-content class="auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding-horizontal text-center>\n\n      <div class="logo"></div>\n\n      <h2 ion-text class="text-white" no-margin>\n\n        Easy<strong>Parking</strong>\n\n      </h2>\n\n    </div>\n\n\n\n    <!-- Register form -->\n\n    <form [formGroup]="onRegisterForm" class="list-form">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="person" item-start class="text-white"></ion-icon>\n\n          Full Name\n\n        </ion-label>\n\n        <ion-input type="text" formControlName="fullName"></ion-input>\n\n      </ion-item>\n\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'fullName\').touched && onRegisterForm.get(\'fullName\').hasError(\'required\')">This field is required</p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'email\').touched && onRegisterForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'password\').touched && onRegisterForm.get(\'password\').hasError(\'required\')">This field is required</p>\n\n    </form>\n\n\n\n    <div margin-top>\n\n      <button ion-button block color="dark" tappable (click)="register()" [disabled]="!onRegisterForm.valid">\n\n        SIGN UP\n\n      </button>\n\n\n\n      <p text-center ion-text color="light">Or Sign Up with:</p>\n\n\n\n      <ion-grid class="btn-group">\n\n        <ion-row>\n\n          <button ion-button icon-only block class="btn-facebook col col-4">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only block class="btn-twitter col col-4">\n\n            <ion-icon name="logo-twitter"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only block class="btn-gplus col col-4">\n\n            <ion-icon name="logo-googleplus"></ion-icon>\n\n          </button>\n\n        </ion-row>\n\n      </ion-grid>  \n\n    </div>\n\n\n\n    <!-- Other links -->\n\n    <div text-center margin-top>\n\n      <span ion-text color="light" tappable (click)="login()">I have an account</span>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=12.js.map