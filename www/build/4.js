webpackJsonp([4],{

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingListPageModule", function() { return BookingListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_list__ = __webpack_require__(653);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingListPageModule = (function () {
    function BookingListPageModule() {
    }
    BookingListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */]
            ]
        })
    ], BookingListPageModule);
    return BookingListPageModule;
}());

//# sourceMappingURL=booking-list.module.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lot_service__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LotDetailPage = (function () {
    function LotDetailPage(nav, navParams, lotService, platform, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.lotService = lotService;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        //
        this.arr = Array;
        // set sample data
        this.param = this.navParams.get('id');
        this.lot = this.lotService.getItem(this.param);
    }
    LotDetailPage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    LotDetailPage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(this.lot.location.lat, this.lot.location.lon);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById("map-detail"), mapOptions);
        new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
    };
    LotDetailPage.prototype.scrollTo = function (element) {
        var elem = document.getElementById(element);
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var top = box.top + scrollTop - clientTop;
        var cDim = this.content.getContentDimensions();
        var scrollOffset = Math.round(top) + cDim.scrollTop - cDim.contentTop;
        this.content.scrollTo(0, scrollOffset, 500);
    };
    // view a spot
    LotDetailPage.prototype.viewSpot = function (spot) {
        for (var i = 0; i < this.lot.spots.length; i++) {
            this.lot.spots[i].active = false;
        }
        spot.active = true;
    };
    // go to reviews page
    LotDetailPage.prototype.viewReviews = function () {
        this.nav.push('page-reviews');
    };
    // go to checkout page
    LotDetailPage.prototype.checkout = function (lot) {
        this.nav.push('page-checkout-lot', {
            'id': lot.id
        });
    };
    LotDetailPage.prototype.favorite = function (lot) {
        var _this = this;
        this.lotService.favorite(lot)
            .then(function (property) {
            var toast = _this.toastCtrl.create({
                message: 'Lot added to your favorites',
                cssClass: 'mytoast',
                duration: 2000
            });
            toast.present(toast);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LotDetailPage.prototype, "content", void 0);
    LotDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lot-detail',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\lot-detail\lot-detail.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar class="nav-transparent" color="dark">\n\n    <ion-title>{{ lot.name }}</ion-title>\n\n  </ion-navbar>\n\n  <ion-fab top right class="toptop">\n\n    <button ion-fab mini round icon-only color="dark">\n\n      <ion-icon name="share-alt" class="text-white"></ion-icon>\n\n    </button>\n\n    <ion-fab-list>\n\n      <button ion-fab class="btn-facebook text-white"><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab class="btn-twitter text-white"><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab class="btn-gplus text-white"><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-header>\n\n\n\n<ion-content class="common-bg">\n\n  <!--slides-->\n\n  <ion-slides class="to-top" pager>\n\n    <ion-slide *ngFor="let image of lot.images">\n\n      <img src="{{ image }}" alt="">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <!--price info-->\n\n  <div class="price-info">\n\n    <ion-badge *ngIf="lot.sale_price" class="square badge-left green-bg text-white">{{ (100 * (1 - lot.price /\n\n      lot.sale_price)).toFixed(0) }}%\n\n    </ion-badge>\n\n    <ion-badge class="square badge-right" color="danger">\n\n    {{ lot.numb_available_spots }} spots left\n\n    </ion-badge>\n\n    <div class="pull-left">\n\n      <span class="price text-white" *ngIf="!lot.sale_price" ion-text>{{ lot.price | currency }}</span>\n\n      <span class="sale-price bold text-white" *ngIf="lot.sale_price"\n\n            ion-text>{{ lot.sale_price | currency }}</span><span ion-text class="text-white">/night</span>\n\n      <span class="origin-price" *ngIf="lot.sale_price" ion-text color="light">{{ lot.price | currency }}</span>\n\n    </div>\n\n    <div class="pull-right">\n\n\n\n      <button ion-button (click)="scrollTo(\'spots\')" class="white-bg">Select a Spot</button>\n\n\n\n      <ion-fab bottom center edge>\n\n        <button ion-fab mini color="secondary" (click)="favorite(lot)">\n\n          <ion-icon name="heart" class="text-white"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n    </div>\n\n    <div class="clear"></div>\n\n  </div>\n\n\n\n  <!--rating info-->\n\n  <div class="border-bottom dark-bg" padding>\n\n    <div class="pull-left">\n\n      <span ion-text>\n\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n\n        <ion-icon name="star" class="text-white"></ion-icon>\n\n      </span> <!-- {{ lot.rating }} -->\n\n      <span ion-text class="text-white">of <strong>5</strong></span>\n\n    </div>\n\n    <div class="pull-right">\n\n      <span ion-text class="text-white" tappable (click)="viewReviews()">VIEW ALL <span class="bold">{{ lot.reviews.length }} REVIEWS</span></span>\n\n    </div>\n\n    <div class="clear"></div>\n\n  </div>\n\n\n\n  <!-- Show map here -->\n\n  <div id="map-detail"></div>\n\n\n\n  <!--lot description-->\n\n  <p class="border-bottom" padding no-margin ion-text color="primary">\n\n    {{ lot.description }}\n\n  </p>\n\n\n\n  <!--services-->\n\n  <ion-grid class="border-bottom detail-bg">\n\n    <ion-row>\n\n      <ion-col *ngFor="let service of lot.services" text-center>\n\n        <ion-icon class="text-2x" name="{{ service.icon }}" color="primary"></ion-icon>\n\n        <span class="service-name" ion-text color="primary">{{ service.name }}</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!-- all spots -->\n\n  <div class="border-bottom" padding>\n\n    <h5 ion-text color="primary">Spots</h5>\n\n    <div *ngIf="lot.is_paved">\n\n      <ion-icon name="checkmark" class="text-green"></ion-icon>\n\n      <span ion-text color="dark">All spots are fully paved</span>\n\n    </div>\n\n  </div>\n\n\n\n  <!--spots-->\n\n  <div class="spots" id="spots">\n\n    <ion-grid class="border-bottom detail-bg">\n\n    <ion-row>\n\n      <div class="border-bottom detail-bg" padding col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let spot of lot.spots">\n\n        <div class="spot-info card" [hidden]="!spot.active">\n\n          <div class="spot-image" [ngStyle]="{\'background-image\': \'url(\' + spot.thumb + \')\'}"></div>\n\n          <div class="border-bottom" padding>\n\n            <div>\n\n              <div class="pull-left">\n\n                <h6 ion-text color="dark">{{ spot.name }}</h6>\n\n              </div>\n\n              <div class="pull-right">\n\n                <span class="bold" ion-text color="primary">{{ spot.price | currency }}</span>\n\n                <span ion-text color="primary">/night</span>\n\n              </div>\n\n              <div class="clear"></div>\n\n            </div>\n\n            <div class="spot-features">\n\n              <div class="pull-left">\n\n                <div>\n\n                  <ion-icon name="checkmark" class="text-green"></ion-icon>\n\n                  {{ spot.description }}\n\n                </div>\n\n                <div *ngIf="lot.is_paved">\n\n                  <ion-icon name="checkmark" class="text-green"></ion-icon>\n\n                  <span>Includes Fully Paved Spots</span>\n\n                </div>\n\n                <div *ngIf="spot.refundable">\n\n                  <ion-icon name="checkmark" class="text-green"></ion-icon>\n\n                  Refundable\n\n                </div>\n\n                <div *ngIf="!spot.refundable">\n\n                  <ion-icon name="ios-close-circle-outline" color="danger"></ion-icon>\n\n                  Non-refundable\n\n                </div>\n\n              </div>\n\n              <div class="pull-right" text-right>\n\n                <button ion-button tappable (click)="checkout(lot)">Book</button>\n\n              </div>\n\n              <div class="clear"></div>\n\n            </div>\n\n          </div>\n\n          <div padding>\n\n            <span ion-text color="primary" class="bold">Spot information</span>\n\n            <span class="pull-right" [hidden]="spot.show_info" tappable (click)="spot.show_info = true">\n\n              <ion-icon name="ios-arrow-down" color="primary"></ion-icon>\n\n            </span>\n\n            <p [hidden]="!spot.show_info" ion-text color="primary">{{ spot.spot_info }}</p>\n\n            <span class="pull-right" [hidden]="!spot.show_info" tappable (click)="spot.show_info = false">\n\n              <ion-icon name="ios-arrow-up" color="primary"></ion-icon>\n\n            </span>\n\n            <div class="clear"></div>\n\n          </div>\n\n        </div>\n\n\n\n        <div [hidden]="spot.active">\n\n          <div class="pull-left">\n\n            <h6 ion-text color="primary">{{ spot.name }}</h6>\n\n          </div>\n\n          <div class="pull-right">\n\n            <span class="bold" ion-text color="secondary">{{ spot.price | currency }}</span>\n\n            <span ion-text color="secondary">/night</span>\n\n          </div>\n\n          <div class="clear"></div>\n\n        </div>\n\n        <div [hidden]="spot.active">\n\n          <div class="pull-left">\n\n            <div class="mb-half">{{ spot.description }}</div>\n\n            <ion-badge color="secondary">{{ spot.numb_available_spots }} Spaces left</ion-badge>\n\n            <!-- <span ion-text color="dark">{{ spot.numb_available_spots }} spots left</span> -->\n\n          </div>\n\n          <div class="pull-right" text-right>\n\n            <button ion-button color="secondary" tappable (click)="viewSpot(spot)">\n\n              <span ion-text class="text-white">View Space</span>\n\n            </button>\n\n          </div>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!--lot info-->\n\n  <div class="border-bottom" padding>\n\n    <h6 ion-text color="primary">Host Features</h6>\n\n    <p>{{ lot.features }}</p>\n\n\n\n    <h6 ion-text color="primary">Property Amenities</h6>\n\n    <p>{{ lot.spot_amenities }}</p>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\lot-detail\lot-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_lot_service__["a" /* LotService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], LotDetailPage);
    return LotDetailPage;
}());

