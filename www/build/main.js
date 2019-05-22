webpackJsonp([33],{

/***/ 212:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		614,
		5
	],
	"../pages/booking-list/booking-list.module": [
		616,
		4
	],
	"../pages/car-detail/car-detail.module": [
		617,
		32
	],
	"../pages/cars/cars.module": [
		615,
		31
	],
	"../pages/checkout-car/checkout-car.module": [
		620,
		30
	],
	"../pages/checkout-lot/checkout-lot.module": [
		618,
		29
	],
	"../pages/checkout-trip/checkout-trip.module": [
		621,
		28
	],
	"../pages/edit-profile/edit-profile.module": [
		619,
		27
	],
	"../pages/extras/auth/auth.module": [
		622,
		26
	],
	"../pages/extras/custom-pages/custom-pages.module": [
		623,
		25
	],
	"../pages/extras/login-list/login-list.module": [
		625,
		24
	],
	"../pages/extras/login1/login1.module": [
		624,
		23
	],
	"../pages/extras/login2/login2.module": [
		626,
		22
	],
	"../pages/extras/login3/login3.module": [
		627,
		21
	],
	"../pages/extras/login4/login4.module": [
		630,
		20
	],
	"../pages/extras/login5/login5.module": [
		628,
		19
	],
	"../pages/extras/walkthrough/walkthrough.module": [
		629,
		18
	],
	"../pages/favorite-list/favorite-list.module": [
		631,
		3
	],
	"../pages/home/home.module": [
		632,
		0
	],
	"../pages/login/login.module": [
		635,
		17
	],
	"../pages/lot-detail/lot-detail.module": [
		638,
		16
	],
	"../pages/lot/lot.module": [
		637,
		15
	],
	"../pages/notifications/notifications.module": [
		633,
		14
	],
	"../pages/place/place.module": [
		634,
		13
	],
	"../pages/register/register.module": [
		639,
		12
	],
	"../pages/reviews/reviews.module": [
		636,
		11
	],
	"../pages/search-cars/search-cars.module": [
		642,
		2
	],
	"../pages/search-location/search-location.module": [
		640,
		10
	],
	"../pages/search-trips/search-trips.module": [
		641,
		1
	],
	"../pages/support/support.module": [
		643,
		9
	],
	"../pages/tab-reviews/tab-reviews.module": [
		645,
		8
	],
	"../pages/trip-detail/trip-detail.module": [
		646,
		7
	],
	"../pages/trips/trips.module": [
		644,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 255;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {LOTS} from "../mocks/mock-lots";

var LotService = (function () {
    function LotService(afStore) {
        this.afStore = afStore;
        this.favoriteCounter = 0;
        this.favorites = [];
        this.bookingCounter = 0;
        this.bookings = [];
        //this.lots = LOTS;
        this.items = new Map();
        this.lots = new Array();
    }
    LotService.prototype.getPlaces = function () {
        var _this = this;
        this.lots = [];
        return new Promise(function (resolve, reject) {
            _this.afStore.collection('places').ref.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var data = doc.data();
                    data.id = doc.id;
                    data.idx = _this.lots.length;
                    _this.lots.push(data);
                    var key1 = data.address1;
                    var key2 = data.address1 + ' - ' + data.address2;
                    var key3 = data.address;
                    if (!_this.items.has(key1)) {
                        _this.items.set(key1, [data.address1]);
                    }
                    if (!_this.items.has(key2)) {
                        _this.items.set(key2, [data.address1, data.address2]);
                    }
                    if (!_this.items.has(key3)) {
                        _this.items.set(key3, [data.address]);
                    }
                });
                resolve(true);
            });
        });
    };
    LotService.prototype.getItems = function () {
        return this.items;
    };
    LotService.prototype.getAll = function () {
        console.log(this.lots);
        return this.lots;
    };
    LotService.prototype.getItem = function (id) {
        return this.lots[id];
    };
    LotService.prototype.remove = function (item) {
        this.lots.splice(this.lots.indexOf(item), 1);
    };
    /////
    //For Search and Favorites
    ////
    LotService.prototype.findAll = function () {
        return Promise.resolve(this.lots);
    };
    LotService.prototype.findById = function (id) {
        return Promise.resolve(this.lots[id - 1]);
    };
    LotService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        console.log(key);
        return this.lots.filter(function (property) {
            return (property.address1 + ' ' + property.address2 + ' ' + property.address).toUpperCase().indexOf(key) > -1;
        });
    };
    LotService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    LotService.prototype.getBookings = function () {
        return Promise.resolve(this.bookings);
    };
    LotService.prototype.favorite = function (lot) {
        this.favoriteCounter = this.favoriteCounter + 1;
        var exist = false;
        if (this.favorites && this.favorites.length > 0) {
            this.favorites.forEach(function (val, i) {
                if (val.lot.id === lot.id) {
                    exist = true;
                }
            });
        }
        if (!exist) {
            this.favorites.push({ id: this.favoriteCounter, lot: lot });
        }
        return Promise.resolve();
    };
    LotService.prototype.booking = function (lot) {
        this.bookingCounter = this.bookingCounter + 1;
        var existb = false;
        if (this.bookings && this.bookings.length > 0) {
            this.bookings.forEach(function (val, i) {
                if (val.lot.id === lot.id) {
                    existb = true;
                }
            });
        }
        if (!existb) {
            this.bookings.push({ id: this.bookingCounter, lot: lot });
        }
        return Promise.resolve();
    };
    LotService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    LotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], LotService);
    return LotService;
}());

