(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component */ "./src/app/_directives/modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"]; });




/***/ }),

/***/ "./src/app/_directives/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>"
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.service */ "./src/app/_services/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"]; });




/***/ }),

/***/ "./src/app/_services/modal.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/modal.service.ts ***!
  \********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/abotu/abotu.component.css":
/*!*******************************************!*\
  !*** ./src/app/abotu/abotu.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/abotu/abotu.component.html":
/*!********************************************!*\
  !*** ./src/app/abotu/abotu.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!--about end -->\r\n    <section id=\"about\" class=\"about\">\r\n      <div class=\"section-heading text-center\">\r\n        <h2>about me</h2>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"about-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"single-about-txt\">\r\n                <h3>{{about.aboutheading}}\r\n                  <br>\r\n                  <br>\r\n                </h3>\r\n                <p>\r\n                   {{about.aboutdesc}}\r\n                </p>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"single-about-add-info\">\r\n                      <h3>{{about.tittlephone}}</h3>\r\n                      <p>{{about.phone}}</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"single-about-add-info\">\r\n                      <h3>{{about.tittlemail}}</h3>\r\n                      <p>{{about.mail}}</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"single-about-add-info\">\r\n                      <h3>{{about.tittleweb}}</h3>\r\n                      <p>{{about.website}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-offset-1 col-sm-5\">\r\n              <div class=\"single-about-img\">\r\n                <img src=\"{{about.imgsrc}}\" alt=\"profile_image\">\r\n                <div class=\"about-list-icon\">\r\n                  <ul>\r\n                    <li>\r\n                      <a href=\"https://www.behance.net/glaseryanina\" target=\"_blank\">\r\n                        <i  class=\"fa fa-behance\" aria-hidden=\"true\"></i>\r\n                      </a>\r\n                    </li><!-- / li -->\r\n              \r\n                    <li>\r\n                      <a href=\"https://www.linkedin.com/in/yaninaglaser/\" target=\"_blank\">\r\n                        <i  class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                      </a>\r\n                    </li><!-- / li -->\r\n                    <li>\r\n                      <a href=\"https://www.instagram.com/lizarchitecture\" target=\"_blank\">\r\n                        <i  class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\r\n                      </a>\r\n                    </li><!-- / li -->\r\n                    \r\n                    \r\n                  </ul><!-- / ul -->\r\n                </div><!-- /.about-list-icon -->\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section><!--/.about-->"

/***/ }),

/***/ "./src/app/abotu/abotu.component.ts":
/*!******************************************!*\
  !*** ./src/app/abotu/abotu.component.ts ***!
  \******************************************/
/*! exports provided: AbotuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbotuComponent", function() { return AbotuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AbotuComponent = /** @class */ (function () {
    function AbotuComponent() {
        this.about = {
            aboutheading: 'I am a Architect and web designer, front end developer. I am passionate about design and I love doing web design',
            aboutdesc: 'I work from an Architecture studio and I do some jobs by my own',
            tittlephone: 'phone',
            phone: '1538542914',
            tittlemail: 'mail',
            mail: 'lizarq@gmail.com',
            tittleweb: 'website',
            website: 'www.lizarq.com.ar',
            imgsrc: 'assets/images/about/profile_image.jpg',
        };
    }
    AbotuComponent.prototype.ngOnInit = function () {
    };
    AbotuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abotu',
            template: __webpack_require__(/*! ./abotu.component.html */ "./src/app/abotu/abotu.component.html"),
            styles: [__webpack_require__(/*! ./abotu.component.css */ "./src/app/abotu/abotu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AbotuComponent);
    return AbotuComponent;
}());



/***/ }),

