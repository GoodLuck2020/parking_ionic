webpackJsonp([7],{

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailPageModule", function() { return TripDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trip_detail__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TripDetailPageModule = (function () {
    function TripDetailPageModule() {
    }
    TripDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trip_detail__["a" /* TripDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trip_detail__["a" /* TripDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__trip_detail__["a" /* TripDetailPage */]
            ]
        })
    ], TripDetailPageModule);
    return TripDetailPageModule;
}());

//# sourceMappingURL=trip-detail.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
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



var TripDetailPage = (function () {
    function TripDetailPage(nav, navParams, tripService) {
        this.nav = nav;
        this.navParams = navParams;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.param = this.navParams.get('id');
        this.trip = this.tripService.getItem(this.param) ? this.tripService.getItem(this.param) : this.tripService.getAll()[0];
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function (trip) {
        this.nav.push('page-checkout-trip', {
            'id': trip.id
        });
    };
    TripDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trip-detail',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\trip-detail\trip-detail.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ trip.name }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class=" common-bg">\n\n  <!--slides-->\n\n  <ion-slides class="to-top" pager>\n\n    <ion-slide *ngFor="let image of trip.images">\n\n      <img src="{{ image }}" alt="">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <!--services-->\n\n  <ion-grid class="border-bottom detail-bg">\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <div class="text-sm">\n\n          <div>\n\n            <ion-icon name="time" color="primary"></ion-icon>\n\n            <span ion-text color="secondary">{{ trip.time }}</span>\n\n            <ion-icon name="checkbox-outline" margin-left color="primary" *ngIf="trip.free_cancellation"></ion-icon>\n\n            <span ion-text color="secondary" *ngIf="trip.free_cancellation">Free cancellation</span>\n\n            <ion-icon name="list-box" margin-left color="primary" *ngIf="trip.electric_voucher"></ion-icon>\n\n            <span ion-text color="secondary" *ngIf="trip.electric_voucher">Electronic voucher</span>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <!--high light-->\n\n        <div class="border-bottom" padding>\n\n          <span ion-text color="dark" class="bold">HIGHLIGHT</span>\n\n          <ul class="highlight">\n\n            <li *ngFor="let highlight of trip.highlights">\n\n              <ion-icon name="checkmark" class="text-green"></ion-icon>\n\n              <span ion-text color="primary">{{ highlight }}</span>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n\n\n        <!--booking form-->\n\n        <div class="booking-form card round" margin>\n\n          <div class="border-bottom" padding>\n\n            <h5>{{ trip.sub_name }}</h5>\n\n\n\n            <!--choose guest-->\n\n            <ion-grid class="filters" no-padding margin-top>\n\n              <ion-row>\n\n                <ion-col class="adult" width-70>\n\n                  <span ion-text color="primary"><strong>{{ trip.price_adult | currency }}</strong> Adults</span>\n\n                </ion-col>\n\n                <ion-col width-10 text-center>\n\n                  <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n\n                            color="secondary"></ion-icon>\n\n                </ion-col>\n\n                <ion-col width-10 text-center>{{ adults }}</ion-col>\n\n                <ion-col width-10 text-center>\n\n                  <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row margin-top>\n\n                <ion-col width-70>\n\n                  <span ion-text color="primary"><strong>{{ trip.price_child | currency }}</strong> Child (0-12 years)</span>\n\n                </ion-col>\n\n                <ion-col width-10 text-center>\n\n                  <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n\n                            color="secondary"></ion-icon>\n\n                </ion-col>\n\n                <ion-col width-10 text-center>{{ children }}</ion-col>\n\n                <ion-col width-10 text-center>\n\n                  <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="secondary"></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </div>\n\n          <div padding class="form-bottom">\n\n      <!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n\n            <!--booking button-->\n\n            <button ion-button class="pull-right" color="secondary" tappable (click)="checkout(trip)">Book Now {{ adults * trip.price_adult +\n\n              children * trip.price_child | currency }}\n\n            </button>\n\n            <div class="clear"></div>\n\n          </div>\n\n        </div>\n\n\n\n        <!--description-->\n\n        <div class="border-bottom" padding>\n\n          <span ion-text color="primary" class="bold">DESCRIPTION</span>\n\n          <p ion-text>{{ trip.description }}</p>\n\n        </div>\n\n\n\n        <!--address-->\n\n        <div class="border-bottom" padding>\n\n          <span ion-text color="primary" class="bold">LOCATION</span>\n\n          <p ion-text>{{ trip.location }}</p>\n\n        </div>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\trip-detail\trip-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_trip_service__["a" /* TripService */]])
    ], TripDetailPage);
    return TripDetailPage;
}());

//# sourceMappingURL=trip-detail.js.map

/***/ })

});
//# sourceMappingURL=7.js.map