//# sourceMappingURL=lot-service.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return easyParkingApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var easyParkingApp = (function () {
    function easyParkingApp(platform, statusBar, splashScreen, keyboard, local) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.local = local;
        this.rootPage = "page-login";
        this.showMenu = true;
        this.initializeApp();
        // this.app.getRootNavs()[0]
        // this.app._rootNavs.map(page => {
        //   console.log(page)
        // })
        // console.log(this.nav)
        this.userProfile = {
            id: "",
            email: "",
            full_name: "--",
            address: "",
            city: "",
            state: "",
            user_type: ""
        };
        this.appMenuItems = [
            { title: 'Home', component: 'page-home', icon: 'home' },
            //  {title: 'Rent a Spot', component: 'page-search-cars', icon: 'car'},
            { title: 'Activities', component: 'page-search-trips', icon: 'beer' },
            { title: 'Favorites', component: 'page-favorite-list', icon: 'heart' },
            { title: 'Reserved Parking List', component: 'page-booking-list', icon: 'briefcase' },
            { title: 'Support', component: 'page-support', icon: 'help-buoy' },
        ];
    }
    easyParkingApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
        });
        this.local.get('userProfile').then(function (data) {
            _this.userProfile = data;
        });
        //console.log(this.userProfile);
    };
    easyParkingApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    easyParkingApp.prototype.logout = function () {
        this.nav.setRoot('page-login');
    };
    easyParkingApp.prototype.editProfile = function () {
        this.nav.setRoot('page-edit-profile');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], easyParkingApp.prototype, "nav", void 0);
    easyParkingApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\appstore\parking\app-parking\src\app\app.html"*/'<ion-split-pane when="lg">\n\n\n\n  <ion-menu side="left" id="authenticated" [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar class="user-profile">\n\n\n\n        <ion-fab top right class="hideLg">\n\n          <button ion-fab mini color="dark" menuClose>\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n\n\n        <ion-grid>\n\n          <ion-row justify-content-center>\n\n            <ion-col padding-left padding-right padding-top col-auto>\n\n                <div class="user-avatar"></div>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row justify-content-center>\n\n            <ion-col padding-left padding-right padding-bottom text-center col-auto>\n\n              <h2 ion-text color="light" class="no-margin bold">\n\n                {{userProfile ? userProfile.full_name : \'\'}}\n\n              </h2>\n\n              <span ion-text color="secondary">{{userProfile ? userProfile.email : \'\'}}</span>\n\n              <div padding-top>\n\n                <button ion-button icon-left small color="secondary" menuClose (click)="editProfile()">\n\n                  <ion-icon name="contact"></ion-icon>\n\n                  Edit Profile\n\n                </button>\n\n                <button ion-button icon-left small color="secondary" menuClose (click)="logout()">\n\n                  <ion-icon name="log-out"></ion-icon>\n\n                  Log Out\n\n                </button>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row class="other-data" padding-vertical>\n\n            <ion-col text-center class="column">\n\n              <span ion-text color="light" class="bold">Points</span>\n\n              <h5 ion-text no-margin class="text-1x text-white">1124</h5>\n\n            </ion-col>\n\n            <ion-col text-center class="column">\n\n              <span ion-text color="light" class="bold">Location</span>\n\n              <h5 ion-text no-margin class="text-1x text-white">Miami/FL</h5>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content color="primary">\n\n\n\n      <ion-list class="user-list">\n\n        <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n          <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n\n          <span ion-text color="primary">{{menuItem.title}}</span>\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n\n\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n\n\n</ion-split-pane>\n\n'/*ion-inline-end:"G:\appstore\parking\app-parking\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], easyParkingApp);
    return easyParkingApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Author Provider
 */
