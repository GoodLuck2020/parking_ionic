webpackJsonp([27],{

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]
            ]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(87);
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




var EditProfilePage = (function () {
    function EditProfilePage(afStore, app, alertCtrl, navCtrl, loadingCtrl, toastCtrl) {
        this.afStore = afStore;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.profiledata = true;
    }
    // process send button
    EditProfilePage.prototype.sendData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, toast, data, error_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loader = this.loadingCtrl.create({
                            content: "Please wait..."
                        });
                        toast = this.toastCtrl.create({
                            showCloseButton: true,
                            cssClass: 'profile-bg',
                            message: 'Your Data was Edited!',
                            duration: 3000,
                            position: 'bottom'
                        });
                        loader.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 6]);
                        console.log(this.app.userProfile.id);
                        data = { full_name: this.app.userProfile.full_name,
                            email: this.app.userProfile.email,
                            address: this.app.userProfile.address,
                            city: this.app.userProfile.city,
                            state: this.app.userProfile.state,
                            user_type: this.app.userProfile.user_type
                        };
                        return [4 /*yield*/, this.afStore.collection('users').doc(this.app.userProfile.id).set(data)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loader.dismiss()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        return [4 /*yield*/, loader.dismiss()];
                    case 5:
                        _a.sent();
                        alert_1 = this.alertCtrl.create({ title: 'Save Error',
                            message: error_1.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }] });
                        alert_1.dismiss();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <span ion-text>Edit Profile</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="profile common-bg">\n\n\n\n    <ion-card>\n\n      <ion-card-content class="profile-bg">\n\n          <img src="assets/img/avatar.jpeg">\n\n          <h2 class="fw500">{{app.userProfile.full_name}}</h2>\n\n          <h3 ion-text color="light">Customer</h3>\n\n          <button ion-button icon-start margin-top color="secondary">\n\n            <ion-icon name="photos"></ion-icon>\n\n            Edit / Insert Avatar\n\n          </button>\n\n      </ion-card-content>\n\n\n\n      <ion-grid fixed>\n\n        <ion-row>\n\n          <ion-col col-12 margin-bottom padding>\n\n  	        <ion-item>\n\n  	          <ion-label color="dark" stacked>Full Name:</ion-label>\n\n  	          <ion-input type="text" placeholder="Ex..: Joe Doe" [(ngModel)]="app.userProfile.full_name"></ion-input>\n\n  	        </ion-item>\n\n\n\n  	        <ion-item>\n\n  	          <ion-label color="dark" stacked>Email:</ion-label>\n\n  	          <ion-input type="email" placeholder="Ex.: joe@doe.com"  [(ngModel)]="app.userProfile.email"></ion-input>\n\n  	        </ion-item>\n\n\n\n  	        <ion-item>\n\n  	          <ion-label color="dark" stacked>Address:</ion-label>\n\n  	          <ion-input type="text" placeholder="Ex.: Abey Road 5"  [(ngModel)]="app.userProfile.address"></ion-input>\n\n  	        </ion-item>\n\n\n\n						<ion-item>\n\n							<ion-label color="dark">City</ion-label>\n\n							<ion-select  [(ngModel)]="app.userProfile.city">\n\n								<ion-option value="New York">New York</ion-option>\n\n								<ion-option value="Los Angeles">Los Angeles</ion-option>\n\n								<ion-option value="London">London</ion-option>\n\n								<ion-option value="Paris">Paris</ion-option>\n\n								<ion-option value="São Paulo">São Paulo</ion-option>\n\n								<ion-option value="Tokyo">Tokyo</ion-option>\n\n								<ion-option value="New Delhi">New Delhi</ion-option>\n\n							</ion-select>\n\n						</ion-item>\n\n\n\n						<ion-item>\n\n							<ion-label color="dark">State</ion-label>\n\n							<ion-select  [(ngModel)]="app.userProfile.state">\n\n								<ion-option value="NY">NY</ion-option>\n\n								<ion-option value="CA">CA</ion-option>\n\n								<ion-option value="Greater London">Greater London</ion-option>\n\n								<ion-option value="Paris">Paris</ion-option>\n\n								<ion-option value="SP">SP</ion-option>\n\n								<ion-option value="Kantō">Kantō</ion-option>\n\n								<ion-option value="Delhi">Delhi</ion-option>\n\n							</ion-select>\n\n						</ion-item>\n\n\n\n  					<div radio-group margin-top margin-bottom [(ngModel)]="app.userProfile.user_type">\n\n  					  <ion-list-header no-margin no-padding>\n\n  					    <span ion-text color="dark" class="fw500">User Type</span>\n\n  					  </ion-list-header>\n\n\n\n  					  <ion-item>\n\n  					    <ion-label color="dark">Customer</ion-label>\n\n  					    <ion-radio checked="true" value="customer"></ion-radio>\n\n  					  </ion-item>\n\n\n\n  					  <ion-item>\n\n  					    <ion-label color="dark">Travel Agent</ion-label>\n\n  					    <ion-radio value="agent"></ion-radio>\n\n  					  </ion-item>\n\n  					</div>\n\n\n\n            <ion-item>\n\n            	<ion-label class="text-1x">Available to chat w/ Travel Agents?</ion-label>\n\n            	<ion-checkbox></ion-checkbox>\n\n          	</ion-item>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n			<button ion-button large full color="dark" (click)="sendData()">Edit</button>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* easyParkingApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=27.js.map