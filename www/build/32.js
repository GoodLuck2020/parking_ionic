webpackJsonp([32],{

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailPageModule", function() { return CarDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_detail__ = __webpack_require__(654);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarDetailPageModule = (function () {
    function CarDetailPageModule() {
    }
    CarDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__car_detail__["a" /* CarDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__car_detail__["a" /* CarDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__car_detail__["a" /* CarDetailPage */]
            ]
        })
    ], CarDetailPageModule);
    return CarDetailPageModule;
}());

//# sourceMappingURL=car-detail.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_car_service__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarDetailPage = (function () {
    function CarDetailPage(nav, navParams, carService) {
        this.nav = nav;
        this.navParams = navParams;
        this.carService = carService;
        // number of days
        this.numDays = 3;
        this.param = this.navParams.get('id');
        this.shop = this.carService.getItem(this.param) ? this.carService.getItem(this.param) : this.carService.getAll()[0];
    }
    // go to checkout page
    CarDetailPage.prototype.checkout = function (shop) {
        this.nav.push('page-checkout-car', {
            'id': shop.id
        });
    };
    CarDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car-detail',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\car-detail\car-detail.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Car Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="common-bg">\n\n  <img class="full-width to-top" src="{{ shop.thumb }}" alt="">\n\n  <!-- shop name and infomation-->\n\n  <div class="border-bottom detail-bg" padding>\n\n    <h4 class="pull-left" no-margin ion-text color="primary">{{ shop.name }}</h4>\n\n    <div class="pull-right">\n\n      <span ion-text text-center>average price</span>\n\n      <h5 class="bold" no-margin ion-text text-center color="primary">\n\n        {{ shop.price | currency }}\n\n      </h5>\n\n    </div>\n\n    <div class="clear"></div>\n\n    <div>\n\n      <span>{{ shop.slogan }}</span>\n\n      <br/>\n\n      <span ion-text color="secondary">{{ shop.address }}</span>\n\n    </div>\n\n  </div>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <!-- car info -->\n\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let car of shop.cars">\n\n        <div class="car car-info card round" margin>\n\n          <div class="car-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + car.thumb + \')\'}"></div>\n\n          <div class="border-bottom" padding>\n\n            <div class="pull-left">\n\n              <h5 no-margin ion-text color="primary">{{ car.name }}</h5>\n\n      <!--         <span>{{ shop.slogan }}</span> -->\n\n            </div>\n\n            <div class="pull-right" text-right>\n\n              <h6 no-margin color="car-ion-text color">Daily {{ car.price | currency }}</h6>\n\n              <span ion-text color="dark">Total <strong>{{ car.price * numDays | currency }}</strong></span>\n\n            </div>\n\n            <div class="clear"></div>\n\n          </div>\n\n          <div padding>\n\n            <div class="pull-left">\n\n              <div>\n\n                <ion-icon name="person" color="dark"></ion-icon>\n\n                <span ion-text color="dark" margin-right>{{ car.passengers }} Passengers</span>\n\n              </div>\n\n              <div>\n\n                <ion-icon name="md-briefcase" color="dark"></ion-icon>\n\n                <span ion-text color="dark">{{ shop.luggage }} Bags</span>\n\n              </div>\n\n              <div>\n\n                <ion-icon name="md-checkmark" color="dark"></ion-icon>\n\n                <span ion-text color="dark" *ngIf="car.automatic_transmission">Automatic transmission</span>\n\n                <span ion-text color="dark" *ngIf="!car.automatic_transmission">Manual transmission</span>\n\n              </div>\n\n            </div>\n\n            <div class="pull-right">\n\n              <button ion-button color="secondary" tappable (click)="checkout(shop)">Reserve</button>\n\n            </div>\n\n            <div class="clear"></div>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\car-detail\car-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_car_service__["a" /* CarService */]])
    ], CarDetailPage);
    return CarDetailPage;
}());

//# sourceMappingURL=car-detail.js.map

/***/ })

});
//# sourceMappingURL=32.js.map