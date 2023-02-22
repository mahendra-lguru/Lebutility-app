webpackJsonp([13],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the BillsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillsDetailPage = /** @class */ (function () {
    function BillsDetailPage(navCtrl, navParams, loadingController, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
    }
    BillsDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BillsDetailPage');
        Promise.all([this.storage.get('BILL_ID')])
            .then(function (val) {
            _this.bill_id = val[0];
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            _this.http.get('https://www.lebutility.com/api/getBillDetailById/' + _this.bill_id).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.list = data;
                _this.total = +_this.list.response[0].amount + +_this.list.response[0].TVA + +_this.list.response[0].gouv_price;
            }, function (err) { return console.warn(err); }, function () {
                loader.dismiss();
            });
        });
    };
    BillsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bills-detail',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\bills-detail\bills-detail.html"*/'<!--\n  Generated template for the BillsDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Payment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="list">\n\n    <ion-list *ngFor="let bill_details of list.response">\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Client ID</ion-col>\n            <ion-col col-6>{{bill_details.client_house_id}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Client Name</ion-col>\n            <ion-col col-6>{{bill_details.client_name}}</ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Provider ID</ion-col>\n            <ion-col col-6>{{bill_details.provider_id}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Collector ID</ion-col>\n            <ion-col col-6>{{bill_details.collector_id}}</ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Address</ion-col>\n            <ion-col col-6>{{bill_details.address}} {{city}} {{zone}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Phone Number</ion-col>\n            <ion-col col-6>{{bill_details.phone_number}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Paid Date</ion-col>\n            <ion-col col-6>{{bill_details.paid_date}}</ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Amount</ion-col>\n            <ion-col col-6>{{bill_details.amount}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>TVA</ion-col>\n            <ion-col col-6>{{bill_details.TVA}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Gouv Price</ion-col>\n            <ion-col col-6>{{bill_details.gouv_price}}</ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6><b>Total</b></ion-col>\n            <ion-col col-6><b>{{total}}</b></ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\bills-detail\bills-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], BillsDetailPage);
    return BillsDetailPage;
}());

//# sourceMappingURL=bills-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanHousePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__house_bill_house_bill__ = __webpack_require__(57);
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
 * Generated class for the ScanHousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanHousePage = /** @class */ (function () {
    function ScanHousePage(navCtrl, navParams, barcodeScanner, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
    }
    ScanHousePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScanHousePage');
    };
    ScanHousePage.prototype.Back = function () {
        this.navCtrl.pop();
    };
    ScanHousePage.prototype.Barcode = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            if (barcodeData.cancelled == true) {
                console.log("User cancelled the action!");
                // this.navCtrl.pop();
                return false;
            }
            else {
                _this.scanData = barcodeData;
                var barcode = barcodeData.text;
                var array = barcode.split('/');
                var lastsegment = array[array.length - 1];
                _this.url_ = array[array.length - 4];
                if (_this.url_ == "setconsumption") {
                    _this.storage.set('HOUSE_ID', lastsegment);
                    var animationsOptions = {
                        animation: 'ios-transition',
                        duration: 1000
                    };
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__house_bill_house_bill__["a" /* HouseBillPage */], {
                        HOUSE_ID: lastsegment
                    }, animationsOptions);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Please Scan Only House QR Code",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.onDidDismiss(function () {
                    });
                    toast.present();
                }
            }
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    ScanHousePage.prototype.Search = function () {
        if (this.house_id == null) {
            var toast = this.toastCtrl.create({
                message: "Please Enter House ID",
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        }
        else {
            var animationsOptions = {
                animation: 'ios-transition',
                duration: 1000
            };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__house_bill_house_bill__["a" /* HouseBillPage */], {
                HOUSE_ID: this.house_id
            }, animationsOptions);
            this.storage.set('HOUSE_ID', this.house_id);
        }
    };
    ScanHousePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan-house',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\scan-house\scan-house.html"*/'<!--\n  Generated template for the ScanHousePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content margin-top>\n\n  <ion-grid margin-top>\n    <ion-row justify-content-center (click)="Barcode()">\n      <ion-col text-center col-6 class="col_border">\n        <img src="assets/barcode.png" alt="image">\n        <ion-label class="text">\n          <b text-center>Scan House barcode</b>\n        </ion-label>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-label text-center margin-top class="text" margin-top>\n      <b>Or</b>\n    </ion-label>\n\n    <ion-row justify-content-center margin-top>\n      <ion-col text-center col-6 class="col_border">\n        <ion-item>\n          <ion-input type="text" class="inputtext" placeholder="Enter House id" [(ngModel)]="house_id"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="row_margin">\n      <ion-col col-12 (click)="Search()">\n        <button ion-button full class="button">Search</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\scan-house\scan-house.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ScanHousePage);
    return ScanHousePage;
}());

//# sourceMappingURL=scan-house.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collect_counter_collect_counter__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__payment_details_payment_details__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pay_bill_pay_bill__ = __webpack_require__(58);
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
 * Generated class for the ScanBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanBillPage = /** @class */ (function () {
    function ScanBillPage(navCtrl, navParams, loadingController, http, toastCtrl, storage, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.barcodeScanner = barcodeScanner;
    }
    ScanBillPage_1 = ScanBillPage;
    ScanBillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScanBillPage');
    };
    ScanBillPage.prototype.Back = function () {
        this.navCtrl.pop();
    };
    ScanBillPage.prototype.Barcode = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            if (barcodeData.cancelled == true) {
                console.log("User cancelled the action!");
                // this.navCtrl.pop();
                return false;
            }
            else {
                _this.scanData = barcodeData;
                var barcode = barcodeData.text;
                var array = barcode.split('/');
                var lastsegment = array[array.length - 1];
                _this.url_ = array[array.length - 2];
                if (_this.url_ == "setBillStatus") {
                    var loader_1 = _this.loadingController.create({
                        content: "Please Wait..."
                    });
                    loader_1.present();
                    _this.http.get('https://www.lebutility.com/api/getBillDetailById/' + lastsegment)
                        .map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.list = data;
                        _this.storage.set('BILL_ID', lastsegment);
                        _this.status = _this.list.response[0].status;
                        if (_this.status == "Uncolllected") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__collect_counter_collect_counter__["a" /* CollectCounterPage */]);
                        }
                        else if (_this.status == "Paid") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__payment_details_payment_details__["a" /* PaymentDetailsPage */]);
                        }
                        else if (_this.status = "Unpaid") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pay_bill_pay_bill__["a" /* PayBillPage */]);
                        }
                        loader_1.dismiss();
                    }, function (error) {
                        _this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');
                        loader_1.dismiss();
                        _this.navCtrl.push(ScanBillPage_1);
                        var toast = _this.toastCtrl.create({
                            message: _this.errors,
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.onDidDismiss(function () {
                        });
                        toast.present();
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Please Scan Only Bill QR Code",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.onDidDismiss(function () {
                    });
                    toast.present();
                }
            }
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    ScanBillPage.prototype.Search = function () {
        var _this = this;
        if (this.bill_id == null) {
            var toast = this.toastCtrl.create({
                message: "Please Enter Bill ID",
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        }
        else {
            var loader_2 = this.loadingController.create({
                content: "Please Wait..."
            });
            loader_2.present();
            this.http.get('https://www.lebutility.com/api/getBillDetailById/' + this.bill_id).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.list = data;
                _this.storage.set('BILL_ID', _this.bill_id);
                _this.status = _this.list.response[0].status;
                if (_this.status == "Uncolllected") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__collect_counter_collect_counter__["a" /* CollectCounterPage */]);
                }
                else if (_this.status == "Paid") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__payment_details_payment_details__["a" /* PaymentDetailsPage */]);
                }
                else if (_this.status = "Unpaid") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pay_bill_pay_bill__["a" /* PayBillPage */]);
                }
            }, function (err) { return console.warn(err); }, function () {
                loader_2.dismiss();
            });
        }
    };
    ScanBillPage = ScanBillPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan-bill',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\scan-bill\scan-bill.html"*/'<!--\n  Generated template for the ScanBillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content margin-top>\n\n  <ion-grid margin-top>\n    <ion-row justify-content-center (click)="Barcode()">\n      <ion-col text-center col-6 class="col_border">\n        <img src="assets/barcode.png" alt="image">\n        <ion-label class="text">\n          <b>Scan Bill barcode</b>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-label text-center margin-top class="text" margin-top>\n      <b>Or</b>\n    </ion-label>\n\n    <ion-row justify-content-center margin-top>\n      <ion-col text-center col-6 class="col_border">\n        <ion-item>\n          <ion-input type="text" placeholder="Enter Bill id" [(ngModel)]="bill_id" class="inputtext"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="row_margin">\n      <ion-col col-12 (click)="Search()">\n        <button ion-button full class="button">Search</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\scan-bill\scan-bill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ScanBillPage);
    return ScanBillPage;
    var ScanBillPage_1;
}());

