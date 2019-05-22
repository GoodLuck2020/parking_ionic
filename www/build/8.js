webpackJsonp([8],{

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabReviewsPageModule", function() { return TabReviewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_reviews__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabReviewsPageModule = (function () {
    function TabReviewsPageModule() {
    }
    TabReviewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_reviews__["a" /* TabReviewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_reviews__["a" /* TabReviewsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tab_reviews__["a" /* TabReviewsPage */]
            ]
        })
    ], TabReviewsPageModule);
    return TabReviewsPageModule;
}());

//# sourceMappingURL=tab-reviews.module.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabReviewsPage; });
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



var TabReviewsPage = (function () {
    function TabReviewsPage(nav, lotService, app) {
        this.nav = nav;
        this.lotService = lotService;
        this.app = app;
        // list of reviews
        this.reviews = [];
        // set lot data
        this.lot = lotService.getItem(1);
        // filter reviews
        var tabId = this.nav.id;
        for (var i = 0; i < this.lot.reviews.length; i++) {
            // if is recent tab
            if (tabId == 't0-0') {
                this.reviews.push(this.lot.reviews[i]);
            }
            else if (tabId == 't0-1') {
                if (this.lot.reviews[i].rating > 3) {
                    this.reviews.push(this.lot.reviews[i]);
                }
            }
            else {
                if (this.lot.reviews[i].rating <= 3) {
                    this.reviews.push(this.lot.reviews[i]);
                }
            }
        }
    }
    // make array with range is n
    TabReviewsPage.prototype.range = function (n) {
        return new Array(n);
    };
    // dismiss
    TabReviewsPage.prototype.dismiss = function () {
        this.app.getRootNav().pop();
    };
    TabReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-reviews',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\tab-reviews\tab-reviews.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar class="no-border" color="primary">\n\n    <button ion-button tappable (click)="dismiss()">\n\n      <ion-icon name="md-close"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>{{ lot.name }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div class="rating" padding>\n\n    <!--rating-->\n\n    <ion-badge class="square" color="dark">{{ lot.rating }}</ion-badge>\n\n    <span ion-text color="dark">of 5 - guest rating</span>\n\n  </div>\n\n\n\n  <!--list of reviews-->\n\n  <ion-list class="list-full-border">\n\n    <ion-item *ngFor="let review of reviews" text-wrap>\n\n      <div class="title">\n\n        <div class="pull-left bold">{{ review.title }}</div>\n\n        <div class="pull-right">{{ review.date }}</div>\n\n        <div class="clear"></div>\n\n        <div class="text-sm">\n\n          <ion-icon name="md-star" dark *ngFor="let start of range(review.rating)"></ion-icon>\n\n        </div>\n\n      </div>\n\n      <div>\n\n        {{ review.content }}\n\n      </div>\n\n      <div class="author">{{ review.username }} from {{ review.from }}</div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\tab-reviews\tab-reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_lot_service__["a" /* LotService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TabReviewsPage);
    return TabReviewsPage;
}());

//# sourceMappingURL=tab-reviews.js.map

/***/ })

});
//# sourceMappingURL=8.js.map