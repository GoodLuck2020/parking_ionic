webpackJsonp([9],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support__ = __webpack_require__(677);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupportPageModule = (function () {
    function SupportPageModule() {
    }
    SupportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */]
            ]
        })
    ], SupportPageModule);
    return SupportPageModule;
}());

//# sourceMappingURL=support.module.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\support\support.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <span ion-text>Support</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="common-bg">\n\n\n\n    <div class="support-header">\n\n        <img src="assets/img/support-app.jpg">\n\n    </div>\n\n\n\n  <ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col col-12 margin-bottom>\n\n        <ion-card class="full-width" no-margin>\n\n\n\n            <ion-list>\n\n                <a href="tel:1111" ion-item>\n\n                    <ion-icon name="call" item-start></ion-icon>\n\n                    <p ion-text color="primary">Call For General Support</p>\n\n                    <h2 ion-text color="dark">+1 (123) 456-7890</h2>\n\n                </a>\n\n                <a href="tel:1111" ion-item>\n\n                    <ion-icon name="call" item-start></ion-icon>\n\n                    <p ion-text color="primary">Call for Booking or App Support</p>\n\n                    <h2 ion-text color="dark">+1 (123) 456-7890</h2>\n\n                </a>\n\n                <a href="mailto:support@easyparkingapp.com" ion-item>\n\n                    <ion-icon name="mail" item-start></ion-icon>\n\n                    <p ion-text color="primary">Email</p>\n\n                    <h2 ion-text color="dark">support@easyparkingapp.com</h2>\n\n                </a>\n\n            </ion-list>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\support\support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ })

});
//# sourceMappingURL=9.js.map