//# sourceMappingURL=scan-bill.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__house_list_house_list__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
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
 * Generated class for the ClientListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientListPage = /** @class */ (function () {
    function ClientListPage(navCtrl, navParams, loadingController, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.searchTerm = '';
        this.client_array = [];
    }
    ClientListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ClientListPage');
        this.setFilteredItems();
        Promise.all([this.storage.get('Role_ID'), this.storage.get('COLLECTOR_ID')])
            .then(function (val) {
            _this.role_id = val[0];
            _this.client_id = val[1];
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            _this.http.get('https://www.lebutility.com/api/getClientsById/' + _this.role_id + "/" + _this.client_id)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.list = data;
                var length = _this.list.response.length;
                _this.client_array = [];
                for (var i = 0; i < length; i++) {
                    _this.client_array.push({ name: _this.list.response[i].name, id: _this.list.response[i].id });
                }
            }, function (err) { return console.warn(err); }, function () {
                loader.dismiss();
            });
        });
    };
    ClientListPage.prototype.initializeItems = function () {
        var _this = this;
        Promise.all([this.storage.get('Role_ID'), this.storage.get('COLLECTOR_ID')])
            .then(function (val) {
            _this.role_id = val[0];
            _this.client_id = val[1];
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            _this.http.get('https://www.lebutility.com/api/getClientsById/' + _this.role_id + "/" + _this.client_id)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.list = data;
                var length = _this.list.response.length;
                _this.client_array = [];
                for (var i = 0; i < length; i++) {
                    _this.client_array.push({ name: _this.list.response[i].name, id: _this.list.response[i].id });
                }
            }, function (err) { return console.warn(err); }, function () {
                loader.dismiss();
            });
        });
    };
    ClientListPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.client_array = this.client_array.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.initializeItems();
        }
    };
    ClientListPage.prototype.onCancel = function (ev) {
        // Reset the field
        ev.target.value = '';
    };
    ClientListPage.prototype.filterItems = function (searchTerm) {
        return this.client_array.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ClientListPage.prototype.setFilteredItems = function () {
        this.client_array = this.filterItems(this.searchTerm);
    };
    // onCancel(){
    //   return this.client_array;
    // alert();
    // var length = this.list.response.length;
    // console.log("len",length);
    //   for(let i = 0;i  < length; i++){
    //     this.client_array.push({name: this.list.response[i].name, id: this.list.response[i].id});
    // }
    // }
    ClientListPage.prototype.Client_click = function (clients, i) {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".back_white").removeClass("back_grey");
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#client_" + i).addClass('back_grey');
        this.storage.set("CLIENT_ID", clients.id);
        console.log("cliid", clients.id);
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__house_list_house_list__["a" /* HouseListPage */], {}, animationsOptions);
    };
    ClientListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-list',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\client-list\client-list.html"*/'<!--\n  Generated template for the ClientListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>List Clients</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content margin-top>\n\n  <ion-grid>\n    <ion-searchbar placeholder="Search Client" [(ngModel)]="searchTerm" (ionInput)="getItems($event)"></ion-searchbar>\n    <!-- (ionInput)="setFilteredItems()" -->\n    <!-- <div *ngIf="list" margin-top> -->\n\n    <!-- <ion-list>\n            <ion-row (click)="Client_click(clients,i)" class="back_white" id="client_{{i}}">\n            <ion-item *ngFor="let clients of client_array; let i = index;" (click)="Client_click(clients,i)" class="back_white" id="client_{{i}}">\n                {{clients.name}}\n            </ion-item>\n          </ion-list> -->\n\n    <ion-list *ngFor="let clients of client_array; let i = index;">\n      <ion-row (click)="Client_click(clients,i)" class="back_white" id="client_{{i}}">\n        <ion-col col-11>\n          <b>{{clients.name}}</b>\n        </ion-col>\n        <ion-col col-1>\n          <img src="assets/arrow.png" class="arrow_img">\n        </ion-col>\n      </ion-row>\n\n    </ion-list>\n    <!-- </div> -->\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\client-list\client-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ClientListPage);
    return ClientListPage;
}());

