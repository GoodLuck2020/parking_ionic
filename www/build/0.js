webpackJsonp([0],{

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(669);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
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


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\notifications\notifications.html"*/'<ion-list class="no-margin">\n\n  <ion-list-header class="no-margin">\n\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n\n  	<span ion-text color="primary" class="bold">Notifications</span>\n\n  </ion-list-header>\n\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail"></ion-icon>\n\n  	New booking success!\n\n  </button>\n\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail"></ion-icon>\n\n  	Activity rescheduled\n\n  </button>\n\n  <button ion-item class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n\n  	<span ion-text color="secondary">Activity rescheduled</span>\n\n  </button>\n\n  <button ion-item class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n\n  	<span ion-text color="secondary">Activity rescheduled</span>\n\n  </button>\n\n</ion-list>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lot_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_util__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(nav, navParams, menuCtrl, modalCtrl, popoverCtrl, lotService, platform, app) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.lotService = lotService;
        this.platform = platform;
        this.app = app;
        this.dDate = new Date();
        this.searchQuery = '';
        this.showItems = false;
        // is loading all data
        this.isInitialized = false;
        this.full_name = "";
        // search conditions
        this.checkin = {
            name: "Check-in",
            date: this.dDate.toISOString()
        };
        this.checkout = {
            name: "Check-out",
            date: new Date(this.dDate.setDate(this.dDate.getDate() + 1)).toISOString()
        };
        // set sample data
        this.menuCtrl.swipeEnable(true, 'authenticated');
        this.menuCtrl.enable(true);
        lotService.getPlaces().then(function (data) {
            if (data) {
                _this.searchItems = Array.from(lotService.items.keys());
                _this.items = _this.searchItems;
                _this.isInitialized = true;
                _this.lots = lotService.lots;
                console.log(_this.lots);
                _this.initializeMap();
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // init map
        this.platform.ready().then(function () { return _this.initializeDevice(); });
    };
    HomePage.prototype.initializeDevice = function () {
        var _this = this;
        this.geolocation = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]();
        this.geolocation.getCurrentPosition().then(function (data) {
            _this.app.coordinate = data.coords;
        }).catch(function (error) {
            console.log('Can\'t get current location');
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            _this.app.coordinate = data.coords;
        });
    };
    HomePage.prototype.initializeMap = function () {
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
        this.map = new google.maps.Map(document.getElementById("home-map"), mapOptions);
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
    HomePage.prototype.itemSelected = function (item) {
        this.lotlocation = item;
        this.showItems = false;
    };
    HomePage.prototype.childrenArr = function (chil) {
        var child = Number(chil);
        this.childs = Array(child).fill(0).map(function (v, i) { return i; });
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        if (this.isInitialized == false)
            return;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.showItems = true;
            this.items = this.searchItems.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.showItems = false;
        }
    };
    // view lot detail
    HomePage.prototype.viewLot = function (lot) {
        console.log(lot);
        this.nav.push('page-lot-detail', {
            'id': lot.idx
        });
    };
    // view all lots
    HomePage.prototype.viewLots = function () {
        var data = this.lotService.items.get(this.lotlocation);
        if (Object(__WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_util__["p" /* isUndefined */])(data))
            return;
        var key = data.join(' ');
        this.nav.push('page-lot', { q: key });
    };
    // go to search car page
    HomePage.prototype.searchCar = function () {
        this.nav.push('page-search-cars');
    };
    // go to search trip page
    HomePage.prototype.searchTrip = function () {
        this.nav.push('page-search-trips');
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push('page-account');
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        // console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\home\home.html"*/'<!-- -->\n\n<ion-header class="animated fadeIn no-shadow">\n\n\n\n  <ion-navbar class="no-border" color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div ion-text class="icon-title text-white"></div>\n\n      Easy<strong>Parking</strong>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="presentNotifications($event)">\n\n        <ion-icon name="notifications"></ion-icon>\n\n      </button>\n\n      <button ion-button tappable (click)="goToAccount()">\n\n        <ion-icon name="cog"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="animated fadeIn common-bg">\n\n  <!--list menu on the top-->\n\n  <div class="booking-card marginB-16px">\n\n    <ion-grid class="card" fixed>\n\n      <ion-row>\n\n        <ion-col class="no-padding">\n\n          <ion-searchbar [(ngModel)]="lotlocation" (ionInput)="getItems($event)" (ionCancel)="showItems = !showItems" autocomplete="on" autocorrect="on" spellcheck="true" animated="true" placeholder="Destination or address..."></ion-searchbar>\n\n          <ion-list class="searchbar-results animated fadeIn" *ngIf="showItems">\n\n            <button ion-item *ngFor="let item of items" tappable (click)="itemSelected(item)">\n\n              <ion-icon name="pin"></ion-icon>\n\n              {{ item }}\n\n            </button>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!--<ion-row>\n\n        <ion-col col-6 class="bb no-paddingB">\n\n          <ion-label class="no-margin mb-half bold text-primary">{{ checkin.name }}</ion-label>\n\n        </ion-col>\n\n        <ion-col col-6 class="bb no-paddingB">\n\n           <ion-label class="no-margin mb-half bold text-primary">{{ checkout.name }}</ion-label>\n\n        </ion-col>\n\n        <ion-col col-6 class="br bb datetime-btn">\n\n          <ion-icon name="md-calendar" item-left></ion-icon>\n\n          <ion-datetime class="text-primary" displayFormat="DDD, MMM, DD" pickerFormat="DD/MM/YYYY" [(ngModel)]="checkin.date"></ion-datetime>\n\n        </ion-col>\n\n        <ion-col col-6 class="bb datetime-btn">\n\n          <ion-icon name="md-calendar" item-left></ion-icon>\n\n          <ion-datetime class="text-primary" displayFormat="DDD, MMM, DD" pickerFormat="DD/MM/YYYY" [(ngModel)]="checkout.date"></ion-datetime>\n\n        </ion-col>\n\n      </ion-row>-->\n\n      <!--<ion-row>\n\n        <ion-col col-6 col-md-4 class="no-paddingT no-paddingB">\n\n          <div class="guests bb">\n\n            <ion-item>\n\n              <ion-label>Parking Spots</ion-label>\n\n              <ion-select [(ngModel)]="spots" cancelText="Cancel" okText="OK">\n\n                <ion-option value="1" selected="true">1</ion-option>\n\n                <ion-option value="2">2</ion-option>\n\n                <ion-option value="3">3</ion-option>\n\n                <ion-option value="4">4</ion-option>\n\n                <ion-option value="5">5</ion-option>\n\n                <ion-option value="6">6</ion-option>\n\n                <ion-option value="7">7</ion-option>\n\n                <ion-option value="8">8</ion-option>\n\n                <ion-option value="9">9</ion-option>\n\n                <ion-option value="10">10</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-4 class="no-paddingT no-paddingB">\n\n          <div class="guests bb">\n\n            <ion-item>\n\n              <ion-label>Size</ion-label>\n\n              <ion-select [(ngModel)]="adults" cancelText="Cancel" okText="OK">\n\n                <ion-option value="1" selected="true">Car</ion-option>\n\n                <ion-option value="2">Truck</ion-option>\n\n                <ion-option value="3">Suv</ion-option>\n\n                <ion-option value="4">Trailer</ion-option>\n\n                <ion-option value="5">Motorcycle</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-4 class="no-paddingT no-paddingB">\n\n          <div class="guests bb">\n\n            <ion-item>\n\n              <ion-label>Passengers</ion-label>\n\n              <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n\n                <ion-option value="0" selected="true">0</ion-option>\n\n                <ion-option value="1">1</ion-option>\n\n                <ion-option value="2">2</ion-option>\n\n                <ion-option value="3">3</ion-option>\n\n                <ion-option value="4">4</ion-option>\n\n                <ion-option value="5">5</ion-option>\n\n                <ion-option value="6">6</ion-option>\n\n                <ion-option value="7">7</ion-option>\n\n                <ion-option value="8">8</ion-option>\n\n                <ion-option value="9">9</ion-option>\n\n                <ion-option value="10">10</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6 class="no-paddingT no-paddingB">\n\n\n\n        </ion-col>\n\n      </ion-row>-->\n\n\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button block color="primary" class="round" tappable (click)="viewLots()">\n\n            <ion-icon name="search"></ion-icon>\n\n            Search\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!--<ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col col-md-8 col-lg-6 offset-md-2 offset-lg-3>\n\n\n\n        <ion-card class="home-card no-marginT marginB-32px" no-padding>\n\n\n\n          <ion-list>\n\n            <button ion-item color="secondary" tappable (click)="searchCar()">\n\n              <ion-icon name="car" item-start></ion-icon>\n\n                Rent a Car\n\n            </button>\n\n            <button ion-item color="secondary" tappable (click)="searchTrip()">\n\n              <ion-icon name="beer" item-start></ion-icon>\n\n                Trip Activities\n\n            </button>\n\n          </ion-list>\n\n\n\n        </ion-card>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>-->\n\n\n\n  <hr class="secondary-bg quarter-op" no-margin>\n\n\n\n  <ion-item-group class="home-widget">\n\n    <ion-item-divider color="primary">\n\n      <h2 ion-text class="bold text-white">\n\n        <ion-icon name="home"></ion-icon>\n\n        Parking Near You\n\n        <ion-badge class="pull-right green-bg text-white" tappable (click)="viewLots()">SEE MORE</ion-badge>\n\n      </h2>\n\n    </ion-item-divider>\n\n    <ion-item>\n\n      <div id="home-map" class="google-map"></div>\n\n    </ion-item>\n\n  </ion-item-group>\n\n\n\n  <ion-item-group class="home-widget">\n\n    <ion-item-divider color="primary">\n\n      <h2 ion-text class="bold text-white">\n\n        <ion-icon name="pricetags"></ion-icon>\n\n        Promotions Today\n\n      </h2>\n\n    </ion-item-divider>\n\n    <ion-item>\n\n\n\n      <ion-grid class="list-lots primary-bg" no-padding>\n\n        <ion-row no-padding>\n\n          <ion-col col-6 col-lg-3 *ngFor="let lot of lots; let i = index" col-6 col-md-3 tappable (click)="viewLot(lot)">\n\n            <div class="lot-bg" [ngStyle]="{\'background-image\': \'url(\' + lot.thumb + \')\'}" *ngIf="i < 4">\n\n              <div class="bg-filter">\n\n                <div class="discount" *ngIf="lot.sale_price">{{ (100 * (1 - lot.price / lot.sale_price)).toFixed(0)\n\n                  }}%\n\n                </div>\n\n                <div class="bottom-info">\n\n\n\n                  <div>\n\n                    <div class="pull-left">\n\n                      <h5 ion-text class="text-white">{{ lot.name }}</h5>\n\n                    </div>\n\n                    <div class="pull-right">\n\n                      <span class="origin-price hide-sm"\n\n                            *ngIf="lot.sale_price">{{ lot.price | currency:\'USD\':\'code\' }}</span>\n\n                    </div>\n\n                    <div class="clear"></div>\n\n                  </div>\n\n\n\n                  <div>\n\n                    <div class="pull-left">\n\n                      <ion-badge class="square" color="secondary">{{ lot.rating }}</ion-badge>\n\n                      <span class="rating-label text-white" ion-text> of 5 - guest rating</span>\n\n                    </div>\n\n                    <div class="pull-right">\n\n                      <span class="origin-price hide-lg"\n\n                            *ngIf="lot.sale_price">{{ lot.price | currency }}</span>\n\n                      <span class="price text-white" *ngIf="!lot.sale_price"\n\n                            ion-text>{{ lot.price | currency }}</span>\n\n                      <span class="sale-price" *ngIf="lot.sale_price"\n\n                            ion-text class="text-white">{{ lot.sale_price | currency }}</span>\n\n                    </div>\n\n                    <div class="clear"></div>\n\n                  </div>\n\n                </div>\n\n\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-item>\n\n  </ion-item-group>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_lot_service__["a" /* LotService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* easyParkingApp */]])
    ], HomePage);
    return HomePage;
}());

