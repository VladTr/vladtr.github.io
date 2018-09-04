webpackJsonp([1,4],{

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(448);


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(af) {
        this.af = af;
    }
    AuthService.prototype.signIn = function (user) {
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.logOut = function () {
        if (this.isAuth()) {
            firebase.auth().signOut().then(function () {
            }).catch(function (error) {
            });
        }
    };
    AuthService.prototype.isAuth = function () {
        if (typeof (firebase) == 'undefined')
            return false;
        var user = firebase.auth().currentUser;
        if (user) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.dataFromBase = function () {
        return this.af.database.object('/ru/products/product-ta01');
    };
    AuthService.prototype.updateBase = function (data) {
        this.af.database.object('/ru/products/product-ta01').update(data);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/auth.service.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
/*
export const firebaseConfig ={
    apiKey: "AIzaSyBzyQ6rJQhOR1wd5qbNVjZU5rpDvQwYlNo",
    authDomain: "tk-test-7845f.firebaseapp.com",
    databaseURL: "https://tk-test-7845f.firebaseio.com",
    storageBucket: "tk-test-7845f.appspot.com",
};
*/
var firebaseConfig = {
    apiKey: "AIzaSyCGSiNYCmqhsOtzo9aYbR_3OzQ-A_-fQY0",
    authDomain: "telecart-950cd.firebaseapp.com",
    databaseURL: "https://telecart-950cd.firebaseio.com",
    storageBucket: "telecart-950cd.appspot.com",
};
/*
apiKey: "AIzaSyCGSiNYCmqhsOtzo9aYbR_3OzQ-A_-fQY0",
    authDomain: "telecart-950cd.firebaseapp.com",
    databaseURL: "https://telecart-950cd.firebaseio.com",
    projectId: "telecart-950cd",
    storageBucket: "telecart-950cd.appspot.com",
    messagingSenderId: "304735349244"

    */ 
//# sourceMappingURL=D:/OpenServer/domains/fb/src/firebase.config.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(activatedRote, localService) {
        var _this = this;
        this.activatedRote = activatedRote;
        this.localService = localService;
        this.tour = '';
        this.technology = '';
        this.center = '';
        this.cooperate = '';
        this.contacts = '';
        this.history = {};
        this.subscription = this.activatedRote.params.subscribe(function (param) {
            if (_this.id != param['id']) {
                _this.id = param['id'];
                _this.getData();
            }
        });
    }
    AboutComponent.prototype.getData = function () {
        var _this = this;
        this.localService.getLocal('about', '').subscribe(function (data) {
            _this.history = data.history;
            _this.tour = data.tour;
            _this.technology = data.technology;
            _this.center = data.center;
            _this.cooperate = data.cooperate;
            _this.contacts = data.contacts;
        });
    };
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localService.getLocale().subscribe(function (data) { return _this.getData(); });
        this.getData();
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(742),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__local_service__["a" /* LocalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__local_service__["a" /* LocalService */]) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/about.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(234);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(authService, fb) {
        this.authService = authService;
        this.fb = fb;
    }
    AdminComponent.prototype.getData = function () {
        var _this = this;
        this.authService.dataFromBase().subscribe(function (data) {
            var description = data.description;
            _this.myForm = _this.fb.group({
                description: [description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
            });
        });
    };
    AdminComponent.prototype.send = function () {
        this.authService.updateBase(this.myForm.value);
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            description: ['Нажмите: Начать редактирование', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin',
            template: "\n   <div class=\"admin\">\n   \n    <button class=\"btn btn-info\" (click)=\"getData()\">\u041D\u0430\u0447\u0430\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435</button>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"send()\">\n    <hr>\n        <div class=\"form-group\">\n          <label for=\"description\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</label>\n          <textarea rows=\"10\" cols=\"45\" formControlName=\"description\" type=\"text\" id=\"description\" class=\"form-control\">\n          </textarea>\n        </div>\n        <!--<div class=\"input-group\">-->\n          <!--<label for=\"password\">Password</label>-->\n          <!--<input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\">-->\n        <!--</div>-->\n        <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-success\">\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F</button>\n    </form>\n   </div> \n  ",
            styles: ['.admin{min-height: 700px; margin-top: 30px}']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/admin.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])();
var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.authService.isAuth()) {
            window.location.href = "https://www.google.com.ua/#q=telecard-pribor&*";
            return false;
        }
        return this.authService.isAuth();
    };
    AuthGuard = __decorate([
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/auth.guard.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, fb, route) {
        this.authService = authService;
        this.fb = fb;
        this.route = route;
        this.logged = false;
        this.error = '';
    }
    LoginComponent.prototype.sign = function () {
        var _this = this;
        this.authService.signIn(this.myForm.value).catch(function (error) {
            if (error.message !== '') {
                _this.error = error.message;
            }
        });
        setTimeout(function () {
            if (_this.authService.isAuth()) {
                _this.error = '';
                _this.logged = true;
                _this.route.navigate(['admin']);
            }
        }, 1500);
    };
    LoginComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.logged = false;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-login',
            template: "\n    <div class=\"admin\">\n      <h4>\n        Admin panel\n      </h4>\n      <div class=\"logged\">\n        <div *ngIf=\"logged==true\">\n        You logged\n        <p><button class=\"btn btn-danger\" (click)=\"logOut()\">Logout</button></p>\n        </div>\n        <div *ngIf=\"logged==false\">\n        You are not logged\n        </div>\n      </div>\n      <p>\n      Please enter your email & password\n      </p>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"sign()\">\n          <div class=\"form-group\">\n          <label for=\"email\">E-Mail</label>\n          <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\">\n          </div>\n          <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Sign In</button>\n      </form>\n      <div *ngIf=\"error\">\n        {{error}}\n      </div>\n    </div>\n  ",
            styles: ['.admin{height: 700px} .logged{text-align: right}'],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/login.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
// компонент отвечаюший за построение главной страницы
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(localService) {
        this.localService = localService;
        this.systems = {};
        this.radio = {};
        this.modernization = {};
        this.appNew = {};
    }
    // получаем данные из firebase для построения главной страницы
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.localService.getLocal('home', '').subscribe(function (data) {
            _this.appNew = data.new;
            _this.radio = data.radio;
            _this.systems = data.systems;
            _this.modernization = data.modernization;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ловим изменения языка настройки для ререндеринга
        this.localService.getLocale().subscribe(function (data) { return _this.getData(); });
        this.getData();
        $(document).ready(function () {
            $('figcaption').on('click', 'a', function (event) {
                event.preventDefault();
                var id = $(this).attr('href');
                var top = $(id).offset().top;
                $('body,html').animate({ scrollTop: top }, 1500);
            });
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(744),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__local_service__["a" /* LocalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__local_service__["a" /* LocalService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/home.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = (function () {
    function NewsComponent(localService, af) {
        this.localService = localService;
        this.af = af;
    }
    // получаем данные из firebase для построения страницы новостей
    NewsComponent.prototype.getServerData = function () {
        this.loc = this.localService.getSettledLocale();
        this.news = this.af.database.list(this.loc + '/news/', { query: {
                orderByChild: 'order'
            } });
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ловим изменения языка настройки для ререндеринга
        this.localService.getLocale().subscribe(function (data) { return _this.getServerData(); });
        this.getServerData();
    };
    NewsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__(745),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__local_service__["a" /* LocalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__local_service__["a" /* LocalService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */]) === 'function' && _b) || Object])
    ], NewsComponent);
    return NewsComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/news.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-page-not-found',
            template: "\n    <p>\n     Page not found\n    </p>\n  ",
            styles: ['p{text-align: center}']
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/page-not-found.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = (function () {
    function ProductComponent(router, activatedRote, localService, af) {
        var _this = this;
        this.router = router;
        this.activatedRote = activatedRote;
        this.localService = localService;
        this.af = af;
        this.product = {};
        this.submenu = {};
        this.table1 = {};
        this.table2 = {};
        this.dwl = {};
        this.application = {};
        this.loc = this.localService.getSettledLocale();
        // получаем данные по товару по его id
        this.subscription = this.activatedRote.params.subscribe(function (param) {
            if (_this.id != param['id']) {
                _this.id = param['id'];
                _this.getServerData();
            }
        });
    }
    // прочитываем данные от товаре из firebase
    ProductComponent.prototype.getServerData = function () {
        var _this = this;
        this.localService.getLocal('products', this.id).subscribe(function (data) {
            if (data == null) {
                _this.router.navigateByUrl('');
                return;
            }
            _this.product = data;
            _this.application = data.application;
            _this.table1 = data.table1;
            _this.table2 = data.table2;
        });
        this.localService.getLocal('products', '').subscribe(function (data) {
            _this.submenu = data.submenu;
            _this.dwl = data.misc;
        });
        this.items1 = this.af.database.list(this.loc + '/products/' + this.id + '/table1/rows');
        this.items2 = this.af.database.list(this.loc + '/products/' + this.id + '/table2/rows');
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // отображаем данные по товару в зависимости от изменившегося языка
        this.localService.getLocale().subscribe(function (data) {
            _this.loc = data;
            _this.getServerData();
        });
        this.getServerData();
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Object)
    ], ProductComponent.prototype, "loc", void 0);
    ProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__(746),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__local_service__["a" /* LocalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__local_service__["a" /* LocalService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AngularFire */]) === 'function' && _d) || Object])
    ], ProductComponent);
    return ProductComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/product.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolutionComponent = (function () {
    function SolutionComponent(router, activatedRote, localService, af) {
        var _this = this;
        this.router = router;
        this.activatedRote = activatedRote;
        this.localService = localService;
        this.af = af;
        this.solution = {};
        this.submenu = {};
        this.table2 = {};
        this.images = {};
        // получаем id выбранного комплекса и соответсвующие ему данные
        this.subscription = this.activatedRote.params.subscribe(function (param) {
            if (_this.id != param['id']) {
                _this.id = param['id'];
                _this.images = {};
                _this.table1 = {};
                _this.table2 = {};
                _this.solution = {};
                _this.solution = {};
                _this.getServerData();
            }
        });
    }
    // получаем данные по комплексу из firebase
    SolutionComponent.prototype.getServerData = function () {
        var _this = this;
        this.localService.getLocal('solutions', this.id).subscribe(function (data) {
            if (data == null) {
                _this.router.navigateByUrl('');
                return;
            }
            _this.solution = data;
            _this.submenu = data.submenu;
            _this.table2 = data.table2;
            _this.table1 = data.table1;
            _this.images = data.images;
        });
        this.items1 = this.localService.getList('solutions', this.id, 'table1');
        this.items2 = this.localService.getList('solutions', this.id, 'table2');
    };
    SolutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // подписываемся на событие изменения языка и при необходимости выводим информацию на заданном языке
        this.localService.getLocale().subscribe(function (data) { return _this.getServerData(); });
        this.getServerData();
    };
    SolutionComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SolutionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-solution',
            template: __webpack_require__(747),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__local_service__["a" /* LocalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__local_service__["a" /* LocalService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */]) === 'function' && _d) || Object])
    ], SolutionComponent);
    return SolutionComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/solution.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 447;


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(565);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/OpenServer/domains/fb/src/main.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_firebase_config__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(af, localService, titleService) {
        this.af = af;
        this.localService = localService;
        this.titleService = titleService;
        // задаем язык по умолчанию
        this.loc = 'ru';
        this.products = {};
        this.contentMain = {};
        this.submenu = {};
        this.submenuAbout = {};
        this.appFooter = {};
    }
    // метод задающий новый язык по нажатию
    AppComponent.prototype.toggleLanguage = function (lang) {
        if (this.loc == lang) {
            return;
        }
        else {
            this.loc = lang;
            this.localService.setLocale(this.loc);
            this.getData();
        }
    };
    // прочитываем / перепрочитываем данные из firebase
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.localService.getLocal('about', '').subscribe(function (data) {
            _this.submenuAbout = data.submenu;
        });
        this.localService.getLocal('app', '').subscribe(function (data) {
            _this.contentMain = data.menu;
            _this.submenu = data.submenu;
            _this.appFooter = data.footer;
        });
        this.items = this.af.database.list(__WEBPACK_IMPORTED_MODULE_3__environments_firebase_config__["a" /* firebaseConfig */].databaseURL + '/' + this.loc + '/products');
        this.solutions = this.af.database.list(__WEBPACK_IMPORTED_MODULE_3__environments_firebase_config__["a" /* firebaseConfig */].databaseURL + '/' + this.loc + '/solutions');
        if (this.loc == 'ru') {
            this.titleService.setTitle('Телекарт-Прибор');
        }
        if (this.loc == 'en') {
            this.titleService.setTitle('Telecard-Pribor');
        }
        if (this.loc == 'ua') {
            this.titleService.setTitle('Телекарт-Прилад');
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var doc_w = $(document).width();
        $(window).resize(function () {
            doc_w = $(document).width();
        });
        $('a#prevent1, a#prevent2').click(function (event) {
            // alert(doc_w);
            if (doc_w > 768) {
                event.preventDefault();
            }
        });
        $('li.dropdown').mouseover(function () {
            $(this).find('a.dropdown-toggle').css('color', 'black');
        }).mouseleave(function () {
            $('a.dropdown-toggle').css('color', '');
        });
        this.getData();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(743),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__local_service__["a" /* LocalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__local_service__["a" /* LocalService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_product_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__news_news_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__solution_solution_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_not_found_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_login_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__admin_admin_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_auth_guard__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_auth_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__solution_solution_component__["a" /* SolutionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__admin_admin_component__["a" /* AdminComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__["a" /* firebaseConfig */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__local_service__["a" /* LocalService */], __WEBPACK_IMPORTED_MODULE_18__admin_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__admin_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_product_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__solution_solution_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_login_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_auth_guard__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });










