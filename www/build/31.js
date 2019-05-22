webpackJsonp([31],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsPageModule", function() { return CarsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cars__ = __webpack_require__(652);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarsPageModule = (function () {
    function CarsPageModule() {
    }
    CarsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cars__["a" /* CarsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cars__["a" /* CarsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cars__["a" /* CarsPage */]
            ]
        })
    ], CarsPageModule);
    return CarsPageModule;
}());

//# sourceMappingURL=cars.module.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsPage; });
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



var CarsPage = (function () {
    function CarsPage(nav, carService) {
        this.nav = nav;
        this.carService = carService;
        // number of days
        this.numDays = 3;
        // set sample data
        this.shops = carService.getAll();
    }
    // view car
    CarsPage.prototype.viewDetail = function (classId) {
        this.nav.push('page-car-detail', {
            'id': classId
        });
    };
    CarsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cars',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\cars\cars.html"*/'<!--  -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Cars</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="common-bg cars">\n\n  <!--  -->\n\n  <ion-toolbar padding color="secondary">\n\n    <p ion-text no-margin class="text-white">\n\n      <strong>4</strong> results found!\n\n    </p>\n\n  </ion-toolbar>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <!--list of car shops-->\n\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let shop of shops" tappable (click)="viewDetail(shop.id)">\n\n        <div class="car card border-bottom" margin-bottom>\n\n          <div class="background" [ngStyle]="{\'background-image\': \'url(\' + shop.thumb + \')\'}">\n\n            <div class="background-filter rlt">\n\n              <div class="align-bottom" padding-left padding-right>\n\n                <h6 class="pull-left" ion-text class="text-white">{{ shop.name }}</h6>\n\n                <h6 class="pull-right" ion-text class="text-white">Daily {{ shop.price | currency }}</h6>\n\n                <div class="clear"></div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div padding class="detail-bg">\n\n            <ion-icon name="person" color="primary"></ion-icon>\n\n            <span ion-text margin-right>{{ shop.passengers_from }}-{{ shop.passengers_to }}</span>\n\n            <ion-icon name="md-briefcase" color="primary"></ion-icon>\n\n            <span ion-text>{{ shop.luggage }}</span>\n\n            <span class="pull-right" ion-text color="primary">Total <strong>{{ shop.price * numDays | currency }}</strong></span>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\cars\cars.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_car_service__["a" /* CarService */]])
    ], CarsPage);
    return CarsPage;
}());

//# sourceMappingURL=cars.js.map

/***/ })

});
//# sourceMappingURL=31.js.map