//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Geolocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name Geolocation
 * @description
 * This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
 *
 *  This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.
 *
 * For iOS you have to add this configuration to your configuration.xml file
 * ```xml
 * <edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
 *    <string>We want your location! Best regards NSA</string>
 * </edit-config>
 * ```
 *
 *
 * @usage
 *
 * ```typescript
 * import { Geolocation } from '@ionic-native/geolocation';
 *
 * ...
 *
 * constructor(private geolocation: Geolocation) {}
 *
 * ...
 *
 * this.geolocation.getCurrentPosition().then((resp) => {
 *  // resp.coords.latitude
 *  // resp.coords.longitude
 * }).catch((error) => {
 *   console.log('Error getting location', error);
 * });
 *
 * let watch = this.geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  // data can be a set of coordinates, or an error (if an error occurred).
 *  // data.coords.latitude
 *  // data.coords.longitude
 * });
 * ```
 * @interfaces
 * Coordinates
 * Geoposition
 * PositionError
 * GeolocationOptions
 */
var Geolocation = (function (_super) {
    __extends(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device's current position.
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Promise<Geoposition>} Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
     */
    Geolocation.prototype.getCurrentPosition = function (options) { return; };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    Geolocation.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    Geolocation.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Geolocation.prototype, "getCurrentPosition", null);
    Geolocation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Geolocation',
            plugin: 'cordova-plugin-geolocation',
            pluginRef: 'navigator.geolocation',
            repo: 'https://github.com/apache/cordova-plugin-geolocation',
            install: 'ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"',
            installVariables: ['GEOLOCATION_USAGE_DESCRIPTION'],
            platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows']
        })
    ], Geolocation);
    return Geolocation;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map