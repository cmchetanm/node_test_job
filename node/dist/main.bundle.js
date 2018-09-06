webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-root{\n  .hdjkhajkdhaksdh{\n    color: red;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_lock_lock_component__ = __webpack_require__("../../../../../src/app/components/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_lock_service__ = __webpack_require__("../../../../../src/app/services/lock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__helpers_jwt_service__ = __webpack_require__("../../../../../src/app/helpers/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// const appRoutes: Routes = [
//   {path: '', component:UserComponent},
//   {path: 'about',component:AboutComponent}
// ];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_lock_lock_component__["a" /* LockComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_pdf_viewer__["PdfViewerModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_20__components_home_home_component__["a" /* HomeComponent */],
                },
                {
                    path: 'register',
                    component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */]
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'user',
                    children: [
                        {
                            path: 'lock',
                            component: __WEBPACK_IMPORTED_MODULE_11__components_lock_lock_component__["a" /* LockComponent */],
                            canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]]
                        },
                        {
                            path: 'settings',
                            component: __WEBPACK_IMPORTED_MODULE_5__components_user_user_component__["a" /* UserComponent */],
                            canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]]
                        }
                    ]
                }
            ]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_16__services_lock_service__["a" /* LockService */], __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */], {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestOptions */],
                useClass: __WEBPACK_IMPORTED_MODULE_19__helpers_jwt_service__["a" /* AuthRequestOptions */]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n      <h4>Dashboard</h4>\n  </div>\n</div>\n<ul>\n  <li> <button type=\"button\" id=\"startService\" class=\"btn btn-danger\" role=\"button\" name=\"button\">Start</button> </li>\n</ul>\n<hr>\n<!--  -->\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">select parameters</span>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query.parameters\" name=\"table\" placeholder=\"id, name, createdAt\">\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <br>\n    <div class=\"form-inline\">\n\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">from</span>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query.table\" name=\"table\" placeholder=\"document1\">\n      </div>\n\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">where</span>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query.field\" name=\"field\" placeholder=\"field\">\n      </div>\n\n      <div class=\"input-group\">\n        <select class=\"form-control\" [(ngModel)]=\"query.operator\" name=\"operator\">\n          <option value=\"=\">=</option>\n          <option value=\"!=\">!=</option>\n          <option value=\"<\"><</option>\n          <option value=\">\">></option>\n        </select>\n      </div>\n\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query.value\" name=\"value\" placeholder=\"field value\">\n      </div>\n\n      <div class=\"input-group\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"submitForm()\" name=\"button\">Search</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n<br>\n<!--  -->\n\n<div class=\"row\">\n<div class=\"col-sm-12\">\n  <div class=\"form-inline\">\n   <div *ngFor=\"let opt of options; let i = index\">\n     <div class=\"query-container\">\n    <div class=\"input-group\">\n      <select class=\"form-control\" [(ngModel)]=\"options[i].logicalOperator\" name=\"logicalOperator\">\n          <option value=\"AND\">AND</option>\n          <option value=\"OR\">OR</option>\n        </select>\n    </div>\n\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"options[i].field\" name=\"field\" placeholder=\"Field\">\n    </div>\n\n    <div class=\"input-group\">\n      <select class=\"form-control\" [(ngModel)]=\"options[i].operator\" name=\"operator\">\n          <option value=\"=\">=</option>\n          <option value=\"!=\">!=</option>\n          <option value=\"<\"><</option>\n          <option value=\">\">></option>\n        </select>\n    </div>\n\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"options[i].value\" name=\"value\" placeholder=\"Field Value\">\n    </div>\n\n    <div class=\"input-group\">\n     <i class=\"fa fa-plus-circle\" role=\"button\" (click)=\"addQuery(i)\" *ngIf=\"iValue == i\" aria-hidden=\"true\" style=\"padding-left:14px;\"></i>\n    </div>\n    <div class=\"input-group\">\n      <i class=\"fa fa-minus-circle\" role=\"button\" (click)=\"removeQuery(i)\" *ngIf=\"iValue != i\" aria-hidden=\"true\" style=\"padding-left:10px;\"></i>\n    </div>\n  </div>\n  <br>\n  </div>\n  <div class=\"set-rows\">\n    <p>Set startRow and maxRows: (0,10) </p>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\">startRow</span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"startRow\" name=\"field\" placeholder=\"0\">\n    </div>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\">maxRows</span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"maxRows\" name=\"field\" placeholder=\"10\">\n    </div>\n  </div>\n\n  </div>\n</div>\n</div>\n<hr>\n<!--  -->\n\n  <div class=\"main-table-div\" *ngIf=\"objKeys\">\n      <div class=\"row\">\n        <div class=\"col-xs-2\">\n\n              <label class=\"label-control\">Table</label>\n              <input class=\"form-control input-sm\" [(ngModel)]=\"query.table\" placeholder=\"document1\" disabled/>\n\n          </div>\n            <div class=\"col-xs-4\">\n              <!-- <label class=\"label-control\">Filter by name</label>\n                        <input class=\"form-control input-sm\" [(ngModel)]=\"filterQuery\" placeholder=\"Search by name..\"/> -->\n            </div>\n            <div class=\"col-xs-2\">\n                <!-- <label class=\"label-control\">Rows on page</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\n                    <option [ngValue]=\"5\">5</option>\n                    <option [ngValue]=\"10\">10</option>\n                    <option [ngValue]=\"15\">15</option>\n                </select> -->\n            </div>\n            <div class=\"col-xs-4\">\n                <div class=\"col-xs-6\">\n                    <div class=\"row\">\n                      <label class=\"label-control\">Filter by name</label>\n                      <input class=\"form-control input-sm\" [(ngModel)]=\"searchText\" placeholder=\"Search by name..\"/>\n                    </div>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"row\">\n                      <label class=\"label-control\">Rows on page</label>\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\n                          <option [ngValue]=\"5\">5</option>\n                          <option [ngValue]=\"10\">10</option>\n                          <option [ngValue]=\"15\">15</option>\n                      </select>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br>\n        <!--  -->\n\n        <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th *ngFor=\"let key of objKeys\">{{key}}</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let n of newArray\">\n                  <td *ngFor=\"let key of objKeys\">{{n[key]}}</td>\n                  <td><button type=\"button\" (click)=\"exportPdf(n)\" class=\"btn btn-xs\" name=\"button\"><i class=\"glyphicon glyphicon-print\" area-hidden=\"true\"></i> Export</button></td>\n                </tr>\n                <!-- <tr *ngFor=\"let item of mf.data\">\n                    <td>{{item.name}}</td>\n                    <td>{{item.email}}</td>\n                    <td class=\"text-right\">{{item.age}}</td>\n                    <td>{{item.city | uppercase}}</td>\n                    <td>\n                        <button (click)=\"exportPdf(item)\" class=\"btn btn-danger\">Export</button>\n                    </td>\n                </tr> -->\n              </tbody>\n            </table>\n          </div>\n          <br>\n          <div class=\"text-center\">\n            <!-- <pagination-controls (pageChange)=\"page = $event\"></pagination-controls> -->\n          </div>\n        </div>\n        </div>\n\n      </div> <!-- div closed for whole table if no data available  -->\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_dashboard_service__ = __webpack_require__("../../../../../src/app/components/about/service/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AboutComponent(http, dashboardService, router) {
        //const url = '/api/getBinaryData?sessionId=cdef81f5b3a742f8ab2d4dae6285a122@9012755&id=12753858&fieldName=file&objName=document1';
        // Load pdf
        // const url = '/api/getBinaryData?sessionId=02133c703d2847cf9808e451f00e59bd@9012755&id=12753858&fieldName=file&objName=document1';
        // this.http.get(url, {
        //   responseType: ResponseContentType.Blob
        // }).subscribe(
        //   (response) => { // download file
        //     var blob = new Blob([response.blob()], {type: 'application/pdf'});
        //     const blobUrl = URL.createObjectURL(blob);
        //     this.pdfSrc = blobUrl;
        //     console.log(this.pdfSrc);
        //     // const iframe = document.createElement('iframe');
        //     // iframe.style.display = 'none';
        //     // iframe.src = blobUrl;
        //     // document.body.appendChild(iframe);
        //     // iframe.contentWindow.print();
        // });
        this.http = http;
        this.dashboardService = dashboardService;
        this.router = router;
        this.arr2 = [];
        this.newArray = [];
        this.colSettings = {};
        this.queries = { query: {}, options: [] };
        this.query = { parameters: "", table: "", field: "", operator: "=", value: "" };
        this.options = [{ logicalOperator: "AND", field: "", operator: "=", value: "" }];
        this.whereCondition = '';
        this.firstWhere = '';
        this.iValue = 0;
        this.startRow = 0;
        this.maxRows = 10;
        this.rowsOnPage = 5;
        this.buildQuery = '';
    }
    AboutComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('queryparams') != null) {
            this.query.parameters = localStorage.getItem('queryparams');
        }
        if (JSON.parse(localStorage.getItem('options')) != null) {
            this.options = JSON.parse(localStorage.getItem('options'));
        }
        if (JSON.parse(localStorage.getItem('startRow')) != null) {
            this.startRow = JSON.parse(localStorage.getItem('startRow'));
        }
        if (JSON.parse(localStorage.getItem('maxRows')) != null) {
            this.maxRows = JSON.parse(localStorage.getItem('maxRows'));
        }
        if (localStorage.getItem('table') != null) {
            this.query.table = localStorage.getItem('table');
        }
        if (localStorage.getItem('field') != null) {
            this.query.field = localStorage.getItem('field');
        }
        if (localStorage.getItem('operator') != null) {
            this.query.operator = localStorage.getItem('operator');
        }
        if (localStorage.getItem('value') != null) {
            this.query.value = localStorage.getItem('value');
        }
        if (localStorage.getItem('ivalue') != null) {
            this.iValue = JSON.parse(localStorage.getItem('ivalue'));
        }
        if (localStorage.getItem('queryparams') && localStorage.getItem('queryparams') != null && localStorage.getItem('table') && localStorage.getItem('table') != null) {
            this.getData();
        }
    };
    AboutComponent.prototype.submitForm = function () {
        var _this = this;
        //console.log("startRow: "+this.startRow+" maxRows: "+this.maxRows);
        this.whereCondition = '';
        if (this.query.field != '' && this.query.operator != '' && this.query.value != '') {
            this.firstWhere = this.query.field + " " + this.query.operator + " " + this.query.value;
            this.buildQuery = "SELECT " + this.query.parameters + " FROM " + this.query.table + " WHERE " + this.firstWhere;
        }
        else {
            this.buildQuery = "SELECT " + this.query.parameters + " FROM " + this.query.table;
        }
        this.options.forEach(function (opn) {
            if (opn.field != '' && opn.value != '' && opn.operator != '' && opn.logicalOperator != '') {
                _this.whereCondition = _this.whereCondition + " " + opn.logicalOperator + " " + opn.field + " " + opn.operator + " " + opn.value;
            }
        });
        //console.log(this.whereCondition);
        this.buildQuery = this.buildQuery + " " + this.whereCondition;
        //console.log("query");
        console.log(this.buildQuery);
        localStorage.setItem('field', this.query.field);
        localStorage.setItem('operator', this.query.operator);
        localStorage.setItem('value', this.query.value);
        localStorage.setItem('options', JSON.stringify(this.options));
        localStorage.setItem('firstWhere', this.firstWhere);
        localStorage.setItem('queryparams', this.query.parameters);
        localStorage.setItem('table', this.query.table);
        localStorage.setItem('startRow', JSON.stringify(this.startRow));
        localStorage.setItem('maxRows', JSON.stringify(this.maxRows));
        localStorage.setItem('whereOptions', this.whereCondition);
        localStorage.setItem('ivalue', JSON.stringify(this.iValue));
        this.getData();
    };
    AboutComponent.prototype.addQuery = function (i) {
        var i = i + 1;
        this.iValue = i;
        var op = { logicalOperator: "AND", field: "", operator: "=", value: "" };
        this.options.push(op);
    };
    AboutComponent.prototype.removeQuery = function (i) {
        this.iValue = this.iValue - 1;
        this.options.splice(i, 1);
    };
    AboutComponent.prototype.getData = function () {
        var _this = this;
        this.dashboardService.getData()
            .subscribe(function (res) {
            console.log(res.json());
            var arrObj = [];
            var arryObj2 = [];
            arrObj = res.json();
            _this.colSettings = {
                id: "",
                name: "",
                createdAt: ""
            };
            _this.objKeys = Object.keys(_this.colSettings);
            arrObj.forEach(function (newJobItem) {
                //console.log(newJobItem);
                var i = 0;
                var obj = {};
                _this.objKeys.forEach(function (item) {
                    obj[item] = newJobItem[i];
                    i++;
                });
                _this.newArray.push(obj);
                console.log(_this.newArray);
            });
            //console.log(this.newArray);
        }, function (err) {
            console.log(err.json());
            if (err.json().status == 'login' && err.json().message == 'Session expired or invalid login credentials') {
                //this.router.navigate('/login');
            }
        });
    };
    AboutComponent.prototype.exportPdf = function (item) {
        console.log(item);
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AboutComponent);