//# sourceMappingURL=client-list.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__house_bill_house_bill__ = __webpack_require__(57);
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
 * Generated class for the HouseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HouseListPage = /** @class */ (function () {
    function HouseListPage(navCtrl, navParams, loadingController, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.hide_label = false;
        this.hide_searchbar = true;
        this.house_array = [];
        this.searchTerm = '';
    }
    HouseListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HouseListPage');
        Promise.all([this.storage.get('CLIENT_ID')])
            .then(function (val) {
            _this.client_id = val[0];
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            _this.http.get('https://www.lebutility.com/api/getHouseByClientId/' + _this.client_id)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.list = data;
                var length = _this.list.response.length;
                _this.house_array = [];
                for (var i = 0; i < length; i++) {
                    _this.house_array.push({ id: _this.list.response[i].id });
                }
                if (_this.list.response == 0) {
                    _this.hide_label = true;
                    _this.hide_searchbar = false;
                }
                _this.i++;
            }, function (err) { return console.warn(err); }, function () {
                loader.dismiss();
            });
        });
    };
    // filterItems(searchTerm) {
    //   console.log(searchTerm);
    //   return this.house_array.filter((item) => {
    //     return item.id.to().indexOf(searchTerm.toLowerCase()) > -1;
    //   })
    // }
    // setFilteredItems() {
    //   this.house_array = this.filterItems(this.searchTerm);
    // }
    HouseListPage.prototype.House_click = function (clients_house, i) {
        __WEBPACK_IMPORTED_MODULE_5_jquery__(".back_white").removeClass("back_grey");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#house_" + i).addClass('back_grey');
        console.log("Houseid", clients_house.id);
        this.storage.set("HOUSE_ID", clients_house.id);
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__house_bill_house_bill__["a" /* HouseBillPage */], {}, animationsOptions);
    };
    HouseListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-house-list',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\house-list\house-list.html"*/'<!--\n  Generated template for the HouseListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>List Houses</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content margin-top>\n\n    <ion-grid>\n        <ion-searchbar  placeholder="Search House" [(ngModel)]="searchTerm"  *ngIf="hide_searchbar" ></ion-searchbar>\n        <!-- (ionInput)="setFilteredItems()" -->\n\n        <ion-label *ngIf="hide_label" text-center>House Does Not Exists!</ion-label>\n    \n    \n        <div *ngIf="list" margin-top>\n    \n          <ion-list *ngFor="let clients_house of house_array; let i = index;">\n            <ion-row (click)="House_click(clients_house,i)" class="back_white" id="house_{{i}}">\n              <ion-col col-5><b>House {{i}} #ID{{clients_house.id}}</b></ion-col>\n              <ion-col col-6 text-wrap><b>{{clients_house.address}}{{clients_house.city}}{{clients_house.zone_name}}</b></ion-col>\n              <ion-col col-1>\n                <img src="assets/arrow.png" class="arrow_img">\n              </ion-col>\n            </ion-row>\n    \n          </ion-list>\n        </div>\n    \n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\house-list\house-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HouseListPage);
    return HouseListPage;
}());