var AuthProvider = (function () {
    function AuthProvider(afAuth, afStore) {
        this.afAuth = afAuth;
        this.afStore = afStore;
    }
    /**
     * Checking Login
     * @param {string} email
     * @param {string} password
     * @returns {Promise<User>}
     */
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.fillUser = function (uid) {
        return this.afStore.collection('users').doc(uid).ref.get();
    };
    /**
     * Create new user
     * @param {string} email
     * @param {string} password
     * @returns {Promise<User>}
     */
    AuthProvider.prototype.signupUser = function (email, password, fullname) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 1:
                        newUser = _a.sent();
                        return [4 /*yield*/, this.afStore.collection('users').doc(newUser.uid).set({ full_name: fullname, email: email, address: '', city: '', user_type: 'customer', state: '' })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newUser];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_cars__ = __webpack_require__(569);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = (function () {
    function CarService() {
        this.cars = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_cars__["a" /* CARS */];
    }
    CarService.prototype.getAll = function () {
        return this.cars;
    };
    CarService.prototype.getItem = function (id) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id === parseInt(id)) {
                return this.cars[i];
            }
        }
        return null;
    };
    CarService.prototype.remove = function (item) {
        this.cars.splice(this.cars.indexOf(item), 1);
    };
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CarService);
    return CarService;
}());

