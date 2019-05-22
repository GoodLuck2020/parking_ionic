webpackJsonp([1],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTripsPageModule", function() { return SearchTripsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_trips__ = __webpack_require__(675);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchTripsPageModule = (function () {
    function SearchTripsPageModule() {
    }
    SearchTripsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_trips__["a" /* SearchTripsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_trips__["a" /* SearchTripsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_trips__["a" /* SearchTripsPage */]
            ]
        })
    ], SearchTripsPageModule);
    return SearchTripsPageModule;
}());

//# sourceMappingURL=search-trips.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Current Location"
                },
                {
                    id: 2,
                    name: "Miami, Florida"
                },
                {
                    id: 3,
                    name: "São Paulo, Brazil"
                },
                {
                    id: 4,
                    name: "New York, United States"
                },
                {
                    id: 5,
                    name: "London, United Kingdom"
                },
                {
                    id: 6,
                    name: "Same as pickup"
                }
            ],
            recent: [
                {
                    id: 1,
                    name: "Rio de Janeiro"
                }
            ]
        };
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    SearchLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-location',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\search-location\search-location.html"*/'<!-- # -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="list-no-border">\n\n    <!--nearby places-->\n\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n\n      <span ion-text color="primary">{{ item.name }}</span>\n\n    </ion-item>\n\n    <!--recent places-->\n\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n\n      <span ion-text color="primary">{{ item.name }}</span>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\search-location\search-location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SearchLocationPage);
    return SearchLocationPage;
}());

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_location_search_location__ = __webpack_require__(648);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchTripsPage = (function () {
    function SearchTripsPage(storage, nav) {
        this.storage = storage;
        this.nav = nav;
        // search condition
        this.search = {
            name: "Miami, Florida",
            date: new Date().toISOString()
        };
    }
    SearchTripsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.search.pickup = "Miami, Florida";
        // this.search.dropOff = "Same as pickup";
        this.storage.get('pickup').then(function (val) {
            // console.log(val)
            if (val === null) {
                _this.search.name = "Miami, Florida";
            }
            else {
                _this.search.name = val;
            }
            // this.search.pickup = val;
            // console.log(this.search.pickup)
        }).catch(function (err) {
            console.log(err);
        });
    };
    // go to result page
    SearchTripsPage.prototype.doSearch = function () {
        this.nav.push('page-trips');
    };
    // choose place
    SearchTripsPage.prototype.choosePlace = function (from) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__search_location_search_location__["a" /* SearchLocationPage */], from);
    };
    SearchTripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-trips',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\search-trips\search-trips.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Search Activities</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="search-trips common-bg">\n\n  <ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <!--search form-->\n\n        <ion-card no-margin margin-bottom class="full-width">\n\n          <ion-item tappable (click)="choosePlace(\'from\')" class="border-bottom">\n\n            <ion-icon name="search" color="primary" item-left></ion-icon>\n\n            <span>{{ search.name }}</span>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n\n            <ion-datetime class="no-pl" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" [(ngModel)]="search.date"></ion-datetime>\n\n          </ion-item>\n\n        </ion-card>\n\n\n\n        <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">\n\n          <ion-icon name="search"></ion-icon> Search\n\n        </button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\search-trips\search-trips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], SearchTripsPage);
    return SearchTripsPage;
}());

//# sourceMappingURL=search-trips.js.map

/***/ })

});
//# sourceMappingURL=1.js.map