//# sourceMappingURL=house-list.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientHousebillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collect_counter_collect_counter__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bills_detail_bills_detail__ = __webpack_require__(113);
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
 * Generated class for the ClientHousebillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientHousebillPage = /** @class */ (function () {
    function ClientHousebillPage(navCtrl, navParams, loadingController, http, toastCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.year = 2019;
        Promise.all([this.storage.get('HOUSE_ID'), this.storage.get('Role_ID'), this.storage.get('COLLECTOR_ID')])
            .then(function (val) {
            _this.house_id = val[0];
            _this.role_id = val[1];
            _this.login_id = val[2];
            _this.count = 1;
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            var postParams = {
                year: _this.year,
                login_id: _this.login_id,
                role_id: _this.role_id,
                house_id: _this.house_id
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post('https://www.lebutility.com/api/getHouseDetailById', postParams, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.client_id = data.response.house_detail[0].client_id;
                _this.client_name = data.response.house_detail[0].client_name;
                _this.houseid = data.response.house_detail[0].house_id;
                _this.address = data.response.house_detail[0].address;
                _this.city = data.response.house_detail[0].city;
                _this.zone_name = data.response.house_detail[0].zone_name;
                _this.bills = [];
                for (var i = 0; i < data.response.bill_detail.length; i++) {
                    _this.bills.push(data.response.bill_detail[i]);
                }
                _this.storage.set("ZONE_ID", data.response.house_detail[0].zone_id);
                _this.storage.set("CLIENT_ID", data.response.house_detail[0].client_id);
                _this.storage.set('ADDRESS', data.response.house_detail[0].address);
                _this.storage.set('CLIENT_NAME', data.response.house_detail[0].client_name);
                _this.storage.set('CITY', data.response.house_detail[0].city);
                _this.storage.set('ZONE_NAME', data.response.house_detail[0].zone_name);
                _this.storage.set("UNIT", data.response.bill_detail[0].unit);
                _this.status = _this.statuss;
                loader.dismiss();
            }, function (error) {
                _this.navCtrl.pop();
                _this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');
                var toast = _this.toastCtrl.create({
                    message: _this.errors,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            });
        });
    }
    ClientHousebillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HouseBillPage');
    };
    ClientHousebillPage.prototype.House_Detail = function (item, i) {
        this.storage.set('MONTH', item.month);
        this.storage.set("BILL_ID", item.bill_id);
        this.storage.set("BILL_MONTH_DATE", item.bill_month_date);
        this.storage.set('STATUS', item.status);
        // $(".back_white").removeClass("back_grey");
        //   $("#client_"+i).addClass('back_grey');
        // $(".bill").removeClass({'background-color': '#fff'});
        // $("#bg_"+i).addClass({'background-color': '#dddddd'});
        this.count = 0;
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
        };
        if (item.status == "Uncolllected") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__collect_counter_collect_counter__["a" /* CollectCounterPage */], {}, animationsOptions);
        }
        else if (item.status == "Paid") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__bills_detail_bills_detail__["a" /* BillsDetailPage */], {}, animationsOptions);
        }
        else if (item.status = "Unpaid") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__bills_detail_bills_detail__["a" /* BillsDetailPage */], {}, animationsOptions);
        }
        this.count = 1;
    };
    ClientHousebillPage.prototype.getyear = function (selectyear) {
        var _this = this;
        Promise.all([this.storage.get('HOUSE_ID'), this.storage.get('Role_ID'), this.storage.get('COLLECTOR_ID')])
            .then(function (val) {
            _this.house_id = val[0];
            _this.role_id = val[1];
            _this.login_id = val[2];
            _this.count = 1;
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            var postParams = {
                year: selectyear,
                login_id: _this.login_id,
                role_id: _this.role_id,
                house_id: _this.house_id
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post('https://www.lebutility.com/api/getHouseDetailById', postParams, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.client_id = data.response.house_detail[0].client_id;
                _this.client_name = data.response.house_detail[0].client_name;
                _this.houseid = data.response.house_detail[0].house_id;
                _this.address = data.response.house_detail[0].address;
                _this.city = data.response.house_detail[0].city;
                _this.zone_name = data.response.house_detail[0].zone_name;
                if (data.response.bill_detail[0] == null) {
                    var toast = _this.toastCtrl.create({
                        message: "Oops!Data isn't available",
                        duration: 3000,
                        position: 'bottom'
                    });
                    _this.navCtrl.pop();
                    toast.onDidDismiss(function () {
                    });
                    toast.present();
                    loader.dismiss();
                }
                else {
                    _this.bills = [];
                    for (var i = 0; i < data.response.bill_detail.length; i++) {
                        _this.bills.push(data.response.bill_detail[i]);
                    }
                    _this.storage.set('MONTH', _this.bills);
                    _this.storage.set('STATUS', _this.statuss);
                    _this.storage.set("ZONE_ID", data.response.house_detail[0].zone_id);
                    _this.storage.set("CLIENT_ID", data.response.house_detail[0].client_id);
                    _this.storage.set('ADDRESS', data.response.house_detail[0].address);
                    _this.storage.set('CLIENT_NAME', data.response.house_detail[0].client_name);
                    _this.storage.set('CITY', data.response.house_detail[0].city);
                    _this.storage.set('ZONE_NAME', data.response.house_detail[0].zone_name);
                    _this.storage.set("BILL_ID", data.response.bill_detail[0].bill_id);
                    _this.storage.set("UNIT", data.response.bill_detail[0].unit);
                    _this.storage.set("BILL_MONTH_DATE", data.response.bill_detail[0].bill_month_date);
                    _this.status = _this.statuss;
                    loader.dismiss();
                }
            }, function (error) {
                _this.navCtrl.pop();
                _this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');
                var toast = _this.toastCtrl.create({
                    message: _this.errors,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            });
        });
    };
    ClientHousebillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-housebill',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\client-housebill\client-housebill.html"*/'<!--\n  Generated template for the ClientHousebillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title text-center>House Bills</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content>\n  \n    <ion-grid>\n      <div >\n          <!-- *ngIf="list" -->\n        <ion-list >\n            <!-- *ngFor="let house_details of list.response.house_detail" -->\n          <ion-card class="top_card">\n  \n            <ion-row>\n              <ion-col col-6 class="text">Client ID</ion-col>\n              <ion-col col-6 class="text">{{client_id}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6 class="text">Client Name</ion-col>\n              <ion-col col-6 class="text">{{client_name}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6 class="text">House ID</ion-col>\n              <ion-col col-6 class="text">{{houseid}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6 class="text">Address</ion-col>\n              <ion-col col-6 class="text">{{address}} {{city}}\n                {{zone_name}}</ion-col>\n            </ion-row>\n  \n          </ion-card>\n  \n          <ion-row justify-content-center margin-top>\n            <ion-col text-center col-6 class="text border">\n  \n              <ion-item>\n                <ion-label>Select Year</ion-label>\n  \n                <ion-select [(ngModel)]="selectyear" (ionChange)="getyear(selectyear)">\n                  <ion-option value="2018">2018</ion-option>\n                  <ion-option value="2019" selected>2019</ion-option>\n                </ion-select>\n  \n              </ion-item>\n  \n            </ion-col>\n          </ion-row>\n          \n            <ion-card class="card"  *ngFor="let item of bills; let index=i" (click)="House_Detail(item,i)"  >\n              <ion-row class="bill back_white" id=\'bg_{{i}}\' *ngIf=" item.status != \'Uncolllected\'">\n                <ion-col col-4 class="list_text">{{item.month}}</ion-col>\n                <ion-col col-4 class="list_text">{{item.status}}</ion-col>\n                <ion-col col-3 class="list_text" text-center>{{item.amount}}</ion-col>\n                <ion-col col-1>\n                  <img src="assets/arrow.png" class="arrow_img">\n                </ion-col>\n              </ion-row>\n            </ion-card>\n  \n        </ion-list>\n      </div>\n    </ion-grid>\n  \n  </ion-content>'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\client-housebill\client-housebill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ClientHousebillPage);
    return ClientHousebillPage;
}());

//# sourceMappingURL=client-housebill.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bills-detail/bills-detail.module": [
		287,
		12
	],
	"../pages/client-housebill/client-housebill.module": [
		298,
		11
	],
	"../pages/client-houselist/client-houselist.module": [
		288,
		10
	],
	"../pages/client-list/client-list.module": [
		289,
		9
	],
	"../pages/collect-counter/collect-counter.module": [
		296,
		8
	],
	"../pages/dashboard/dashboard.module": [
		294,
		7
	],
	"../pages/house-bill/house-bill.module": [
		299,
		6
	],
	"../pages/house-list/house-list.module": [
		290,
		5
	],
	"../pages/login/login.module": [
		291,
		4
	],
	"../pages/pay-bill/pay-bill.module": [
		292,
		3
	],
	"../pages/payment-details/payment-details.module": [
		293,
		2
	],
	"../pages/scan-bill/scan-bill.module": [
		295,
		1
	],
	"../pages/scan-house/scan-house.module": [
		297,
		0
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_scan_house_scan_house__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_scan_bill_scan_bill__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_house_bill_house_bill__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_collect_counter_collect_counter__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pay_bill_pay_bill__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_modules_ionic_native_barcode_scanner__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_payment_details_payment_details__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_client_list_client_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_house_list_house_list__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_client_houselist_client_houselist__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_client_housebill_client_housebill__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_bills_detail_bills_detail__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_scan_house_scan_house__["a" /* ScanHousePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_scan_bill_scan_bill__["a" /* ScanBillPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_house_bill_house_bill__["a" /* HouseBillPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_collect_counter_collect_counter__["a" /* CollectCounterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pay_bill_pay_bill__["a" /* PayBillPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_payment_details_payment_details__["a" /* PaymentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_client_list_client_list__["a" /* ClientListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_house_list_house_list__["a" /* HouseListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_client_houselist_client_houselist__["a" /* ClientHouselistPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_client_housebill_client_housebill__["a" /* ClientHousebillPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_bills_detail_bills_detail__["a" /* BillsDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: [
                        { loadChildren: '../pages/bills-detail/bills-detail.module#BillsDetailPageModule', name: 'BillsDetailPage', segment: 'bills-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-houselist/client-houselist.module#ClientHouselistPageModule', name: 'ClientHouselistPage', segment: 'client-houselist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-list/client-list.module#ClientListPageModule', name: 'ClientListPage', segment: 'client-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/house-list/house-list.module#HouseListPageModule', name: 'HouseListPage', segment: 'house-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay-bill/pay-bill.module#PayBillPageModule', name: 'PayBillPage', segment: 'pay-bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-details/payment-details.module#PaymentDetailsPageModule', name: 'PaymentDetailsPage', segment: 'payment-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scan-bill/scan-bill.module#ScanBillPageModule', name: 'ScanBillPage', segment: 'scan-bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/collect-counter/collect-counter.module#CollectCounterPageModule', name: 'CollectCounterPage', segment: 'collect-counter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scan-house/scan-house.module#ScanHousePageModule', name: 'ScanHousePage', segment: 'scan-house', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-housebill/client-housebill.module#ClientHousebillPageModule', name: 'ClientHousebillPage', segment: 'client-housebill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/house-bill/house-bill.module#HouseBillPageModule', name: 'HouseBillPage', segment: 'house-bill', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_scan_house_scan_house__["a" /* ScanHousePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_scan_bill_scan_bill__["a" /* ScanBillPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_house_bill_house_bill__["a" /* HouseBillPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_collect_counter_collect_counter__["a" /* CollectCounterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pay_bill_pay_bill__["a" /* PayBillPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_payment_details_payment_details__["a" /* PaymentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_client_list_client_list__["a" /* ClientListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_house_list_house_list__["a" /* HouseListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_client_houselist_client_houselist__["a" /* ClientHouselistPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_client_housebill_client_housebill__["a" /* ClientHousebillPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_bills_detail_bills_detail__["a" /* BillsDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__node_modules_ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_client_houselist_client_houselist__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.storage.get('isLoggedIn').then(function (isLoggedIn) {
                console.log('Is Logged in : ', isLoggedIn);
                Promise.all([_this.storage.get('Role_ID')])
                    .then(function (val) {
                    _this.role_id = val[0];
                    if (_this.role_id == "4") {
                        _this.rootPage = isLoggedIn ? __WEBPACK_IMPORTED_MODULE_7__pages_client_houselist_client_houselist__["a" /* ClientHouselistPage */] : __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                    }
                    else {
                        _this.rootPage = isLoggedIn ? __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */] : __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                    }
                    // this.loggedIn = isLoggedIn;
                    // if(!this.loggedIn){
                    //   this.rootPage = LoginPage;
                    // }else if(this.loggedIn) {
                    //   this.rootPage = DashboardPage;
                    // }
                });
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\IONIC\lebutility-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan_house_scan_house__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scan_bill_scan_bill__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_list_client_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(44);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.Scan_House = function () {
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__scan_house_scan_house__["a" /* ScanHousePage */], {}, animationsOptions);
    };
    DashboardPage.prototype.Collect_Bill = function () {
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__scan_bill_scan_bill__["a" /* ScanBillPage */], {}, animationsOptions);
    };
    DashboardPage.prototype.Clients = function () {
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__client_list_client_list__["a" /* ClientListPage */], {}, animationsOptions);
    };
    DashboardPage.prototype.Logout = function () {
        this.submitted = false;
        this.storage.set('isLoggedIn', this.submitted);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title text-center >Dashboard</ion-title>\n    <ion-buttons end style="margin-right : 20px; " (click)="Logout()">\n      <button ion-button icon-only style="color : #fff">\n        <ion-icon name="md-power"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row justify-content-center style="display: flex;">\n      <ion-col text-center class="col_background_house" (click)="Scan_House()">\n        <img src="assets/scan_house.png" alt="image">\n        <ion-label class="text">\n          <b>Scan House</b>\n        </ion-label>\n      </ion-col>\n      <ion-col text-center class="col_background_bill" (click)="Collect_Bill()">\n        <img src="assets/collect_bill.png" alt="image">\n        <ion-label class="text">\n          <b>Collect Bill</b>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center style="display: flex;">\n      <ion-col text-center class="col_background_house" (click)="Clients()">\n        <img src="assets/clients.png" alt="image">\n        <ion-label class="text">\n          <b>My Clients</b>\n        </ion-label>\n      </ion-col>\n      <ion-col text-center >\n        \n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__client_houselist_client_houselist__ = __webpack_require__(56);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, loadingController, toastCtrl, storage, platform) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.submitted = false;
        platform.registerBackButtonAction(function () {
            platform.exitApp();
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Signin = function () {
        var _this = this;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.email == null) {
            var toast = this.toastCtrl.create({
                message: 'Please enter your email',
                duration: 3000,
                position: 'bottom',
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        }
        else if (!re.test(this.email)) {
            var toast = this.toastCtrl.create({
                message: 'Email id not valid',
                duration: 3000,
                position: 'bottom',
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        }
        else if (this.password == null) {
            var toast = this.toastCtrl.create({
                message: 'Please enter your password',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
            });
            toast.present();
        }
        else {
            this.submitted = true;
            var loader_1 = this.loadingController.create({
                content: "Please Wait..."
            });
            loader_1.present();
            var postParams = {
                email: this.email,
                password: this.password
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.post('https://www.lebutility.com/api/login', postParams, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var toast = _this.toastCtrl.create({
                    message: data.message,
                    duration: 3000,
                    position: 'bottom'
                });
                var animationsOptions = {
                    animation: 'ios-transition',
                    duration: 1000
                };
                _this.role_id = data.role_id;
                if (_this.role_id == "4") {
                    _this.storage.set('isLoggedIn', _this.submitted);
                    _this.storage.set('COLLECTOR_ID', data.response.id);
                    _this.storage.set('Role_ID', data.role_id);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__client_houselist_client_houselist__["a" /* ClientHouselistPage */], {
                        login: _this.submitted
                    }, animationsOptions);
                }
                else {
                    _this.storage.set('isLoggedIn', _this.submitted);
                    _this.storage.set('COLLECTOR_ID', data.response.id);
                    _this.storage.set('Role_ID', data.role_id);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */], {
                        login: _this.submitted
                    }, animationsOptions);
                }
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader_1.dismiss();
            }, function (error) {
                _this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');
                var toast = _this.toastCtrl.create({
                    message: _this.errors,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader_1.dismiss();
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n\n    <ion-title text-center>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row>\n      \n    </ion-row>\n    <ion-row class="vertical-align-content">\n        <ion-col text-center col-12>\n            <img src="assets/lebutility-logo.png" alt="image" class="image">\n          </ion-col>\n          <ion-col col-12 text-center class="text_subtitle">Sign In With Email</ion-col>\n      <ion-col col-11 class="margin" margin-top>\n        <ion-item>\n          <ion-input type="email" placeholder="Email ID" [(ngModel)]="email" class="inputtext"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-11 class="margin">\n        <ion-item>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="password" class="inputtext"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 style="margin-bottom: 30px;">\n        <ion-row>\n          <ion-col col-11 class="margin" no-padding margin-top>\n            <button ion-button full (click)="Signin()">Log in</button>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-- <ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title text-center>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col text-center col-12>\n        <img src="assets/lebutility-logo.png" alt="image" class="image">\n      </ion-col>\n      <ion-col col-12 text-center class="text_subtitle">Sign In With Email</ion-col>\n\n    </ion-row>\n\n    <ion-row class="row_margin">\n      <ion-col col-12>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="row_margin">\n      <ion-col col-12 (click)="Signin()">\n        <button ion-button full class="button">Log in</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content> -->'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectCounterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(36);
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
 * Generated class for the CollectCounterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CollectCounterPage = /** @class */ (function () {
    function CollectCounterPage(navCtrl, navParams, loadingController, http, toastCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        Promise.all([this.storage.get('CLIENT_NAME'), this.storage.get('CLIENT_ID'), this.storage.get('ADDRESS'),
            this.storage.get('CITY'), this.storage.get('ZONE_NAME'), this.storage.get('MONTH'),
            this.storage.get('YEAR'), this.storage.get('HOUSE_ID')]).then(function (val) {
            _this.clientname = val[0];
            _this.client_id = val[1];
            _this.address = val[2];
            _this.city = val[3];
            _this.zone_name = val[4];
            _this.month = val[5];
            _this.year = val[6];
            _this.house_id = val[7];
        });
    }
    CollectCounterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CollectCounterPage');
    };
    CollectCounterPage.prototype.Submit = function () {
        var _this = this;
        Promise.all([this.storage.get('ZONE_ID'), this.storage.get('CLIENT_ID'), this.storage.get('HOUSE_ID'),
            this.storage.get('BILL_ID'), this.storage.get('COLLECTOR_ID'), this.storage.get('BILL_MONTH_DATE'),
            this.storage.get('Role_ID')
        ]).then(function (val) {
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            var postParams = {
                zone_id: val[0],
                client_id: val[1],
                house_id: val[2],
                bill_id: val[3],
                login_id: val[4],
                unit: _this.counter_no,
                bill_month_date: val[5],
                role_id: val[6]
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post('https://www.lebutility.com/api/setConsumption', postParams, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var toast = _this.toastCtrl.create({
                    message: data.message,
                    duration: 3000,
                    position: 'bottom'
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            }, function (error) {
                _this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');
                var toast = _this.toastCtrl.create({
                    message: _this.errors,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            });
        });
    };
    CollectCounterPage.prototype.Cancel = function () {
        this.navCtrl.pop();
    };
    CollectCounterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collect-counter',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\collect-counter\collect-counter.html"*/'<!--\n  Generated template for the CollectCounterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Collect Counter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content margin-top>\n\n  <ion-grid margin-top>\n    <ion-card class="top_card">\n      <ion-row>\n        <ion-col col-6 class="text">Client ID</ion-col>\n        <ion-col col-6 class="text">{{client_id}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 class="text">Client Name</ion-col>\n        <ion-col col-6 class="text">{{clientname}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 class="text">House ID</ion-col>\n        <ion-col col-6 class="text">{{house_id}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 class="text">Address</ion-col>\n        <ion-col col-6 class="text">{{address}} {{city}}\n          {{zone_name}}</ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-row justify-content-center margin-top>\n      <ion-col col-6 class="text_month_yr" style="text-align: right;"><b>{{month}}</b></ion-col>\n      <ion-col col-6 class="text_month_yr"><b>{{year}}</b></ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center class="margintop" margin-top>\n      <ion-col col-6>\n        <ion-label class="text">Count Number</ion-label>\n      </ion-col>\n      <ion-col text-center col-6 class="col_border">\n        <ion-item>\n          <ion-input type="number" text-center style="font-weight: bold" [(ngModel)]="counter_no"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row margin-bottom margin-top justify-content-center>\n        <ion-col col-6 text-center>\n          <button ion-button (click)="Cancel()" class="button">Cancel</button>\n        </ion-col>\n        <ion-col col-6 text-center>\n          <button ion-button (click)="Submit()" class="button">Submit</button>\n        </ion-col>\n    \n      </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\collect-counter\collect-counter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], CollectCounterPage);
    return CollectCounterPage;
}());

//# sourceMappingURL=collect-counter.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientHouselistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client_housebill_client_housebill__ = __webpack_require__(118);
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
 * Generated class for the ClientHouselistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientHouselistPage = /** @class */ (function () {
    function ClientHouselistPage(navCtrl, navParams, loadingController, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.hide_label = false;
        this.hide_searchbar = true;
        this.hide_logout = false;
    }
    ClientHouselistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ClientHouselistPage');
        // this.client_id = this.navParams.get('COLLECTOR_ID');
        console.log("coll", this.client_id);
        Promise.all([this.storage.get('COLLECTOR_ID')])
            .then(function (val) {
            _this.client_id = val[0];
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            _this.http.get('https://www.lebutility.com/api/getHouseByClientId/' + _this.client_id)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.list = data;
                console.log(_this.list.response);
                if (_this.list.response == 0) {
                    _this.hide_label = true;
                    _this.hide_searchbar = false;
                }
                _this.i++;
            }, function (err) { return console.warn(err); }, function () {
                loader.dismiss();
            });
        });
    };
    ClientHouselistPage.prototype.House_click = function (clients_house, i) {
        __WEBPACK_IMPORTED_MODULE_5_jquery__(".back_white").removeClass("back_grey");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#house_" + i).addClass('back_grey');
        console.log("Houseid", clients_house.id);
        this.storage.set("HOUSE_ID", clients_house.id);
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__client_housebill_client_housebill__["a" /* ClientHousebillPage */], {}, animationsOptions);
    };
    ClientHouselistPage.prototype.Logout = function () {
        this.submitted = false;
        this.storage.set('isLoggedIn', this.submitted);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    ClientHouselistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-houselist',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\client-houselist\client-houselist.html"*/'<!--\n  Generated template for the ClientHouselistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar hideBackButton>\n      <ion-title text-center>List Houses</ion-title>\n      <ion-buttons end style="margin-right : 20px; " (click)="Logout()" >\n        <button ion-button icon-only style="color : #fff">  \n          <ion-icon name="md-power"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content margin-top>\n  \n      <ion-grid>\n          <ion-searchbar (ionInput)="getItems($event)" *ngIf="hide_searchbar"></ion-searchbar>\n  \n          <ion-label *ngIf="hide_label" text-center>House Does Not Exists!</ion-label>\n      \n      \n          <div *ngIf="list" margin-top>\n      \n            <ion-list *ngFor="let clients_house of list.response; let i = index;">\n              <ion-row (click)="House_click(clients_house,i)" class="back_white" id="house_{{i}}">\n                <ion-col col-11><b>House {{i}} #ID{{clients_house.id}}</b></ion-col>\n                <ion-col col-1>\n                  <img src="assets/arrow.png" class="arrow_img">\n                </ion-col>\n              </ion-row>\n      \n            </ion-list>\n          </div>\n      \n        </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\client-houselist\client-houselist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ClientHouselistPage);
    return ClientHouselistPage;
}());

//# sourceMappingURL=client-houselist.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collect_counter_collect_counter__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pay_bill_pay_bill__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__payment_details_payment_details__ = __webpack_require__(59);
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
 * Generated class for the HouseBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HouseBillPage = /** @class */ (function () {
    function HouseBillPage(navCtrl, navParams, loadingController, http, toastCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.year = 2019;
        Promise.all([this.storage.get('HOUSE_ID'), this.storage.get('Role_ID'), this.storage.get('COLLECTOR_ID')])
            .then(function (val) {
            _this.house_id = val[0];
            _this.role_id = val[1];
            _this.login_id = val[2];
            _this.count = 1;
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            var postParams = {
                year: _this.year,
                login_id: _this.login_id,
                role_id: _this.role_id,
                house_id: _this.house_id
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post('https://www.lebutility.com/api/getHouseDetailById', postParams, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.client_id = data.response.house_detail[0].client_id;
                _this.client_name = data.response.house_detail[0].client_name;
                _this.houseid = data.response.house_detail[0].house_id;
                _this.address = data.response.house_detail[0].address;
                _this.city = data.response.house_detail[0].city;
                _this.zone_name = data.response.house_detail[0].zone_name;
                _this.bills = [];
                for (var i = 0; i < data.response.bill_detail.length; i++) {
                    _this.bills.push(data.response.bill_detail[i]);
                }
                _this.storage.set("ZONE_ID", data.response.house_detail[0].zone_id);
                _this.storage.set("CLIENT_ID", data.response.house_detail[0].client_id);
                _this.storage.set('ADDRESS', data.response.house_detail[0].address);
                _this.storage.set('CLIENT_NAME', data.response.house_detail[0].client_name);
                _this.storage.set('CITY', data.response.house_detail[0].city);
                _this.storage.set('ZONE_NAME', data.response.house_detail[0].zone_name);
                _this.storage.set("UNIT", data.response.bill_detail[0].unit);
                _this.status = _this.statuss;
                loader.dismiss();
            }, function (error) {
                _this.navCtrl.pop();
                _this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');
                var toast = _this.toastCtrl.create({
                    message: _this.errors,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            });
        });
    }
    HouseBillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HouseBillPage');
    };
    HouseBillPage.prototype.House_Detail = function (item, i) {
        this.storage.set('MONTH', item.month);
        this.storage.set("BILL_ID", item.bill_id);
        this.storage.set("BILL_MONTH_DATE", item.bill_month_date);
        this.storage.set('STATUS', item.status);
        // $(".bill").css({'background-color': '#fff'});
        // $("#bg_"+i).css({'background-color': '#dddddd'});
        this.count = 0;
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 1000
        };
        if (item.status == "Uncolllected") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__collect_counter_collect_counter__["a" /* CollectCounterPage */], {}, animationsOptions);
        }
        else if (item.status == "Paid") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__payment_details_payment_details__["a" /* PaymentDetailsPage */], {}, animationsOptions);
        }
        else if (item.status = "Unpaid") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pay_bill_pay_bill__["a" /* PayBillPage */], {}, animationsOptions);
        }
        this.count = 1;
        //}
    };
    HouseBillPage.prototype.getyear = function (selectyear) {
        var _this = this;
        Promise.all([this.storage.get('HOUSE_ID'), this.storage.get('Role_ID'), this.storage.get('COLLECTOR_ID')])
            .then(function (val) {
            _this.house_id = val[0];
            _this.role_id = val[1];
            _this.login_id = val[2];
            _this.count = 1;
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            var postParams = {
                year: selectyear,
                login_id: _this.login_id,
                role_id: _this.role_id,
                house_id: _this.house_id
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post('https://www.lebutility.com/api/getHouseDetailById', postParams, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.client_id = data.response.house_detail[0].client_id;
                _this.client_name = data.response.house_detail[0].client_name;
                _this.houseid = data.response.house_detail[0].house_id;
                _this.address = data.response.house_detail[0].address;
                _this.city = data.response.house_detail[0].city;
                _this.zone_name = data.response.house_detail[0].zone_name;
                if (data.response.bill_detail[0] == null) {
                    var toast = _this.toastCtrl.create({
                        message: "Oops!Data isn't available",
                        duration: 3000,
                        position: 'bottom'
                    });
                    _this.navCtrl.pop();
                    toast.onDidDismiss(function () {
                    });
                    toast.present();
                    loader.dismiss();
                }
                else {
                    _this.bills = [];
                    for (var i = 0; i < data.response.bill_detail.length; i++) {
                        _this.bills.push(data.response.bill_detail[i]);
                    }
                    _this.storage.set('MONTH', _this.bills);
                    _this.storage.set('STATUS', _this.statuss);
                    _this.storage.set("ZONE_ID", data.response.house_detail[0].zone_id);
                    _this.storage.set("CLIENT_ID", data.response.house_detail[0].client_id);
                    _this.storage.set('ADDRESS', data.response.house_detail[0].address);
                    _this.storage.set('CLIENT_NAME', data.response.house_detail[0].client_name);
                    _this.storage.set('CITY', data.response.house_detail[0].city);
                    _this.storage.set('ZONE_NAME', data.response.house_detail[0].zone_name);
                    _this.storage.set("BILL_ID", data.response.bill_detail[0].bill_id);
                    _this.storage.set("UNIT", data.response.bill_detail[0].unit);
                    _this.storage.set("BILL_MONTH_DATE", data.response.bill_detail[0].bill_month_date);
                    _this.status = _this.statuss;
                    loader.dismiss();
                }
            }, function (error) {
                _this.navCtrl.pop();
                _this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');
                var toast = _this.toastCtrl.create({
                    message: _this.errors,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            });
        });
    };
    HouseBillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-house-bill',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\house-bill\house-bill.html"*/'<!--\n  Generated template for the HouseBillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>House Bills</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <div >\n        <!-- *ngIf="list" -->\n      <ion-list >\n          <!-- *ngFor="let house_details of list.response.house_detail" -->\n        <ion-card class="top_card">\n\n          <ion-row>\n            <ion-col col-6 class="text">Client ID</ion-col>\n            <ion-col col-6 class="text">{{client_id}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6 class="text">Client Name</ion-col>\n            <ion-col col-6 class="text">{{client_name}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6 class="text">House ID</ion-col>\n            <ion-col col-6 class="text">{{houseid}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6 class="text">Address</ion-col>\n            <ion-col col-6 class="text">{{address}} {{city}}\n              {{zone_name}}</ion-col>\n          </ion-row>\n\n        </ion-card>\n\n        <ion-row justify-content-center margin-top>\n          <ion-col text-center col-6 class="text border">\n\n            <ion-item>\n              <ion-label>Select Year</ion-label>\n\n              <ion-select [(ngModel)]="selectyear" (ionChange)="getyear(selectyear)">\n                <ion-option value="2018">2018</ion-option>\n                <ion-option value="2019" selected>2019</ion-option>\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-card class="card" *ngFor="let item of bills; let index=i" (click)="House_Detail(item,i)"  >\n            <ion-row class="bill" id=\'bg_{{i}}\'>\n              <ion-col col-4 class="list_text">{{item.month}}</ion-col>\n              <ion-col col-4 class="list_text">{{item.status}}</ion-col>\n              <ion-col col-3 class="list_text" text-center>{{item.amount}}</ion-col>\n              <ion-col col-1>\n                <img src="assets/arrow.png" class="arrow_img">\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        <!-- <div class= "myClass"> -->\n        <!-- <ion-card class="card" (click)="House_Detail()" >\n            <ion-row class="bill" [ngStyle]="{\'background\': background_color}" >\n              <ion-col col-4 class="list_text">{{month}}</ion-col>\n              <ion-col col-4 class="list_text">{{statuss}}</ion-col>\n              <ion-col col-3 class="list_text" text-center>{{amount}}</ion-col>\n              <ion-col col-1>\n                <img src="assets/arrow.png" class="arrow_img">\n              </ion-col>\n            </ion-row>\n          </ion-card> -->\n          <!-- </div> -->\n        <!-- <ion-list *ngIf="list" margin-top>\n          <ion-item *ngFor="let house_details of list.response.bill_detail; let i=index">\n            <ion-card class="card" (click)="House_Detail(house_details,i)">\n              <ion-row class="bill" [ngStyle]="{\'background\': house_details.background}" id={{i}}>\n                <ion-col col-4 class="list_text">{{house_details.month}}</ion-col>\n                <ion-col col-4 class="list_text">{{house_details.status}}</ion-col>\n                <ion-col col-3 class="list_text" text-center>{{house_details.amount}}</ion-col>\n                <ion-col col-1>\n                  <img src="assets/arrow.png" class="arrow_img">\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-item>\n\n        </ion-list> -->\n\n      </ion-list>\n    </div>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\house-bill\house-bill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HouseBillPage);
    return HouseBillPage;
}());

//# sourceMappingURL=house-bill.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(36);
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
 * Generated class for the PayBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayBillPage = /** @class */ (function () {
    function PayBillPage(navCtrl, navParams, loadingController, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
    }
    PayBillPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PayBillPage');
        Promise.all([this.storage.get('BILL_ID'), this.storage.get('MONTH'), this.storage.get('YEAR')])
            .then(function (val) {
            _this.bill_id = val[0];
            _this.month = val[1];
            _this.year = val[2];
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            _this.http.get('https://www.lebutility.com/api/getBillDetailById/' + _this.bill_id).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.list = data;
                _this.amount = +_this.list.response[0].amount + +_this.list.response[0].TVA;
            }, function (err) { return console.warn(err); }, function () {
                loader.dismiss();
            });
        });
    };
    PayBillPage.prototype.Cancel = function () {
        this.navCtrl.pop();
    };
    PayBillPage.prototype.Pay = function () {
        var _this = this;
        Promise.all([this.storage.get('BILL_ID'), this.storage.get('COLLECTOR_ID'), this.storage.get('Role_ID')])
            .then(function (val) {
            _this.bill_id = val[0];
            _this.collector_id = val[1];
            _this.role_id = val[2];
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            var postParams = {
                bill_id: _this.bill_id,
                amount: _this.amount,
                login_id: _this.collector_id,
                role_id: _this.role_id
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post('https://www.lebutility.com/api/setBillStatus', postParams, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var toast = _this.toastCtrl.create({
                    message: data.message,
                    duration: 3000,
                    position: 'bottom'
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            }, function (error) {
                _this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');
                var toast = _this.toastCtrl.create({
                    message: _this.errors,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            });
        });
    };
    PayBillPage.prototype.CollectionDate = function () {
        this.sDate.open();
    };
    PayBillPage.prototype.dateChanged = function () {
        var _this = this;
        Promise.all([this.storage.get('BILL_ID')])
            .then(function (val) {
            _this.bill_id = val[0];
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            var postParams = {
                bill_id: _this.bill_id,
                date: _this.selectdate
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post('https://www.lebutility.com/api/updateNextCollectionDate', postParams, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var toast = _this.toastCtrl.create({
                    message: data.message,
                    duration: 3000,
                    position: 'bottom'
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            }, function (error) {
                _this.errors = JSON.stringify(error.json().message).replace(/['"]+/g, '');
                var toast = _this.toastCtrl.create({
                    message: _this.errors,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
                loader.dismiss();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('dateTime'),
        __metadata("design:type", Object)
    ], PayBillPage.prototype, "sDate", void 0);
    PayBillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay-bill',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\pay-bill\pay-bill.html"*/'<!--\n  Generated template for the PayBillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Pay Bill</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <div *ngIf="list">\n      <ion-list *ngFor="let pay_bill of list.response">\n        <ion-card class="top_card">\n          <ion-row>\n            <ion-col col-6 class="text">Client ID</ion-col>\n            <ion-col col-6 class="text">{{pay_bill.client_id}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6 class="text">Client Name</ion-col>\n            <ion-col col-6 class="text">{{pay_bill.client_name}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6 class="text">House ID</ion-col>\n            <ion-col col-6 class="text">{{pay_bill.client_house_id}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6 class="text">Address</ion-col>\n            <ion-col col-6 class="text">{{pay_bill.address}} {{pay_bill.city}}\n              {{pay_bill.zone_name}}</ion-col>\n          </ion-row>\n\n        </ion-card>\n        <ion-row justify-content-center margin-top>\n          <ion-col col-6 class="text_month_yr" style="text-align: center;"><b>{{pay_bill.month}}</b></ion-col>\n        </ion-row>\n\n        <ion-row justify-content-center margin-top>\n          <ion-col col-6>\n            <ion-label text-center class="text">\n              <b>Amount due</b>\n            </ion-label>\n            <ion-item class="col_border">\n              <ion-input [(ngModel)]="amount" style="font-weight: bold" text-center readonly></ion-input>\n            </ion-item>\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list>\n    </div>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n\n  <ion-row margin-bottom justify-content-center>\n    <ion-col col-6 text-center>\n      <button ion-button (click)="Cancel()" class="button">Cancel</button>\n    </ion-col>\n    <ion-col col-6 text-center>\n      <button ion-button (click)="Pay()" class="button">Pay</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row margin-bottom justify-content-center>\n    <ion-col col-12 text-center>\n        <ion-item  ><ion-label>Next Collection Date</ion-label>\n        <ion-datetime #dateTime (ionChange)="dateChanged($event)"  displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" [(ngModel)]="selectdate"></ion-datetime>\n      </ion-item>\n        <button ion-button (click)="CollectionDate()" class="button">Select Next Collection Date</button>\n       \n   \n    </ion-col>\n  </ion-row>  \n\n</ion-footer>'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\pay-bill\pay-bill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PayBillPage);
    return PayBillPage;
}());

//# sourceMappingURL=pay-bill.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the PaymentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentDetailsPage = /** @class */ (function () {
    function PaymentDetailsPage(navCtrl, navParams, loadingController, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
    }
    PaymentDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PaymentDetailsPage');
        Promise.all([this.storage.get('BILL_ID')])
            .then(function (val) {
            _this.bill_id = val[0];
            var loader = _this.loadingController.create({
                content: "Please Wait..."
            });
            loader.present();
            _this.http.get('https://www.lebutility.com/api/getBillDetailById/' + _this.bill_id).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.list = data;
                _this.total = +_this.list.response[0].amount + +_this.list.response[0].TVA + +_this.list.response[0].gouv_price;
            }, function (err) { return console.warn(err); }, function () {
                loader.dismiss();
            });
        });
    };
    PaymentDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-details',template:/*ion-inline-start:"E:\IONIC\lebutility-app\src\pages\payment-details\payment-details.html"*/'<!--\n  Generated template for the PaymentDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Payment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="list">\n\n    <ion-list *ngFor="let bill_details of list.response">\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Client ID</ion-col>\n            <ion-col col-6>{{bill_details.client_house_id}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Client Name</ion-col>\n            <ion-col col-6>{{bill_details.client_name}}</ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Provider ID</ion-col>\n            <ion-col col-6>{{bill_details.provider_id}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Collector ID</ion-col>\n            <ion-col col-6>{{bill_details.collector_id}}</ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Address</ion-col>\n            <ion-col col-6>{{bill_details.address}} {{city}} {{zone}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Phone Number</ion-col>\n            <ion-col col-6>{{bill_details.phone_number}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Paid Date</ion-col>\n            <ion-col col-6>{{bill_details.paid_date}}</ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Amount</ion-col>\n            <ion-col col-6>{{bill_details.amount}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>TVA</ion-col>\n            <ion-col col-6>{{bill_details.TVA}}</ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-row>\n          <ion-col class="border"></ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6>Gouv Price</ion-col>\n            <ion-col col-6>{{bill_details.gouv_price}}</ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col col-6><b>Total</b></ion-col>\n            <ion-col col-6><b>{{total}}</b></ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\IONIC\lebutility-app\src\pages\payment-details\payment-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PaymentDetailsPage);
    return PaymentDetailsPage;
}());

//# sourceMappingURL=payment-details.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map