//# sourceMappingURL=lot-detail.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lot_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lot_detail_lot_detail__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingListPage = (function () {
    function BookingListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.bookings = [];
        this.getBookings();
        // console.log(this.favorites);
    }
    BookingListPage.prototype.itemTapped = function (booking) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lot_detail_lot_detail__["a" /* LotDetailPage */], booking);
    };
    BookingListPage.prototype.getBookings = function () {
        var _this = this;
        this.service.getBookings()
            .then(function (data) { _this.bookings = data; });
    };
    BookingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking-list',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\booking-list\booking-list.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Bookings</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="common-bg">\n\n  <ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col col-12 margin-bottom>\n\n        <ion-card *ngIf="!bookings.length" class="primary-bg" margin-top>\n\n          <ion-card-content>\n\n          	<p text-center class="text-white">You have no bookings yet.</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-list>\n\n            <ion-item-sliding *ngFor="let booking of bookings">\n\n                <button ion-item (click)="itemTapped(booking.lot)">\n\n                    <ion-thumbnail item-left>\n\n                        <img src="{{booking.lot.thumb}}"/>\n\n                    </ion-thumbnail>\n\n                    <h2>{{booking.lot.name}}</h2>\n\n                    <p>{{booking.lot.address}} ∙ {{booking.lot.price  | currency }}</p>\n\n                    <ion-badge class="green-bg">Booked</ion-badge>\n\n                </button>\n\n            </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\booking-list\booking-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_lot_service__["a" /* LotService */]])
    ], BookingListPage);
    return BookingListPage;
}());

//# sourceMappingURL=booking-list.js.map

/***/ })

});
//# sourceMappingURL=4.js.map