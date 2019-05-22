webpackJsonp([15],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotPageModule", function() { return LotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lot__ = __webpack_require__(673);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LotPageModule = (function () {
    function LotPageModule() {
    }
    LotPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lot__["a" /* LotPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lot__["a" /* LotPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__lot__["a" /* LotPage */]
            ]
        })
    ], LotPageModule);
    return LotPageModule;
}());

//# sourceMappingURL=lot.module.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lot_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LotPage = (function () {
    function LotPage(nav, navParams, lotService, platform) {
        this.nav = nav;
        this.navParams = navParams;
        this.lotService = lotService;
        this.platform = platform;
        // set sample data
        var q = this.navParams.get('q');
        if (Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["p" /* isUndefined */])(q) || q.trim() == '') {
            this.lots = lotService.getAll();
        }
        else {
            this.lots = lotService.findByName(q);
        }
    }
    LotPage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    // view lot detail
    LotPage.prototype.viewLot = function (lot) {
        // console.log(lot.id)
        this.nav.push('page-lot-detail', {
            'id': lot.idx
        });
    };
    LotPage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(this.lots[0].location.lat, this.lots[0].location.lon);
        var mapOptions = {
            center: latLng,
            zoom: 11,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // add markers to map by lot
        for (var i = 0; i < this.lots.length; i++) {
            var lot = this.lots[i];
            new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(lot.location.lat, lot.location.lon)
            });
        }
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
    };
    // view all lots
    LotPage.prototype.viewLots = function () {
        this.nav.push('page-lot');
    };
    LotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lot',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\lot\lot.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Searched Places</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="dark-bg">\n\n  <!-- Show map here -->\n\n  <div id="map"></div>\n\n\n\n  <ion-toolbar color="secondary" padding-horizontal>\n\n    <p ion-text class="text-white">\n\n      <strong>{{lots.length}}</strong> results found!\n\n    </p>\n\n  </ion-toolbar>\n\n\n\n  <!--list of lots-->\n\n  <ion-grid class="list-lots" no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col no-padding tappable col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let lot of lots" (click)="viewLot(lot)">\n\n        <div class="lot-bg" [ngStyle]="{\'background-image\': \'url(\' + lot.thumb + \')\'}">\n\n          <div class="bg-filter">\n\n            <div class="discount" *ngIf="lot.sale_price">{{ (100 * (1 - lot.price / lot.sale_price)).toFixed(0)\n\n              }}%\n\n            </div>\n\n            <div class="bottom-info">\n\n\n\n              <div>\n\n                <div class="pull-left">\n\n                  <h5 ion-text class="text-white">{{ lot.name }}</h5>\n\n                </div>\n\n                <div class="pull-right">\n\n                  <ion-badge class="square badge-right" color="primary">\n\n                  {{ lot.numb_available_spots }} spots left\n\n                  </ion-badge>\n\n                </div>\n\n                <div class="clear"></div>\n\n              </div>\n\n\n\n              <div>\n\n                <div class="pull-left">\n\n                  <ion-badge class="square" color="secondary">{{ lot.rating }}</ion-badge>\n\n                  <span class="rating-label text-white" ion-text> of 5 - guest rating</span>\n\n                </div>\n\n                <div class="pull-right">\n\n                  <span class="price text-white" *ngIf="!lot.sale_price"\n\n                        ion-text>{{ lot.price | currency }}</span>\n\n                  <span class="origin-price" *ngIf="lot.sale_price">{{ lot.price | currency }}</span>\n\n                  <span class="sale-price text-white bold" *ngIf="lot.sale_price" ion-text>{{ lot.sale_price | currency }}</span>\n\n                </div>\n\n                <div class="clear"></div>\n\n              </div>\n\n            </div>\n\n\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\lot\lot.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_lot_service__["a" /* LotService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], LotPage);
    return LotPage;
}());

//# sourceMappingURL=lot.js.map

/***/ })

});
//# sourceMappingURL=15.js.map