//# sourceMappingURL=car-service.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_trips__ = __webpack_require__(570);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(394);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_lot_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_place_service__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_activity_service__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_car_service__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_trip_service__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__credentials__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* easyParkingApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__credentials__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* easyParkingApp */], {
                    preloadModules: true,
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'page-account', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cars/cars.module#CarsPageModule', name: 'page-cars', segment: 'cars', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking-list/booking-list.module#BookingListPageModule', name: 'page-booking-list', segment: 'booking-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-detail/car-detail.module#CarDetailPageModule', name: 'page-car-detail', segment: 'car-detail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-lot/checkout-lot.module#CheckoutLotPageModule', name: 'page-checkout-lot', segment: 'checkout-lot/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'page-edit-profile', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-car/checkout-car.module#CheckoutCarPageModule', name: 'page-checkout-car', segment: 'checkout-car/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-trip/checkout-trip.module#CheckoutTripPageModule', name: 'page-checkout-trip', segment: 'checkout-trip/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/auth/auth.module#AuthPageModule', name: 'page-auth', segment: 'extras/auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/custom-pages/custom-pages.module#CustomPagesPageModule', name: 'page-custom-pages', segment: 'extras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login1/login1.module#Login1PageModule', name: 'page-login1', segment: 'extras/login-list/login1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login-list/login-list.module#LoginListPageModule', name: 'page-login-list', segment: 'extras/login-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login2/login2.module#Login2PageModule', name: 'page-login2', segment: 'extras/login-list/login2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login3/login3.module#Login3PageModule', name: 'page-login3', segment: 'extras/login-list/login3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login5/login5.module#Login5PageModule', name: 'page-login5', segment: 'extras/login-list/login5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/walkthrough/walkthrough.module#WalkthroughPageModule', name: 'page-walkthrough', segment: 'extras/walkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extras/login4/login4.module#Login4PageModule', name: 'page-login4', segment: 'extras/login-list/login4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-list/favorite-list.module#FavoriteListPageModule', name: 'page-favorite-list', segment: 'favorite-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'page-home', segment: 'home', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'page-notifications', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'page-login', segment: 'login', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/reviews/reviews.module#ReviewsPageModule', name: 'page-reviews', segment: 'reviews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lot/lot.module#LotPageModule', name: 'page-lot', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lot-detail/lot-detail.module#LotDetailPageModule', name: 'page-lot-detail', segment: 'lot-detail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'page-register', segment: 'register', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/search-location/search-location.module#SearchLocationPageModule', name: 'page-search-location', segment: 'search-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-trips/search-trips.module#SearchTripsPageModule', name: 'page-search-trips', segment: 'search-trips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-cars/search-cars.module#SearchCarsPageModule', name: 'page-search-cars', segment: 'search-cars', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'page-support', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trips/trips.module#TripsPageModule', name: 'page-trips', segment: 'trips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-reviews/tab-reviews.module#TabReviewsPageModule', name: 'tabs-reviews', segment: 'tab-reviews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trip-detail/trip-detail.module#TripDetailPageModule', name: 'page-trip-detail', segment: 'trip-detail/:id', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__easyParkingDB',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* easyParkingApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_8__providers_lot_service__["a" /* LotService */],
                __WEBPACK_IMPORTED_MODULE_9__providers_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_car_service__["a" /* CarService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_trip_service__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_car_service__["a" /* CarService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_trip_service__["a" /* TripService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARS; });
var CARS = [
    {
        id: 1,
        name: "Localize Autos",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_1.jpg",
        price: 100,
        cars: [
            {
                id: 1,
                name: "Ford Focus B2017",
                thumb: "assets/img/car/thumb/car_1.jpg",
                price: 100,
                doors: 2,
                passengers: 4,
                automatic_transmission: 0,
                free_miles: 150,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.906847,
                    lon: -43.172896
                }
            },
            {
                id: 2,
                name: "Volkswagen Jetta Tbi",
                thumb: "assets/img/car/thumb/car_4.jpg",
                price: 250,
                doors: 4,
                passengers: 5,
                automatic_transmission: 1,
                free_miles: 250,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.969778,
                    lon: -43.186859
                }
            }
        ]
    },
    {
        id: 2,
        name: "Beach Cars",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_2.jpg",
        price: 250,
        cars: [
            {
                id: 1,
                name: "Ford Focus B2017",
                thumb: "assets/img/car/thumb/car_2.jpg",
                price: 100,
                doors: 2,
                passengers: 4,
                automatic_transmission: 0,
                free_miles: 150,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.906847,
                    lon: -43.172896
                }
            },
            {
                id: 2,
                name: "Volkswagen Jetta Tbi",
                thumb: "assets/img/car/thumb/car_3.jpg",
                price: 250,
                doors: 4,
                passengers: 5,
                automatic_transmission: 1,
                free_miles: 250,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.969778,
                    lon: -43.186859
                }
            }
        ]
    },
    {
        id: 3,
        name: "Speedy Cars",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_3.jpg",
        price: 200,
        cars: [
            {
                id: 1,
                name: "Ford Focus B2017",
                thumb: "assets/img/car/thumb/car_3.jpg",
                price: 100,
                doors: 2,
                passengers: 4,
                automatic_transmission: 0,
                free_miles: 150,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.906847,
                    lon: -43.172896
                }
            },
            {
                id: 1,
                name: "Volkswagen Jetta Tbi",
                thumb: "assets/img/car/thumb/car_1.jpg",
                price: 250,
                doors: 4,
                passengers: 5,
                automatic_transmission: 1,
                free_miles: 250,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.969778,
                    lon: -43.186859
                }
            }
        ]
    },
    {
        id: 4,
        name: "J&F Rent a Car",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_4.jpg",
        price: 350,
        cars: [
            {
                id: 1,
                name: "Ford Focus B2017",
                thumb: "assets/img/car/thumb/car_4.jpg",
                price: 100,
                doors: 2,
                passengers: 4,
                automatic_transmission: 0,
                free_miles: 150,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.906847,
                    lon: -43.172896
                }
            },
            {
                id: 2,
                name: "Volkswagen Jetta Tbi",
                thumb: "assets/img/car/thumb/car_2.jpg",
                price: 250,
                doors: 4,
                passengers: 5,
                automatic_transmission: 1,
                free_miles: 250,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.969778,
                    lon: -43.186859
                }
            }
        ]
    }
];
//# sourceMappingURL=mock-cars.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Copacabana Beach",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Miami, Florida",
        images: [
            "assets/img/trip/thumb/trip_1.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Christ the Redeemer",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Miami, Florida",
        images: [
            "assets/img/trip/thumb/trip_2.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 3,
        name: "Ipiranga Museum",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [
            "assets/img/trip/thumb/trip_3.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 4,
        name: "Fernando de Noronha",
        price_adult: 500,
        price_child: 250,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [
            "assets/img/trip/thumb/trip_4.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaceService = (function () {
    function PlaceService(afStore) {
        var _this = this;
        this.afStore = afStore;
        /*this.places = PLACES;*/
        this.afStore.collection('places').ref.get().then(function (data) {
            _this.places = data;
        });
    }
    PlaceService.prototype.getPlaces = function () {
        var _this = this;
        this.afStore.collection('places').ref.get().then(function (data) {
            _this.places = data;
        });
    };
    PlaceService.prototype.getAll = function () {
        return this.places;
    };
    PlaceService.prototype.getItem = function (id) {
        for (var i = 0; i < this.places.length; i++) {
            if (this.places[i].id === parseInt(id)) {
                return this.places[i];
            }
        }
        return null;
    };
    PlaceService.prototype.remove = function (item) {
        this.places.splice(this.places.indexOf(item), 1);
    };
    PlaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], PlaceService);
    return PlaceService;
}());

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_activities__ = __webpack_require__(593);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ActivityService);
    return ActivityService;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    /*apiKey: 'AIzaSyAYX37nitOkELXA8iMjw7Ouvs-iYuThMpk',
    authDomain: 'parking-a25f0.firebaseapp.com',
    databaseURL: 'https://parking-a25f0.firebaseio.com',
    projectId: 'parking-a25f0',
    storageBucket: 'parking-a25f0.appspot.com',
    messagingSenderId: '265309417776'*/
    apiKey: "AIzaSyBn45pK-2MdExhhX1XZzIWeZZQqR0surdo",
    authDomain: "parking-a25f0.firebaseapp.com",
    databaseURL: "https://parking-a25f0.firebaseio.com",
    projectId: "parking-a25f0",
    storageBucket: "parking-a25f0.appspot.com",
    messagingSenderId: "265309417776"
};
//# sourceMappingURL=credentials.js.map

/***/ })

},[378]);
//# sourceMappingURL=main.js.map