/***/ "./src/app/aboutme/aboutme.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutme/aboutme.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutme works!\n</p>\n"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent() {
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    AboutmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(/*! ./aboutme.component.html */ "./src/app/aboutme/aboutme.component.html"),
            styles: [__webpack_require__(/*! ./aboutme.component.css */ "./src/app/aboutme/aboutme.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutmeComponent);
    return AboutmeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _renders_renders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renders/renders.component */ "./src/app/renders/renders.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _reformas_reformas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reformas/reformas.component */ "./src/app/reformas/reformas.component.ts");
/* harmony import */ var _documentacion_documentacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documentacion/documentacion.component */ "./src/app/documentacion/documentacion.component.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _abotu_abotu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./abotu/abotu.component */ "./src/app/abotu/abotu.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/profiles/profiles.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _navbarrouterlink_navbarrouterlink_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbarrouterlink/navbarrouterlink.component */ "./src/app/navbarrouterlink/navbarrouterlink.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _buildings_buildings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./buildings/buildings.component */ "./src/app/buildings/buildings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        children: [
            {
                path: 'Renders',
                component: _renders_renders_component__WEBPACK_IMPORTED_MODULE_3__["RendersComponent"],
                outlet: 'liz'
            },
            {
                path: 'Autocad',
                component: _buildings_buildings_component__WEBPACK_IMPORTED_MODULE_18__["BuildingsComponent"],
                outlet: 'liz'
            },
            {
                path: 'Reformas',
                component: _reformas_reformas_component__WEBPACK_IMPORTED_MODULE_6__["ReformasComponent"],
                outlet: 'liz'
            },
            {
                path: 'Revit',
                component: _documentacion_documentacion_component__WEBPACK_IMPORTED_MODULE_7__["DocumentacionComponent"],
                outlet: 'liz'
            }
        ]
    },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"],
        children: []
    },
    { path: 'NavBarRl', component: _navbarrouterlink_navbarrouterlink_component__WEBPACK_IMPORTED_MODULE_16__["NavbarrouterlinkComponent"] },
    { path: 'Cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__["CvComponent"] },
    { path: 'Welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"] },
    { path: 'Education', component: _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"] },
    { path: 'About', component: _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_8__["AboutmeComponent"] },
    { path: 'Navbar', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"] },
    { path: 'AboutUs', component: _abotu_abotu_component__WEBPACK_IMPORTED_MODULE_11__["AbotuComponent"] },
    { path: 'Contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"] },
    { path: 'Skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"] },
    { path: 'Profiles', component: _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_14__["ProfilesComponent"] },
    { path: 'Experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'liz';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _renders_renders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renders/renders.component */ "./src/app/renders/renders.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _reformas_reformas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reformas/reformas.component */ "./src/app/reformas/reformas.component.ts");
/* harmony import */ var _documentacion_documentacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./documentacion/documentacion.component */ "./src/app/documentacion/documentacion.component.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _abotu_abotu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./abotu/abotu.component */ "./src/app/abotu/abotu.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/profiles/profiles.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form-validation/form-validation.component */ "./src/app/form-validation/form-validation.component.ts");
/* harmony import */ var _navbarrouterlink_navbarrouterlink_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navbarrouterlink/navbarrouterlink.component */ "./src/app/navbarrouterlink/navbarrouterlink.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _buildings_buildings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./buildings/buildings.component */ "./src/app/buildings/buildings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"],
                _renders_renders_component__WEBPACK_IMPORTED_MODULE_7__["RendersComponent"],
                _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CvComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
                _reformas_reformas_component__WEBPACK_IMPORTED_MODULE_10__["ReformasComponent"],
                _documentacion_documentacion_component__WEBPACK_IMPORTED_MODULE_11__["DocumentacionComponent"],
                _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_12__["AboutmeComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"],
                _abotu_abotu_component__WEBPACK_IMPORTED_MODULE_14__["AbotuComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_16__["SkillsComponent"],
                _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_17__["ProfilesComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_18__["ExperienceComponent"],
                _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_21__["FormValidationComponent"],
                _navbarrouterlink_navbarrouterlink_component__WEBPACK_IMPORTED_MODULE_22__["NavbarrouterlinkComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_24__["ModalComponent"],
                _buildings_buildings_component__WEBPACK_IMPORTED_MODULE_27__["BuildingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_image_gallery__WEBPACK_IMPORTED_MODULE_26__["NgxImageGalleryModule"]
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_25__["ModalService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buildings/buildings.component.css":
/*!***************************************************!*\
  !*** ./src/app/buildings/buildings.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    position: fixed;\r\n    right: 10%;\r\n    left: 10%;\r\n    top:10%;\r\n   \r\n    background-color:rgba(0, 0, 0, 0.50);\r\n    \r\n     \r\n\r\n}"

/***/ }),

/***/ "./src/app/buildings/buildings.component.html":
/*!****************************************************!*\
  !*** ./src/app/buildings/buildings.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-image-gallery \n[images]=\"images\" \n[conf]=\"conf\"\n(onOpen)=\"galleryOpened($event)\"\n(onClose)=\"galleryClosed()\"\n(onImageClicked)=\"galleryImageClicked($event)\"\n(onImageChange)=\"galleryImageChanged($event)\"\n(onDelete)=\"deleteImage($event)\"\n></ngx-image-gallery>\n"

/***/ }),

/***/ "./src/app/buildings/buildings.component.ts":
/*!**************************************************!*\
  !*** ./src/app/buildings/buildings.component.ts ***!
  \**************************************************/
/*! exports provided: BuildingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsComponent", function() { return BuildingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuildingsComponent = /** @class */ (function () {
    function BuildingsComponent(router) {
        this.router = router;
        this.showConf = true;
        this.title = 'Demo App';
        // gallery configuration
        this.conf = _config__WEBPACK_IMPORTED_MODULE_2__["DEMO_GALLERY_CONF_INLINE"];
        // gallery images
        this.images = _config__WEBPACK_IMPORTED_MODULE_2__["DEMO_GALLERY_AUTOCAD"];
    }
    BuildingsComponent.prototype.ngOnInit = function () {
    };
    // METHODS
    // open gallery
    BuildingsComponent.prototype.openGallery = function (index) {
        if (index === void 0) { index = 0; }
        // console.log(this.ngxImageGallery);
        // this.ngxImageGallery.open(index);
    };
    // close gallery
    BuildingsComponent.prototype.closeGallery = function () {
        this.ngxImageGallery.close();
    };
    // set new active(visible) image in gallery
    BuildingsComponent.prototype.newImage = function (index) {
        if (index === void 0) { index = 0; }
        // this.ngxImageGallery.setActiveImage(index);
    };
    // next image in gallery
    BuildingsComponent.prototype.nextImage = function () {
        this.ngxImageGallery.next();
    };
    // prev image in gallery
    BuildingsComponent.prototype.prevImage = function () {
        this.ngxImageGallery.prev();
    };
    /**************************************************/
    // EVENTS
    // callback on gallery opened
    BuildingsComponent.prototype.galleryOpened = function (index) {
        console.info('Gallery opened at index ', index);
    };
    // callback on gallery closed
    BuildingsComponent.prototype.galleryClosed = function () {
        console.info('Gallery closed.');
        this.cancelForm();
    };
    // callback on gallery image clicked
    BuildingsComponent.prototype.galleryImageClicked = function (index) {
        console.info('Gallery image clicked with index ', index);
        // this.ngxImageGallery.open(index);
    };
    // callback on gallery image changed
    BuildingsComponent.prototype.galleryImageChanged = function (index) {
        console.info('Gallery image changed to index ', index);
    };
    // callback on user clicked delete button
    BuildingsComponent.prototype.deleteImage = function (index) {
        console.info('Delete image at index ', index);
    };
    BuildingsComponent.prototype.cancelForm = function () {
        this.router.navigate(['../Home']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ngxImageGallery'),
        __metadata("design:type", ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxImageGalleryComponent"])
    ], BuildingsComponent.prototype, "ngxImageGallery", void 0);
    BuildingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buildings',
            template: __webpack_require__(/*! ./buildings.component.html */ "./src/app/buildings/buildings.component.html"),
            styles: [__webpack_require__(/*! ./buildings.component.css */ "./src/app/buildings/buildings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BuildingsComponent);
    return BuildingsComponent;
}());



/***/ }),

/***/ "./src/app/config/index.ts":
/*!*********************************!*\
  !*** ./src/app/config/index.ts ***!
  \*********************************/
/*! exports provided: DEMO_GALLERY_CONF_INLINE, DEMO_GALLERY_CONF, DEMO_GALLERY_REFORMAS, DEMO_GALLERY_RENDERS, DEMO_GALLERY_AUTOCAD, DEMO_GALLERY_REVIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMO_GALLERY_CONF_INLINE", function() { return DEMO_GALLERY_CONF_INLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMO_GALLERY_CONF", function() { return DEMO_GALLERY_CONF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMO_GALLERY_REFORMAS", function() { return DEMO_GALLERY_REFORMAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMO_GALLERY_RENDERS", function() { return DEMO_GALLERY_RENDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMO_GALLERY_AUTOCAD", function() { return DEMO_GALLERY_AUTOCAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMO_GALLERY_REVIT", function() { return DEMO_GALLERY_REVIT; });
// gallery configuration
var DEMO_GALLERY_CONF_INLINE = {
    imageOffset: '0',
    imagePointer: true,
    showDeleteControl: false,
    showCloseControl: true,
    showExtUrlControl: false,
    closeOnEsc: true,
    showImageTitle: false,
    inline: true,
    backdropColor: 'default',
    imageBorderRadius: '0px',
};
var DEMO_GALLERY_CONF = {
    imageOffset: '0',
    showDeleteControl: false,
    showCloseControl: true,
    showImageTitle: false,
    inline: false,
    backdropColor: 'white',
};
// gallery images
var DEMO_GALLERY_REFORMAS = [
    {
        url: "assets/images/Reformas/ReformaJuanita.jpg",
        altText: 'woman-in-black-blazer-holding-blue-cup',
        title: 'woman-in-black-blazer-holding-blue-cup',
        thumbnailUrl: "assets/images/Reformas/ReformaJuanita.jpg"
    },
    {
        url: "assets/images/Reformas/ReformaJuanita2.jpg",
        altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/Reformas/ReformaJuanita2.jpg"
    },
];
var DEMO_GALLERY_RENDERS = [
    {
        url: "assets/images/Renders/HSBC.jpg",
        altText: 'woman-in-black-blazer-holding-blue-cup',
        title: 'woman-in-black-blazer-holding-blue-cup',
        thumbnailUrl: "assets/images/Renders/HSBC.jpg"
    },
    {
        url: "assets/images/Renders/Arevalo1950.jpg",
        altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/Renders/Arevalo1950.jpg"
    },
    {
        url: "assets/images/Renders/EntregaA3.jpg",
        altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/Renders/EntregaA3.jpg"
    },
    {
        url: "assets/images/Renders/SoldadoIndependencia1.jpg",
        altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/Renders/SoldadoIndependencia1.jpg"
    },
];
var DEMO_GALLERY_AUTOCAD = [
    {
        url: "assets/images/Documentos/Vista.png",
        altText: 'proyecto parque patricios',
        title: 'proyecto parque patricios',
        thumbnailUrl: "assets/images/autocad/Vista.png"
    },
    {
        url: "assets/images/Documentos/Pb.png",
        altText: 'proyecto parque patricios',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/autocad/Pb.png"
    },
];
var DEMO_GALLERY_REVIT = [
    {
        url: "assets/images/Revit/ParquePatricios2.png",
        altText: 'proyecto parque patricios',
        title: 'proyecto parque patricios',
        thumbnailUrl: "assets/images/Revit/ParquePatricios2.png"
    },
    {
        url: "assets/images/Revit/ParquePatricios3.png",
        altText: 'proyecto parque patricios',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/Revit/ParquePatricios3.png"
    },
    {
        url: "assets/images/Revit/ParquePatriciso.png",
        altText: 'proyecto parque patricios',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/Revit/ParquePatriciso.png"
    },
    {
        url: "assets/images/Revit/Revit4.png",
        altText: 'proyecto parque patricios',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/Revit/Revit4.png"
    },
    {
        url: "assets/images/Revit/Revit1.png",
        altText: 'proyecto parque patricios',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/Revit/Revit1.png"
    },
    {
        url: "assets/images/Revit/fitzroy1.png",
        altText: 'proyecto oficinas',
        extUrl: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/animals-lizard-redheadedagamapair.jpg',
        thumbnailUrl: "assets/images/Revit/fitzroy1.png"
    },
];


/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!--contact start -->\n  <section id=\"contact\" class=\"contact\">\n    <div class=\"section-heading text-center\">\n      <h2>contact me</h2>\n    </div>\n    <div class=\"container\">\n      <div class=\"contact-content\">\n        <div class=\"row\">\n          <div class=\"col-md-offset-1 col-md-5 col-sm-6\">\n            <div class=\"single-contact-box\">\n              <div class=\"contact-form\">\n                  <div class=\"container mt-5\">\n                     \n                    \n                    </div>\n                 <form (ngSubmit)=\"contactForm(form.value)\" #form=\"ngForm\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 col-xs-12\">\n                      <div class=\"form-group\">\n                        <input required ngModel type=\"text\" #name=\"ngModel\" (change)=\"log(name)\" class=\"form-control\" id=\"name\" placeholder=\"Name\" name=\"name\">\n                        <div class=\"alert\" *ngIf=\"!name.valid && name.touched\">First name is required</div>\n                      </div><!--/.form-group-->\n                    </div><!--/.col-->\n                    <div class=\"col-sm-6 col-xs-12\">\n                      <div class=\"form-group\">\n                        <input required ngModel #email=\"ngModel\" (change)=\"log(email)\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email*\" name=\"email\">\n                        <div class=\"alert\" *ngIf=\"!email.valid && email.touched\">Email is required</div>\n                      </div><!--/.form-group-->\n                    </div><!--/.col-->\n                  </div><!--/.row-->\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"form-group\">\n                        <input required ngModel #subject=\"ngModel\" (change)=\"log(subject)\" type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\n                        <div class=\"alert\" *ngIf=\"!subject.valid && subject.touched\">Subject is required</div>\n                      </div><!--/.form-group-->\n                    </div><!--/.col-->\n                  </div><!--/.row-->\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"form-group\">\n                        <textarea required ngModel #Message=\"ngModel\" (change)=\"log(Message)\" class=\"form-control\" rows=\"8\" id=\"comment\" placeholder=\"Message\" name=\"Message\" ></textarea>\n                        <div class=\"alert\" *ngIf=\"!Message.valid && Message.touched\">Message is required</div>\n                      </div><!--/.form-group-->\n                    </div><!--/.col-->\n                  </div><!--/.row-->\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"single-contact-btn\">\n                          <button type=\"submit\" >Enviar</button>\n                      </div><!--/.single-single-contact-btn-->\n                    </div><!--/.col-->\n                  </div><!--/.row-->\n                </form><!--/form-->\n              </div><!--/.contact-form-->\n            </div><!--/.single-contact-box-->\n          </div><!--/.col-->\n          <div class=\"col-md-offset-1 col-md-5 col-sm-6\">\n            <div class=\"single-contact-box\">\n              <div class=\"contact-adress\">\n                <div class=\"contact-add-head\">\n                  <h3>{{datosContacto.Marca}}</h3>\n                  <p>{{datosContacto.Profesion}}</p>\n                </div>\n                <div class=\"contact-add-info\">\n                  <div class=\"single-contact-add-info\">\n                    <h3>phone</h3>\n                    <p>{{datosContacto.Tel}}</p>\n                  </div>\n                  <div class=\"single-contact-add-info\">\n                    <h3>email</h3>\n                    <p>{{datosContacto.Mail}}</p>\n                  </div>\n                  <div class=\"single-contact-add-info\">\n                    <h3>website</h3>\n                    <p>{{datosContacto.site}}</p>\n                  </div>\n                </div>\n              </div><!--/.contact-adress-->\n              <div class=\"hm-foot-icon\">\n                <ul>\n                 \n                  \n                  <li><a href=\"https://www.behance.net/glaseryanina\" target=\"_blank\"><i class=\"fa fa-behance\"></i></a></li><!--/li-->\n                  <li><a href=\"https://www.linkedin.com/in/yaninaglaser\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li><!--/li-->\n                  <li><a href=\"https://www.instagram.com/lizarchitecture\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a></li><!--/li-->\n                </ul><!--/ul-->\n              </div><!--/.hm-foot-icon-->\n            </div><!--/.single-contact-box-->\n          </div><!--/.col-->\n        </div><!--/.row-->\n      </div><!--/.contact-content-->\n    </div><!--/.container-->\n\n  </section><!--/.contact-->\n  <!--contact end -->"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.datosContacto = {
            Marca: "LizArq",
            Profesion: "Arquitecta",
            Tel: "1538542914",
            Mail: "lizarq@gmail.com",
            site: "lizarq@gmail.com",
            Linkedinurl: "https://www.linkedin.com/in/yaninaglaser",
            Instagramurl: "https://www.instagram.com/lizarchitecture",
            Behanceurl: "https://www.behance.net/glaseryanina"
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.log = function (x) {
        console.log(x);
    };
    ContactComponent.prototype.click = function () {
        sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Gracias por contactarse con nosotros", "En instantes enviaremos un mensaje respondiendo su consulta", 'success');
    };
    ContactComponent.prototype.contactForm = function (Formulario) {
        sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/cv/cv.component.css":
/*!*************************************!*\
  !*** ./src/app/cv/cv.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cv/cv.component.html":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cv works!\n</p>\n"

/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CvComponent = /** @class */ (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(/*! ./cv.component.html */ "./src/app/cv/cv.component.html"),
            styles: [__webpack_require__(/*! ./cv.component.css */ "./src/app/cv/cv.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CvComponent);
    return CvComponent;
}());



/***/ }),

/***/ "./src/app/documentacion/documentacion.component.css":
/*!***********************************************************!*\
  !*** ./src/app/documentacion/documentacion.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    position: fixed;\r\n    right: 10%;\r\n    left: 10%;\r\n    top:20%;\r\n    \r\n    background-color:rgba(0, 0, 0, 0.50);\r\n    \r\n     \r\n\r\n}\r\n:host .img{\r\n   position: center;\r\n   margin-top: 50px; \r\n}"

/***/ }),

/***/ "./src/app/documentacion/documentacion.component.html":
/*!************************************************************!*\
  !*** ./src/app/documentacion/documentacion.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ngx-image-gallery \r\n[images]=\"images\" \r\n[conf]=\"conf\"\r\n(onOpen)=\"galleryOpened($event)\"\r\n(onClose)=\"galleryClosed()\"\r\n(onImageClicked)=\"galleryImageClicked($event)\"\r\n(onImageChange)=\"galleryImageChanged($event)\"\r\n(onDelete)=\"deleteImage($event)\"\r\n></ngx-image-gallery>"

/***/ }),

/***/ "./src/app/documentacion/documentacion.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/documentacion/documentacion.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionComponent", function() { return DocumentacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentacionComponent = /** @class */ (function () {
    function DocumentacionComponent(router) {
        this.router = router;
        this.showConf = true;
        this.title = 'Demo App';
        // gallery configuration
        this.conf = _config__WEBPACK_IMPORTED_MODULE_2__["DEMO_GALLERY_CONF_INLINE"];
        // gallery images
        this.images = _config__WEBPACK_IMPORTED_MODULE_2__["DEMO_GALLERY_REVIT"];
    }
    DocumentacionComponent.prototype.ngOnInit = function () {
    };
    // METHODS
    // open gallery
    DocumentacionComponent.prototype.openGallery = function (index) {
        if (index === void 0) { index = 0; }
        // console.log(this.ngxImageGallery);
        // this.ngxImageGallery.open(index);
    };
    // close gallery
    DocumentacionComponent.prototype.closeGallery = function () {
        this.ngxImageGallery.close();
    };
    // set new active(visible) image in gallery
    DocumentacionComponent.prototype.newImage = function (index) {
        if (index === void 0) { index = 0; }
        // this.ngxImageGallery.setActiveImage(index);
    };
    // next image in gallery
    DocumentacionComponent.prototype.nextImage = function () {
        this.ngxImageGallery.next();
    };
    // prev image in gallery
    DocumentacionComponent.prototype.prevImage = function () {
        this.ngxImageGallery.prev();
    };
    /**************************************************/
    // EVENTS
    // callback on gallery opened
    DocumentacionComponent.prototype.galleryOpened = function (index) {
        console.info('Gallery opened at index ', index);
    };
    // callback on gallery closed
    DocumentacionComponent.prototype.galleryClosed = function () {
        console.info('Gallery closed.');
        this.cancelForm();
    };
    // callback on gallery image clicked
    DocumentacionComponent.prototype.galleryImageClicked = function (index) {
        console.info('Gallery image clicked with index ', index);
        // this.ngxImageGallery.open(index);
    };
    // callback on gallery image changed
    DocumentacionComponent.prototype.galleryImageChanged = function (index) {
        console.info('Gallery image changed to index ', index);
    };
    // callback on user clicked delete button
    DocumentacionComponent.prototype.deleteImage = function (index) {
        console.info('Delete image at index ', index);
    };
    DocumentacionComponent.prototype.cancelForm = function () {
        this.router.navigate(['../Home']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ngxImageGallery'),
        __metadata("design:type", ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxImageGalleryComponent"])
    ], DocumentacionComponent.prototype, "ngxImageGallery", void 0);
    DocumentacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentacion',
            template: __webpack_require__(/*! ./documentacion.component.html */ "./src/app/documentacion/documentacion.component.html"),
            styles: [__webpack_require__(/*! ./documentacion.component.css */ "./src/app/documentacion/documentacion.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DocumentacionComponent);
    return DocumentacionComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!--education start -->\n\n<section id=\"education\" class=\"education\">\n    \n  <div class=\"section-heading text-center\">\n      <h2>education</h2>\n  </div>\n  <div class=\"container\">\n      <div class=\"education-horizontal-timeline\">\n          <div class=\"row\">\n              <div *ngFor=\"let edu of educacion.item\"class=\"col-sm-4\">\n                  <div class=\"single-horizontal-timeline\">\n                      <div class=\"experience-time\">\n                          <h2>{{edu.anio}}</h2>\n                          <h3>{{edu.titulo1}}</h3>\n                      </div><!--/.experience-time-->\n                      <div class=\"timeline-horizontal-border\">\n                          <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                          <span class=\"single-timeline-horizontal\"></span>\n                      </div>\n                      <div class=\"timeline\">\n                          <div class=\"timeline-content\">\n                              <h4 class=\"title\">\n                                  {{edu.lugarEst}}\n                              </h4>\n                              <h5>{{edu.ciudad}}</h5>\n                              <p class=\"description\">\n                                  {{edu.descripcion}}\n                              </p>\n                          </div><!--/.timeline-content-->\n                      </div><!--/.timeline-->\n                  </div>\n              </div>                \n          </div>\n      </div>\n  </div>\n\n</section><!--/.education-->\n<!--education end -->"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.educacion = {
            item: [
                { anio: '2016',
                    titulo1: 'PostGrade in BIM tecnologyes',
                    lugarEst: 'Universidad de Buenos Aires',
                    ciudad: 'Buenos Aires, Argentina',
                    descripcion: 'Learning about the importance of collaborating with project stakeholders in addition to the benefits and issues inherent in BIM and its implementation.'
                },
                { anio: '2015-2008',
                    titulo1: 'Architect',
                    lugarEst: 'Universidad de Buenos Aires',
                    ciudad: 'Buenos Aires, Argentina',
                    descripcion: 'Architecture Major. Includes instruction in architectural design, history, and theory; building structures and environmental systems; project and site planning; construction; professional responsibilities and standards; and related cultural, social, economic, and environmental issues.'
                },
                { anio: '2008-2003',
                    titulo1: 'Architect',
                    lugarEst: 'Ort Argentina',
                    ciudad: 'Buenos Aires, Argentina',
                    descripcion: 'Architecture Major. Includes instruction in architectural design, history, and theory; building structures and environmental systems; project and site planning; construction; professional responsibilities and standards; and related cultural, social, economic, and environmental issues.'
                }
            ]
        };
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <!--experience start -->\n <section id=\"experience\" class=\"experience\">\n  <div class=\"section-heading text-center\">\n    <h2>experience</h2>\n  </div>\n  <div class=\"container\">\n    <div class=\"experience-content\">\n        <div class=\"main-timeline\">\n          <ul *ngFor=\"let job of experiencia.item\">\n            <li>\n              <div class=\"single-timeline-box fix\">\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <div class=\"experience-time text-right\">\n                      <h2>{{job.anio}} </h2>\n                      <h3> {{job.titulo1}} </h3>\n                    </div><!--/.experience-time-->\n                  </div><!--/.col-->\n                  <div class=\"col-md-offset-1 col-md-5\">\n                    <div class=\"timeline\">\n                      <div class=\"timeline-content\">\n                        <h4 class=\"title\">\n                          <span><i class=\"fa fa-circle\" aria-hidden=\"true\"></i></span>\n                          {{job.LugarTrabajo}}\n                        </h4>\n                        <h5>{{job.ciudad}}</h5>\n                        <p class=\"description\">\n                          {{job.descripcion}}\n                        </p>\n                      </div><!--/.timeline-content-->\n                    </div><!--/.timeline-->\n                  </div><!--/.col-->\n                </div>\n              </div><!--/.single-timeline-box-->\n            </li>\n            <li>\n              <div class=\"single-timeline-box fix\">\n                <div class=\"row\">\n                  <div class=\"col-md-offset-1 col-md-5 experience-time-responsive\">\n                    <div class=\"experience-time\">\n                      <h2>\n                        <span><i class=\"fa fa-circle\" aria-hidden=\"true\"></i></span>\n                        {{job.anio1}}\n                      </h2>\n                      <h3>{{job.titulo2}}</h3>\n                    </div><!--/.experience-time-->\n                  </div><!--/.col-->\n                  <div class=\"col-md-5\">\n                    <div class=\"timeline\">\n                      <div class=\"timeline-content text-right\">\n                        <h4 class=\"title\">\n                          {{job.LugarTrabajo1}}\n                        </h4>\n                        <h5>{{job.ciudad1}}</h5>\n                        <p class=\"description\">\n                          {{job.descripcion1}}\n                        </p>\n                      </div><!--/.timeline-content-->\n                    </div><!--/.timeline-->\n                  </div><!--/.col-->\n                  <div class=\"col-md-offset-1 col-md-5 experience-time-main\">\n                    <div class=\"experience-time\">\n                      <h2>\n                        <span><i class=\"fa fa-circle\" aria-hidden=\"true\"></i></span>\n                        {{job.anio1}}\n                      </h2>\n                      <h3>{{job.titulo2}}\n                        \n                      </h3>\n                    </div><!--/.experience-time-->\n                  </div><!--/.col-->\n                </div>\n              </div><!--/.single-timeline-box-->\n            </li>         \n\n          </ul>\n        </div><!--.main-timeline-->\n      </div><!--.experience-content-->\n  </div>\n\n</section><!--/.experience-->"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.experiencia = {
            item: [
                { anio: 'Mar 2016 - Present',
                    titulo1: 'Architect',
                    LugarTrabajo: 'Estudio Janin',
                    ciudad: 'Buenos Aires, Argentina',
                    descripcion: 'Feasibility study of parcel and creation of preliminary schemes, generating documentation in order to build and present to Local Authorities. Computing materials in Revit for brickwork in order to achieve Measures and Quantity Takeoffs (QTO) in Block for Flat Buildings. ' +
                        'Also included, creation of detail plans for bathrooms, doors, windows, kitchens and coordination of external consultants.',
                    anio1: 'August 2015- November 2015',
                    titulo2: 'Jr Architect',
                    LugarTrabajo1: 'Mc Arquitectura',
                    ciudad1: 'Buenos Aires, Argentina',
                    descripcion1: 'Drawing architecture plans (sections, views and plans) . Analysis for structural proposals. Remodeling and Interior Design Renders .'
                },
                {
                    anio: 'September  2015- December 2014',
                    titulo1: 'Jr Architect',
                    LugarTrabajo: 'Estudio Crudo Design',
                    ciudad: 'Buenos Aires, Argentina',
                    descripcion: 'Drawing architecture plans (section,views and plans). Creating Measures and Quantity Takeoffs (QTO), buying materials. Certifying works, Prepare contracts and Contact with the client. ',
                    anio1: 'August 2014 - March 2014',
                    titulo2: ' Jr Architect',
                    LugarTrabajo1: 'Gerardo Diaz y Asociados ',
                    ciudad1: 'Buenos Aires, Argentina',
                    descripcion1: 'Generating hyperrealist interiors, exteriors, daylight and night images in 3dMax '
                },
                { anio: 'March 2014 - November 2013',
                    titulo1: 'Freelance Sketcher',
                    LugarTrabajo: 'Constructora EMAVE',
                    ciudad: 'Buenos Aires, Argentina',
                    descripcion: 'Drawing architecture plans  (detail, section,views and plans).' +
                        'Generating the interior views of bathrooms and kitchens. Creating lists of project materials, such as doors and windows. As an additional the measure and QTO curve was developed'
                },
            ]
        };
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/form-validation/form-validation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/form-validation/form-validation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-validation/form-validation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/form-validation/form-validation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form-validation works!\n</p>\n"

/***/ }),

/***/ "./src/app/form-validation/form-validation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/form-validation/form-validation.component.ts ***!
  \**************************************************************/
/*! exports provided: FormValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationComponent", function() { return FormValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormValidationComponent = /** @class */ (function () {
    function FormValidationComponent() {
        this.model = {};
    }
    FormValidationComponent.prototype.ngOnInit = function () {
    };
    FormValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-validation',
            template: __webpack_require__(/*! ./form-validation.component.html */ "./src/app/form-validation/form-validation.component.html"),
            styles: [__webpack_require__(/*! ./form-validation.component.css */ "./src/app/form-validation/form-validation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormValidationComponent);
    return FormValidationComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<app-welcome></app-welcome>\r\n<app-abotu></app-abotu> \r\n<app-education></app-education>\r\n<app-skills></app-skills>\r\n<app-experience></app-experience>\r\n<app-profiles></app-profiles>\r\n<app-portfolio></app-portfolio>\r\n<app-contact></app-contact>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header class=\"top-area\">\n        <div class=\"header-area\">\n          <!-- Start Navigation -->\n            <nav class=\"navbar navbar-default bootsnav navbar-fixed dark no-background\">\n    \n                <div class=\"container\">\n    \n                    <!-- Start Header Navigation -->\n                    <div class=\"navbar-header\">\n                        \n                        <a class=\"navbar-brand\" href=\"index.html\">LizArq</a>\n                    </div><!--/.navbar-header-->\n                    <!-- End Header Navigation -->\n    \n                    <!-- Collect the nav links, forms, and other content for toggling -->\n                    <div class=\"collapse navbar-collapse menu-ui-design\" id=\"navbar-menu\">\n                        <ul class=\"nav navbar-nav navbar-right\" data-in=\"fadeInDown\" data-out=\"fadeOutUp\">\n                        <li class=\"smooth-menu active\"></li>\n                        <li class=\"smooth-menu\"><a href=\"#education\">education</a></li>\n                        <li class=\"smooth-menu\"><a href=\"#skills\">skills</a></li>\n                        <li class=\"smooth-menu\"><a href=\"#experience\">experience</a></li>\n                        <li class=\"smooth-menu\"><a href=\"#profiles\">profile</a></li>\n                        <li class=\"smooth-menu\"><a href=\"#portfolio\">portfolio</a></li>\n                        \n                        <li class=\"smooth-menu\"><a href=\"#contact\">contact</a></li>\n                        </ul><!--/.nav -->\n                    </div><!-- /.navbar-collapse -->\n                </div><!--/.container-->\n            </nav><!--/nav-->\n            <!-- End Navigation -->\n        </div><!--/.header-area-->\n    \n          <div class=\"clearfix\"></div>\n    \n      </header><!-- /.top-area-->\n      <!-- top-area End -->\n<!-- top-area End -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbarrouterlink/navbarrouterlink.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/navbarrouterlink/navbarrouterlink.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbarrouterlink/navbarrouterlink.component.html":
/*!******************************************************************!*\
  !*** ./src/app/navbarrouterlink/navbarrouterlink.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header class=\"top-area\">\n  <div class=\"header-area\">\n    <!-- Start Navigation -->\n      <nav class=\"navbar navbar-default bootsnav navbar-fixed dark no-background\">\n\n          <div class=\"container\">\n\n              <!-- Start Header Navigation -->\n              <div class=\"navbar-header\">\n                  \n                  <a class=\"navbar-brand\" href=\"index.html\">LizArq</a>\n              </div><!--/.navbar-header-->\n              <!-- End Header Navigation -->\n\n              <!-- Collect the nav links, forms, and other content for toggling -->\n              <div class=\"collapse navbar-collapse menu-ui-design\" id=\"navbar-menu\">\n                  <ul class=\"nav navbar-nav navbar-right\" data-in=\"fadeInDown\" data-out=\"fadeOutUp\">\n                  <li class=\" smooth-menu active\"></li>\n                  <li class=\" smooth-menu\"><a routerLink=\"/Home\">Go Back</a></li>         \n                \n                  \n                  </ul><!--/.nav -->\n              </div><!-- /.navbar-collapse -->\n          </div><!--/.container-->\n      </nav><!--/nav-->\n      <!-- End Navigation -->\n  </div><!--/.header-area-->\n\n    <div class=\"clearfix\"></div>\n\n</header><!-- /.top-area-->\n<!-- top-area End -->\n<!-- top-area End -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/navbarrouterlink/navbarrouterlink.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/navbarrouterlink/navbarrouterlink.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarrouterlinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarrouterlinkComponent", function() { return NavbarrouterlinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarrouterlinkComponent = /** @class */ (function () {
    function NavbarrouterlinkComponent() {
    }
    NavbarrouterlinkComponent.prototype.ngOnInit = function () {
    };
    NavbarrouterlinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbarrouterlink',
            template: __webpack_require__(/*! ./navbarrouterlink.component.html */ "./src/app/navbarrouterlink/navbarrouterlink.component.html"),
            styles: [__webpack_require__(/*! ./navbarrouterlink.component.css */ "./src/app/navbarrouterlink/navbarrouterlink.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarrouterlinkComponent);
    return NavbarrouterlinkComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"portfolio\" class=\"portfolio\">\r\n  <div class=\"portfolio-details\">\r\n    <div class=\"section-heading text-center\">\r\n      <h2>portfolio</h2>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"portfolio-content\">\r\n        <div class=\"isotope\">\r\n          <div class=\"row\">\r\n            <div  class=\"liz\">\t\r\n            <div  class=\"col-sm-6\">\r\n              <div *ngFor=\"let liz of Portfolio.item\" class=\"item\">\r\n                <img src=\"{{liz.imgsrc}}\" alt=\"portfolio image\"/>\r\n                <div class=\"isotope-overlay\">\r\n                  <a [routerLink]=\"['../Home',{outlets:{liz:liz.route}}]\" >\r\n                    {{liz.title}}\r\n                  </a>\r\n                </div><!-- /.isotope-overlay -->\r\n              </div><!-- /.item -->\r\n              \r\n            </div><!-- /.col -->\r\n            <div  class=\"col-sm-6\">\r\n                <div *ngFor=\"let liz2 of Portfolio.item2\" class=\"item\">\r\n                  \r\n                  <img src=\"{{liz2.imgsrc}}\" alt=\"portfolio image\"/>\r\n                  <div class=\"isotope-overlay\">\r\n                    <a [routerLink]=\"['../Home',{outlets:{liz:liz2.route}}]\">\r\n                      {{liz2.title}}\r\n                    </a>\r\n                  </div><!-- /.isotope-overlay -->\r\n                </div><!-- /.item -->\r\n                \r\n              </div><!-- /.col -->\r\n            \r\n          </div>\r\n          </div><!-- /.row -->\r\n        </div><!--/.isotope-->\r\n      </div><!--/.gallery-content-->\r\n    </div><!--/.container-->\r\n  </div><!--/.portfolio-details-->\r\n  \r\n</section><!--/.portfolio-->\r\n<router-outlet name=\"liz\"></router-outlet>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.Portfolio = {
            item: [
                {
                    imgsrc: "assets/images/portfolio/p1.jpg",
                    imgalt: 'portfolio image',
                    ref: '#',
                    title: 'Renders',
                    route: 'Renders'
                },
                {
                    imgsrc: 'assets/images/portfolio/Autocad.jpg',
                    imgalt: "portfolio image",
                    ref: "#",
                    title: "Autocad",
                    route: 'Autocad'
                },
            ],
            item2: [
                {
                    imgsrc: 'assets/images/portfolio/p4.jpg',
                    imgalt: 'portfolio image',
                    ref: "#",
                    title: "refactions",
                    route: 'Reformas'
                },
                {
                    imgsrc: "assets/images/portfolio/Revit.jpg",
                    imgalt: "portfolio image",
                    ref: "#",
                    title: "Revit",
                    route: 'Revit'
                }
            ]
        };
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/profiles/profiles.component.css":
/*!*************************************************!*\
  !*** ./src/app/profiles/profiles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profiles/profiles.component.html":
/*!**************************************************!*\
  !*** ./src/app/profiles/profiles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--profiles start -->\n<section id=\"profiles\" class=\"profiles\">\n    <div class=\"profiles-details\">\n      <div class=\"section-heading text-center\">\n        <h2>profiles</h2>\n      </div>\n      <div class=\"container\">\n        <div class=\"profiles-content\">\n          <div class=\"row\">\n            <div *ngFor=\"let bacalaza of Redes.Social\" class=\"col-sm-6\">\n              <div class=\"single-profile\">\n                <div class=\"profile-txt\">\n                  <a href={{bacalaza.url}}  target=\"_blank\"><i class=\"{{bacalaza.iclass}}\"></i></a>\n                  <div class=\"profile-icon-name\">{{bacalaza.name}}</div>\n                </div>\n                <div class=\"single-profile-overlay\">\n                  <div class=\"profile-txt\">\n                    <a href={{bacalaza.url}}  target=\"_blank\"><i class=\"{{bacalaza.iclass}}\"></i></a>\n                    <div class=\"profile-icon-name\">{{bacalaza.name}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          \n          </div>\n          <div class=\"profile-border\"></div>\n          <div class=\"row\">\n           \n              <div *ngFor=\"let bacalaza1 of Redes.Social1\" class=\"col-sm-6\">\n                <div class=\"single-profile\">\n                  <div class=\"profile-txt\">\n                    <a href={{bacalaza1.url}}  target=\"_blank\"><i class=\"{{bacalaza1.iclass}}\"></i></a>\n                    <div class=\"profile-icon-name\">{{bacalaza1.name}}</div>\n                  </div>\n                  <div class=\"single-profile-overlay\">\n                    <div class=\"profile-txt\">\n                      <a href={{bacalaza1.url}}  target=\"_blank\"><i class=\"{{bacalaza1.iclass}}\"></i></a>\n                      <div class=\"profile-icon-name\">{{bacalaza1.name}}</div>\n                    </div>\n                  </div>\n                </div>\n              \n           </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    </section><!--/.profiles-->\n    <!--profiles end -->"

/***/ }),

/***/ "./src/app/profiles/profiles.component.ts":
/*!************************************************!*\
  !*** ./src/app/profiles/profiles.component.ts ***!
  \************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilesComponent = /** @class */ (function () {
    function ProfilesComponent() {
        this.Redes = {
            Social: [
                {
                    url: "https://github.com/lizarq",
                    iclass: "flaticon-github-logo",
                    name: "GitHub"
                },
                {
                    url: "https://www.behance.net/glaseryanina",
                    iclass: "flaticon-behance-logo",
                    name: "behance"
                }
            ],
            Social1: [
                {
                    url: "https://www.linkedin.com/in/yaninaglaser",
                    iclass: "fa fa-linkedin",
                    name: "Linkedin"
                },
                {
                    url: "https://www.instagram.com/lizarchitecture",
                    iclass: "fa fa-instagram",
                    name: "Instagram"
                }
            ],
        };
    }
    ProfilesComponent.prototype.ngOnInit = function () {
    };
    ProfilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profiles',
            template: __webpack_require__(/*! ./profiles.component.html */ "./src/app/profiles/profiles.component.html"),
            styles: [__webpack_require__(/*! ./profiles.component.css */ "./src/app/profiles/profiles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilesComponent);
    return ProfilesComponent;
}());



/***/ }),

/***/ "./src/app/reformas/reformas.component.css":
/*!*************************************************!*\
  !*** ./src/app/reformas/reformas.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    position: fixed;\r\n    right: 10%;\r\n    left: 10%;\r\n    top:25%;\r\n   \r\n    background-color:rgba(0, 0, 0, 0.50);\r\n    \r\n     \r\n\r\n}"

/***/ }),

/***/ "./src/app/reformas/reformas.component.html":
/*!**************************************************!*\
  !*** ./src/app/reformas/reformas.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-image-gallery \r\n[images]=\"images\" \r\n[conf]=\"conf\"\r\n(onOpen)=\"galleryOpened($event)\"\r\n(onClose)=\"galleryClosed()\"\r\n(onImageClicked)=\"galleryImageClicked($event)\"\r\n(onImageChange)=\"galleryImageChanged($event)\"\r\n(onDelete)=\"deleteImage($event)\"\r\n></ngx-image-gallery>"

/***/ }),

/***/ "./src/app/reformas/reformas.component.ts":
/*!************************************************!*\
  !*** ./src/app/reformas/reformas.component.ts ***!
  \************************************************/
/*! exports provided: ReformasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReformasComponent", function() { return ReformasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReformasComponent = /** @class */ (function () {
    function ReformasComponent(router) {
        this.router = router;
        this.showConf = true;
        this.title = 'Demo App';
        // gallery configuration
        this.conf = _config__WEBPACK_IMPORTED_MODULE_2__["DEMO_GALLERY_CONF_INLINE"];
        // gallery images
        this.images = _config__WEBPACK_IMPORTED_MODULE_2__["DEMO_GALLERY_REFORMAS"];
    }
    ReformasComponent.prototype.ngOnInit = function () {
    };
    // METHODS
    // open gallery
    ReformasComponent.prototype.openGallery = function (index) {
        if (index === void 0) { index = 0; }
        // console.log(this.ngxImageGallery);
        // this.ngxImageGallery.open(index);
    };
    // close gallery
    ReformasComponent.prototype.closeGallery = function () {
        this.ngxImageGallery.close();
    };
    // set new active(visible) image in gallery
    ReformasComponent.prototype.newImage = function (index) {
        if (index === void 0) { index = 0; }
        // this.ngxImageGallery.setActiveImage(index);
    };
    // next image in gallery
    ReformasComponent.prototype.nextImage = function () {
        this.ngxImageGallery.next();
    };
    // prev image in gallery
    ReformasComponent.prototype.prevImage = function () {
        this.ngxImageGallery.prev();
    };
    /**************************************************/
    // EVENTS
    // callback on gallery opened
    ReformasComponent.prototype.galleryOpened = function (index) {
        console.info('Gallery opened at index ', index);
    };
    // callback on gallery closed
    ReformasComponent.prototype.galleryClosed = function () {
        console.info('Gallery closed.');
        this.cancelForm();
    };
    // callback on gallery image clicked
    ReformasComponent.prototype.galleryImageClicked = function (index) {
        console.info('Gallery image clicked with index ', index);
        // this.ngxImageGallery.open(index);
    };
    // callback on gallery image changed
    ReformasComponent.prototype.galleryImageChanged = function (index) {
        console.info('Gallery image changed to index ', index);
    };
    // callback on user clicked delete button
    ReformasComponent.prototype.deleteImage = function (index) {
        console.info('Delete image at index ', index);
    };
    ReformasComponent.prototype.cancelForm = function () {
        this.router.navigate(['../Home']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ngxImageGallery'),
        __metadata("design:type", ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxImageGalleryComponent"])
    ], ReformasComponent.prototype, "ngxImageGallery", void 0);
    ReformasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reformas',
            template: __webpack_require__(/*! ./reformas.component.html */ "./src/app/reformas/reformas.component.html"),
            styles: [__webpack_require__(/*! ./reformas.component.css */ "./src/app/reformas/reformas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReformasComponent);
    return ReformasComponent;
}());



/***/ }),

/***/ "./src/app/renders/renders.component.css":
/*!***********************************************!*\
  !*** ./src/app/renders/renders.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    position: fixed;\r\n    right: 10%;\r\n    left: 10%;\r\n    top:25%;\r\n   \r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    \r\n     \r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/renders/renders.component.html":
/*!************************************************!*\
  !*** ./src/app/renders/renders.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-image-gallery \r\n[images]=\"images\" \r\n[conf]=\"conf\"\r\n(onOpen)=\"galleryOpened($event)\"\r\n(onClose)=\"galleryClosed()\"\r\n(onImageClicked)=\"galleryImageClicked($event)\"\r\n(onImageChange)=\"galleryImageChanged($event)\"\r\n(onDelete)=\"deleteImage($event)\"\r\n></ngx-image-gallery>"

/***/ }),

/***/ "./src/app/renders/renders.component.ts":
/*!**********************************************!*\
  !*** ./src/app/renders/renders.component.ts ***!
  \**********************************************/
/*! exports provided: RendersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendersComponent", function() { return RendersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RendersComponent = /** @class */ (function () {
    function RendersComponent(router) {
        this.router = router;
        this.showConf = true;
        this.title = 'Demo App';
        // gallery configuration
        this.conf = _config__WEBPACK_IMPORTED_MODULE_2__["DEMO_GALLERY_CONF_INLINE"];
        // gallery images
        this.images = _config__WEBPACK_IMPORTED_MODULE_2__["DEMO_GALLERY_RENDERS"];
    }
    RendersComponent.prototype.ngOnInit = function () {
    };
    // METHODS
    // open gallery
    RendersComponent.prototype.openGallery = function (index) {
        if (index === void 0) { index = 0; }
        // console.log(this.ngxImageGallery);
        // this.ngxImageGallery.open(index);
    };
    // close gallery
    RendersComponent.prototype.closeGallery = function () {
        this.ngxImageGallery.close();
    };
    // set new active(visible) image in gallery
    RendersComponent.prototype.newImage = function (index) {
        if (index === void 0) { index = 0; }
        // this.ngxImageGallery.setActiveImage(index);
    };
    // next image in gallery
    RendersComponent.prototype.nextImage = function () {
        this.ngxImageGallery.next();
    };
    // prev image in gallery
    RendersComponent.prototype.prevImage = function () {
        this.ngxImageGallery.prev();
    };
    /**************************************************/
    // EVENTS
    // callback on gallery opened
    RendersComponent.prototype.galleryOpened = function (index) {
        console.info('Gallery opened at index ', index);
    };
    // callback on gallery closed
    RendersComponent.prototype.galleryClosed = function () {
        console.info('Gallery closed.');
        this.cancelForm();
    };
    // callback on gallery image clicked
    RendersComponent.prototype.galleryImageClicked = function (index) {
        console.info('Gallery image clicked with index ', index);
        // this.ngxImageGallery.open(index);
    };
    // callback on gallery image changed
    RendersComponent.prototype.galleryImageChanged = function (index) {
        console.info('Gallery image changed to index ', index);
    };
    // callback on user clicked delete button
    RendersComponent.prototype.deleteImage = function (index) {
        console.info('Delete image at index ', index);
    };
    RendersComponent.prototype.cancelForm = function () {
        this.router.navigate(['../Home']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ngxImageGallery'),
        __metadata("design:type", ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxImageGalleryComponent"])
    ], RendersComponent.prototype, "ngxImageGallery", void 0);
    RendersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-renders',
            template: __webpack_require__(/*! ./renders.component.html */ "./src/app/renders/renders.component.html"),
            styles: [__webpack_require__(/*! ./renders.component.css */ "./src/app/renders/renders.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RendersComponent);
    return RendersComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"skills\" class=\"skills\">\r\n  <div class=\"skill-content\">\r\n    <div class=\"section-heading text-center\">\r\n      <h2>Skills</h2>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"single-skill-content\">\r\n            <div *ngFor=\"let liz of Skills.item\" class=\"barWrapper\">\r\n              <span class=\"progressText\">{{liz.title}}</span>\r\n              <div class=\"single-progress-txt\">\r\n                <div class=\"progress \">\r\n                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"10\" aria-valuemax=\"100\" style=\"\"> \r\n                  </div>\r\n                </div>\r\n                <h3>{{liz.porcentaje}}</h3>\t\r\n              </div>\r\n            </div><!-- /.barWrapper -->      \r\n          </div>\r\n        </div>   \r\n        <div class=\"col-md-6\">\r\n          <div class=\"single-skill-content\">\r\n            <div *ngFor=\"let liz1 of Skills.item2\" class=\"barWrapper\">\r\n              <span class=\"progressText\">{{liz1.title}}</span>\r\n              <div class=\"single-progress-txt\">\r\n                <div class=\"progress \">\r\n                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"10\" aria-valuemax=\"100\" style=\"\">\r\n                  </div>\r\n                </div>\r\n                <h3>{{liz1.porcentaje}}</h3>\t\r\n              </div>\r\n            </div><!-- /.barWrapper -->      \r\n          </div>\r\n        </div>     \r\n      </div><!-- /.row -->\r\n    </div>\t<!-- /.container -->\t\t\r\n  </div><!-- /.skill-content-->\r\n\r\n</section><!--/.skills-->\r\n<!--skills end -->"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.Skills = {
            item: [
                {
                    porcentaje: "90%",
                    title: "adobe photoshop"
                },
                {
                    porcentaje: "85%",
                    title: "adobe illustrator"
                },
                {
                    porcentaje: "97%",
                    title: "Autocad"
                },
                {
                    porcentaje: "90%",
                    title: "Revit"
                },
                {
                    porcentaje: "90%",
                    title: "3dmax"
                }
            ],
            item2: [
                {
                    porcentaje: "90%",
                    title: "html 5"
                },
                {
                    porcentaje: "85%",
                    title: "css 3"
                },
                {
                    porcentaje: "97%",
                    title: "communication"
                },
                {
                    porcentaje: "90%",
                    title: "creativity"
                },
                {
                    porcentaje: "90%",
                    title: "Vray"
                }
            ]
        };
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var dataToggleTooTip = jquery__WEBPACK_IMPORTED_MODULE_1__("[data-toggle='tooltip']");
        var progressBar = jquery__WEBPACK_IMPORTED_MODULE_1__('.progress-bar');
        if (progressBar.length) {
            progressBar.appear(function () {
                dataToggleTooTip.tooltip({
                    trigger: 'manual'
                }).tooltip('show');
                progressBar.each(function () {
                    var each_bar_width = jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr('aria-valuenow');
                    jquery__WEBPACK_IMPORTED_MODULE_1__(this).width(each_bar_width + '%');
                });
            });
        }
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"welcome-hero\" class=\"welcome-hero\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n          <div class=\"header-text\">\n            <h2>hi <span>,</span> i am <br> Yanina <br> Glaser <span>.</span>   </h2>\n            <p>Architect and web developer</p>\n            <a href=\"assets/download/CV YANINA GLASER .pdf\" download>download resume</a>\n          </div><!--/.header-text-->\n        </div><!--/.col-->\n      </div><!-- /.row-->\n    </div><!-- /.container-->\n    \n    </section><!--/.welcome-hero-->\n    <!--welcome-hero end -->"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Escritorio\chuschus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map