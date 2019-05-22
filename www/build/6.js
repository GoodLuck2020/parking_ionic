webpackJsonp([6],{

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPageModule", function() { return TripsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trips__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TripsPageModule = (function () {
    function TripsPageModule() {
    }
    TripsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trips__["a" /* TripsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trips__["a" /* TripsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__trips__["a" /* TripsPage */]
            ]
        })
    ], TripsPageModule);
    return TripsPageModule;
}());

//# sourceMappingURL=trips.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trip_service__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripsPage = (function () {
    function TripsPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // set sample data
        this.trips = tripService.getAll();
    }
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        this.nav.push('page-trip-detail', {
            'id': id
        });
    };
    TripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trips',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\trips\trips.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Trip Activities</ion-title>\n\n  </ion-navbar>\n\n\n\n  <!--  -->\n\n  <ion-toolbar padding color="secondary">\n\n    <p ion-text no-margin class="text-white">\n\n      <strong>{{ trips.length }}</strong> results found!\n\n    </p>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="trips cars common-bg">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <!--list of trips-->\n\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 padding *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)">\n\n        <div class="trip car card">\n\n          <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}">\n\n            <div class="background-filter rlt">\n\n              <div class="align-bottom" padding-left padding-right>\n\n                <h6 class="pull-left text-white" ion-text>{{ trip.name }}</h6>\n\n                <h6 class="pull-right text-white" ion-text>{{ trip.price_adult | currency }}</h6>\n\n                <div class="clear"></div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div class="padding-sm primary-bg">\n\n            <ion-icon name="time" class="text-white"></ion-icon>\n\n            <span ion-text class="text-white">{{ trip.time }}</span>\n\n            <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\trips\trips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_trip_service__["a" /* TripService */]])
    ], TripsPage);
    return TripsPage;
}());

//# sourceMappingURL=trips.js.map

/***/ })

});
//# sourceMappingURL=6.js.map