var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about/:id', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_1__product_product_component__["a" /* ProductComponent */] },
    { path: 'solution/:id', component: __WEBPACK_IMPORTED_MODULE_4__solution_solution_component__["a" /* SolutionComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_3__news_news_component__["a" /* NewsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__admin_login_component__["a" /* LoginComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__admin_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=D:/OpenServer/domains/fb/src/app.routing.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/OpenServer/domains/fb/src/environment.js.map

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = ".about-text{\r\n    padding-top: 10px;\r\n    margin-left: 20px;\r\n    font-size: 1.2em;\r\n    text-align: justify;\r\n    height: 700px;\r\n}\r\n\r\n.about-text2{\r\n    padding-top: 10px;\r\n    margin-left: 20px;\r\n    text-align: justify;\r\n}\r\n\r\n\r\n.about-img{\r\n    padding-top: 10px;\r\n    float: right;\r\n    margin: 15px;\r\n}\r\n\r\n.about-img2{\r\n    padding-top: 10px;\r\n    float: right;\r\n    margin: 10px;\r\n}\r\n\r\n\r\n.item{\r\n    /*background-image: url(\"/img/app/carousel/01.jpg\");*/\r\n    text-align: center;\r\n    height: 600px !important;\r\n}\r\n\r\n.carousel{\r\n    margin-top: 20px;\r\n}\r\n\r\n.al-centre{\r\n    text-align: center;\r\n}\r\n\r\n.about-img{\r\n    height: 200px;\r\n    width: 300px;\r\n}\r\n\r\n.about-justify{\r\n    text-align: justify;\r\n}\r\n\r\n.logo{\r\n    padding-top: 40px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.logo img{\r\n    -ms-flex-item-align:center;\r\n        -ms-grid-row-align:center;\r\n        align-self:center;\r\n}\r\n\r\n.address-size{\r\n    padding-top: 20px;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.min-height{\r\n    min-height: 700px;\r\n}"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "hr{\r\n    padding: 0 0 5px 0;\r\n    margin: 0;\r\n    border: 1px solid #a5a5a5;\r\n    border-width: 1px 0 0 0;\r\n}\r\n\r\n/* Slider options */\r\nh2{\r\n    margin: 0;\r\n    color: #666;\r\n    padding-top: 90px;\r\n    font-size: 52px;\r\n    font-family: \"trebuchet ms\", sans-serif;\r\n}\r\n.item{\r\n    background-image: url(\"/img/app/2.png\");\r\n    text-align: center;\r\n    height: 300px !important;\r\n    /*-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:8px;*/\r\n}\r\n.carousel{\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n/* Menu options */\r\n\r\n@media (min-width:900px) {\r\n    .dropdown:hover .dropdown-menu {\r\n        display: block;\r\n\r\n    }\r\n    .dropdown .dropdown-menu{\r\n        display: none;\r\n    }\r\n\r\n}\r\n\r\n/* цвет фона основного меню*/\r\n.navbar-collapse{\r\n    background: #014464;\r\n    background: -moz-linear-gradient(top, #0272a7, #013953);\r\n    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#0272a7), to(#013953));\r\n}\r\n/* цвет фона выпадающего меню*/\r\n.dropdown-menu{\r\n    border-width: 0 0 0 0;\r\n    margin-top: 0;\r\n    background:#F4F4F4;\r\n    background: -moz-linear-gradient(top, #EEEEEE, #9e9e9e);\r\n    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#EEEEEE), to(#9e9e9e));\r\n}\r\n\r\n\r\n.pad{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nul.nav .navbar-nav{\r\n    color:white;\r\n}\r\n\r\n.navbar-default{\r\n    background: #014464;\r\n    background: -moz-linear-gradient(top, #0272a7, #013953);\r\n    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#0272a7), to(#013953));\r\n    padding: 0;\r\n    border-width: 0 0 0 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.dropdown-toggle:hover{\r\n    color: #000080;\r\n}\r\n\r\n.dropdown-menu {\r\n    min-width: 220px;\r\n}\r\n.dropdown-menu.columns-2{\r\n    min-width: 300px;\r\n}\r\n.dropdown-menu.columns-3 {\r\n    min-width: 600px;\r\n}\r\n\r\n.dropdown-menu.columns-4 {\r\n    min-width: 700px;\r\n}\r\n\r\n\r\n.dropdown-menu.columns-6 {\r\n    min-width: 990px;\r\n}\r\n\r\n.dropdown-menu li a\r\n{\r\n    padding: 7px 3px 7px 3px;\r\n    list-style: none;\r\n    font-weight: 300;\r\n    margin-left: 5px;\r\n    text-decoration: none;\r\n}\r\n\r\nli.dropdown ul.dropdown-menu.multi-column.columns-2 div li\r\n{\r\n    padding: 7px 3px 7px 3px;\r\n    list-style: none;\r\n    font-weight: 300;\r\n    margin-left: 5px;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n.multi-column-dropdown {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n.multi-column-dropdown li a {\r\n    display: block;\r\n    clear: both;\r\n    line-height: 1.428571429;\r\n    color: white;\r\n    white-space: normal;\r\n}\r\n.multi-column-dropdown li a:hover {\r\n    text-decoration: none;\r\n    /*color: yellow;*/\r\n\r\n}\r\n\r\n.dropdown-menu li a:hover{\r\n    background-color:inherit;\r\n    /*color:yellow;*/\r\n    border: 1px solid #013953;\r\n    border-width: 0 0 0 2px;\r\n}\r\n\r\n.navbar-nav > li > .dropdown-menu{\r\n    margin-top: 0;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n    color: #777;\r\n    padding-top: 15px;\r\n    padding-bottom: 19px;\r\n    margin-bottom: -4px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .dropdown-menu.multi-column {\r\n        min-width: 240px !important;\r\n        overflow-x: hidden;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 480px) {\r\n    .content {\r\n        width: 90%;\r\n        margin: 50px auto;\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width:1023px) {\r\n    .dropdown-menu.columns-2 {\r\n        margin-left: -100px;\r\n    }\r\n\r\n    .dropdown-menu.columns-3 {\r\n        margin-left: -300px;\r\n    }\r\n\r\n    .dropdown-menu.columns-3 {\r\n        margin-left: -500px;\r\n    }\r\n}\r\n\r\nul.nav.navbar-nav{\r\n    color:white;\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a{\r\n    color:white;\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a:hover{\r\n    color:black;\r\n}\r\n\r\n\r\n/* Цвет пунктов меню */\r\nul.nav.navbar-nav li:hover ul li a{\r\n    color:#0B0841;\r\n    font-size: small;\r\n}\r\n\r\nul>div>li>a.dropdown-toggle{\r\n    font-size: small;\r\n}\r\n\r\n\r\nul.nav.navbar-nav li:hover ul>div>li>a:hover{\r\n    color: #3352ff;\r\n}\r\n\r\nul.nav.navbar-nav li:hover ul>li>a:hover{\r\n    color: #3352ff;\r\n}\r\n\r\nul.dropdown-menu>li>a{\r\n    color: blue;\r\n}\r\n\r\nli.dropdown:hover a.dropdown-toggle{\r\n    background: #F4F4F4;\r\n    background: -moz-linear-gradient(top, #F4F4F4, #EEEEEE);\r\n    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#F4F4F4), to(#EEEEEE));\r\n    color: black;\r\n\r\n}\r\n\r\n\r\n\r\n\r\nli.dropdown:hover{\r\n    background: #F4F4F4;\r\n    background: -moz-linear-gradient(top, #F4F4F4, #EEEEEE);\r\n    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#F4F4F4), to(#EEEEEE));\r\n}\r\n\r\n.add{\r\n    color: white;\r\n    padding-top: 5px;\r\n}\r\n\r\ndiv.add>a>img{\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\ndiv.add>a>img:hover{\r\n    opacity: 0.5;\r\n    height: 38px;\r\n    width: 38px;\r\n}\r\nli>ul>li>h4{\r\n    color: #2c4478;\r\n    margin-left: 10px;\r\n    /*text-align: center;*/\r\n}\r\n\r\n.my-header{\r\n    color: #2c4478;\r\n    padding-left: 7px;\r\n    font-size: 0.95em;\r\n    font-weight: bold;\r\n    height: 50px;\r\n}\r\n\r\nli.dropdown>ul>li>ul>div>li>a{\r\n    font-size: 0.85em;\r\n}\r\n\r\n\r\n\r\n/* Common options */\r\n\r\n.myHeight2{\r\n    margin-left: 10px;\r\n}\r\n\r\n.myHeight3{\r\n    /*color: yellow;*/\r\n}\r\n\r\n.contacts{\r\n    text-align: center;\r\n    color: #0B0841;\r\n    font-size: small;\r\n}\r\n\r\nh4{\r\n    color: red;\r\n}\r\n\r\n\r\n.foot{\r\n    background-color: #015b86;\r\n    color: white;\r\n    font-style: inherit;\r\n}\r\n\r\n.al-centre{\r\n    text-align: center;\r\n}\r\n\r\n.lang{\r\n    position: relative;\r\n    top: auto;\r\n    text-align: right;\r\n}\r\n\r\n.btn-lang-en{\r\n    height: 35px;\r\n    width: 55px;\r\n    background-image: url(\"/img/flag-en.png\");\r\n}\r\n.btn-lang-ru{\r\n    height: 35px;\r\n    width: 55px;\r\n    background-image: url(\"/img/flag-ru.png\");\r\n}\r\n\r\n.btn-lang-ua{\r\n    height: 35px;\r\n    width: 55px;\r\n    background-image: url(\"/img/flag-ua.png\");\r\n}\r\n\r\n.temp{\r\n  list-style-type: disc;\r\n  list-style-position: inside;\r\n  text-indent: -0.5em;\r\n  padding-left: 4em;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ".grid {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    padding: 0 0 0;\r\n    max-width: 100%;\r\n    list-style: none;\r\n    text-align: center;\r\n}\r\n\r\n/* Common style */\r\n.grid figure {\r\n    position: relative;\r\n    float: left;\r\n    overflow: hidden;\r\n    margin: 0;\r\n    min-width: 320px;\r\n    max-width: 50%;\r\n    max-height: 350px;\r\n    width: 50%;\r\n    background: #3085a3;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.grid figure img {\r\n    position: relative;\r\n    display: block;\r\n    min-height: 100%;\r\n    max-width: 100%;\r\n    opacity: 0.8;\r\n}\r\n\r\n.grid figure figcaption {\r\n    padding: 2em;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-size: 1.25em;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n}\r\n\r\n.grid figure figcaption::before,\r\n.grid figure figcaption::after {\r\n    pointer-events: none;\r\n}\r\n\r\n.grid figure figcaption,\r\n.grid figure figcaption > a {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Anchor will cover the whole item by default */\r\n/* For some effects it will show as a button */\r\n.grid figure figcaption > a {\r\n    z-index: 3;\r\n    text-indent: 200%;\r\n    white-space: nowrap;\r\n    font-size: 0;\r\n    opacity: 0;\r\n}\r\n\r\n.grid figure h2 {\r\n    word-spacing: -0.15em;\r\n    font-weight: 200;\r\n}\r\n\r\n.grid figure h2 span {\r\n    font-weight: 700;\r\n    color: snow;\r\n}\r\n\r\n.grid figure h2,\r\n.grid figure p {\r\n    margin: 0;\r\n}\r\n\r\n.grid figure p {\r\n    letter-spacing: 1px;\r\n    font-size: 68.5%;\r\n}\r\n\r\nfigure.effect-bubba {\r\n    background: #9e5406;\r\n}\r\n\r\nfigure.effect-bubba img {\r\n    opacity: 0.7;\r\n    -webkit-transition: opacity 0.35s;\r\n    transition: opacity 0.35s;\r\n}\r\n\r\nfigure.effect-bubba:hover img {\r\n    opacity: 0.4;\r\n}\r\n\r\nfigure.effect-bubba figcaption::before,\r\nfigure.effect-bubba figcaption::after {\r\n    position: absolute;\r\n    top: 30px;\r\n    right: 30px;\r\n    bottom: 30px;\r\n    left: 30px;\r\n    content: '';\r\n    opacity: 0;\r\n    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n}\r\n\r\nfigure.effect-bubba figcaption::before {\r\n    border-top: 1px solid #fff;\r\n    border-bottom: 1px solid #fff;\r\n    -webkit-transform: scale(0,1);\r\n    transform: scale(0,1);\r\n}\r\n\r\nfigure.effect-bubba figcaption::after {\r\n    border-right: 1px solid #fff;\r\n    border-left: 1px solid #fff;\r\n    -webkit-transform: scale(1,0);\r\n    transform: scale(1,0);\r\n}\r\n\r\nfigure.effect-bubba h2 {\r\n    padding-top: 30%;\r\n    -webkit-transition: -webkit-transform 0.35s;\r\n    transition: -webkit-transform 0.35s;\r\n    transition: transform 0.35s;\r\n    transition: transform 0.35s, -webkit-transform 0.35s;\r\n    -webkit-transform: translate3d(0,-20px,0);\r\n    transform: translate3d(0,-20px,0);\r\n}\r\n\r\nfigure.effect-bubba p {\r\n    padding: 20px 2.5em;\r\n    opacity: 0;\r\n    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, -webkit-transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s;\r\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n    -webkit-transform: translate3d(0,20px,0);\r\n    transform: translate3d(0,20px,0);\r\n}\r\n\r\nfigure.effect-bubba:hover figcaption::before,\r\nfigure.effect-bubba:hover figcaption::after {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}\r\n\r\nfigure.effect-bubba:hover h2,\r\nfigure.effect-bubba:hover p {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n}\r\n\r\n.myHeight2{\r\n    /*height: 400px;*/\r\n}\r\n\r\n.blck{\r\n    text-align: right;\r\n    padding-right: 20px;\r\n    height: 45px;\r\n    background-color: lightgrey;\r\n}\r\n.home-div-img{\r\n    text-align: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.home-div-img img{\r\n    padding: 20% 0;\r\n}\r\n\r\n.home-div-text{\r\n    text-align: justify;\r\n    margin-top: 10px;\r\n    font-size: 1.2em;\r\n}"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "/*div{*/\r\n    /*border: 1px solid midnightblue;*/\r\n/*}*/\r\n\r\n.al-centre{\r\n    text-align: center;\r\n    color: #015b86;\r\n}\r\n\r\n.title{\r\n    font-weight: bold;\r\n}\r\n\r\n.date{\r\n    font-style: italic;\r\n}\r\n\r\n.al-right{\r\n    text-align: right;\r\n}\r\n\r\n.al-justify{\r\n    text-align: justify;\r\n    padding: 3% 0;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.news-back-color{\r\n    background-color: #CCCCCC;\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.5); /* Параметры тени */\r\n    padding: 10px;\r\n}\r\n\r\n.news-img{\r\n    height: 300px;\r\n    width: 300px;\r\n}"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ".my-img{\r\n    float: right;\r\n    margin: 7px 0 7px 7px;\r\n}\r\n\r\n.min-height{\r\n    min-height: 700px;\r\n}\r\n\r\n.al-justify{\r\n    text-align: justify;\r\n}\r\n\r\n.al-left{\r\n  text-align: left;\r\n}\r\n\r\n.al-centre{\r\n    text-align: center;\r\n}\r\n\r\n.myTable1{\r\n    width: 75%;\r\n}\r\n\r\n.td1{\r\n    width: 35%;\r\n}\r\n\r\n.td2{\r\n    width: 60%;\r\n}\r\n\r\n.minTable{\r\n   color: #9e5406;\r\n    border: 1px solid rebeccapurple;\r\n}\r\n\r\n.myTable3{\r\n    width: 450px;\r\n    border-collapse: collapse;\r\n    border: 1px solid grey;\r\n    background-color: #e5e5e5;\r\n}\r\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ".sol-img{\r\n    height: 400px;\r\n    width: 800px;\r\n}\r\n\r\n.min-height{\r\n    min-height: 700px;\r\n}\r\n\r\n.al-justify{\r\n    text-align: justify;\r\n}\r\n\r\n.al-centre{\r\n    text-align: center;\r\n}\r\n\r\n.al-left{\r\n    text-align: left;\r\n}"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"id=='history'\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\"  >\r\n      <img src=\"/img/app/enterprise.png\" alt=\"telecard\" class=\"img-responsive about-img\">\r\n      <div [innerHTML]=\"history.description\" class=\"about-text\" >\r\n        {{history.description}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"id=='tour'\">\r\n  <h4 class=\"al-centre\">{{tour}}</h4>\r\n  <div id=\"myCarousel2\" class=\"carousel slide\" >\r\n    <!-- Индикаторы для карусели -->\r\n    <!--<ol class=\"carousel-indicators\">-->\r\n      <!--&lt;!&ndash; Перейти к 0 слайду карусели с помощью соответствующего индекса data-slide-to=\"0\" &ndash;&gt;-->\r\n      <!--<li data-target=\"#myCarousel2\" data-slide-to=\"0\" class=\"active\"></li>-->\r\n      <!--&lt;!&ndash; Перейти к 1 слайду карусели с помощью соответствующего индекса data-slide-to=\"1\" &ndash;&gt;-->\r\n      <!--<li data-target=\"#myCarousel2\" data-slide-to=\"1\"></li>-->\r\n      <!--&lt;!&ndash; Перейти к 2 слайду карусели с помощью соответствующего индекса data-slide-to=\"2\" &ndash;&gt;-->\r\n      <!--<li data-target=\"#myCarousel2\" data-slide-to=\"2\"></li>-->\r\n    <!--</ol>-->\r\n    <!-- Слайды карусели -->\r\n    <div class=\"carousel-inner\">\r\n\r\n      <div class=\"active item\">\r\n        <!--<h4>Слайд 1</h4>-->\r\n        <img src=\"/img/app/carousel/01.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n          <img src=\"/img/app/carousel/02.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/03.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/04.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/05.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/06.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/07.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/08.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/09.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/10.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/11.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/12.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/13.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/14.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/15.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/16.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/17.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/18.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/19.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/20.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/21.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/img/app/carousel/22.jpg\" alt=\"\" style=\"width: 100%\">\r\n      </div>\r\n\r\n     </div>\r\n\r\n    <!-- Навигация для карусели -->\r\n    <!-- Кнопка, осуществляющая переход на предыдущий слайд с помощью атрибута data-slide=\"prev\" -->\r\n    <a class=\"carousel-control left\" href=\"#myCarousel2\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n    </a>\r\n    <!-- Кнопка, осуществляющая переход на следующий слайд с помощью атрибута data-slide=\"next\" -->\r\n    <a class=\"carousel-control right\" href=\"#myCarousel2\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"id=='technology'\">\r\n  <div class=\"al-centre\">\r\n    <h4>{{technology.name}}</h4>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div [innerHTML]=\"technology.mechanical\" class=\"about-justify\">\r\n        {{technology.mechanical}}\r\n        </div>\r\n      </div>\r\n        <div class=\"col-md-4\">\r\n          <img src=\"/img/app/about/mech.png\" alt=\"\" class=\"img-responsive about-img\">\r\n        </div>\r\n      </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div [innerHTML]=\"technology.galvanic\" class=\"about-justify\">\r\n          {{technology.galvanic}}\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <img src=\"/img/app/about/galv.png\" alt=\"\" class=\"img-responsive about-img\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div [innerHTML]=\"technology.plastics\" class=\"about-justify\">\r\n          {{technology.plastics}}\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <img src=\"/img/app/about/plast.png\" alt=\"\" class=\"img-responsive about-img\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div [innerHTML]=\"technology.assambly\" class=\"about-justify\">\r\n          {{technology.assambly}}\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <img src=\"/img/app/about/ass.png\" alt=\"\" class=\"img-responsive about-img\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"id=='centre'\">\r\n  <div class=\"al-centre\">\r\n    <h4>{{center.name}}</h4>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\"  >\r\n      <img src=\"/img/app/about/center.png\" alt=\"telecard\" class=\"img-responsive about-img2\">\r\n      <div [innerHTML]=\"center.description1\" class=\"about-text2\" >\r\n        {{center.description1}}\r\n      </div>\r\n      <div [innerHTML]=\"center.description2\" class=\"about-text2\" >\r\n        {{center.description2}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"id=='cooperate'\" class=\"min-height\">\r\n  <h4 class=\"al-centre\">{{cooperate.name}}</h4>\r\n  <div class=\"al-justify\" [innerHTML]=\"cooperate.description\">\r\n    {{cooperate.description}}\r\n\r\n  </div >\r\n  <img src=\"/img/app/about/sert.png\" alt=\"sertificate\" class=\"img-responsive\">\r\n</div>\r\n\r\n\r\n\r\n<div *ngIf=\"id=='contacts'\" >\r\n  <div class=\"row\">\r\n    <div class=\"logo\">\r\n      <img src=\"/img/app/about/logo.png\" alt=\"telecard logo\" class=\"img-responsive\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row al-centre address-size\" >\r\n   <h3>{{contacts.name}}</h3>\r\n  </div>\r\n  <div class=\"row al-centre address-size\">\r\n    {{contacts.address}}\r\n  </div>\r\n  <div class=\"row al-centre address-size\" [innerHTML]=\"contacts.reception\">\r\n    {{contacts.reception}}\r\n  </div>\r\n  <div class=\"row al-centre address-size\" [innerHTML]=\"contacts.department\">\r\n    {{contacts.department}}\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n                <a [routerLink]=\"['']\"><img src=\"/img/logo.png\" alt=\"telecard\"></a>\r\n            </div>\r\n            <div class=\"col-md-4\"></div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"lang\">\r\n                    <button class=\"btn-lang-ua\" (click)=\"toggleLanguage('ua')\"></button>\r\n                    <button class=\"btn-lang-en\" (click)=\"toggleLanguage('en')\"></button>\r\n                    <button class=\"btn-lang-ru\" (click)=\"toggleLanguage('ru')\"></button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <img src=\"/img/app/2.png\" alt=\"\" class=\"img-responsive\">\r\n            <!-- Slider вдруг понадобится -->\r\n            <!--<div id=\"myCarousel\" class=\"carousel slide\" data-interval=\"10000\" data-ride=\"carousel\">-->\r\n                <!--&lt;!&ndash; Индикаторы для карусели &ndash;&gt;-->\r\n                <!--<ol class=\"carousel-indicators\">-->\r\n                    <!--&lt;!&ndash; Перейти к 0 слайду карусели с помощью соответствующего индекса data-slide-to=\"0\" &ndash;&gt;-->\r\n                    <!--<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>-->\r\n                    <!--&lt;!&ndash; Перейти к 1 слайду карусели с помощью соответствующего индекса data-slide-to=\"1\" &ndash;&gt;-->\r\n                    <!--<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>-->\r\n                    <!--&lt;!&ndash; Перейти к 2 слайду карусели с помощью соответствующего индекса data-slide-to=\"2\" &ndash;&gt;-->\r\n                    <!--<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>-->\r\n                <!--</ol>-->\r\n                <!--&lt;!&ndash; Слайды карусели &ndash;&gt;-->\r\n                <!--<div class=\"carousel-inner\">-->\r\n                    <!--&lt;!&ndash; Слайды создаются с помощью контейнера с классом item, внутри которого помещается содержимое слайда &ndash;&gt;-->\r\n                    <!--<div class=\"active item\">-->\r\n                        <!--&lt;!&ndash;<h2>Слайд №1</h2>&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;<div class=\"carousel-caption\">&ndash;&gt;-->\r\n                            <!--&lt;!&ndash;<h3>Заголовок 1 слайда</h3>&ndash;&gt;-->\r\n                            <!--&lt;!&ndash;<p>Текст (описание) 1 слайда...</p>&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                    <!--</div>-->\r\n                    <!--&lt;!&ndash; Слайд №2 &ndash;&gt;-->\r\n                    <!--<div class=\"item\">-->\r\n                        <!--&lt;!&ndash;<h2>Slide 2</h2>&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;<div class=\"carousel-caption\">&ndash;&gt;-->\r\n                            <!--&lt;!&ndash;<h3>Second slide label</h3>&ndash;&gt;-->\r\n                            <!--&lt;!&ndash;<p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p>&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                    <!--</div>-->\r\n                    <!--&lt;!&ndash; Слайд №3 &ndash;&gt;-->\r\n                    <!--<div class=\"item\">-->\r\n                        <!--&lt;!&ndash;<h2>Slide 3</h2>&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;<div class=\"carousel-caption\">&ndash;&gt;-->\r\n                            <!--&lt;!&ndash;<h3>Third slide label</h3>&ndash;&gt;-->\r\n                            <!--&lt;!&ndash;<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <!--&lt;!&ndash; Навигация для карусели &ndash;&gt;-->\r\n                <!--&lt;!&ndash; Кнопка, осуществляющая переход на предыдущий слайд с помощью атрибута data-slide=\"prev\" &ndash;&gt;-->\r\n                <!--<a class=\"carousel-control left\" href=\"#myCarousel\" data-slide=\"prev\">-->\r\n                    <!--<span class=\"glyphicon glyphicon-chevron-left\"></span>-->\r\n                <!--</a>-->\r\n                <!--&lt;!&ndash; Кнопка, осуществляющая переход на следующий слайд с помощью атрибута data-slide=\"next\" &ndash;&gt;-->\r\n                <!--<a class=\"carousel-control right\" href=\"#myCarousel\" data-slide=\"next\">-->\r\n                    <!--<span class=\"glyphicon glyphicon-chevron-right\"></span>-->\r\n                <!--</a>-->\r\n            <!--</div>-->\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <nav class=\"navbar navbar-default pad\" role=\"navigation\">\r\n                <div class=\"navbar-header\">\r\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-2\">\r\n                        <span class=\"sr-only\">Toggle navigation</span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <!--<a class=\"navbar-brand\" href=\"#\">Some Text</a>-->\r\n                </div>\r\n                <div class=\"collapse navbar-collapse \" id=\"bs-example-navbar-collapse-2\">\r\n                    <ul class=\"nav navbar-nav\">\r\n                        <li class=\"dropdown\">\r\n                            <a [routerLink]=\"['about/history']\" class=\"dropdown-toggle\">{{contentMain.About}}</a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a [routerLink]=\"['about/history']\" class=\"myHeight2\">{{submenuAbout.history}}</a></li>\r\n                                <li><a [routerLink]=\"['about/tour']\" class=\"myHeight2\">{{submenuAbout.tour}}</a></li>\r\n                                <li><a [routerLink]=\"['about/technology']\" class=\"myHeight2\">{{submenuAbout.technology}}</a></li>\r\n                                <li><a [routerLink]=\"['about/cooperate']\" class=\"myHeight2\">{{submenuAbout.cooperate}}</a></li>\r\n                                <li><a [routerLink]=\"['about/centre']\" class=\"myHeight2\">{{submenuAbout.centre}}</a></li>\r\n                                <li><a [routerLink]=\"['about/contacts']\" class=\"myHeight2\">{{submenuAbout.contacts}}</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"dropdown\">\r\n                            <a href=\"/#div1\" class=\"dropdown-toggle\" id=\"prevent1\">{{contentMain.Products}} </a>\r\n                            <ul class=\"dropdown-menu multi-column columns-6 \">\r\n                                <li>\r\n                                    <ul class=\"multi-column-dropdown col-md-2 col-sm-2 col-xs-12\">\r\n                                        <li class=\"my-header\" [innerHTML]=\"submenu.hf\">{{submenu.hf}}</li>\r\n                                        <hr>\r\n                                        <div *ngFor=\"let item of items |async\" >\r\n                                            <li *ngIf=\"item.$key=='product-r1150-01' || item.$key=='product-r1150'  || item.$key=='product-r1150-02' || item.$key=='product-r1150-03' \">\r\n                                                <a  [routerLink]=\"['product/'+item.$key]\" >{{item.name}}</a>\r\n                                            </li>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                                <li>\r\n                                    <ul class=\"multi-column-dropdown col-md-2 col-sm-2 col-xs-12\">\r\n                                        <li class=\"my-header\" [innerHTML]=\"submenu.vhf\">{{submenu.vhf}}</li>\r\n                                        <hr>\r\n                                        <div *ngFor=\"let item of items |async\" >\r\n                                            <li *ngIf=\"item.$key=='product-r002' || item.$key=='product-r005' || item.$key=='product-r030'\">\r\n                                                <a  [routerLink]=\"['product/'+item.$key]\" >{{item.name}}</a>\r\n                                            </li>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                                <li>\r\n                                    <ul class=\"multi-column-dropdown col-md-2 col-sm-2 col-xs-12\">\r\n                                        <li class=\"my-header\" [innerHTML]=\"submenu.broadband\">{{submenu.broadband}}</li>\r\n                                        <hr>\r\n                                        <div *ngFor=\"let item of items |async\" >\r\n                                            <li *ngIf=\"item.$key=='product-r450' || item.$key=='product-srsh' \">\r\n                                                <a  [routerLink]=\"['product/'+item.$key]\" >{{item.name}}</a>\r\n                                            </li>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                                <li>\r\n                                    <ul class=\"multi-column-dropdown col-md-2 col-sm-2 col-xs-12\">\r\n                                        <li class=\"my-header\" [innerHTML]=\"submenu.wireCom\">{{submenu.wireCom}}</li>\r\n                                        <hr>\r\n                                        <div *ngFor=\"let item of items |async\" >\r\n                                            <li *ngIf=\"item.$key=='product-kr351' || item.$key=='product-ta01' || item.$key=='product-cross-modules' || item.$key=='klemma' || item.$key=='product-reels'\">\r\n                                                <a  [routerLink]=\"['product/'+item.$key]\" >{{item.name}}</a>\r\n                                            </li>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                                <li>\r\n                                    <ul class=\"multi-column-dropdown col-md-2 col-sm-2 col-xs-12\">\r\n                                        <li class=\"my-header\" [innerHTML]=\"submenu.lan\">{{submenu.lan}}</li>\r\n                                        <hr>\r\n                                        <div *ngFor=\"let item of items |async\" >\r\n                                            <li *ngIf=\"item.$key=='product-muluak' || item.$key=='product-eth-switch' || item.$key=='product-voip'\">\r\n                                                <a  [routerLink]=\"['product/'+item.$key]\" >{{item.name}}</a>\r\n                                            </li>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n                                <li>\r\n                                    <ul class=\"multi-column-dropdown col-md-2 col-sm-2 col-xs-12\">\r\n                                        <li class=\"my-header\" [innerHTML]=\"submenu.misc\">{{submenu.misc}}</li>\r\n                                        <hr>\r\n                                        <div *ngFor=\"let item of items |async\" >\r\n                                            <li *ngIf=\"item.$key=='product-c1001-2' || item.$key=='product-czp11' || item.$key=='product-mast'  || item.$key=='product-shelter' \">\r\n                                                <a  [routerLink]=\"['product/'+item.$key]\" >{{item.name}}</a>\r\n                                            </li>\r\n                                        </div>\r\n                                    </ul>\r\n                                </li>\r\n\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"dropdown\">\r\n                            <a href=\"/#div2\" class=\"dropdown-toggle\" id=\"prevent2\">{{contentMain.Projects}}</a>\r\n\r\n                            <ul class=\"dropdown-menu multi-column columns-2 \">\r\n                                <div *ngFor=\"let solution of solutions |async\" >\r\n                                    <li class=\"temp\" *ngIf=\"solution.$key=='solution-avsk' || solution.$key=='solution-kshm' || solution.$key=='solution-pss' || solution.$key=='solution-kas'\r\n                                        || solution.$key=='solution-tk_commander'  || solution.$key=='solution-arm'\">\r\n                                        <a [routerLink]=\"['solution/'+solution.$key]\" class=\"myHeight3\">{{solution.name}}</a>\r\n                                    </li>\r\n                                </div>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"dropdown \"><a [routerLink]=\"['news']\">{{contentMain.News}}</a></li>\r\n                        <li class=\"dropdown\">\r\n                            <a [routerLink]=\"['about/contacts']\" class=\"dropdown-toggle\">{{contentMain.Contacts}}</a>\r\n                            <ul class=\"dropdown-menu\">\r\n\r\n\r\n\r\n\r\n                                <div class=\"contacts\">\r\n                                    <div [innerHTML]=\"appFooter.address\">\r\n                                        {{appFooter.address}}\r\n                                    </div>\r\n                                    <hr>\r\n                                    <!--<h4>Почтовый адрес:</h4>-->\r\n                                    <!--Пр-т. Маршала Жукова, 105<br>-->\r\n                                    <!--65104, г. Одесса, Украина-->\r\n\r\n                                    <div [innerHTML]=\"appFooter.departament\">\r\n                                        {{appFooter.departament}}\r\n                                    </div>\r\n                                    +38(048)711-60-98<br>\r\n                                    sa@telecard.com.ua<br>\r\n                                    depssp@telecard.com.ua\r\n                                    <hr>\r\n\r\n                                    <div [innerHTML]=\"appFooter.admin\">\r\n                                        {{appFooter.admin}}\r\n                                    </div>\r\n                                    +38(048)711-60-70<br>\r\n                                    +38(048)711-15-15<br>\r\n                                    office@telecard.com.ua\r\n                                </div>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"dropdown pull-right add\">\r\n                        <a href=\"http:\\\\twitter.com\" target=\"_blank\"><img src=\"\\img\\app\\twitter.png\" alt=\"\"></a>\r\n                        <a href=\"http:\\\\facebook.com\" target=\"_blank\"><img src=\"\\img\\app\\facebook.png\" alt=\"\"></a>\r\n                        <a href=\"http:\\\\linkedin.com\" target=\"_blank\"><img src=\"\\img\\app\\linkedin.png\" alt=\"\"></a>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"foot\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 al-centre\">\r\n                        <div [innerHTML]=\"appFooter.address\">\r\n                            {{appFooter.address}}\r\n                        </div>\r\n                        <!--<h4>Почтовый адрес:</h4>-->\r\n                        <!--Пр-т. Маршала Жукова, 105<br>-->\r\n                        <!--65104, г. Одесса, Украина-->\r\n                    </div>\r\n                    <div class=\"col-md-4 al-centre\" >\r\n\r\n                        <div [innerHTML]=\"appFooter.departament\">\r\n                            {{appFooter.departament}}\r\n                        </div>\r\n                            +38(048)711-60-98<br>\r\n                            sa@telecard.com.ua<br>\r\n                            depssp@telecard.com.ua\r\n                    </div>\r\n                    <div class=\"col-md-4 al-centre\">\r\n                        <div [innerHTML]=\"appFooter.admin\">\r\n                        {{appFooter.admin}}\r\n                        </div>\r\n                        +38(048)711-60-70<br>\r\n                        +38(048)711-15-15<br>\r\n                        office@telecard.com.ua\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"blck\">\r\n</div>\r\n<div class=\"col-md-12\">\r\n  <div class=\"row\">\r\n    <div class=\"grid\">\r\n      <figure class=\"effect-bubba\">\r\n        <img src=\"/img/1.png\" alt=\"\"/>\r\n        <figcaption>\r\n          <h2><span>{{radio.nameShort}}</span></h2>\r\n          <p>{{radio.nameLong}}</p>\r\n          <a href=\"#div1\">View more</a>\r\n        </figcaption>\r\n      </figure>\r\n      <figure class=\"effect-bubba\">\r\n        <img src=\"/img/2.png\" alt=\"\"/>\r\n        <figcaption>\r\n          <h2><span>{{systems.nameShort}}</span></h2>\r\n          <p>{{systems.nameLong}}</p>\r\n          <a href=\"#div2\">View more</a>\r\n        </figcaption>\r\n      </figure>\r\n      <figure class=\"effect-bubba\">\r\n        <img src=\"/img/3.png\" alt=\"\"/>\r\n        <figcaption>\r\n          <h2><span>{{appNew.nameShort}}</span></h2>\r\n          <p>{{appNew.nameLong}}</p>\r\n          <a href=\"#div3\">View more</a>\r\n        </figcaption>\r\n      </figure>\r\n      <figure class=\"effect-bubba\">\r\n        <img src=\"/img/4.png\" alt=\"\"/>\r\n        <figcaption>\r\n          <h2><span>{{modernization.nameShort}}</span></h2>\r\n          <p>{{modernization.nameLong}}</p>\r\n          <a href=\"#div4\">View more</a>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row myHeight2\" id=\"div1\">\r\n    <div class=\"blck\"></div>\r\n    <div class=\"row\">\r\n\r\n\r\n      <div class=\"col-md-7 home-div-text\" [innerHTML]=\"radio.description\">\r\n        {{radio.description}}\r\n      </div>\r\n      <div class=\"col-md-5 home-div-img\">\r\n        <img src=\"{{radio.img}}\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row myHeight2\" id=\"div2\">\r\n    <div class=\"blck\"></div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 home-div-text\" [innerHTML]=\"systems.description\">\r\n        {{systems.description}}\r\n      </div>\r\n      <div class=\"col-md-5 home-div-img\">\r\n        <img src=\"{{systems.img}}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row myHeight2\" id=\"div3\">\r\n    <div class=\"blck\"></div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 home-div-text\" [innerHTML]=\"appNew.description\">\r\n        {{appNew.description}}\r\n      </div>\r\n      <div class=\"col-md-5 home-div-img\">\r\n        <img src=\"{{appNew.img}}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row myHeight2\" id=\"div4\">\r\n    <div class=\"blck\"></div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7 home-div-text\" [innerHTML]=\"modernization.description\">\r\n          {{modernization.description}}\r\n        </div>\r\n        <div class=\"col-md-5 home-div-img\">\r\n          <img src=\"{{modernization.img}}\">\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngFor=\"let new of news| async let i=index \">\r\n  <div class=\"col-md-10 col-md-offset-1 news-back-color\">\r\n    <div class=\"al-centre\">\r\n      <span class=\"title\">{{new.title}}</span>\r\n    </div>\r\n    <div class=\"al-right\">\r\n      <span class=\"date\">{{new.date}}</span>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 al-justify\">\r\n          {{new.description}}\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <img src=\"{{new.img}}\" alt=\"\" class=\"news-img\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<h4>{{product.name}}</h4>\r\n\r\n<div class=\"bs-docs-example\">\r\n  <ul id=\"myTab\" class=\"nav nav-tabs\">\r\n    <li class=\"active\"><a href=\"#description\" data-toggle=\"tab\">{{submenu.description}}</a></li>\r\n    <li class=\"\"><a href=\"#features\" data-toggle=\"tab\">{{submenu.features}}</a></li>\r\n    <li class=\"\"><a href=\"#documentation\" data-toggle=\"tab\">{{submenu.documentation}}</a></li>\r\n    <li class=\"\"><a href=\"#complectation\" data-toggle=\"tab\">{{submenu.complectation}}</a></li>\r\n    <li class=\"\" *ngIf=\"application!=undefined\"><a href=\"#application\" data-toggle=\"tab\">{{application.menuName}}</a></li>\r\n  </ul>\r\n</div>\r\n\r\n  <div id=\"myTabContent\" class=\"tab-content min-height\">\r\n    <div class=\"tab-pane fade active in\" id=\"description\">\r\n      <img src=\"{{product.img}}\" alt=\"{{product.name}}\" class=\"img-responsive my-img\" width =\"300\" height=\"300\">\r\n\r\n      <div [innerHTML]=\"product.description\" class=\"al-justify\">\r\n        {{product.description}}\r\n       </div>\r\n    </div>\r\n\r\n     <div class=\"tab-pane fade\" id=\"features\">\r\n        <h4>{{table1.tablename}}</h4>\r\n         <div class=\"table-responsive myTable1\">\r\n            <table class=\"table\">\r\n                <th></th>\r\n                <tr *ngFor=\"let item of items1 | async\">\r\n                    <td [innerHTML]=\"item.td1\" class=\"al-left td1\" >{{item.td1}}</td>\r\n                    <td [innerHTML]=\"item.td2\" class=\"al-left td2\">{{item.td2}}</td>\r\n                </tr>\r\n            </table>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"tab-pane fade\" id=\"documentation\">\r\n        <h4>{{dwl.download}}</h4>\r\n          <table>\r\n              <tr>\r\n                  <td>\r\n                      <img src=\"/img/pdf.jpg\" alt=\"\" class=\"img-responsive my-img\" width =\"50\" height=\"50\">\r\n                  </td>\r\n                  <td>\r\n                      <a href=\"{{product.dwlDescr}}\" target=\"_blank\" download=\"\">{{dwl.dwlDescr}}</a>\r\n                  </td>\r\n              </tr>\r\n              <tr *ngIf=\"product.dwlRe!=''\">\r\n                  <td>\r\n                      <img src=\"/img/pdf.jpg\" alt=\"\" class=\"img-responsive my-img\" width =\"50\" height=\"50\">\r\n                  </td>\r\n                  <td>\r\n                     <a href=\"{{product.dwlRe}}\" target=\"_blank\" download=\"\">{{dwl.dwlRe}}</a>\r\n                  </td>\r\n              </tr>\r\n          </table>\r\n      </div>\r\n\r\n      <div class=\"tab-pane fade\" id=\"complectation\">\r\n              <div [innerHTML]=\"table2.order\" *ngIf=\"table2.order\">\r\n                  {{table2.order}}\r\n              </div>\r\n              <div class=\"table-responsive\" *ngIf=\"table2.order2\">\r\n                  <table [innerHTML]=\"table2.order2\" class=\"myTable3\">\r\n                      {{table2.order2}}\r\n                  </table>\r\n              </div>\r\n\r\n\r\n\r\n          <h5>{{table2.tablename}}</h5>\r\n          <div class=\"table-responsive myTable1\">\r\n              <table class=\"table\">\r\n                  <th></th>\r\n                  <tr *ngFor=\"let item of items2| async let i=index \">\r\n                      <td [innerHTML]=\"item.td1\" class=\"al-centre\">{{item.td1}}</td>\r\n                      <td [innerHTML]=\"item.td2\" class=\"al-centre\">{{item.td2}}</td>\r\n                      <td [innerHTML]=\"item.td3\" class=\"al-centre\">{{item.td3}}</td>\r\n                      <td *ngIf=\"i==0\" [innerHTML]=\"item.td4\" class=\"al-centre\">{{item.td4}}</td>\r\n                      <td *ngIf=\"i>0\"><img *ngIf=\"item.td4!=''\" src=\"{{item.td4}}\" width =\"100\" height=\"100\" class=\"al-centre\"></td>\r\n                  </tr>\r\n                  <div [innerHTML]=\"table2.addInfo\" *ngIf=\"table2.addInfo\">\r\n                      {{table2.addInfo}}\r\n                  </div>\r\n              </table>\r\n          </div>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"application!=undefined\" class=\"tab-pane fade\" id=\"application\">\r\n          <h1>{{application.text}}</h1>\r\n      </div>\r\n\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div class=\"min-height\">\r\n    <div *ngIf=\"id=='solution-avsk'\">\r\n        <h4>{{solution.name}}</h4>\r\n\r\n        <div class=\"bs-docs-example\">\r\n            <ul id=\"myTab\" class=\"nav nav-tabs\">\r\n                <li class=\"active\"><a href=\"#description\" data-toggle=\"tab\">{{submenu.description}}</a></li>\r\n                <li class=\"\"><a href=\"#features\" data-toggle=\"tab\">{{submenu.features}}</a></li>\r\n                <li class=\"\"><a href=\"#advantages\" data-toggle=\"tab\">{{submenu.advantages}}</a></li>\r\n                <li class=\"\"><a href=\"#set\" data-toggle=\"tab\">{{submenu.set}}</a></li>\r\n                <li class=\"\"><a href=\"#applying\" data-toggle=\"tab\">{{submenu.applying}}</a></li>\r\n            </ul>\r\n        </div>\r\n\r\n\r\n        <div id=\"myTabContent\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade active in\" id=\"description\">\r\n                <img src=\"{{solution.img}}\" alt=\"avsk\" class=\"img-responsive sol-img\">\r\n                <div [innerHTML]=\"solution.description\" class=\"al-justify\">\r\n                    {{solution.description}}\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"features\">\r\n                <table class=\"table\">\r\n                    <th></th>\r\n                    <tr *ngFor=\"let item of items1 | async\">\r\n                        <td [innerHTML]=\"item.td1\" class=\"al-justify\">{{item.td1}}</td>\r\n                        <td [innerHTML]=\"item.td2\" class=\"al-justify\">{{item.td2}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"advantages\">\r\n                <div [innerHTML]=\"solution.advantages\" class=\"al-justify\">\r\n                    {{solution.advantages}}\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"set\">\r\n                <div class=\"al-justify\">\r\n                    {{table2.addinfo}}\r\n                </div>\r\n                <table class=\"table\">\r\n                    <th></th>\r\n                    <tr *ngFor=\"let item of items2 | async\">\r\n                        <td [innerHTML]=\"item.td1\" class=\"al-justify\">{{item.td1}}</td>\r\n                        <td><img src=\"{{item.td2}}\" alt=\"avsk\"></td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"applying\">\r\n                {{images.text}}\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\"><img src=\"{{images.img1}}\" alt=\"\" class=\"img-responsive\"></div>\r\n                        <div class=\"col-md-6\"><img src=\"{{images.img2}}\" alt=\"\" class=\"img-responsive\"></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\"><img src=\"{{images.img3}}\" alt=\"\" class=\"img-responsive\"></div>\r\n                        <div class=\"col-md-6\"><img src=\"{{images.img4}}\" alt=\"\" class=\"img-responsive\"></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\"><img src=\"{{images.img5}}\" alt=\"\" class=\"img-responsive\"></div>\r\n                        <div class=\"col-md-6\"><img src=\"{{images.img6}}\" alt=\"\" class=\"img-responsive\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"id=='solution-kshm'\">\r\n        <h4>{{solution.name}}</h4>\r\n\r\n        <div class=\"bs-docs-example\">\r\n            <ul id=\"myTab\" class=\"nav nav-tabs\">\r\n                <li class=\"active\"><a href=\"#description2\" data-toggle=\"tab\">{{submenu.description}}</a></li>\r\n                <li class=\"\"><a href=\"#features2\" data-toggle=\"tab\">{{submenu.features}}</a></li>\r\n                <li class=\"\"><a href=\"#applying2\" data-toggle=\"tab\">{{submenu.applying}}</a></li>\r\n                <!--<li class=\"\"><a href=\"#advantages\" data-toggle=\"tab\">{{submenu.advantages}}</a></li>-->\r\n                <!--<li class=\"\"><a href=\"#set\" data-toggle=\"tab\">{{submenu.set}}</a></li>-->\r\n\r\n            </ul>\r\n        </div>\r\n\r\n        <div id=\"myTabContent\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade active in\" id=\"description2\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <div [innerHTML]=\"solution.description\" class=\"al-justify\">\r\n                                {{solution.description}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <img src=\"{{solution.img}}\" alt=\"kshm\" class=\"img-responsive\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"tab-pane fade\" id=\"features2\">\r\n                <table class=\"table\">\r\n                    <th></th>\r\n                    <tr *ngFor=\"let item of items1 | async\">\r\n                        <td [innerHTML]=\"item.td1\" class=\"al-justify\">{{item.td1}}</td>\r\n                        <td [innerHTML]=\"item.td2\" class=\"al-justify\">{{item.td2}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"applying2\">\r\n               <div class=\"al-justify\">\r\n                   {{table2.addinfo}}\r\n               </div>\r\n               <img src=\"{{table2.img2}}\" alt=\"kshm\" class=\"img-responsive\">\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"id=='solution-pss'\">\r\n        <h4>{{solution.name}}</h4>\r\n\r\n        <div class=\"bs-docs-example\">\r\n            <ul id=\"myTab\" class=\"nav nav-tabs\">\r\n                <li class=\"active\"><a href=\"#description3\" data-toggle=\"tab\">{{submenu.description}}</a></li>\r\n                <li class=\"\"><a href=\"#features3\" data-toggle=\"tab\">{{submenu.features}}</a></li>\r\n                <!--<li class=\"\"><a href=\"#applying2\" data-toggle=\"tab\">{{submenu.applying}}</a></li>-->\r\n                <!--<li class=\"\"><a href=\"#advantages\" data-toggle=\"tab\">{{submenu.advantages}}</a></li>-->\r\n                <li class=\"\"><a href=\"#set3\" data-toggle=\"tab\">{{submenu.set}}</a></li>\r\n\r\n            </ul>\r\n        </div>\r\n\r\n        <div id=\"myTabContent\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade active in\" id=\"description3\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div [innerHTML]=\"solution.description\" class=\"al-justify\">\r\n                                {{solution.description}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-7\">\r\n                            <img src=\"{{solution.img}}\" alt=\"power supply system\" class=\"img-responsive\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"tab-pane fade\" id=\"features3\">\r\n                <table class=\"table\">\r\n                    <th></th>\r\n                    <tr *ngFor=\"let item of items1 | async\">\r\n                        <td [innerHTML]=\"item.td1\">{{item.td1}}</td>\r\n                        <td [innerHTML]=\"item.td2\">{{item.td2}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"set3\">\r\n                <table class=\"table\">\r\n                    <th></th>\r\n                    <tr *ngFor=\"let item of items2 | async let i=index\">\r\n                        <td [innerHTML]=\"item.td1\" class=\"al-justify\">{{item.td1}}</td>\r\n                        <td [innerHTML]=\"item.td2\" class=\"al-justify\">{{item.td2}}</td>\r\n                        <td [innerHTML]=\"item.td3\" class=\"al-centre\">{{item.td3}}</td>\r\n                        <td *ngIf=\"i==0\" [innerHTML]=\"item.td4\">{{item.td4}}</td>\r\n                        <td *ngIf=\"i>0\"><img src=\"{{item.td4}}\"></td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"id=='solution-kas'\">\r\n        <h4>{{solution.name}}</h4>\r\n\r\n        <div class=\"bs-docs-example\">\r\n            <ul id=\"myTab\" class=\"nav nav-tabs\">\r\n                <li class=\"active\"><a href=\"#description4\" data-toggle=\"tab\">{{submenu.description}}</a></li>\r\n                <li class=\"\"><a href=\"#features4\" data-toggle=\"tab\">{{submenu.features}}</a></li>\r\n                <li class=\"\"><a href=\"#set4\" data-toggle=\"tab\">{{submenu.set}}</a></li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div id=\"myTabContent\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade active in\" id=\"description4\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <div [innerHTML]=\"solution.description\" class=\"al-justify\">\r\n                                {{solution.description}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <img src=\"{{solution.img}}\" alt=\"power supply system\" class=\"img-responsive\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"tab-pane fade\" id=\"features4\">\r\n                <table class=\"table\">\r\n                    <th></th>\r\n                    <tr *ngFor=\"let item of items1 | async\">\r\n                        <td [innerHTML]=\"item.td1\" class=\"al-justify\">{{item.td1}}</td>\r\n                        <td [innerHTML]=\"item.td2\" class=\"al-justify\">{{item.td2}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"set4\">\r\n                <div class=\"al-justify\">\r\n                    {{table2.addinfo}}\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"id=='solution-tk_commander'\">\r\n        <h4>{{solution.name}}</h4>\r\n\r\n        <div class=\"bs-docs-example\">\r\n            <ul id=\"myTab\" class=\"nav nav-tabs\">\r\n                <li class=\"active\"><a href=\"#description5\" data-toggle=\"tab\">{{submenu.description}}</a></li>\r\n                <li class=\"\"><a href=\"#features5\" data-toggle=\"tab\">{{submenu.features}}</a></li>\r\n                <li class=\"\"><a href=\"#set5\" data-toggle=\"tab\">{{submenu.set}}</a></li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div id=\"myTabContent\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade active in\" id=\"description5\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <div [innerHTML]=\"solution.description\" class=\"al-justify\">\r\n                                {{solution.description}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <img src=\"{{solution.img}}\" alt=\"power supply system\" class=\"img-responsive\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"features5\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <table class=\"table\">\r\n                                <th></th>\r\n                                <tr *ngFor=\"let item of items1 | async\">\r\n                                    <td [innerHTML]=\"item.td1\" class=\"al-left\">{{item.td1}}</td>\r\n                                    <td [innerHTML]=\"item.td2\" class=\"al-justify\">{{item.td2}}</td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <img src=\"{{table1.img}}\" alt=\"\" class=\"img-responsive\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"set5\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-9\">\r\n                            <div class=\"al-justify\" [innerHTML]=\"table2.addinfo\">\r\n                                {{table2.addinfo}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <img src=\"{{table2.img}}\" alt=\"\" class=\"img-responsive\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"id=='solution-arm'\">\r\n    <h4>{{solution.name}}</h4>\r\n\r\n    <div class=\"bs-docs-example\">\r\n      <ul id=\"myTab\" class=\"nav nav-tabs\">\r\n        <li class=\"active\"><a href=\"#description6\" data-toggle=\"tab\">{{submenu.description}}</a></li>\r\n        <li class=\"\"><a href=\"#features6\" data-toggle=\"tab\">{{submenu.features}}</a></li>\r\n        <li class=\"\"><a href=\"#set6\" data-toggle=\"tab\">{{submenu.set}}</a></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div id=\"myTabContent\" class=\"tab-content\">\r\n      <div class=\"tab-pane fade active in\" id=\"description6\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n              <div [innerHTML]=\"solution.description\" class=\"al-justify\">\r\n                {{solution.description}}\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <img src=\"{{solution.img}}\" alt=\"power supply system\" class=\"img-responsive\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tab-pane fade\" id=\"features6\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <table class=\"table\">\r\n                <th></th>\r\n                <tr *ngFor=\"let item of items1 | async\">\r\n                  <td [innerHTML]=\"item.td1\" class=\"al-left\">{{item.td1}}</td>\r\n                  <td [innerHTML]=\"item.td2\" class=\"al-justify\">{{item.td2}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <!--<div class=\"col-md-4\">-->\r\n              <!--<img src=\"{{table1.img}}\" alt=\"\" class=\"img-responsive\">-->\r\n            <!--</div>-->\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"tab-pane fade\" id=\"set6\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"al-justify\" [innerHTML]=\"table2.addinfo\">\r\n                {{table2.addinfo}}\r\n              </div>\r\n            </div>\r\n            <!--<div class=\"col-md-3\">-->\r\n              <!--<img src=\"{{table2.img}}\" alt=\"\" class=\"img-responsive\">-->\r\n            <!--</div>-->\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_firebase_config__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocalService = (function () {
    function LocalService(http, af) {
        this.http = http;
        this.af = af;
        this.locale = 'ru';
        this.observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    // устанавливаем язык
    LocalService.prototype.setLocale = function (local) {
        this.locale = local;
        this.observable.next(local);
    };
    // подписываемся на данный метод для реактивного рендеринга компонентов при смене языка
    LocalService.prototype.getLocale = function () {
        return this.observable.asObservable();
    };
    LocalService.prototype.getLocalData = function (loc) {
        this.locale = loc;
    };
    // вспомогательный метод - возвращает текущий язык
    LocalService.prototype.getSettledLocale = function () {
        return this.locale;
    };
    // метод получения списочных данных firebase
    LocalService.prototype.getList = function (core, item, table) {
        return this.af.database.list(this.locale + '/' + core + '/' + item + '/' + table + '/rows');
    };
    // метод получения объектных данных firebase
    LocalService.prototype.getLocal = function (core, product) {
        if (product == '') {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_firebase_config__["a" /* firebaseConfig */].databaseURL + '/' + this.locale + '/' + core + '.json')
                .map(function (response) { return response.json(); });
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_firebase_config__["a" /* firebaseConfig */].databaseURL + '/' + this.locale + '/' + core + '/' + product + '.json')
                .map(function (response) { return response.json(); });
        }
    };
    LocalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AngularFire */]) === 'function' && _b) || Object])
    ], LocalService);
    return LocalService;
    var _a, _b;
}());
//# sourceMappingURL=D:/OpenServer/domains/fb/src/local.service.js.map

/***/ })

},[1014]);
//# sourceMappingURL=main.bundle.map