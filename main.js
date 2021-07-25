(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Working Project\Current_Project\Edulight\edulight_client2\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HomeComponent = void 0;
    const _c0 = function () { return ["/student-personal-info"]; };
    const _c1 = function () { return ["/mentor-personal-info"]; };
    class HomeComponent {
        constructor(_router) {
            this._router = _router;
        }
        ngOnInit() {
        }
        move() {
            console.log('move');
            this._router.navigate(['/selectrole']);
        }
    }
    exports.HomeComponent = HomeComponent;
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    HomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 4, consts: [[1, "head-content"], [1, "nav-head"], [3, "routerLink"], ["disabled", "", 3, "routerLink"], [1, "footer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "body");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "ul", 1);
            i0.ɵɵelementStart(3, "li");
            i0.ɵɵelementStart(4, "a", 2);
            i0.ɵɵtext(5, " Student ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "li");
            i0.ɵɵelementStart(7, "a", 3);
            i0.ɵɵtext(8, "Mentor ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 4);
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "\u00A9 Edulight 2021");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(2, _c0));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c1));
        } }, directives: [i1.RouterLinkWithHref], styles: ["*[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 1.2em;\r\n    line-height: 1.5;\r\n    margin: 22px 5px 0;\r\n    color:black\r\n}\r\n\r\nheader[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n}\r\n\r\n.head-content[_ngcontent-%COMP%]   .nav-head[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-right: 10px;\r\n}\r\n\r\n.nav-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding: 0 10px;\r\n}\r\n\r\n.head-content[_ngcontent-%COMP%]   .nav-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border-bottom: grey solid 1px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7O0FBRWpDIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW46IDIycHggNXB4IDA7XHJcbiAgICBjb2xvcjpibGFja1xyXG59XHJcbmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5sb2dvIC5uYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkLWNvbnRlbnQgLm5hdi1oZWFke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm5hdi1oZWFkIGxpe1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uaGVhZC1jb250ZW50IC5uYXYtaGVhZCBsaSBhOmhvdmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZ3JleSBzb2xpZCAxcHg7XHJcblxyXG59XHJcbiJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.environment = void 0;
    exports.environment = {
        production: false
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DmRP":
/*!**************************************************************************!*\
  !*** ./src/app/student-personal-info/student-personal-info.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StudentPersonalInfoComponent = void 0;
    class StudentPersonalInfoComponent {
        constructor(_router) {
            this._router = _router;
        }
        ngOnInit() {
        }
        moveToSchool() {
            this._router.navigate(['/student-school-info']);
        }
    }
    exports.StudentPersonalInfoComponent = StudentPersonalInfoComponent;
    StudentPersonalInfoComponent.ɵfac = function StudentPersonalInfoComponent_Factory(t) { return new (t || StudentPersonalInfoComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    StudentPersonalInfoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StudentPersonalInfoComponent, selectors: [["app-student-personal-info"]], decls: 4, vars: 0, consts: [[1, "header"]], template: function StudentPersonalInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "body");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "h3");
            i0.ɵɵtext(3, "Student Register");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 15px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    background-color: green;\r\n\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    border-top: hidden;\r\n    border-left: hidden;\r\n    border-radius: hidden;\r\n    border-bottom: groove;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n    outline: none\r\n}\r\n\r\n.required[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: red;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n\r\nprogress[value][_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    height: 20px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    border: 1px solid grey;\r\n    border-top: 8px solid green;\r\n    border-radius: 5px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .form-btn[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 30px;\r\n    color: white;\r\n    background-color: green;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.back-btn[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 30px;\r\n    color: green;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%]{\r\n    color: red;\r\n    margin-left: 15px;\r\n}\r\n\r\n.myRadio[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%]{\r\n    border-bottom: green 2px solid;\r\n}\r\n\r\n.errMessage[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 1.2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtcGVyc29uYWwtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBOzs7Ozs7RUFNRTs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7OztFQU9FOztBQUNGO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUdBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzdHVkZW50LXBlcnNvbmFsLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLm1haW4gLmZvcm0tZ3JvdXAgLmhlYWRlcntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG5cclxufVxyXG5cclxuLmhlYWRlciBzcGFue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG5oMyxwLGxhYmVsLGlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG5cclxuLyouaGVhZGVyIC5mb3JtLWdyb3Vwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSovXHJcblxyXG4uaGVhZGVyIC5mb3JtLWdyb3VwIGgze1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBib3JkZXItdG9wOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdDogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZ3Jvb3ZlO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmVcclxufVxyXG5cclxuLnJlcXVpcmVke1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm1haW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKlxyXG4ubWFpbiAuZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn0qL1xyXG4ubWFpbiBpbnB1dHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5wcm9ncmVzc1t2YWx1ZV17XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLmZvcm0tZ3JvdXAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCBncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZvb3RlciAuZm9ybS1idG57XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJhY2stYnRue1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmhlbHAtYmxvY2t7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5teVJhZGlve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWR7XHJcbiAgICBib3JkZXItYm90dG9tOiBncmVlbiAycHggc29saWQ7XHJcbn1cclxuXHJcbi5lcnJNZXNzYWdle1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuIl19 */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "NL3D":
/*!************************************************************************!*\
  !*** ./src/app/mentor-personal-info/mentor-personal-info.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @angular/common */ "ofXK")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MentorPersonalInfoComponent = void 0;
    function MentorPersonalInfoComponent_span_21_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " Full Name is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorPersonalInfoComponent_span_29_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " Surname is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorPersonalInfoComponent_span_37_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " Date of Birth is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorPersonalInfoComponent_span_45_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " Residential Address is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorPersonalInfoComponent_span_64_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " Gender is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorPersonalInfoComponent_span_72_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " Cell Number is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorPersonalInfoComponent_span_84_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " Email Address is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorPersonalInfoComponent_span_85_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " Email Address is invalid ");
        i0.ɵɵelementEnd();
    } }
    function MentorPersonalInfoComponent_span_100_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " This field is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorPersonalInfoComponent_span_106_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 46);
        i0.ɵɵtext(1, " Describe you disability ");
        i0.ɵɵelementEnd();
    } }
    class MentorPersonalInfoComponent {
        constructor(_router, route) {
            this._router = _router;
            this.route = route;
            //myForm: FormGroup;
            this.mentor = {
                fullName: '',
                surname: '',
                dob: '',
                reAddress: '',
                gender: '',
                cellNo: '',
                altCellNo: '',
                email: '',
                disability: '',
                disabilityInfo: '',
                facebook: '',
                twitter: '',
                instagram: '',
                linkedin: ''
            };
            /*this.myForm = new FormGroup({
              fullName: new FormControl(null, Validators.required),
              surname: new FormControl(null, Validators.required),
              dob: new FormControl(null, Validators.required),
              reAddress: new FormControl(null, Validators.required),
              gender: new FormControl(null, Validators.required),
              cellNo: new FormControl(null, Validators.required),
              altCellNO: new FormControl(null, Validators.required),
              email: new FormControl(null, Validators.required),
              disability: new FormControl(null, Validators.required),
              disabilityInfo: new FormControl(null, Validators.required),
              facebook: new FormControl(null, Validators.required),
              twitter: new FormControl(null, Validators.required),
              instagra: new FormControl(null, Validators.required),
              linkedin: new FormControl(null, Validators.required),
            })*/
        }
        /* mentor2 ={
           id: 123456
         }*/
        ngOnInit() {
        }
        educational() {
            /*for(var items in this.mentor){
              //console.log(this.mentor[k])
              console.log(items,' ',this.mentor[items])
              this.mentor2[items] = this.mentor[items];
              
            }*/
            console.log(this.mentor.disability);
            if (this.mentor.surname != '' && this.mentor.fullName != '' && this.mentor.cellNo != ''
                && this.mentor.disability != '' && this.mentor.email != '' && this.mentor.gender != ''
                && this.mentor.dob != '' && this.mentor.reAddress != '') {
                const getValues = {
                    state: {
                        values: this.mentor
                    }
                };
                console.log(getValues);
                if (this.mentor.disability == 'yes') {
                    if (this.mentor.disabilityInfo == '') {
                    }
                    else {
                        this._router.navigate(['/mentor-educational-info'], getValues);
                    }
                }
                else {
                    this._router.navigate(['/mentor-educational-info'], getValues);
                }
            }
            else {
                console.log('all fild with * must be filled');
                return this.errMessage = "All fild with * must be filled";
            }
        }
    }
    exports.MentorPersonalInfoComponent = MentorPersonalInfoComponent;
    MentorPersonalInfoComponent.ɵfac = function MentorPersonalInfoComponent_Factory(t) { return new (t || MentorPersonalInfoComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    MentorPersonalInfoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MentorPersonalInfoComponent, selectors: [["app-mentor-personal-info"]], decls: 137, vars: 49, consts: [[1, "header"], [1, "form-group"], ["href", ""], [1, "required"], [1, "main"], ["for", "fullName", 1, "control-label"], ["type", "text", "id", "fullName", "name", "mentor.fullName", "placeholder", "Your answer", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["fullName", "ngModel"], ["class", "help-block", 4, "ngIf"], ["for", "surname", 1, "control-label"], ["type", "text", "id", "surname", "name", "mentor.surname", "placeholder", "Your answer", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["surname", "ngModel"], ["for", "dob", 1, "control-label"], ["type", "date", "id", "dob", "name", "mentor.dob", "placeholder", "Date", "required", "", 1, "control-form", "date-of-birth", 3, "ngModel", "ngModelChange"], ["dob", "ngModel"], ["for", "reAddress", 1, "control-label"], ["type", "text", "id", "reAddress", "name", "mentor.reAddress", "placeholder", "Your answer", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["reAddress", "ngModel"], [1, "myRadio"], ["type", "radio", "required", "", "name", "mentor.gender", "value", "Female", 1, "control-form", 3, "ngModel", "ngModelChange"], ["gender", "ngModel"], ["type", "radio", "required", "", "name", "mentor.gender", "value", "Male", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "radio", "required", "", "name", "mentor.gender", "value", "Other", 1, "control-form", 3, "ngModel", "ngModelChange"], ["for", "cellNo", 1, "control-label"], ["type", "tel", "id", "cellNo", "name", "mentor.cellNo", "placeholder", "Your answer", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["cellNo", "ngModel"], ["type", "tel", "name", "mentor.altCellNo", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], ["for", "email", 1, "control-label"], ["type", "email", "id", "email", "name", "mentor.email", "placeholder", "Your answer", "required", "", "pattern", "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", 1, "control-form", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "radio", "required", "", "name", "mentor.disability", "value", "yes", 1, "control-form", 3, "ngModel", "ngModelChange"], ["disability", "ngModel"], ["type", "radio", "required", "", "name", "mentor.disability", "value", "no", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "mentor.disabilityInfo", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "required", "ngModelChange"], ["disabilityInfo", "ngModel"], ["type", "text", "name", "mentor.facebook", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "mentor.twitter", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "mentor.instagram", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "mentor.linkedin", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], [1, "footer"], [1, "form-progress"], ["value", "25", "max", "100"], [1, "pages"], [1, "errMessage"], [1, "form-button"], ["type", "submit", 1, "form-btn", 3, "click"], [1, "help-block"]], template: function MentorPersonalInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "body");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "h3");
            i0.ɵɵtext(4, "MENTOR APPLICATION FORM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Thank you! For your interest in being a mentor at Edulight Academia. Please make sure you take the personality test( ");
            i0.ɵɵelementStart(7, "a", 2);
            i0.ɵɵtext(8, "https://16personalities.com/free-personality-test");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(9, " ) before you fill in this form.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span", 3);
            i0.ɵɵtext(11, "*Required");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "form");
            i0.ɵɵelementStart(13, "div", 4);
            i0.ɵɵelementStart(14, "div", 1);
            i0.ɵɵelementStart(15, "label", 5);
            i0.ɵɵtext(16, "Full Names ");
            i0.ɵɵelementStart(17, "span", 3);
            i0.ɵɵtext(18, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "input", 6, 7);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_19_listener($event) { return ctx.mentor.fullName = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(21, MentorPersonalInfoComponent_span_21_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 1);
            i0.ɵɵelementStart(23, "label", 9);
            i0.ɵɵtext(24, "Surname ");
            i0.ɵɵelementStart(25, "span", 3);
            i0.ɵɵtext(26, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "input", 10, 11);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_27_listener($event) { return ctx.mentor.surname = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, MentorPersonalInfoComponent_span_29_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 1);
            i0.ɵɵelementStart(31, "label", 12);
            i0.ɵɵtext(32, "Date of Birth ");
            i0.ɵɵelementStart(33, "span", 3);
            i0.ɵɵtext(34, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "input", 13, 14);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_35_listener($event) { return ctx.mentor.dob = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(37, MentorPersonalInfoComponent_span_37_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 1);
            i0.ɵɵelementStart(39, "label", 15);
            i0.ɵɵtext(40, "Residential Address ");
            i0.ɵɵelementStart(41, "span", 3);
            i0.ɵɵtext(42, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "input", 16, 17);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_43_listener($event) { return ctx.mentor.reAddress = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(45, MentorPersonalInfoComponent_span_45_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "div", 1);
            i0.ɵɵelementStart(47, "label");
            i0.ɵɵtext(48, "Gender ");
            i0.ɵɵelementStart(49, "span", 3);
            i0.ɵɵtext(50, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div", 18);
            i0.ɵɵelementStart(52, "label");
            i0.ɵɵelementStart(53, "input", 19, 20);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_53_listener($event) { return ctx.mentor.gender = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(55, "Female");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "label");
            i0.ɵɵelementStart(57, "input", 21, 20);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_57_listener($event) { return ctx.mentor.gender = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(59, "Male");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "label");
            i0.ɵɵelementStart(61, "input", 22, 20);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_61_listener($event) { return ctx.mentor.gender = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(63, "Other");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(64, MentorPersonalInfoComponent_span_64_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "div", 1);
            i0.ɵɵelementStart(66, "label", 23);
            i0.ɵɵtext(67, "Cell Number ");
            i0.ɵɵelementStart(68, "span", 3);
            i0.ɵɵtext(69, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "input", 24, 25);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_70_listener($event) { return ctx.mentor.cellNo = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(72, MentorPersonalInfoComponent_span_72_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "div", 1);
            i0.ɵɵelementStart(74, "label");
            i0.ɵɵtext(75, "Alternative Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "input", 26);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_76_listener($event) { return ctx.mentor.altCellNo = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "div", 1);
            i0.ɵɵelementStart(78, "label", 27);
            i0.ɵɵtext(79, "Email Address ");
            i0.ɵɵelementStart(80, "span", 3);
            i0.ɵɵtext(81, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "input", 28, 29);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_82_listener($event) { return ctx.mentor.email = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(84, MentorPersonalInfoComponent_span_84_Template, 2, 0, "span", 8);
            i0.ɵɵtemplate(85, MentorPersonalInfoComponent_span_85_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "div", 1);
            i0.ɵɵelementStart(87, "label");
            i0.ɵɵtext(88, "Are you a Person Living with a Disability ");
            i0.ɵɵelementStart(89, "span", 3);
            i0.ɵɵtext(90, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "div", 18);
            i0.ɵɵelementStart(92, "label");
            i0.ɵɵelementStart(93, "input", 30, 31);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_93_listener($event) { return ctx.mentor.disability = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(95, "Yes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "label");
            i0.ɵɵelementStart(97, "input", 32, 31);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_97_listener($event) { return ctx.mentor.disability = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(99, "No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(100, MentorPersonalInfoComponent_span_100_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(101, "div", 1);
            i0.ɵɵelementStart(102, "label");
            i0.ɵɵtext(103, "If Yes, Please Describe ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "input", 33, 34);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_104_listener($event) { return ctx.mentor.disabilityInfo = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(106, MentorPersonalInfoComponent_span_106_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "div", 1);
            i0.ɵɵelementStart(108, "label");
            i0.ɵɵtext(109, "Facebook Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "input", 35);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_110_listener($event) { return ctx.mentor.facebook = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "div", 1);
            i0.ɵɵelementStart(112, "label");
            i0.ɵɵtext(113, "Twitter Handler");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "input", 36);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_114_listener($event) { return ctx.mentor.twitter = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(115, "div", 1);
            i0.ɵɵelementStart(116, "label");
            i0.ɵɵtext(117, "Instagram Handler");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "input", 37);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_118_listener($event) { return ctx.mentor.instagram = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "div", 1);
            i0.ɵɵelementStart(120, "label");
            i0.ɵɵtext(121, "LinkedIn Profile Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(122, "input", 38);
            i0.ɵɵlistener("ngModelChange", function MentorPersonalInfoComponent_Template_input_ngModelChange_122_listener($event) { return ctx.mentor.linkedin = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "div", 39);
            i0.ɵɵelementStart(124, "div", 40);
            i0.ɵɵelementStart(125, "progress", 41);
            i0.ɵɵtext(126, "25% ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(127, "label", 42);
            i0.ɵɵtext(128, "Page 1 of 4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "span", 43);
            i0.ɵɵtext(130);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(131, "div", 44);
            i0.ɵɵelementStart(132, "button", 45);
            i0.ɵɵlistener("click", function MentorPersonalInfoComponent_Template_button_click_132_listener() { return ctx.educational(); });
            i0.ɵɵtext(133, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(134, "div", 39);
            i0.ɵɵelementStart(135, "p");
            i0.ɵɵtext(136, "\u00A9 Edulight 2021");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(20);
            const _r2 = i0.ɵɵreference(28);
            const _r4 = i0.ɵɵreference(36);
            const _r6 = i0.ɵɵreference(44);
            const _r8 = i0.ɵɵreference(54);
            const _r12 = i0.ɵɵreference(71);
            const _r14 = i0.ɵɵreference(83);
            const _r17 = i0.ɵɵreference(94);
            const _r20 = i0.ɵɵreference(105);
            i0.ɵɵadvance(14);
            i0.ɵɵclassProp("has-error", _r0.invalid && _r0.touched)("has-success", _r0.valid);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.mentor.fullName);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r0.invalid && _r0.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r2.invalid && _r2.touched);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.mentor.surname);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r2.invalid && _r2.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r4.invalid && _r4.touched);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.mentor.dob);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r4.invalid && _r4.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r6.invalid && _r6.touched);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.mentor.reAddress);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r6.invalid && _r6.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r8.invalid && _r8.touched);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.mentor.gender);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentor.gender);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentor.gender);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", _r8.invalid && _r8.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r12.invalid && _r12.touched);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.mentor.cellNo);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r12.invalid && _r12.touched);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentor.altCellNo);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r14.invalid && _r14.touched);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.mentor.email);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", (_r14.errors == null ? null : _r14.errors.required) && _r14.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (_r14.errors == null ? null : _r14.errors.pattern) && _r14.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r17.invalid && _r17.touched);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.mentor.disability);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentor.disability);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", _r17.invalid && _r17.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r20.invalid);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.mentor.disabilityInfo)("required", _r17.value == "yes");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r20.invalid);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentor.facebook);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentor.twitter);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentor.instagram);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentor.linkedin);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", ctx.errMessage, " ");
        } }, directives: [i2.ɵangular_packages_forms_forms_ba, i2.NgControlStatusGroup, i2.NgForm, i2.DefaultValueAccessor, i2.RequiredValidator, i2.NgControlStatus, i2.NgModel, i3.NgIf, i2.RadioControlValueAccessor, i2.PatternValidator], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 15px;\r\n    \r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    border: 1px solid grey;\r\n    border-top: 8px solid green;\r\n    border-radius: 5px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%]{\r\n    color: red;\r\n    margin-left: 15px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    border-top: hidden;\r\n    border-left: hidden;\r\n    border-radius: hidden;\r\n    border-bottom: groove;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n    outline: none\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n\r\nprogress[value][_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    height: 20px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .form-btn[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 30px;\r\n    color: green;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n}\r\n\r\n.myRadio[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.required[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: red;\r\n}\r\n\r\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%]{\r\n    border-bottom: green 2px solid;\r\n}\r\n\r\n.errMessage[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 1.2em;\r\n}\r\n\r\n@media screen and (max-width: 780px){\r\n    max-width[_ngcontent-%COMP%]:   100%[_ngcontent-%COMP%];\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvci1wZXJzb25hbC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7Ozs7O0VBTUU7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7OztFQU9FOztBQUNGO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJtZW50b3ItcGVyc29uYWwtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIFxyXG59XHJcblxyXG4uaGVhZGVyIC5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uaGVscC1ibG9ja3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4uaGVhZGVyIHNwYW57XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbmgzLHAsbGFiZWwsaW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi8qLmhlYWRlciAuZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0qL1xyXG5cclxuLmhlYWRlciAuZm9ybS1ncm91cCBoM3tcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgYm9yZGVyLXRvcDogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQ6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IGhpZGRlbjtcclxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lXHJcbn1cclxuXHJcbi5tYWlue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLypcclxuLm1haW4gLmZvcm0tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59Ki9cclxuLm1haW4gaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxucHJvZ3Jlc3NbdmFsdWVde1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIC5mb3JtLWJ0bntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5teVJhZGlve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yZXF1aXJlZHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZHtcclxuICAgIGJvcmRlci1ib3R0b206IGdyZWVuIDJweCBzb2xpZDtcclxufVxyXG5cclxuLmVyck1lc3NhZ2V7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpe1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "NNcY":
/*!******************************************************************************!*\
  !*** ./src/app/mentor-educational-info/mentor-educational-info.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @angular/common */ "ofXK")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MentorEducationalInfoComponent = void 0;
    function MentorEducationalInfoComponent_span_18_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 39);
        i0.ɵɵtext(1, " Personality type is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorEducationalInfoComponent_span_26_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 39);
        i0.ɵɵtext(1, " Tertiary qualification/Study field is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorEducationalInfoComponent_span_34_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 39);
        i0.ɵɵtext(1, " Institution is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorEducationalInfoComponent_span_65_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 39);
        i0.ɵɵtext(1, " Level of study is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorEducationalInfoComponent_span_84_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 39);
        i0.ɵɵtext(1, " This field is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorEducationalInfoComponent_span_90_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 39);
        i0.ɵɵtext(1, " Name of the organization and the position are required ");
        i0.ɵɵelementEnd();
    } }
    class MentorEducationalInfoComponent {
        constructor(_router, route) {
            this._router = _router;
            this.route = route;
            this.mentorEducation = {
                persType: '',
                qualification: '',
                institution: '',
                secQualification: '',
                secInstitution: '',
                studyLevel: '',
                award: '',
                organization: '',
                specificOrganization: '',
                workkExperience: '',
                profBody: ''
            };
            this.route.queryParams.subscribe(params => {
                if (this._router.getCurrentNavigation().extras.state) {
                    this.mentor = this._router.getCurrentNavigation().extras.state.values;
                }
            });
        }
        ngOnInit() {
        }
        mentorBackground() {
            if (this.mentorEducation.institution != '' && this.mentorEducation.persType != '' && this.mentorEducation.qualification != ''
                && this.mentorEducation.studyLevel != '' && this.mentorEducation.organization != '') {
                for (var items in this.mentor) {
                    this.mentorEducation[items] = this.mentor[items];
                }
                const getValues = {
                    state: {
                        values: this.mentorEducation
                    }
                };
                console.log('array ', getValues);
                if (this.mentorEducation.organization == 'yes') {
                    if (this.mentorEducation.specificOrganization == '') {
                    }
                    else {
                        this._router.navigate(['/mentor-background-info'], getValues);
                    }
                }
                else {
                    this._router.navigate(['/mentor-background-info'], getValues);
                }
            }
            else {
                console.log('all fild with * must be filled');
                return this.errMessage = "All fild with * must be filled";
            }
        }
        personal() {
            this._router.navigate(['/mentor-personal-info']);
        }
    }
    exports.MentorEducationalInfoComponent = MentorEducationalInfoComponent;
    MentorEducationalInfoComponent.ɵfac = function MentorEducationalInfoComponent_Factory(t) { return new (t || MentorEducationalInfoComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    MentorEducationalInfoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MentorEducationalInfoComponent, selectors: [["app-mentor-educational-info"]], decls: 115, vars: 35, consts: [[1, "header"], [1, "form-group"], [1, "required"], [1, "main"], [1, "intro"], ["for", "persType", 1, "control-label"], ["type", "text", "id", "persType", "name", "mentorEducation.persType", "placeholder", "Your answer", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["persType", "ngModel"], ["class", "help-block", 4, "ngIf"], ["for", "qualification", 1, "control-label"], ["type", "text", "id", "qualification", "name", "mentorEducation.qualification", "placeholder", "Your answer", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["qualification", "ngModel"], ["for", "institution", 1, "control-label"], ["type", "text", "id", "institution", "name", "mentorEducation.institution", "placeholder", "Your answer", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["institution", "ngModel"], ["type", "text", "name", "mentorEducation.secQualification", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "mentorEducation.secInstitution", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], [1, "myRadio"], ["type", "radio", "name", "mentorEducation.studyLevel", "value", "1st Year", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["studyLevel", "ngModel"], ["type", "radio", "name", "mentorEducation.studyLevel", "value", "2nd Year", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "mentorEducation.studyLevel", "value", "3rd Year", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "mentorEducation.studyLevel", "value", "other Level", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "mentorEducation.award", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "mentorEducation.organization", "value", "yes", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["organization", "ngModel"], ["type", "radio", "name", "mentorEducation.organization", "value", "no", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "mentorEducation.specificOrganization", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "required", "ngModelChange"], ["specificOrganization", "ngModel"], ["type", "text", "name", "mentorEducation.workkExperience", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "mentorEducation.profBody", "placeholder", "Your answer", 1, "control-form", 3, "ngModel", "ngModelChange"], [1, "footer"], [1, "form-progress"], ["value", "50", "max", "100"], [1, "pages"], [1, "errMessage"], [1, "form-button"], [1, "back-btn", 3, "click"], [1, "form-btn", 3, "click"], [1, "help-block"]], template: function MentorEducationalInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "body");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "h3");
            i0.ɵɵtext(4, "MENTOR APPLICATION FORM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 2);
            i0.ɵɵtext(6, "*Required");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵelementStart(8, "div", 1);
            i0.ɵɵelementStart(9, "span", 0);
            i0.ɵɵelementStart(10, "label", 4);
            i0.ɵɵtext(11, "Academic and professional background");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "label", 5);
            i0.ɵɵtext(13, "Personality type (the results from the personality test you took before hand) ");
            i0.ɵɵelementStart(14, "span", 2);
            i0.ɵɵtext(15, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "input", 6, 7);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_16_listener($event) { return ctx.mentorEducation.persType = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(18, MentorEducationalInfoComponent_span_18_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 1);
            i0.ɵɵelementStart(20, "label", 9);
            i0.ɵɵtext(21, "Tertiary qualification/Study field ");
            i0.ɵɵelementStart(22, "span", 2);
            i0.ɵɵtext(23, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "input", 10, 11);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_24_listener($event) { return ctx.mentorEducation.qualification = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(26, MentorEducationalInfoComponent_span_26_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 1);
            i0.ɵɵelementStart(28, "label", 12);
            i0.ɵɵtext(29, "Institution ");
            i0.ɵɵelementStart(30, "span", 2);
            i0.ɵɵtext(31, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "input", 13, 14);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_32_listener($event) { return ctx.mentorEducation.institution = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(34, MentorEducationalInfoComponent_span_34_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 1);
            i0.ɵɵelementStart(36, "label");
            i0.ɵɵtext(37, "2nd qualification ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "input", 15);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_38_listener($event) { return ctx.mentorEducation.secQualification = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 1);
            i0.ɵɵelementStart(40, "label");
            i0.ɵɵtext(41, "Institution ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "input", 16);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_42_listener($event) { return ctx.mentorEducation.secInstitution = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 1);
            i0.ɵɵelementStart(44, "label");
            i0.ɵɵtext(45, "Level of study ");
            i0.ɵɵelementStart(46, "span", 2);
            i0.ɵɵtext(47, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div", 17);
            i0.ɵɵelementStart(49, "label");
            i0.ɵɵelementStart(50, "input", 18, 19);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_50_listener($event) { return ctx.mentorEducation.studyLevel = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(52, "1st year");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "label");
            i0.ɵɵelementStart(54, "input", 20, 19);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_54_listener($event) { return ctx.mentorEducation.studyLevel = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(56, "2nd years");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "label");
            i0.ɵɵelementStart(58, "input", 21, 19);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_58_listener($event) { return ctx.mentorEducation.studyLevel = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(60, "3rd years");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "label");
            i0.ɵɵelementStart(62, "input", 22, 19);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_62_listener($event) { return ctx.mentorEducation.studyLevel = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(64, "3+ years");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(65, MentorEducationalInfoComponent_span_65_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "div", 1);
            i0.ɵɵelementStart(67, "label");
            i0.ɵɵtext(68, "Please disclose any academic awards or special achievement ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "input", 23);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_69_listener($event) { return ctx.mentorEducation.award = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 1);
            i0.ɵɵelementStart(71, "label");
            i0.ɵɵtext(72, "Are/were you a member of any student organization ");
            i0.ɵɵelementStart(73, "span", 2);
            i0.ɵɵtext(74, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "div", 17);
            i0.ɵɵelementStart(76, "label");
            i0.ɵɵelementStart(77, "input", 24, 25);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_77_listener($event) { return ctx.mentorEducation.organization = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(79, "Yes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "label");
            i0.ɵɵelementStart(81, "input", 26, 25);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_81_listener($event) { return ctx.mentorEducation.organization = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(83, "No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(84, MentorEducationalInfoComponent_span_84_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "div", 1);
            i0.ɵɵelementStart(86, "label");
            i0.ɵɵtext(87, "If yes, please specify the name of the organization and the position you last held");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "input", 27, 28);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_88_listener($event) { return ctx.mentorEducation.specificOrganization = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(90, MentorEducationalInfoComponent_span_90_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "div", 1);
            i0.ɵɵelementStart(92, "label");
            i0.ɵɵtext(93, "Any work experience within your study field? If yes, please specify position and the name of the organization. If no you may skip.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "input", 29);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_94_listener($event) { return ctx.mentorEducation.workkExperience = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "div", 1);
            i0.ɵɵelementStart(96, "label");
            i0.ɵɵtext(97, "Do you belong to any professional body? If yes, please specify the name of the body. If no, you may skip.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "input", 30);
            i0.ɵɵlistener("ngModelChange", function MentorEducationalInfoComponent_Template_input_ngModelChange_98_listener($event) { return ctx.mentorEducation.profBody = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "div", 31);
            i0.ɵɵelementStart(100, "div", 32);
            i0.ɵɵelementStart(101, "progress", 33);
            i0.ɵɵtext(102, "50% ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "label", 34);
            i0.ɵɵtext(104, "Page 2 of 4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "span", 35);
            i0.ɵɵtext(106);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "div", 36);
            i0.ɵɵelementStart(108, "button", 37);
            i0.ɵɵlistener("click", function MentorEducationalInfoComponent_Template_button_click_108_listener() { return ctx.personal(); });
            i0.ɵɵtext(109, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "button", 38);
            i0.ɵɵlistener("click", function MentorEducationalInfoComponent_Template_button_click_110_listener() { return ctx.mentorBackground(); });
            i0.ɵɵtext(111, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(112, "div", 31);
            i0.ɵɵelementStart(113, "p");
            i0.ɵɵtext(114, "\u00A9 Edulight 2021");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(17);
            const _r2 = i0.ɵɵreference(25);
            const _r4 = i0.ɵɵreference(33);
            const _r6 = i0.ɵɵreference(51);
            const _r11 = i0.ɵɵreference(78);
            const _r14 = i0.ɵɵreference(89);
            i0.ɵɵadvance(8);
            i0.ɵɵclassProp("has-error", _r0.invalid && _r0.touched);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.persType);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r0.invalid && _r0.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r2.invalid && _r2.touched);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.qualification);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r2.invalid && _r2.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r4.invalid && _r4.touched);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.institution);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r4.invalid && _r4.touched);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.secQualification);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.secInstitution);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r6.invalid && _r6.touched);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.studyLevel);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.studyLevel);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.studyLevel);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.studyLevel);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", _r6.invalid && _r6.touched);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.award);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r11.invalid && _r11.touched);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.organization);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.organization);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", _r11.invalid && _r11.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r14.invalid);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.specificOrganization)("required", _r11.value == "yes");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r14.invalid);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.workkExperience);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.mentorEducation.profBody);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", ctx.errMessage, " ");
        } }, directives: [i2.DefaultValueAccessor, i2.RequiredValidator, i2.NgControlStatus, i2.NgModel, i3.NgIf, i2.RadioControlValueAccessor], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 15px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    background-color: green;\r\n\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    border-top: hidden;\r\n    border-left: hidden;\r\n    border-radius: hidden;\r\n    border-bottom: groove;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n    outline: none\r\n}\r\n\r\n.required[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: red;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n\r\nprogress[value][_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    height: 20px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    border: 1px solid grey;\r\n    border-top: 8px solid green;\r\n    border-radius: 5px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .form-btn[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 30px;\r\n    color: white;\r\n    background-color: green;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.back-btn[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 30px;\r\n    color: green;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%]{\r\n    color: red;\r\n    margin-left: 15px;\r\n}\r\n\r\n.myRadio[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%]{\r\n    border-bottom: green 2px solid;\r\n}\r\n\r\n.errMessage[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 1.2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvci1lZHVjYXRpb25hbC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7Ozs7OztFQU1FOztBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7O0VBT0U7O0FBQ0Y7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBR0E7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Im1lbnRvci1lZHVjYXRpb25hbC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5tYWluIC5mb3JtLWdyb3VwIC5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXIgc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuaDMscCxsYWJlbCxpbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuXHJcbi8qLmhlYWRlciAuZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0qL1xyXG5cclxuLmhlYWRlciAuZm9ybS1ncm91cCBoM3tcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgYm9yZGVyLXRvcDogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQ6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IGhpZGRlbjtcclxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lXHJcbn1cclxuXHJcbi5yZXF1aXJlZHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLypcclxuLm1haW4gLmZvcm0tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59Ki9cclxuLm1haW4gaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxucHJvZ3Jlc3NbdmFsdWVde1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIC5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mb290ZXIgLmZvcm0tYnRue1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5iYWNrLWJ0bntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5oZWxwLWJsb2Nre1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubXlSYWRpb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVke1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZ3JlZW4gMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uZXJyTWVzc2FnZXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcbiJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "SPFv":
/*!********************************************************************!*\
  !*** ./src/app/mentor-submit-info/mentor-submit-info.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/forms */ "3Pt+")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MentorSubmitInfoComponent = void 0;
    class MentorSubmitInfoComponent {
        constructor(_router, route) {
            this._router = _router;
            this.route = route;
            this.route.queryParams.subscribe(params => {
                if (this._router.getCurrentNavigation().extras.state) {
                    this.mentor = this._router.getCurrentNavigation().extras.state.values;
                    console.log('Successfully Here', this.mentor);
                }
            });
        }
        ngOnInit() {
        }
        successfully() {
            console.log('Submitted Successfully................');
            this._router.navigate(['/mentor-successfully']);
        }
        background() {
            this._router.navigate(['/mentor-background-info']);
        }
    }
    exports.MentorSubmitInfoComponent = MentorSubmitInfoComponent;
    MentorSubmitInfoComponent.ɵfac = function MentorSubmitInfoComponent_Factory(t) { return new (t || MentorSubmitInfoComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    MentorSubmitInfoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MentorSubmitInfoComponent, selectors: [["app-mentor-submit-info"]], decls: 31, vars: 0, consts: [[1, "header"], [1, "form-group"], [1, "main"], [1, "intro"], ["src", "assets/0001-2566157940_20210608_180012_0000.png"], [1, "footer"], [1, "form-progress"], ["value", "100", "max", "100"], [1, "pages"], [1, "form-button"], [1, "back-btn", 3, "click"], [1, "form-btn", 3, "click"]], template: function MentorSubmitInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "body");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "h3");
            i0.ɵɵtext(4, "MENTOR APPLICATION FORM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "form");
            i0.ɵɵelementStart(6, "div", 2);
            i0.ɵɵelementStart(7, "div", 1);
            i0.ɵɵelementStart(8, "span", 0);
            i0.ɵɵelementStart(9, "label", 3);
            i0.ɵɵtext(10, "Thank You!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "Thanks you for taking your time to complete this application. We commend you for your keen interest in joining us on our mession to help young people in underserved communities thrive.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14, "Your application will be reviewed and you shall receive a response on its results. In the meantime, please follow us on our social media pages.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 1);
            i0.ɵɵelement(16, "img", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 5);
            i0.ɵɵelementStart(18, "div", 6);
            i0.ɵɵelementStart(19, "progress", 7);
            i0.ɵɵtext(20, "100% ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "label", 8);
            i0.ɵɵtext(22, "Page 4 of 4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 9);
            i0.ɵɵelementStart(24, "button", 10);
            i0.ɵɵlistener("click", function MentorSubmitInfoComponent_Template_button_click_24_listener() { return ctx.background(); });
            i0.ɵɵtext(25, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "button", 11);
            i0.ɵɵlistener("click", function MentorSubmitInfoComponent_Template_button_click_26_listener() { return ctx.successfully(); });
            i0.ɵɵtext(27, "Submit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 5);
            i0.ɵɵelementStart(29, "p");
            i0.ɵɵtext(30, "\u00A9 Edulight 2021");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i2.ɵangular_packages_forms_forms_ba, i2.NgControlStatusGroup, i2.NgForm], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 15px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    border: 1px solid grey;\r\n    border-top: 8px solid green;\r\n    border-radius: 5px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 3px;\r\n    padding-bottom: 8px;\r\n    padding-top: 8px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{\r\n    height: 35px;\r\n    background-color: green;\r\n\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    border-top: hidden;\r\n    border-left: hidden;\r\n    border-radius: hidden;\r\n    border-bottom: groove;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n    outline: none\r\n}\r\n\r\n.required[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: red;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n\r\nprogress[value][_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    height: 20px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .form-btn[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 30px;\r\n    color: white;\r\n    background-color: green;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.back-btn[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 30px;\r\n    color: green;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvci1zdWJtaXQtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQTs7Ozs7O0VBTUU7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7Ozs7Ozs7RUFPRTs7QUFDRjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6Im1lbnRvci1zdWJtaXQtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIC5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5tYWluIHB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5tYWluIC5mb3JtLWdyb3VwIC5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXIgc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuaDMscCxsYWJlbCxpbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuXHJcbi8qLmhlYWRlciAuZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0qL1xyXG5cclxuLmhlYWRlciAuZm9ybS1ncm91cCBoM3tcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgYm9yZGVyLXRvcDogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQ6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IGhpZGRlbjtcclxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lXHJcbn1cclxuXHJcbi5yZXF1aXJlZHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLypcclxuLm1haW4gLmZvcm0tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59Ki9cclxuLm1haW4gaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxucHJvZ3Jlc3NbdmFsdWVde1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIC5mb3JtLWJ0bntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYmFjay1idG57XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppComponent = void 0;
    class AppComponent {
        constructor() {
            this.title = 'Client';
        }
    }
    exports.AppComponent = AppComponent;
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [[1, "myBody"], [1, "logo"], [1, "name"], [1, "company"], [1, "slogan"], [1, "myFooter"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "body");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelement(2, "div", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "h3");
            i0.ɵɵtext(6, "EDULIGHT ACADEMIA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "SHAPING THE FUTURE OF YOUNG ASPIRING PROFESSIONALS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵelement(11, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.RouterOutlet], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 15px;\r\n}\r\n.myBody[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    padding: 7px;\r\n    border-radius: 50%;\r\n}\r\n.name[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.company[_ngcontent-%COMP%]{\r\n    height: 35px;\r\n    width: 100%;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    margin-top:10px\r\n}\r\n.company[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    margin-top: 5px;\r\n    font-size: 1em;\r\n    font-weight: 600;\r\n}\r\n.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n    font-size: 0.8em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTs7QUFFakI7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF3Q0UiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbi5teUJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm5hbWV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY29tcGFueXtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmgze1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4XHJcbn1cclxuLmNvbXBhbnkgaDN7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2xvZ2FuIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuXHJcbi8qXHJcbi5uYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCAubG9nb3tcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubG9nbyAuaW1hZ2V7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4uY29tcGFueXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDMwMCVcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgLm5hbWUgaDN7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubmFtZSAuc2xvZ2Fue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxufSovIl19 */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "WiAY":
/*!**********************************************************************!*\
  !*** ./src/app/student-school-info/student-school-info.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StudentSchoolInfoComponent = void 0;
    class StudentSchoolInfoComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    exports.StudentSchoolInfoComponent = StudentSchoolInfoComponent;
    StudentSchoolInfoComponent.ɵfac = function StudentSchoolInfoComponent_Factory(t) { return new (t || StudentSchoolInfoComponent)(); };
    StudentSchoolInfoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StudentSchoolInfoComponent, selectors: [["app-student-school-info"]], decls: 2, vars: 0, template: function StudentSchoolInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "student-school-info works!");
            i0.ɵɵelementEnd();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LXNjaG9vbC1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/platform-browser */ "jhN1"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! ./app.component */ "Sy1n"), __webpack_require__(/*! ./home/home.component */ "9vUh"), __webpack_require__(/*! ./register-role/register-role.component */ "mom0"), __webpack_require__(/*! ./student-personal-info/student-personal-info.component */ "DmRP"), __webpack_require__(/*! ./student-school-info/student-school-info.component */ "WiAY"), __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws"), __webpack_require__(/*! ./mentor-personal-info/mentor-personal-info.component */ "NL3D"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV"), __webpack_require__(/*! ./mentor-educational-info/mentor-educational-info.component */ "NNcY"), __webpack_require__(/*! ./mentor-submit-info/mentor-submit-info.component */ "SPFv"), __webpack_require__(/*! ./mentor-successfully/mentor-successfully.component */ "Zp8j"), __webpack_require__(/*! ./mentor-background-info/mentor-background-info.component */ "j4Hy"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, platform_browser_1, router_1, forms_1, app_component_1, home_component_1, register_role_component_1, student_personal_info_component_1, student_school_info_component_1, animations_1, mentor_personal_info_component_1, ng_bootstrap_1, mentor_educational_info_component_1, mentor_submit_info_component_1, mentor_successfully_component_1, mentor_background_info_component_1, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppModule = void 0;
    class AppModule {
    }
    exports.AppModule = AppModule;
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent },
                    { path: 'selectrole', component: register_role_component_1.RegisterRoleComponent },
                    { path: 'student-personal-info', component: student_personal_info_component_1.StudentPersonalInfoComponent },
                    { path: 'student-school-info', component: student_school_info_component_1.StudentSchoolInfoComponent },
                    { path: 'mentor-personal-info', component: mentor_personal_info_component_1.MentorPersonalInfoComponent },
                    { path: 'mentor-educational-info', component: mentor_educational_info_component_1.MentorEducationalInfoComponent },
                    { path: 'mentor-background-info', component: mentor_background_info_component_1.MentorBackgroundInfoComponent },
                    { path: 'mentor-submit-info', component: mentor_submit_info_component_1.MentorSubmitInfoComponent },
                    { path: 'mentor-successfully', component: mentor_successfully_component_1.MentorSuccessfullyComponent }
                ]),
                animations_1.BrowserAnimationsModule,
                ng_bootstrap_1.NgbModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent,
            register_role_component_1.RegisterRoleComponent,
            student_personal_info_component_1.StudentPersonalInfoComponent,
            student_school_info_component_1.StudentSchoolInfoComponent,
            mentor_personal_info_component_1.MentorPersonalInfoComponent,
            mentor_educational_info_component_1.MentorEducationalInfoComponent,
            mentor_submit_info_component_1.MentorSubmitInfoComponent,
            mentor_successfully_component_1.MentorSuccessfullyComponent,
            mentor_background_info_component_1.MentorBackgroundInfoComponent], imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule, i1.RouterModule, animations_1.BrowserAnimationsModule,
            ng_bootstrap_1.NgbModule] }); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "Zp8j":
/*!**********************************************************************!*\
  !*** ./src/app/mentor-successfully/mentor-successfully.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MentorSuccessfullyComponent = void 0;
    const _c0 = function () { return ["/mentor-personal-info"]; };
    class MentorSuccessfullyComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    exports.MentorSuccessfullyComponent = MentorSuccessfullyComponent;
    MentorSuccessfullyComponent.ɵfac = function MentorSuccessfullyComponent_Factory(t) { return new (t || MentorSuccessfullyComponent)(); };
    MentorSuccessfullyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MentorSuccessfullyComponent, selectors: [["app-mentor-successfully"]], decls: 11, vars: 2, consts: [[1, "container"], [1, "header"], [1, "section"], [3, "routerLink"]], template: function MentorSuccessfullyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "body");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "h3");
            i0.ɵɵtext(4, "MENTOR APPLICATION FORM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 2);
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Application submitted");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵelementStart(9, "a", 3);
            i0.ɵɵtext(10, "Submit another response");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
        } }, directives: [i1.RouterLinkWithHref], styles: ["body[_ngcontent-%COMP%]{\r\n        \r\n    margin: 15px;\r\n\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{    \r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid grey;\r\n    border-top: 8px solid green;\r\n    border-radius: 5px;\r\n    margin-top: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvci1zdWNjZXNzZnVsbHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Im1lbnRvci1zdWNjZXNzZnVsbHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICAgICAgXHJcbiAgICBtYXJnaW46IDE1cHg7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyeyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCBncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuIl19 */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "j4Hy":
/*!****************************************************************************!*\
  !*** ./src/app/mentor-background-info/mentor-background-info.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @angular/common */ "ofXK")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MentorBackgroundInfoComponent = void 0;
    function MentorBackgroundInfoComponent_span_26_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 41);
        i0.ɵɵtext(1, " This field is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorBackgroundInfoComponent_span_41_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 41);
        i0.ɵɵtext(1, " This field is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorBackgroundInfoComponent_span_56_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 41);
        i0.ɵɵtext(1, " This field is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorBackgroundInfoComponent_span_94_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 41);
        i0.ɵɵtext(1, " Mentorship skill is required ");
        i0.ɵɵelementEnd();
    } }
    function MentorBackgroundInfoComponent_span_115_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 41);
        i0.ɵɵtext(1, " Number of mentee(s) is/are required ");
        i0.ɵɵelementEnd();
    } }
    function MentorBackgroundInfoComponent_span_123_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 41);
        i0.ɵɵtext(1, " Reason is required ");
        i0.ɵɵelementEnd();
    } }
    class MentorBackgroundInfoComponent {
        constructor(_router, route) {
            this._router = _router;
            this.route = route;
            this.backgrnd = {
                criminalRec: '',
                mentor: '',
                workPupil: '',
                mentorSkills: '',
                menteeNo: '',
                mentoringReason: '',
            };
            this.route.queryParams.subscribe(params => {
                if (this._router.getCurrentNavigation().extras.state) {
                    this.mentor = this._router.getCurrentNavigation().extras.state.values;
                    console.log('landing background', this.mentor);
                }
            });
        }
        ngOnInit() {
        }
        finalPage() {
            if (this.backgrnd.criminalRec != '' && this.backgrnd.mentor != '' && this.backgrnd.workPupil != '' &&
                this.backgrnd.menteeNo != '' && this.backgrnd.mentorSkills != '' && this.backgrnd.mentoringReason != '') {
                for (var items in this.mentor) {
                    this.backgrnd[items] = this.mentor[items];
                }
                console.log('after ', this.backgrnd);
                const getValues = {
                    state: {
                        values: this.backgrnd
                    }
                };
                console.log('array ', getValues);
                this._router.navigate(['/mentor-submit-info'], getValues);
            }
            else {
                console.log('all fild must be filled');
                return this.errMessage = "All fild must be filled";
            }
        }
        education() {
            this._router.navigate(['/mentor-educational-info']);
        }
    }
    exports.MentorBackgroundInfoComponent = MentorBackgroundInfoComponent;
    MentorBackgroundInfoComponent.ɵfac = function MentorBackgroundInfoComponent_Factory(t) { return new (t || MentorBackgroundInfoComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    MentorBackgroundInfoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MentorBackgroundInfoComponent, selectors: [["app-mentor-background-info"]], decls: 140, vars: 34, consts: [[1, "header"], [1, "form-group"], [1, "required"], [1, "main"], [1, "intro"], [1, "myRadio"], ["type", "radio", "name", "backgrnd.criminalRec", "value", "yes", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["criminalRec", "ngModel"], ["type", "radio", "name", "backgrnd.criminalRec", "value", "no", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["class", "help-block", 4, "ngIf"], ["type", "radio", "name", "backgrnd.mentor", "value", "yes", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["mentor", "ngModel"], ["type", "radio", "name", "backgrnd.mentor", "value", "no", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "backgrnd.workPupil", "value", "yes", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["workPupil", "ngModel"], ["type", "radio", "name", "backgrnd.workPupil", "value", "no", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], [1, "rateMess"], [1, "mentorRate"], [1, "skill"], [1, "rateNo"], ["type", "radio", "name", "backgrnd.mentorSkills", "value", "1", "required", "", 3, "ngModel", "ngModelChange"], ["mentorSkills", "ngModel"], ["type", "radio", "name", "backgrnd.mentorSkills", "value", "2", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "backgrnd.mentorSkills", "value", "3", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "backgrnd.mentorSkills", "value", "4", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "backgrnd.mentorSkills", "value", "5", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "backgrnd.menteeNo", "value", "1", "required", "", 3, "ngModel", "ngModelChange"], ["menteeNo", "ngModel"], ["type", "radio", "name", "backgrnd.menteeNo", "value", "2", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "backgrnd.menteeNo", "value", "3", "required", "", 3, "ngModel", "ngModelChange"], ["for", "mentoringReason", 1, "control-label"], ["type", "text", "id", "mentoringReason", "name", "backgrnd.mentoringReason", "placeholder", "Your answer", "required", "", 1, "control-form", 3, "ngModel", "ngModelChange"], ["mentoringReason", "ngModel"], [1, "footer"], [1, "form-progress"], ["value", "75", "max", "100"], [1, "pages"], [1, "errMessage"], [1, "form-button"], [1, "back-btn", 3, "click"], [1, "form-btn", 3, "click"], [1, "help-block"]], template: function MentorBackgroundInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "body");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "h3");
            i0.ɵɵtext(4, "MENTOR APPLICATION FORM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 2);
            i0.ɵɵtext(6, "*Required");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "form");
            i0.ɵɵelementStart(8, "div", 3);
            i0.ɵɵelementStart(9, "div", 1);
            i0.ɵɵelementStart(10, "span", 0);
            i0.ɵɵelementStart(11, "label", 4);
            i0.ɵɵtext(12, "Few more questions and we're done");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "label");
            i0.ɵɵtext(14, "have you ever been implecated in any criminal offense or faced any criminal charges? ");
            i0.ɵɵelementStart(15, "span", 2);
            i0.ɵɵtext(16, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 5);
            i0.ɵɵelementStart(18, "label");
            i0.ɵɵelementStart(19, "input", 6, 7);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_19_listener($event) { return ctx.backgrnd.criminalRec = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, "Yes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "label");
            i0.ɵɵelementStart(23, "input", 8, 7);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_23_listener($event) { return ctx.backgrnd.criminalRec = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, "No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(26, MentorBackgroundInfoComponent_span_26_Template, 2, 0, "span", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 1);
            i0.ɵɵelementStart(28, "label");
            i0.ɵɵtext(29, "have you mentor anyone before? ");
            i0.ɵɵelementStart(30, "span", 2);
            i0.ɵɵtext(31, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 5);
            i0.ɵɵelementStart(33, "label");
            i0.ɵɵelementStart(34, "input", 10, 11);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_34_listener($event) { return ctx.backgrnd.mentor = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(36, "Yes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "label");
            i0.ɵɵelementStart(38, "input", 12, 11);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_38_listener($event) { return ctx.backgrnd.mentor = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(40, "No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(41, MentorBackgroundInfoComponent_span_41_Template, 2, 0, "span", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 1);
            i0.ɵɵelementStart(43, "label");
            i0.ɵɵtext(44, "have you worked with pupils before? ");
            i0.ɵɵelementStart(45, "span", 2);
            i0.ɵɵtext(46, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "div", 5);
            i0.ɵɵelementStart(48, "label");
            i0.ɵɵelementStart(49, "input", 13, 14);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_49_listener($event) { return ctx.backgrnd.workPupil = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(51, "Yes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "label");
            i0.ɵɵelementStart(53, "input", 15, 14);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_53_listener($event) { return ctx.backgrnd.workPupil = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(55, "No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(56, MentorBackgroundInfoComponent_span_56_Template, 2, 0, "span", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "div", 1);
            i0.ɵɵelementStart(58, "label");
            i0.ɵɵtext(59, "how confident are you in your mentorship skills? ");
            i0.ɵɵelementStart(60, "span", 2);
            i0.ɵɵtext(61, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "label", 16);
            i0.ɵɵelementStart(63, "b");
            i0.ɵɵtext(64, "Not so confident");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "div", 17);
            i0.ɵɵelementStart(66, "div", 18);
            i0.ɵɵelementStart(67, "label", 19);
            i0.ɵɵtext(68, "1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "input", 20, 21);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_69_listener($event) { return ctx.backgrnd.mentorSkills = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "div", 18);
            i0.ɵɵelementStart(72, "label", 19);
            i0.ɵɵtext(73, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "input", 22, 21);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_74_listener($event) { return ctx.backgrnd.mentorSkills = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "div", 18);
            i0.ɵɵelementStart(77, "label", 19);
            i0.ɵɵtext(78, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "input", 23, 21);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_79_listener($event) { return ctx.backgrnd.mentorSkills = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "div", 18);
            i0.ɵɵelementStart(82, "label", 19);
            i0.ɵɵtext(83, "4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "input", 24, 21);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_84_listener($event) { return ctx.backgrnd.mentorSkills = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "div", 18);
            i0.ɵɵelementStart(87, "label", 19);
            i0.ɵɵtext(88, "5");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "input", 25, 21);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_89_listener($event) { return ctx.backgrnd.mentorSkills = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "label", 16);
            i0.ɵɵelementStart(92, "b");
            i0.ɵɵtext(93, "Very confident");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(94, MentorBackgroundInfoComponent_span_94_Template, 2, 0, "span", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "div", 1);
            i0.ɵɵelementStart(96, "label");
            i0.ɵɵtext(97, "how many mentee(s) are you willing to take? ");
            i0.ɵɵelementStart(98, "span", 2);
            i0.ɵɵtext(99, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "div", 18);
            i0.ɵɵelementStart(101, "label", 19);
            i0.ɵɵtext(102, "1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "input", 26, 27);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_103_listener($event) { return ctx.backgrnd.menteeNo = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "div", 18);
            i0.ɵɵelementStart(106, "label", 19);
            i0.ɵɵtext(107, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(108, "input", 28, 27);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_108_listener($event) { return ctx.backgrnd.menteeNo = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "div", 18);
            i0.ɵɵelementStart(111, "label", 19);
            i0.ɵɵtext(112, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "input", 29, 27);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_113_listener($event) { return ctx.backgrnd.menteeNo = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(115, MentorBackgroundInfoComponent_span_115_Template, 2, 0, "span", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(116, "div", 1);
            i0.ɵɵelementStart(117, "label", 30);
            i0.ɵɵtext(118, "Lasty, please, tell us why you are interested in mentoring pupils. ");
            i0.ɵɵelementStart(119, "span", 2);
            i0.ɵɵtext(120, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "input", 31, 32);
            i0.ɵɵlistener("ngModelChange", function MentorBackgroundInfoComponent_Template_input_ngModelChange_121_listener($event) { return ctx.backgrnd.mentoringReason = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(123, MentorBackgroundInfoComponent_span_123_Template, 2, 0, "span", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(124, "div", 33);
            i0.ɵɵelementStart(125, "div", 34);
            i0.ɵɵelementStart(126, "progress", 35);
            i0.ɵɵtext(127, "75% ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(128, "label", 36);
            i0.ɵɵtext(129, "Page 3 of 4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "span", 37);
            i0.ɵɵtext(131);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(132, "div", 38);
            i0.ɵɵelementStart(133, "button", 39);
            i0.ɵɵlistener("click", function MentorBackgroundInfoComponent_Template_button_click_133_listener() { return ctx.education(); });
            i0.ɵɵtext(134, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(135, "button", 40);
            i0.ɵɵlistener("click", function MentorBackgroundInfoComponent_Template_button_click_135_listener() { return ctx.finalPage(); });
            i0.ɵɵtext(136, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(137, "div", 33);
            i0.ɵɵelementStart(138, "p");
            i0.ɵɵtext(139, "\u00A9 Edulight 2021");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(20);
            const _r3 = i0.ɵɵreference(35);
            const _r6 = i0.ɵɵreference(50);
            const _r9 = i0.ɵɵreference(70);
            const _r15 = i0.ɵɵreference(104);
            const _r19 = i0.ɵɵreference(122);
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("has-error", _r0.invalid && _r0.touched);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.criminalRec);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.criminalRec);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", _r0.invalid && _r0.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r3.invalid && _r3.touched);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.mentor);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.mentor);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", _r3.invalid && _r3.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r6.invalid && _r6.touched);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.workPupil);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.workPupil);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", _r6.invalid && _r6.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r9.invalid && _r9.touched);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.mentorSkills);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.mentorSkills);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.mentorSkills);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.mentorSkills);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.mentorSkills);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", _r9.invalid && _r9.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r15.invalid && _r15.touched);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.menteeNo);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.menteeNo);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.menteeNo);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r15.invalid && _r15.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("has-error", _r19.invalid && _r19.touched);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.backgrnd.mentoringReason);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r19.invalid && _r19.touched);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", ctx.errMessage, " ");
        } }, directives: [i2.ɵangular_packages_forms_forms_ba, i2.NgControlStatusGroup, i2.NgForm, i2.RadioControlValueAccessor, i2.DefaultValueAccessor, i2.RequiredValidator, i2.NgControlStatus, i2.NgModel, i3.NgIf], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 15px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    border: 1px solid grey;\r\n    border-top: 8px solid green;\r\n    border-radius: 5px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    background-color: green;\r\n\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n}\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    border-top: hidden;\r\n    border-left: hidden;\r\n    border-radius: hidden;\r\n    border-bottom: groove;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n    outline: none\r\n}\r\n\r\n.required[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: red;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n\r\nprogress[value][_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    height: 20px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .form-btn[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 30px;\r\n    color: white;\r\n    background-color: green;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.back-btn[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 30px;\r\n    color: green;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%]{\r\n    color: red;\r\n    margin-left: 15px;\r\n}\r\n\r\n.myRadio[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%]{\r\n    border-bottom: green 2px solid;\r\n}\r\n\r\n.errMessage[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 1.2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvci1iYWNrZ3JvdW5kLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBOzs7Ozs7RUFNRTs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7OztFQU9FOztBQUNGO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibWVudG9yLWJhY2tncm91bmQtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLmhlYWRlciAuZm9ybS1ncm91cCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5tYWluIC5mb3JtLWdyb3VwIC5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXIgc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuaDMscCxsYWJlbCxpbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuXHJcbi8qLmhlYWRlciAuZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0qL1xyXG5cclxuLmhlYWRlciAuZm9ybS1ncm91cCBoM3tcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgYm9yZGVyLXRvcDogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQ6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IGhpZGRlbjtcclxuICAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lXHJcbn1cclxuXHJcbi5yZXF1aXJlZHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLypcclxuLm1haW4gLmZvcm0tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59Ki9cclxuLm1haW4gaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxucHJvZ3Jlc3NbdmFsdWVde1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIC5mb3JtLWJ0bntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYmFjay1idG57XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuLmhlbHAtYmxvY2t7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5teVJhZGlve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWR7XHJcbiAgICBib3JkZXItYm90dG9tOiBncmVlbiAycHggc29saWQ7XHJcbn1cclxuXHJcbi5lcnJNZXNzYWdle1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuIl19 */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "mom0":
/*!**********************************************************!*\
  !*** ./src/app/register-role/register-role.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RegisterRoleComponent = void 0;
    class RegisterRoleComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    exports.RegisterRoleComponent = RegisterRoleComponent;
    RegisterRoleComponent.ɵfac = function RegisterRoleComponent_Factory(t) { return new (t || RegisterRoleComponent)(); };
    RegisterRoleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RegisterRoleComponent, selectors: [["app-register-role"]], decls: 2, vars: 0, template: function RegisterRoleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "register-role works!");
            i0.ɵɵelementEnd();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1yb2xlLmNvbXBvbmVudC5jc3MifQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/platform-browser */ "jhN1"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ./app/app.module */ "ZAI4"), __webpack_require__(/*! ./environments/environment */ "AytR")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, __NgCli_bootstrap_1, core_1, app_module_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    __NgCli_bootstrap_1.platformBrowser().bootstrapModule(app_module_1.AppModule)
        .catch(err => console.error(err));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map