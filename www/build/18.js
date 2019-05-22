webpackJsonp([18],{

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walkthrough__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalkthroughPageModule = (function () {
    function WalkthroughPageModule() {
    }
    WalkthroughPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */]),
            ],
        })
    ], WalkthroughPageModule);
    return WalkthroughPageModule;
}());

//# sourceMappingURL=walkthrough.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
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


var WalkthroughPage = (function () {
    function WalkthroughPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.showSkip = true;
        this.dir = 'ltr';
        this.slideList = [
            {
                title: "What is Easy<strong>Parking</strong>?",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/ionbooking-ico.png",
            },
            {
                title: "Why EasyParking?",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/ionbooking-ico.png",
            },
            {
                title: "Your Parking near the action is coming!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/ionbooking-ico.png",
            }
        ];
    }
    WalkthroughPage.prototype.onSlideNext = function () {
        this.slides.slideNext(300);
    };
    WalkthroughPage.prototype.onSlidePrev = function () {
        this.slides.slidePrev(300);
    };
    WalkthroughPage.prototype.onLastSlide = function () {
        this.slides.slideTo(3, 300);
    };
    WalkthroughPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot('page-custom-pages');
    };
    WalkthroughPage.prototype.openAuthPage = function () {
        this.navCtrl.setRoot('page-login-list');
    };
    WalkthroughPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkthroughPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], WalkthroughPage.prototype, "slides", void 0);
    WalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-walkthrough',template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\pages\extras\walkthrough\walkthrough.html"*/'<ion-content class="primary-bg">\n\n	<ion-grid no-padding fixed>\n\n		<ion-row no-padding>\n\n			<ion-col>\n\n\n\n			  <ion-slides pager="true" dir="{{dir}}">\n\n			    <ion-slide *ngFor="let slide of slideList">\n\n			      <ion-toolbar color="primary" fixed>\n\n			        <ion-buttons end>\n\n			          <button ion-button color="light" (click)="onLastSlide()">Skip</button>\n\n			        </ion-buttons>\n\n			      </ion-toolbar>\n\n			      <img [src]="slide.image" class="slide-image">\n\n			      <h3 class="slide-title text-white" [innerHTML]="slide.title"></h3>\n\n			      <p [innerHTML]="slide.description" class="text-white"></p>\n\n\n\n						<div padding>\n\n				      <button ion-button round block color="secondary" margin-top icon-end (click)="onSlideNext()">\n\n				      	Next\n\n				      	<ion-icon name="arrow-round-forward" color="light"></ion-icon>\n\n				    	</button>\n\n			    	</div>\n\n			    </ion-slide>\n\n			    <ion-slide>\n\n			      <ion-toolbar>\n\n			      </ion-toolbar>\n\n			      <img src="assets/img/ionbooking-ico.png" class="slide-image" margin-top>\n\n			      <h2 class="slide-title text-white">Ready to Lunch?</h2>\n\n\n\n			      <div padding>\n\n			        <button ion-button block round color="secondary" margin-top (click)="openAuthPage()">\n\n			          Sign In / Sign Up\n\n			        </button>\n\n			        <button ion-button block round color="dark" margin-top (click)="openHomePage()">\n\n			          Get Started\n\n			        </button>\n\n			      </div>\n\n			    </ion-slide>\n\n			  </ion-slides>\n\n\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\pages\extras\walkthrough\walkthrough.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], WalkthroughPage);
    return WalkthroughPage;
}());

//# sourceMappingURL=walkthrough.js.map

/***/ })

});
//# sourceMappingURL=18.js.map