var _a, _b, _c;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/service/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = (function () {
    // headers: Headers;
    // options: RequestOptions;
    function DashboardService(http) {
        this.http = http;
        console.log('data service connected');
    }
    DashboardService.prototype.getData = function () {
        var queryParams = localStorage.getItem('queryparams');
        var table = localStorage.getItem('table');
        var whereConditions = localStorage.getItem('whereOptions');
        var firstWhere = localStorage.getItem('firstWhere');
        var startRow = localStorage.getItem('startRow');
        var maxRows = localStorage.getItem('maxRows');
        //var currentUser = JSON.parse(localStorage.getItem('sessionId'));
        var sessionId = localStorage.getItem('sessionId');
        var query = '';
        var finalWhere = '';
        if (firstWhere && firstWhere != null) {
            finalWhere = firstWhere;
            query = "SELECT " + queryParams + " FROM " + table + " WHERE " + finalWhere;
        }
        if (firstWhere && firstWhere != null && whereConditions && whereConditions != null) {
            finalWhere = '';
            finalWhere = firstWhere + ' ' + whereConditions;
            query = '';
            query = "SELECT " + queryParams + " FROM " + table + " WHERE " + finalWhere;
        }
        else {
            query = "SELECT " + queryParams + " FROM " + table;
        }
        console.log(" query: " + query);
        var url = "/api/selectQuery?sessionId=" + sessionId + "&startRow=" + startRow + "&maxRows=" + maxRows + "&query=" + query + "&output=json";
        return this.http.get(url).map(function (response) { return response; });
    };
    DashboardService.prototype.getPdf = function () {
        var url = '/api/getBinaryData?sessionId=5b125cf5876c40acaf35a1ef8eabe8ca@9012755&id=12753858&fieldName=file&objName=document1';
        return this.http.get(url, {
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob
        }).map(function (response) { return response; });
        //   (response) => { // download file
        //     var blob = new Blob([response.blob()], {type: 'application/pdf'});
        //     const blobUrl = URL.createObjectURL(blob);
        //     const iframe = document.createElement('iframe');
        //     iframe.style.display = 'none';
        //     iframe.src = blobUrl;
        //     document.body.appendChild(iframe);
        //     iframe.contentWindow.print();
        // });
        //return this.http.get('/api/getBinaryData?sessionId=cdef81f5b3a742f8ab2d4dae6285a122@9012755&id=12753858&fieldName=file&objName=document1')
        //.map(response => response)
        //.map((arrayBuffer: ArrayBuffer) => new Uint8Array(arrayBuffer))
        //.first();
    };
    DashboardService.prototype.extractData = function (res) {
        console.log(res);
        localStorage.setItem('currentUser', JSON.stringify(res));
        var body = res;
        return body || {};
    };
    // // below function can be used when deal with Observable
    DashboardService.prototype.handleErrorPromise = function (error) {
        localStorage.setItem('currentUser', 'undefined');
        console.log(error.error || error.error);
        //console.error(error.message || error);
        return Promise.reject(error.error || error.error);
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rowback{\n  background: #333;\n}\np{\n  margin-top: 0px !important;\n  padding-top: 12px;\n  color:#fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"position: fixed;bottom:0px;\">\n  <br><br>\n  <div class=\"row rowback\">\n    <div class=\"col-sm-12\">\n      <div class=\"text-center\">\n        <p>Sample for Angular app</p>\n      </div>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nav-link{\n    color:#fff !important;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-light bg-primary\" style=\"margin-bottom:20px;\">\n  <a href=\"#\" class=\"navbar-brand\" style=\"color:#fff;\">\n    <img src=\"/assets/images/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    <!-- Nextmaker -->\n  </a>\n       <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n           <span class=\"navbar-toggler-icon\"></span>\n       </button>\n       <div id=\"navbarNavDropdown\" class=\"navbar-collapse collapse\">\n           <ul class=\"navbar-nav mr-auto\">\n               <li class=\"nav-item active\">\n                 <a class=\"nav-link\" routerLink=\"/\">Home<span class=\"sr-only\">(current)</span></a>\n               </li>\n               <li class=\"nav-item \" *ngIf=\"toggle\">\n                <a class=\"nav-link\" routerLink=\"/user/lock\">Lock<span class=\"sr-only\"></span></a>\n              </li>\n               <!-- <li class=\"nav-item\">\n                   <a class=\"nav-link\" routerLink=\"/about\">About</a>\n               </li> -->\n           </ul>\n           <ul class=\"navbar-nav\">\n               <li class=\"nav-item dropdown\" *ngIf=\"toggle\">\n                   <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                     {{username}}\n                   </a>\n                   <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                       <a class=\"dropdown-item\" routerLink=\"/user/settings\">Setting</a>\n                       <a class=\"dropdown-item\" routerLink=\"/user/lock\">Locks</a>\n                       <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n                   </div>\n               </li>\n               <li class=\"nav-item\" *ngIf=\"!toggle\">\n                   <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n                   </li>\n           </ul>\n       </div>\n   </nav>\n   <br><br>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, loginService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.toggle = false;
        this.currentUser = {};
        this.subscription = loginService.getLoggedInName.subscribe(function (user) { return _this.changeName(user); });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent.prototype.changeName = function (user) {
        this.currentUser = user;
        if (this.currentUser.username !== undefined) {
            this.username = this.currentUser.username;
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        localStorage.clear();
        this.loginService.getLoggedInName.next({ username: undefined });
        this.router.navigate(['/login']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert-danger {\n    background-color: #fff;\n    border-color: #fff;\n}\n\n.alert {\n   padding: 0px;\n   margin-bottom: 20px;\n   border: 1px solid transparent;\n   border-radius: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br><br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h3>Welcome  to home..!!</h3>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.user = { username: '', password: '' };
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== 'undefined' &&
            localStorage.getItem('currentUser') !== '') {
            this.username = JSON.parse(localStorage.getItem('currentUser')).user.username;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/lock/lock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n      <h3>User List: </h3>\n      <div class=\"table\">\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>Username</th>\n              <th>Name</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of users\">\n              <td>{{user.username}}</td>\n              <td>{{user.name}}</td>  \n              </tr>\n          </tbody>\n        </table>\n      </div>\n  </div>\n    <div class=\"col-sm-3\" style=\"border-left: 1px solid #000;\">\n        <form #lock=\"ngForm\" (ngSubmit)=\"submitLock(lock)\">\n          <h3>Add New Lock: </h3>\n          <br><br>\n            <div class=\"form-group\">\n              <label for=\"email\">Lock Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lock.name\" name=\"name\" #lockname=\"ngModel\" required placeholder=\"Lock Name\">\n            <div class=\"alert alert-danger\" *ngIf=\"lockname.errors?.required && lockname.touched\">Lock Name is required</div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-danger btn-sm\" [disabled]=\"!lock.valid\" role=\"button\">Add</button>\n        </form>\n    </div>\n  <div class=\"col-sm-6\" style=\"border-left: 1px solid #000;\">\n    <h3>Lock list: </h3>\n    <div class=\"table\">\n      <table class=\"table table-responsive\">\n        <thead>\n          <tr>\n            <th>MacId</th>\n            <th>Name</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let lock of locks; let i = index\">\n            <td>{{lock.macId}}</td>\n            <td>\n              <span *ngIf=\"i != indexVal\">{{lock.name}}</span>\n              <span *ngIf=\"i == indexVal\"><input type=\"text\" [(ngModel)]=\"lock.name\"></span></td>\n            <td>\n              <!-- <span *ngIf=\"i != indexVal\" class=\"glyphicon glyphicon-pencil\" (click)=\"editClick(lock,i)\"></span>\n              <span *ngIf=\"i == indexVal\" class=\"glyphicon glyphicon-ok\" (click)=\"saveEdit(lock)\"></span>\n              <span class=\"glyphicon glyphicon-trash\" (click)=\"delete(lock)\"></span> -->\n              <button *ngIf=\"i != indexVal\" class=\"btn btn-default btn-xs\" (click)=\"editClick(lock,i)\" style=\"padding:0px;\">Edit</button>\n              <button *ngIf=\"i == indexVal\" class=\"btn btn-default btn-xs\" (click)=\"saveEdit(lock)\" style=\"padding:0px;\">Save</button>\n              <button class=\"btn btn-default btn-xs\" (click)=\"delete(lock)\" style=\"padding:0px;\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lock_service__ = __webpack_require__("../../../../../src/app/services/lock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LockComponent = (function () {
    function LockComponent(http, lockService, loginService, router, userService) {
        this.http = http;
        this.lockService = lockService;
        this.loginService = loginService;
        this.router = router;
        this.userService = userService;
        this.lock = { name: '' };
        this.locks = [];
        this.toggle = false;
        this.users = [];
    }
    LockComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== 'undefined' &&
            localStorage.getItem('currentUser') !== '') {
            this.loginService.getLoggedInName.next({ username: JSON.parse(localStorage.getItem('currentUser')).user.username });
        }
        this.getData();
    };
    LockComponent.prototype.submitLock = function (formData) {
        var _this = this;
        this.lock.name = formData.value.name;
        this.lockService.addLock(this.lock).then(function (res) {
            _this.getData();
            formData.reset();
            alert('Lock added successfully!');
            return;
        }).catch(function (err) {
            console.log(err);
            alert(err.error);
            return;
        });
    };
    LockComponent.prototype.getData = function () {
        var _this = this;
        this.lockService.getLocks().subscribe(function (res) {
            console.log(res.json());
            _this.locks = res.json().lock;
            _this.getUsers();
        }, function (err) {
            console.log(err);
            localStorage.setItem('currentUser', 'undefined');
            _this.router.navigate(['/']);
        });
    };
    LockComponent.prototype.editClick = function (obj, i) {
        this.indexVal = i;
    };
    LockComponent.prototype.saveEdit = function (obj) {
        var _this = this;
        console.log(obj);
        this.indexVal = undefined;
        this.lockService.editLock(obj.id, obj).then(function (res) {
            console.log(res);
            _this.getData();
            alert('Lock updated successfully!');
            return;
        });
    };
    LockComponent.prototype.delete = function (lock) {
        var _this = this;
        console.log(lock);
        this.lockService.deleteLock(lock.id).then(function (res) {
            console.log(res);
            _this.getData();
            alert('Lock deleted successfully!');
            return;
        });
    };
    LockComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (res) {
            // console.log('<<<<<<<<<<<<<<>>>>>>>>>>>>>');
            console.log(res.json());
            _this.users = res.json().user;
        }, function (err) {
            console.log(err);
        });
    };
    return LockComponent;
}());
LockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lock',
        template: __webpack_require__("../../../../../src/app/components/lock/lock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/lock/lock.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_lock_service__["a" /* LockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_lock_service__["a" /* LockService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _e || Object])
], LockComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=lock.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert-danger {\n    background-color: #fff;\n    border-color: #fff;\n}\n\n.alert {\n   padding: 0px;\n   margin-bottom: 20px;\n   border: 1px solid transparent;\n   border-radius: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4\">\n      <br><br><br>\n  <span>Please login to your account:</span>\n  <br><br>\n  <form #user=\"ngForm\" (ngSubmit)=\"login(user)\">\n      <div class=\"form-group\">\n        <label for=\"email\">Username:</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\" #myusername=\"ngModel\" required placeholder=\"Username\">\n      <div class=\"alert alert-danger\" *ngIf=\"myusername.errors?.required && myusername.touched\">Username is required</div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\"  name=\"password\" #mypassword=\"ngModel\" required placeholder=\"Password\">\n        <div class=\"alert alert-danger\" *ngIf=\"mypassword.errors?.required && mypassword.touched\">Password is required</div>\n      </div>\n\n      <!-- <div class=\"checkbox\">\n        <label><input type=\"checkbox\"> Remember me</label>\n      </div> -->\n      <button type=\"submit\" class=\"btn btn-danger btn-sm\" [disabled]=\"!user.valid\" role=\"button\">Submit</button>\n      <a routerLink=\"/register\">New User?</a>\n  </form>\n    </div>\n    <div class=\"col-sm-4\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.user = { username: '', password: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (formData) {
        var _this = this;
        console.log(formData);
        this.user.username = formData.value.username;
        this.user.password = formData.value.password;
        // console.log(user.email);
        this.loginService.login(this.user)
            .then(function (res) {
            console.log('success');
            console.log(res);
            formData.reset();
            _this.router.navigate(['/user/lock']);
        }).catch(function (err) {
            console.log(err);
            alert("Invalid credentials");
            return;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\"></div>\n      <div class=\"col-sm-4\">\n        <br><br><br>\n        <span>Registeration:</span>\n    <br><br>\n    <form #user=\"ngForm\" (ngSubmit)=\"submitForm(user)\">\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Name:</label>\n            <input type=\"text\" class=\"form-control\"  aria-describedby=\"emailHelp\" [(ngModel)]=\"user.name\" name=\"name\" #myname=\"ngModel\" placeholder=\"Enter name\">\n            <div class=\"alert alert-danger\" *ngIf=\"myname.errors?.required && myname.touched\">Name is required</div>\n            </div>\n\n          <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Birth Date:</label>\n              <input type=\"date\" class=\"form-control\" id=\"birthdate\" aria-describedby=\"emailHelp\" [(ngModel)]=\"user.birthdate\" name=\"birthdate\" #mybirthdate=\"ngModel\" required placeholder=\"Enter birth date\">\n              <div class=\"alert alert-danger\" *ngIf=\"mybirthdate.errors?.required && mybirthdate.touched\">Birth date is required</div>\n            </div>          \n     \n        <div class=\"form-group\">\n          <label for=\"email\">Username:</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\" #myusername=\"ngModel\" required placeholder=\"Username\">\n        <div class=\"alert alert-danger\" *ngIf=\"myusername.errors?.required && myusername.touched\">Username is required</div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"pwd\">Password:</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\"  name=\"password\" #mypassword=\"ngModel\" required placeholder=\"Password\">\n          <div class=\"alert alert-danger\" *ngIf=\"mypassword.errors?.required && mypassword.touched\">Password is required</div>\n        </div>\n  \n        <div class=\"form-group\">\n            <label for=\"pwd\">Confirm Password:</label>\n            <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"user.cpassword\"  name=\"cpassword\" #mycpassword=\"ngModel\" required placeholder=\"Password\">\n            <div class=\"alert alert-danger\" *ngIf=\"mycpassword.errors?.required && mycpassword.touched && user.password != user.cpassword\">Password & confirm password not match</div>\n          </div>\n    \n        <!-- <div class=\"checkbox\">\n          <label><input type=\"checkbox\"> Remember me</label>\n        </div> -->\n        <button type=\"submit\" class=\"btn btn-danger btn-sm\" [disabled]=\"!user.valid\" role=\"button\">Submit</button>\n        <a routerLink=\"/login\">Already registered?</a>\n    </form>\n      </div>\n      <div class=\"col-sm-4\"></div>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = { name: '', username: '', birthdate: '', password: '' };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.submitForm = function (formData) {
        var _this = this;
        //  console.log(user);
        // console.log(user.email);
        this.user.name = formData.value.name;
        this.user.username = formData.value.username;
        this.user.birthdate = formData.value.birthdate;
        this.user.password = formData.value.password;
        this.userService.postUser(this.user).then(function (res) {
            console.log(res);
            alert('Registered successfully,please login');
            _this.router.navigate(['/']);
        }).catch(function (err) {
            console.log(err);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-user\n{\n  .setColor{\n    color: red;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h3>User Details: </h3>\n    <br><br>\n    <div class=\"table\">\n      <table class=\"table table-responsive\">\n        <thead>\n          <tr>\n            <th>Username</th>\n            <th>Name</th>\n            <th>Birth Date</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{user.username}}</td>\n            <td> \n              <span *ngIf=\"!toggle\">{{user.name}}</span> \n              <span *ngIf=\"toggle\"><input type=\"text\" [(ngModel)]=\"user.name\"></span>\n            </td>\n            <td>\n                <span *ngIf=\"!toggle\">{{user.birthdate | date:'dd/mm/yyyy'}}</span> \n                <span *ngIf=\"toggle\"><input type=\"date\" [(ngModel)]=\"user.birthdate\"></span>\n            </td>\n            <td>\n                <button *ngIf=\"!toggle\" class=\"btn btn-default btn-xs\" (click)=\"editClick(user)\" style=\"padding:0px;\">Edit</button>\n                <button *ngIf=\"toggle\" class=\"btn btn-default btn-xs\" (click)=\"saveEdit(user)\" style=\"padding:0px;\">Save</button>\n                <button class=\"btn btn-default btn-xs\" (click)=\"delete(user)\" style=\"padding:0px;\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(userService, loginService, router) {
        this.userService = userService;
        this.loginService = loginService;
        this.router = router;
        this.user = {};
        this.toggle = false;
        console.log('constructor ran');
    }
    UserComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') && localStorage.getItem('currentUser') !== 'undefined') {
            this.getData();
        }
        else {
            localStorage.setItem('currentUser', 'undefined');
            this.router.navigate(['/']);
        }
    };
    UserComponent.prototype.getData = function () {
        var _this = this;
        var userId;
        userId = JSON.parse(localStorage.getItem('currentUser')).user.id;
        this.userService.getUser(userId).subscribe(function (res) {
            console.log(res);
            _this.user = res.json().user;
        }, function (err) {
            console.log(err);
            localStorage.setItem('currentUser', 'undefined');
            _this.router.navigate(['/']);
        });
    };
    UserComponent.prototype.editClick = function () {
        this.toggle = true;
    };
    UserComponent.prototype.saveEdit = function (obj) {
        var _this = this;
        console.log(obj);
        this.toggle = false;
        this.userService.saveEdit(obj).then(function (res) {
            console.log(res);
            _this.getData();
            alert('User updated successfully!');
            return;
        });
    };
    UserComponent.prototype.delete = function (lock) {
        var _this = this;
        console.log(lock);
        this.userService.deleteUser().then(function (res) {
            console.log(res);
            _this.loginService.getLoggedInName.next({ username: undefined });
            localStorage.setItem('currentUser', 'undefined');
            _this.router.navigate(['/']);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/helpers/jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRequestOptions; });
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

var AUTH_HEADER_KEY = 'Authorization';
var AUTH_PREFIX = 'Bearer';
var AuthRequestOptions = (function (_super) {
    __extends(AuthRequestOptions, _super);
    function AuthRequestOptions() {
        var _this = _super.call(this) || this;
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            if (token) {
                _this.headers.append(AUTH_HEADER_KEY, AUTH_PREFIX + " " + token);
            }
        }
        return _this;
    }
    return AuthRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* BaseRequestOptions */]));

//# sourceMappingURL=jwt.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost/multi-database/public/api/user';
        console.log('data service connected');
    }
    DataService.prototype.getData = function () {
        var sessionId = localStorage.getItem('sessionId');
        var url = "/api/selectQuery?sessionId=" + sessionId + "&startRow=0&maxRows=10&query=select id,name,createdAt from document1&output=json";
        return this.http.get(url).map(function (response) { return response; });
    };
    DataService.prototype.getPdf = function () {
        var url = '/api/getBinaryData?sessionId=5b125cf5876c40acaf35a1ef8eabe8ca@9012755&id=12753858&fieldName=file&objName=document1';
        return this.http.get(url, {
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob
        }).map(function (response) { return response; });
        //   (response) => { // download file
        //     var blob = new Blob([response.blob()], {type: 'application/pdf'});
        //     const blobUrl = URL.createObjectURL(blob);
        //     const iframe = document.createElement('iframe');
        //     iframe.style.display = 'none';
        //     iframe.src = blobUrl;
        //     document.body.appendChild(iframe);
        //     iframe.contentWindow.print();
        // });
        //return this.http.get('/api/getBinaryData?sessionId=cdef81f5b3a742f8ab2d4dae6285a122@9012755&id=12753858&fieldName=file&objName=document1')
        //.map(response => response)
        //.map((arrayBuffer: ArrayBuffer) => new Uint8Array(arrayBuffer))
        //.first();
    };
    DataService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.postUserWithPromise = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiUrl, user, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    DataService.prototype.postUserWithObservable = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'loginName': 'restapitih', 'password': 'Mnbvcxz!!' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        var url = 'https://www.cloudapps.services/rest/api/login?output=json';
        return this.http.post(url, user, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("below is the extracted data");
        console.log(body);
        return body || {};
    };
    DataService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.message || error);
    };
    DataService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/lock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SharedService } from '../services/data.service';
// import { Observable } from 'rxjs';


var LockService = (function () {
    function LockService(http) {
        this.http = http;
        console.log('data service connected');
        // if (localStorage.getItem('currentUser') &&
        //  localStorage.getItem('currentUser') !== '' &&
        //   localStorage.getItem('currentUser') !== 'undefined') {
        //   let token;
        //   token = JSON.parse(localStorage.getItem('currentUser')).token;
        //  // console.log(token);
        //   console.log(JSON.parse(localStorage.getItem('currentUser')));
        //  this.headers      = new Headers({ 'Content-Type': 'application/json'});
        // this.options       = new RequestOptions({ headers: this.headers });
        // }
    }
    LockService.prototype.addLock = function (obj) {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            // console.log(token);
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
            this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        }
        return this.http.post('/api/lock', obj, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    LockService.prototype.getLocks = function () {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            // console.log(token);
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
            this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        }
        return this.http.get('/api/lock', this.options).map(function (response) { return response; });
    };
    LockService.prototype.editLock = function (lockId, obj) {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            // console.log(token);
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
            this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        }
        return this.http.put('/api/lock/' + lockId, obj, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    LockService.prototype.deleteLock = function (lockId) {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            // console.log(token);
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
            this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        }
        return this.http.delete('/api/lock/' + lockId, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    LockService.prototype.extractData = function (res) {
        console.log(res);
        var body = res;
        return body || {};
    };
    // // below function can be used when deal with Observable
    LockService.prototype.handleErrorPromise = function (error) {
        console.log(error.error || error);
        // console.error(error.message || error);
        return Promise.reject(error.error || error.json());
    };
    return LockService;
}());
LockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], LockService);

var _a;
//# sourceMappingURL=lock.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { SharedService } from '../services/data.service';
// import { Observable } from 'rxjs';


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.getLoggedInName = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        console.log('data service connected');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
    }
    LoginService.prototype.login = function (body) {
        return this.http.post('/api/login', body, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    LoginService.prototype.extractData = function (res) {
        console.log(res.json());
        localStorage.setItem('currentUser', 'undefined');
        localStorage.setItem('currentUser', JSON.stringify(res.json()));
        var body = res.json();
        return body || {};
    };
    // // below function can be used when deal with Observable
    LoginService.prototype.handleErrorPromise = function (error) {
        localStorage.setItem('currentUser', 'undefined');
        console.log(error.error || error.error);
        // console.error(error.message || error);
        return Promise.reject(error.error || error.error);
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SharedService } from '../services/data.service';
// import { Observable } from 'rxjs';


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        console.log('data service connected');
        // this.headers      = new Headers({ 'Content-Type': 'application/json'});
        // this.options       = new RequestOptions({ headers: this.headers });
        //   if (localStorage.getItem('currentUser') &&
        //   localStorage.getItem('currentUser') !== '' &&
        //    localStorage.getItem('currentUser') !== 'undefined') {
        //    let token;
        //    token = JSON.parse(localStorage.getItem('currentUser')).token;
        //   // console.log(token);
        //    console.log(JSON.parse(localStorage.getItem('currentUser')));
        //    this.headers      = new Headers({ 'Content-Type': 'application/json', 'Authorization': token});
        //    this.options       = new RequestOptions({ headers: this.headers });
        //  }
    }
    UserService.prototype.getUser = function (userId) {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            // console.log(token);
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
            this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        }
        return this.http.get('/api/user/' + userId, this.options).map(function (response) { return response; });
    };
    UserService.prototype.getUsers = function () {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            // console.log(token);
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
            this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        }
        return this.http.get('/api/user', this.options).map(function (response) { return response; });
    };
    UserService.prototype.saveEdit = function (body) {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            // console.log(token);
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
            this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        }
        return this.http.put('/api/user', body, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    UserService.prototype.postUser = function (body) {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            // console.log(token);
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
            this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        }
        return this.http.post('/api/user', body, this.options).toPromise()
            .then(function (res) { return res; })
            .catch(this.handleErrorPromise);
    };
    UserService.prototype.deleteUser = function () {
        if (localStorage.getItem('currentUser') &&
            localStorage.getItem('currentUser') !== '' &&
            localStorage.getItem('currentUser') !== 'undefined') {
            var token = void 0;
            token = JSON.parse(localStorage.getItem('currentUser')).token;
            // console.log(token);
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
            this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        }
        return this.http.delete('/api/user', this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    UserService.prototype.extractData = function (res) {
        console.log(res.json());
        var body = res;
        return body || {};
    };
    // // below function can be used when deal with Observable
    UserService.prototype.handleErrorPromise = function (error) {
        // localStorage.setItem('currentUser', 'undefined');
        console.log(error.error || error.error);
        // console.error(error.message || error);
        return Promise.reject(error.error || error.error);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[4]);
//# sourceMappingURL=main.bundle.js.map