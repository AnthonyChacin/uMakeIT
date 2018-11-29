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
/* harmony import */ var _view_registro_login_registro_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/registro-login/registro-login.component */ "./src/app/view/registro-login/registro-login.component.ts");
/* harmony import */ var _navigation_home_navigation_home_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/home-navigation/home-navigation.component */ "./src/app/navigation/home-navigation/home-navigation.component.ts");
/* harmony import */ var _navigation_login_navigation_login_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/login-navigation/login-navigation.component */ "./src/app/navigation/login-navigation/login-navigation.component.ts");
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/home/home.component */ "./src/app/view/home/home.component.ts");
/* harmony import */ var _view_view_compras_view_compras_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view-compras/view-compras.component */ "./src/app/view/view-compras/view-compras.component.ts");
/* harmony import */ var _view_view_orden_view_orden_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view-orden/view-orden.component */ "./src/app/view/view-orden/view-orden.component.ts");
/* harmony import */ var _view_view_cambio_clave_view_cambio_clave_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/view-cambio-clave/view-cambio-clave.component */ "./src/app/view/view-cambio-clave/view-cambio-clave.component.ts");
/* harmony import */ var _view_view_product_customization_view_product_customization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/view-product-customization/view-product-customization.component */ "./src/app/view/view-product-customization/view-product-customization.component.ts");
/* harmony import */ var _navigation_administrator_home_navigation_administrator_home_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/administrator-home-navigation/administrator-home-navigation.component */ "./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.ts");
/* harmony import */ var _view_product_search_view_product_search_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/product-search-view/product-search-view.component */ "./src/app/view/product-search-view/product-search-view.component.ts");
/* harmony import */ var _view_view_register_new_admin_view_register_new_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/view-register-new-admin/view-register-new-admin.component */ "./src/app/view/view-register-new-admin/view-register-new-admin.component.ts");
/* harmony import */ var _view_product_edit_view_product_edit_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/product-edit-view/product-edit-view.component */ "./src/app/view/product-edit-view/product-edit-view.component.ts");
/* harmony import */ var _view_view_pending_orders_view_pending_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/view-pending-orders/view-pending-orders.component */ "./src/app/view/view-pending-orders/view-pending-orders.component.ts");
/* harmony import */ var _view_view_add_product_view_add_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/view-add-product/view-add-product.component */ "./src/app/view/view-add-product/view-add-product.component.ts");
/* harmony import */ var _view_order_completion_view_order_completion_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/order-completion-view/order-completion-view.component */ "./src/app/view/order-completion-view/order-completion-view.component.ts");
/* harmony import */ var _prepa_prepa5_prepa5_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./prepa/prepa5/prepa5.component */ "./src/app/prepa/prepa5/prepa5.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth-admin.guard */ "./src/app/guards/auth-admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _view_registro_login_registro_login_component__WEBPACK_IMPORTED_MODULE_2__["RegistroLoginComponent"] }
        ], component: _navigation_login_navigation_login_navigation_component__WEBPACK_IMPORTED_MODULE_4__["LoginNavigationComponent"]
    },
    {
        path: '',
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: _view_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
            { path: 'compras', component: _view_view_compras_view_compras_component__WEBPACK_IMPORTED_MODULE_6__["ViewComprasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
            { path: 'orden', component: _view_view_orden_view_orden_component__WEBPACK_IMPORTED_MODULE_7__["ViewOrdenComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
            { path: 'cambio-clave', component: _view_view_cambio_clave_view_cambio_clave_component__WEBPACK_IMPORTED_MODULE_8__["ViewCambioClaveComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
            { path: 'product-customization/:name', component: _view_view_product_customization_view_product_customization_component__WEBPACK_IMPORTED_MODULE_9__["ViewProductCustomizationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
            { path: 'finalize-order', component: _view_order_completion_view_order_completion_view_component__WEBPACK_IMPORTED_MODULE_16__["OrderCompletionViewComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
            { path: 'prepa', component: _prepa_prepa5_prepa5_component__WEBPACK_IMPORTED_MODULE_17__["Prepa5Component"] }
        ], component: _navigation_home_navigation_home_navigation_component__WEBPACK_IMPORTED_MODULE_3__["HomeNavigationComponent"]
    },
    {
        path: '',
        children: [
            { path: '', redirectTo: '/home-admin', pathMatch: 'full' },
            { path: 'home-admin', component: _view_product_search_view_product_search_view_component__WEBPACK_IMPORTED_MODULE_11__["ProductSearchViewComponent"], canActivate: [_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_19__["AuthAdminGuard"]] },
            { path: 'new-admin', component: _view_view_register_new_admin_view_register_new_admin_component__WEBPACK_IMPORTED_MODULE_12__["ViewRegisterNewAdminComponent"], canActivate: [_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_19__["AuthAdminGuard"]] },
            { path: 'product-edit/:name', component: _view_product_edit_view_product_edit_view_component__WEBPACK_IMPORTED_MODULE_13__["ProductEditViewComponent"], canActivate: [_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_19__["AuthAdminGuard"]] },
            { path: 'pending-orders', component: _view_view_pending_orders_view_pending_orders_component__WEBPACK_IMPORTED_MODULE_14__["ViewPendingOrdersComponent"], canActivate: [_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_19__["AuthAdminGuard"]] },
            { path: 'cambio-clave-admin', component: _view_view_cambio_clave_view_cambio_clave_component__WEBPACK_IMPORTED_MODULE_8__["ViewCambioClaveComponent"], canActivate: [_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_19__["AuthAdminGuard"]] },
            { path: 'add-product', component: _view_view_add_product_view_add_product_component__WEBPACK_IMPORTED_MODULE_15__["ViewAddProductComponent"], canActivate: [_guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_19__["AuthAdminGuard"]] }
        ], component: _navigation_administrator_home_navigation_administrator_home_navigation_component__WEBPACK_IMPORTED_MODULE_10__["AdministratorHomeNavigationComponent"]
    } /* ,

    {
        path: 'home',
        children: [
            { path: 'home', redirectTo: '/home/compras', pathMatch: 'full' },
            { path: 'compras', component: ViewComprasComponent },
            { path: 'home', redirectTo: '/home/orden', pathMatch: 'full' },
            { path: 'orden', component: ViewOrdenComponent },
            { path: 'home', redirectTo: '/home/cambio-clave', pathMatch: 'full' },
            { path: 'cambio-clave', component: ViewCambioClaveComponent },
            { path: 'home', redirectTo: '/home/product-customization', pathMatch: 'full' },
            { path: 'product-customization', component: ViewProductCustomizationComponent },
            { path: 'home', redirectTo: '/home/finalize-order', pathMatch: 'full' },
            { path: 'finalize-order', component: OrderCompletionViewComponent }
        ], component: HomeNavigationComponent
    },
    {
        path: 'home-admin',
        children: [
            { path: 'home-admin', redirectTo: '/home-admin/new-admin', pathMatch: 'full' },
            { path: 'new-admin', component: ViewRegisterNewAdminComponent },
            { path: 'home-admin', redirectTo: '/home-admin/product-edit', pathMatch: 'full' },
            { path: 'product-edit', component: ProductEditViewComponent },
            { path: 'home-admin', redirectTo: '/home-admin/pending-orders', pathMatch: 'full' },
            { path: 'pending-orders', component: ViewPendingOrdersComponent },
            { path: 'home-admin', redirectTo: '/home-admin/cambio-clave', pathMatch: 'full' },
            { path: 'cambio-clave', component: ViewCambioClaveComponent },
            { path: 'home-admin', redirectTo: '/home-admin/add-product', pathMatch: 'full' },
            { path: 'add-product', component: ViewAddProductComponent }
        ], component: AdministratorHomeNavigationComponent
    } */
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

module.exports = ".fondo-cuerpo{\r\n    background-color: #F98;\r\n}\r\n\r\n.separador{\r\n    height: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

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
        this.title = 'uMakeIT!';
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
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _view_registro_login_registro_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/registro-login/registro-login.component */ "./src/app/view/registro-login/registro-login.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_compras_compras_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/compras/compras.component */ "./src/app/component/compras/compras.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/home/home.component */ "./src/app/view/home/home.component.ts");
/* harmony import */ var _navigation_login_navigation_login_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/login-navigation/login-navigation.component */ "./src/app/navigation/login-navigation/login-navigation.component.ts");
/* harmony import */ var _navigation_home_navigation_home_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation/home-navigation/home-navigation.component */ "./src/app/navigation/home-navigation/home-navigation.component.ts");
/* harmony import */ var _view_view_dashboard_view_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/view-dashboard/view-dashboard.component */ "./src/app/view/view-dashboard/view-dashboard.component.ts");
/* harmony import */ var _view_view_compras_view_compras_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/view-compras/view-compras.component */ "./src/app/view/view-compras/view-compras.component.ts");
/* harmony import */ var _component_orden_orden_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/orden/orden.component */ "./src/app/component/orden/orden.component.ts");
/* harmony import */ var _view_view_orden_view_orden_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view/view-orden/view-orden.component */ "./src/app/view/view-orden/view-orden.component.ts");
/* harmony import */ var _component_header_cliente_header_cliente_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/header-cliente/header-cliente.component */ "./src/app/component/header-cliente/header-cliente.component.ts");
/* harmony import */ var _component_cambio_clave_cambio_clave_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/cambio-clave/cambio-clave.component */ "./src/app/component/cambio-clave/cambio-clave.component.ts");
/* harmony import */ var _view_view_cambio_clave_view_cambio_clave_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view/view-cambio-clave/view-cambio-clave.component */ "./src/app/view/view-cambio-clave/view-cambio-clave.component.ts");
/* harmony import */ var _component_product_customization_product_customization_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/product-customization/product-customization.component */ "./src/app/component/product-customization/product-customization.component.ts");
/* harmony import */ var _view_view_product_customization_view_product_customization_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view/view-product-customization/view-product-customization.component */ "./src/app/view/view-product-customization/view-product-customization.component.ts");
/* harmony import */ var _navigation_administrator_home_navigation_administrator_home_navigation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./navigation/administrator-home-navigation/administrator-home-navigation.component */ "./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.ts");
/* harmony import */ var _view_product_search_view_product_search_view_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view/product-search-view/product-search-view.component */ "./src/app/view/product-search-view/product-search-view.component.ts");
/* harmony import */ var _component_table_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/table/table.component */ "./src/app/component/table/table.component.ts");
/* harmony import */ var _component_navbar_searcher_navbar_searcher_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/navbar-searcher/navbar-searcher.component */ "./src/app/component/navbar-searcher/navbar-searcher.component.ts");
/* harmony import */ var _view_view_register_new_admin_view_register_new_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./view/view-register-new-admin/view-register-new-admin.component */ "./src/app/view/view-register-new-admin/view-register-new-admin.component.ts");
/* harmony import */ var _component_new_user_registration_form_new_user_registration_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/new-user-registration-form/new-user-registration-form.component */ "./src/app/component/new-user-registration-form/new-user-registration-form.component.ts");
/* harmony import */ var _component_form_product_form_product_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/form-product/form-product.component */ "./src/app/component/form-product/form-product.component.ts");
/* harmony import */ var _view_product_edit_view_product_edit_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./view/product-edit-view/product-edit-view.component */ "./src/app/view/product-edit-view/product-edit-view.component.ts");
/* harmony import */ var _view_view_pending_orders_view_pending_orders_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./view/view-pending-orders/view-pending-orders.component */ "./src/app/view/view-pending-orders/view-pending-orders.component.ts");
/* harmony import */ var _component_pending_orders_list_pending_orders_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./component/pending-orders-list/pending-orders-list.component */ "./src/app/component/pending-orders-list/pending-orders-list.component.ts");
/* harmony import */ var _component_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./component/header-admin/header-admin.component */ "./src/app/component/header-admin/header-admin.component.ts");
/* harmony import */ var _view_view_add_product_view_add_product_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./view/view-add-product/view-add-product.component */ "./src/app/view/view-add-product/view-add-product.component.ts");
/* harmony import */ var _component_new_product_form_new_product_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./component/new-product-form/new-product-form.component */ "./src/app/component/new-product-form/new-product-form.component.ts");
/* harmony import */ var _view_order_completion_view_order_completion_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./view/order-completion-view/order-completion-view.component */ "./src/app/view/order-completion-view/order-completion-view.component.ts");
/* harmony import */ var _component_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./component/order-summary/order-summary.component */ "./src/app/component/order-summary/order-summary.component.ts");
/* harmony import */ var _prepa_prepa5_prepa5_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./prepa/prepa5/prepa5.component */ "./src/app/prepa/prepa5/prepa5.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./service/users/users.service */ "./src/app/service/users/users.service.ts");
/* harmony import */ var _service_storage_storage_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./service/storage/storage.service */ "./src/app/service/storage/storage.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./guards/auth-admin.guard */ "./src/app/guards/auth-admin.guard.ts");
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
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _view_registro_login_registro_login_component__WEBPACK_IMPORTED_MODULE_6__["RegistroLoginComponent"],
                _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _component_compras_compras_component__WEBPACK_IMPORTED_MODULE_10__["ComprasComponent"],
                _view_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _navigation_login_navigation_login_navigation_component__WEBPACK_IMPORTED_MODULE_13__["LoginNavigationComponent"],
                _navigation_home_navigation_home_navigation_component__WEBPACK_IMPORTED_MODULE_14__["HomeNavigationComponent"],
                _view_registro_login_registro_login_component__WEBPACK_IMPORTED_MODULE_6__["RegistroLoginComponent"],
                _view_view_dashboard_view_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["ViewDashboardComponent"],
                _view_view_compras_view_compras_component__WEBPACK_IMPORTED_MODULE_16__["ViewComprasComponent"],
                _component_orden_orden_component__WEBPACK_IMPORTED_MODULE_17__["OrdenComponent"],
                _view_view_orden_view_orden_component__WEBPACK_IMPORTED_MODULE_18__["ViewOrdenComponent"],
                _component_header_cliente_header_cliente_component__WEBPACK_IMPORTED_MODULE_19__["HeaderClienteComponent"],
                _component_cambio_clave_cambio_clave_component__WEBPACK_IMPORTED_MODULE_20__["CambioClaveComponent"],
                _view_view_cambio_clave_view_cambio_clave_component__WEBPACK_IMPORTED_MODULE_21__["ViewCambioClaveComponent"],
                _component_product_customization_product_customization_component__WEBPACK_IMPORTED_MODULE_22__["ProductCustomizationComponent"],
                _view_view_product_customization_view_product_customization_component__WEBPACK_IMPORTED_MODULE_23__["ViewProductCustomizationComponent"],
                _navigation_administrator_home_navigation_administrator_home_navigation_component__WEBPACK_IMPORTED_MODULE_24__["AdministratorHomeNavigationComponent"],
                _view_product_search_view_product_search_view_component__WEBPACK_IMPORTED_MODULE_25__["ProductSearchViewComponent"],
                _component_table_table_component__WEBPACK_IMPORTED_MODULE_26__["TableComponent"],
                _component_navbar_searcher_navbar_searcher_component__WEBPACK_IMPORTED_MODULE_27__["NavbarSearcherComponent"],
                _view_view_register_new_admin_view_register_new_admin_component__WEBPACK_IMPORTED_MODULE_28__["ViewRegisterNewAdminComponent"],
                _component_new_user_registration_form_new_user_registration_form_component__WEBPACK_IMPORTED_MODULE_29__["NewUserRegistrationFormComponent"],
                _component_form_product_form_product_component__WEBPACK_IMPORTED_MODULE_30__["FormProductComponent"],
                _view_product_edit_view_product_edit_view_component__WEBPACK_IMPORTED_MODULE_31__["ProductEditViewComponent"],
                _view_view_pending_orders_view_pending_orders_component__WEBPACK_IMPORTED_MODULE_32__["ViewPendingOrdersComponent"],
                _component_pending_orders_list_pending_orders_list_component__WEBPACK_IMPORTED_MODULE_33__["PendingOrdersListComponent"],
                _component_new_product_form_new_product_form_component__WEBPACK_IMPORTED_MODULE_36__["NewProductFormComponent"],
                _component_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_34__["HeaderAdminComponent"],
                _view_view_add_product_view_add_product_component__WEBPACK_IMPORTED_MODULE_35__["ViewAddProductComponent"],
                _view_order_completion_view_order_completion_view_component__WEBPACK_IMPORTED_MODULE_37__["OrderCompletionViewComponent"],
                _component_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_38__["OrderSummaryComponent"],
                _prepa_prepa5_prepa5_component__WEBPACK_IMPORTED_MODULE_39__["Prepa5Component"]
            ],
            imports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_41__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_40__["environment"].firebase),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_42__["AngularFireStorageModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_3__["NgxPayPalModule"]
            ],
            providers: [
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_43__["AngularFirestore"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_44__["AngularFireAuth"],
                _service_users_users_service__WEBPACK_IMPORTED_MODULE_45__["UsersService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_47__["AuthGuard"],
                _guards_auth_admin_guard__WEBPACK_IMPORTED_MODULE_48__["AuthAdminGuard"],
                _service_storage_storage_service__WEBPACK_IMPORTED_MODULE_46__["StorageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/cambio-clave/cambio-clave.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/cambio-clave/cambio-clave.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-propio-rl{\r\n    background-color: #ff0000b8;\r\n    border-color: #df00002b;    \r\n    -ms-grid-row-align: left;    \r\n        align-self: left;\r\n    color: white;\r\n}\r\n\r\n.btn-propio-rl:hover{\r\n    background-color: #F9B53C;\r\n}\r\n\r\n.cambio-clave{\r\n    background-color: rgba(255, 21, 0, 0.25);\r\n    padding: 2%;\r\n    border-radius: 5%;\r\n    max-width: 100%;\r\n}\r\n\r\n.titulo{\r\n    text-align: center;\r\n    border-radius: 5%;\r\n}\r\n\r\n.caja-mensaje{\r\n    color: darkslategray;\r\n}\r\n\r\n.padding{\r\n    padding: 0%;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/component/cambio-clave/cambio-clave.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/cambio-clave/cambio-clave.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"separador\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-4\"></div>\r\n  <div class=\"col-4 cambio-clave\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <h1 class=\"cambio-clave titulo\">Cambio de Clave</h1>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pwd\">Nueva clave:</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"pwdn\" placeholder=\"Ingrese la nueva clave\" name=\"pswn\"\r\n          [(ngModel)]=\"user.pswn\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pwd\">Confirmación de nueva clave:</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"pwdnc\" placeholder=\"Reingrese la nueva clave\" name=\"pswnc\"\r\n          [(ngModel)]=\"user.pswnc\" required>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-primary btn-propio-rl\" (click)=\"onChangePassword()\">Cambiar Clave</button>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"separador\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group caja-mensaje alert alert-success\" *ngIf=\"cambioClave === true\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 titulo\">\r\n            <strong>¡Operación realizada con éxito!</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group caja-mensaje alert alert-success\" *ngIf=\"nonEqual === true\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 titulo\">\r\n            <strong>¡Las claves ingresadas no coinciden!</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/cambio-clave/cambio-clave.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/cambio-clave/cambio-clave.component.ts ***!
  \******************************************************************/
/*! exports provided: CambioClaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambioClaveComponent", function() { return CambioClaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CambioClaveComponent = /** @class */ (function () {
    function CambioClaveComponent() {
        this.user = {};
        this.cambioClave = false;
        this.nonEqual = false;
    }
    CambioClaveComponent.prototype.onChangePassword = function () {
        var user = firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
        if (this.user.pswn === this.user.pswnc) {
            var newPassword = this.user.pswnc;
            user.updatePassword(newPassword).then(function () {
            }).catch(function (error) {
                console.log(error);
                alert("La operacion de cambiar clave es delicada y requiere de una autenticacion reciente. Inicie sesion nuevamente e intente cambiar su clave.");
            });
            this.user.pswn = "";
            this.user.pswnc = "";
            this.nonEqual = false;
            this.cambioClave = true;
        }
        else {
            this.user.pswn = "";
            this.user.pswnc = "";
            this.cambioClave = false;
            this.nonEqual = true;
        }
    };
    CambioClaveComponent.prototype.ngOnInit = function () {
    };
    CambioClaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cambio-clave',
            template: __webpack_require__(/*! ./cambio-clave.component.html */ "./src/app/component/cambio-clave/cambio-clave.component.html"),
            styles: [__webpack_require__(/*! ./cambio-clave.component.css */ "./src/app/component/cambio-clave/cambio-clave.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CambioClaveComponent);
    return CambioClaveComponent;
}());



/***/ }),

/***/ "./src/app/component/compras/compras.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/compras/compras.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".compras-propio{\r\n    margin-top: 2%;\r\n    margin-left: 4%; \r\n    padding: 0;\r\n    max-height: 95%;\r\n    height: 50%;\r\n    z-index: 0;\r\n    position: relative;\r\n    float: center;\r\n    width: 94%;\r\n    background-color: whitesmoke;\r\n}\r\n.contenido-fila-compras{\r\n    padding-left: 2%; \r\n    padding-right: 2%;\r\n    padding-bottom: 2%;\r\n    max-height: 95%;\r\n    overflow: auto;\r\n}\r\n.contenido-fila-compras h4{\r\n    display: flex;\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\n.recomprar{\r\n    margin-right:0;\r\n    float: right; \r\n    padding: 0;\r\n    width: 20%;\r\n    height: 3%;\r\n    text-align: center;\r\n}\r\n.btn-cerrar-compras{\r\n    z-index: 0;\r\n    margin-top: 20%;\r\n    float: right;\r\n}\r\n.principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}\r\n.special-card{\r\n    border: 5px solid var(--dark);\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/compras/compras.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/compras/compras.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-4\" *ngFor=\"let order of orders\">\r\n        <div class=\"card special-card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Pedido</h5>\r\n                <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let product of products\">\r\n                        {{product.data.name}}\r\n                    </li>\r\n                </ul>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <a routerLink=\"/product-customization\" class=\"btn btn-outline-secondary col-3\">Editar</a>\r\n                    <a href=\"/finalize-order\" class=\"btn btn-outline-secondary col-3\">Recomprar</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/compras/compras.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/compras/compras.component.ts ***!
  \********************************************************/
/*! exports provided: ComprasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasComponent", function() { return ComprasComponent; });
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

var ComprasComponent = /** @class */ (function () {
    function ComprasComponent() {
        this.mostrarCompras = true;
    }
    ComprasComponent.prototype.onHideCompras = function () {
        this.mostrarCompras = false;
    };
    ComprasComponent.prototype.ngOnInit = function () {
    };
    ComprasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compras',
            template: __webpack_require__(/*! ./compras.component.html */ "./src/app/component/compras/compras.component.html"),
            styles: [__webpack_require__(/*! ./compras.component.css */ "./src/app/component/compras/compras.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComprasComponent);
    return ComprasComponent;
}());



/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}\r\n.container-imagenes{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin-left: 0.18rem;\r\n}\r\n.container-imagen{\r\n    height: 18rem;\r\n    margin: 0;\r\n    margin-bottom: 2rem;\r\n}\r\n.container-imagen1{\r\n    margin: 0;\r\n    padding-right: 0.9rem;\r\n    padding-left: 0.9rem;\r\n}\r\n.thumbnail{\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n    color: white;\r\n    font-size: 120%;\r\n    font-style: italic;\r\n}\r\n.agregar-plato{\r\n    z-index: 1;\r\n    bottom: 0;\r\n    position: absolute;\r\n    padding: 0;\r\n    background-image: url('/src/assets/agregar-orden.jpg');\r\n    background-size: cover;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    border-radius: 5%;\r\n}\r\n.nombre-plato{\r\n    width: 100%;\r\n    background-color: rgba(0,0,0,0.7);\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 principal-header\">\r\n      Menú de platos\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"separador\"></div>\r\n\r\n  <div class=\"row container-imagenes\">\r\n    <div class=\"col-4 container-imagen\" *ngFor=\"let product of products\">\r\n      <div class=\"thumbnail\" [ngStyle]=\"{'background-image': 'url(' + product.data.url_img + ')'}\">\r\n        <div class=\"container-imagen1\">\r\n          <div class=\"row\">\r\n            <button class=\"agregar-plato\" (click)='onShowProductCustomization(product.data.name)'></button>\r\n            <div class=\"nombre-plato\">{{product.data.name}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_products_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/products/products.service */ "./src/app/service/products/products.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.products = [];
    }
    DashboardComponent.prototype.onShowProductCustomization = function (name) {
        this.router.navigate(["/product-customization/" + name]);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getProducts().subscribe(function (productSnapshot) {
            _this.products = [];
            productSnapshot.forEach(function (productData) {
                firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('/products/').doc(productData.payload.doc.id).onSnapshot(function (data) {
                    if (data.get('plato') === 'Principal') {
                        if (data.get('available') === 'Disponible') {
                            _this.products.push({
                                id: productData.payload.doc.id,
                                data: productData.payload.doc.data()
                            });
                        }
                    }
                });
            });
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/component/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/component/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_service_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-propio{\r\n    margin-bottom:0;\r\n    border-radius:0;\r\n}\r\n.col-pos{\r\n    position: relative;\r\n    max-width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"separador\"></div>\r\n\r\n<div class=\"row d-flex bg-dark text-white pt-5 jumbotron text-justify footer-propio\">\r\n\r\n  <div class=\"col-4 col-pos\">\r\n    <p><strong>Contacto</strong></p>\r\n    <p>anthony.chacin@correo.unimet.edu.ve</p>\r\n    <p>0416 711 37 55</p>\r\n    <p>arantxa.garcia@correo.unimet.edu.ve</p>\r\n    <p>0412 080 66 25</p>\r\n  </div>\r\n\r\n  <div class=\"col-4 col-pos\">\r\n    <p><strong>uMakeIT!</strong></p>\r\n    <p>La mejor cadena de comida a tu alcance.</p>\r\n    <p><strong>Categorías</strong></p>\r\n    <p>Alimentos</p>\r\n    <p>Servicio a domicilio</p>\r\n  </div>\r\n\r\n  <div class=\"col-4 col-pos\">\r\n    <p>Aplicación web realizada con fines educativos</p>\r\n    <p>Universidad Metropolitana</p>\r\n    <p>Caracas - Venezuela</p>\r\n    <p>&copy; 2018 uMakeIT!. Todos los derechos reservados.</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/form-product/form-product.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/form-product/form-product.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".save{\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.btn-propio-rl:hover{\r\n    background-color: #F9B53C;\r\n}\r\n\r\n.registro-login-propio{\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.inicio-registro{\r\n    background-color: rgba(255, 21, 0, 0.25);\r\n    padding: 2%;\r\n    border-radius: 5%;\r\n    max-width: 100%;\r\n}\r\n\r\n.titulo-inicio-registro{\r\n    text-align: center;\r\n    border-radius: 5%;\r\n}\r\n\r\n.inicio-sesion{\r\n    background-color: rgba(255, 21, 0, 0.25);\r\n    padding: 2%;\r\n    border-radius: 5%;\r\n    max-width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.titulo-inicio-sesion{\r\n    text-align: center;\r\n    border-radius: 5%;\r\n}\r\n\r\n.boton-inicio-sesion{\r\n    background-color: #ff0000b8;\r\n    border-color: #df00002b;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    color: white;\r\n}\r\n\r\n.boton-inicio-sesion:hover{\r\n    background-color: #F9B53C;\r\n}\r\n\r\n.separador{\r\n    margin-top: 0.08rem;\r\n}\r\n\r\n.boxImage{\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    width: 100%;\r\n    height: 15rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/form-product/form-product.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/form-product/form-product.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <br>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-4 \"></div>\r\n  <div class=\"col-4 inicio-registro\">\r\n    <form (ngSubmit)=\"onEditProduct()\">\r\n      <div class=\"form-group\">\r\n        <h1 class=\"inicio-registro titulo-inicio-registro\">Editar Producto</h1>\r\n        <label for=\"text\">Imagen:</label>\r\n        <div class=\"boxImage\" [ngStyle]=\"{'background-image': 'url(' + product.url_img + ')'}\"></div>\r\n        <div class=\"separador\"></div>\r\n        <input type=\"file\" (change)=\"uploadFile($event)\" [(ngModel)]=\"product.name_img\" name=\"img\" accept=\"jpg, jpeg\">\r\n        <div class=\"separador\"></div>\r\n        <div class=\"progress\" id=\"progreso-edit\" *ngIf=\"subiendoImagen === true\">\r\n          <div class=\"progress-bar progress-bar-striped bg-success\" id=\"barra-progreso-edit\" role=\"progressbar\"\r\n            aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n          </div>\r\n        </div>\r\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"imagenSubida === true\">\r\n          Imagen disponible en: <a [href]=\"downloadURL\" id=\"myimg\">{{downloadURL}}</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"text\">Nombre:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"nombre\" placeholder=\"Ingrese nombre del producto aqui\" name=\"nombre\"\r\n          [(ngModel)]=\"product.name\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"text\">Tipo de plato:</label>\r\n        <select type=\"text\" class=\"form-control\" id=\"tipo\" [(ngModel)]=\"product.plato\" name=\"tipo\" required>\r\n          <option selected>Principal</option>\r\n          <option>Ración</option>\r\n          <option>Aderezo</option>\r\n          <option>Jugo</option>\r\n          <option>Postre</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"text\">Precio en Bs.:</label>\r\n        <input type=\"number\" value=\"\" class=\"form-control\" min=\"0\" id=\"precio\" placeholder=\"Indique el precio\" name=\"precio\"\r\n          [(ngModel)]=\"product.price\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"text\">Disponibilidad:</label>\r\n        <select type=\"select\" class=\"form-control\" id=\"disponibilidad\" [(ngModel)]=\"product.available\" name=\"available\"\r\n          required>\r\n          <option selected>Disponible</option>\r\n          <option>No Disponible</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <input type=\"submit\" value=\"Guardar cambios\" class=\"btn btn-secondary\">\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"form-group caja-mensaje alert alert-success row\" *ngIf=\"editado === true\">\r\n        <strong class=\"col-8\">¡Operación realizada con éxito!</strong>\r\n        <a class=\"col-4\" routerLink=\"/home-admin\">\r\n          <button type=\"button\" class=\"btn btn-success\">Finalizar</button>\r\n        </a>\r\n      </div>\r\n      <div class=\"form-group caja-mensaje alert alert-warning row\" *ngIf=\"faltanDatos === true\">\r\n        <strong class=\"col-8\">¡Faltan por rellenar algunos campos!</strong>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-4\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/form-product/form-product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/form-product/form-product.component.ts ***!
  \******************************************************************/
/*! exports provided: FormProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductComponent", function() { return FormProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_products_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/products/products.service */ "./src/app/service/products/products.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormProductComponent = /** @class */ (function () {
    function FormProductComponent(productsService, storage) {
        this.productsService = productsService;
        this.storage = storage;
        this.product = {};
        this.editado = false;
        this.faltanDatos = false;
        this.subiendoImagen = false;
        this.imagenSubida = false;
        this.subirImagen = false;
    }
    FormProductComponent.prototype.uploadFile = function (event) {
        this.subirImagen = true;
        this.file = event.target.files[0];
        this.filePath = 'platos_principales/' + this.file.name;
    };
    FormProductComponent.prototype.onEditProduct = function () {
        var _this = this;
        if (this.product.name != "" && this.product.available != "" && this.product.name_img != "" && this.product.plato != "" && this.product.price != null) {
            if (this.subirImagen === true) {
                var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
                var uploadTask_1 = storageRef.child(this.filePath).put(this.file);
                this.subiendoImagen = true;
                uploadTask_1.on('state_changed', function (snapshot) {
                    var barraProgreso = (uploadTask_1.snapshot.bytesTransferred / uploadTask_1.snapshot.totalBytes) * 100;
                    document.getElementById('barra-progreso-edit').style.width = barraProgreso + "%";
                    if (uploadTask_1.snapshot.bytesTransferred === uploadTask_1.snapshot.totalBytes) {
                        _this.subiendoImagen = false;
                        _this.imagenSubida = true;
                    }
                }, function (error) {
                    console.log(error);
                }, function () {
                    uploadTask_1.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        _this.downloadURL = downloadURL;
                        _this.product.url_img = _this.downloadURL;
                        var data = {
                            name: _this.product.name,
                            plato: _this.product.plato,
                            price: _this.product.price,
                            available: _this.product.available,
                            name_img: _this.file.name,
                            url_img: _this.downloadURL
                        };
                        _this.subiendoImagen = false;
                        _this.productsService.updateProduct(data, _this.docID);
                        _this.editado = true;
                        _this.faltanDatos = false;
                        console.log(_this.downloadURL);
                        _this.imagenSubida = true;
                        document.getElementById('barra-progreso-edit').style.width = "0%";
                    });
                });
            }
            else {
                var data = {
                    name: this.product.name,
                    plato: this.product.plato,
                    price: this.product.price,
                    available: this.product.available,
                    name_img: this.product.name_img,
                    url_img: this.product.url_img
                };
                this.productsService.updateProduct(data, this.docID);
                this.editado = true;
                this.faltanDatos = false;
                console.log(this.product.url_img);
            }
        }
        else {
            this.editado = false;
            this.faltanDatos = true;
        }
    };
    FormProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getProducts().subscribe(function (productSnapshot) {
            productSnapshot.forEach(function (productData) {
                firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('/products/').doc(productData.payload.doc.id).onSnapshot(function (data) {
                    if (data.get('name') === _this.name) {
                        _this.product.name_img = data.get('name_img');
                        _this.product.name = data.get('name');
                        _this.product.plato = data.get('plato');
                        _this.product.price = data.get('price');
                        _this.product.available = data.get('available');
                        _this.product.url_img = data.get('url_img');
                        _this.docID = productData.payload.doc.id;
                    }
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormProductComponent.prototype, "name", void 0);
    FormProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-product',
            template: __webpack_require__(/*! ./form-product.component.html */ "./src/app/component/form-product/form-product.component.html"),
            styles: [__webpack_require__(/*! ./form-product.component.css */ "./src/app/component/form-product/form-product.component.css")]
        }),
        __metadata("design:paramtypes", [_service_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], FormProductComponent);
    return FormProductComponent;
}());



/***/ }),

/***/ "./src/app/component/header-admin/header-admin.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/header-admin/header-admin.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-propio{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    display: inline-flex;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n.menu{\r\n    display: inline-flex;\r\n    margin-right: 0;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n.navbar-propio img{\r\n    height:5rem;\r\n}\r\n.navar-nav li>a{\r\n    display: flex;\r\n}\r\n.nav-link{\r\n    padding: 0;\r\n}\r\n.navbar-nav>li>ul{\r\n    display: none;\r\n}\r\n.navbar-nav>li:hover>ul{\r\n    display: block;\r\n}\r\n.dropdown-item:hover{\r\n    background-color: rgba(0,0,0,0.5);\r\n    color: white;\r\n}\r\n/* .fixed{\r\n    position: fixed;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/component/header-admin/header-admin.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/header-admin/header-admin.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 m-0 p-0\">\r\n    <nav class=\"navbar navbar-expand-sm bg-white navbar-light navbar-propio\">\r\n\r\n      <a class=\"navbar-brand logo col-1\" href=\"/home-admin\">\r\n        <img alt=\"uMakeIT! Logo\" src=\"assets/logo.bmp\">\r\n      </a>\r\n      <div class=\"col-8\"></div>\r\n      <div class=\"menu\">\r\n        <nav class=\"navbar navbar-expand-sm bg-white navbar-light\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link dropdown-toggle\" id=\"navbardrop\" data-toggle=\"dropdown\"><strong>{{name}}</strong></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a class=\"dropdown-item\" routerLink=\"/add-product\">Agregar Producto</a></li>\r\n                <li><a class=\"dropdown-item\" routerLink=\"/home-admin/\">Buscar Producto</a></li>\r\n                <li><a class=\"dropdown-item\" routerLink=\"/cambio-clave-admin\">Cambiar Clave</a></li>\r\n                <li><a class=\"dropdown-item\" routerLink=\"/new-admin\">Registrar Administrador</a></li>\r\n                <li><a class=\"dropdown-item\" routerLink=\"/pending-orders\">Visualizar Pedidos</a></li>\r\n                <li><a class=\"dropdown-item\" routerLink=\"/login\" (click)=\"onClickLogout()\">Salir</a></li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n\r\n    </nav>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/header-admin/header-admin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/header-admin/header-admin.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderAdminComponent", function() { return HeaderAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/users/users.service */ "./src/app/service/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderAdminComponent = /** @class */ (function () {
    function HeaderAdminComponent(userService, route, afAuth) {
        this.userService = userService;
        this.route = route;
        this.afAuth = afAuth;
        this.profile$ = this.userService.profile$;
    }
    HeaderAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profile$.subscribe(function (user) {
            _this.name = user.firstName + " " + user.lastName;
        });
    };
    HeaderAdminComponent.prototype.onClickLogout = function () {
        this.userService.logout();
    };
    HeaderAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-admin',
            template: __webpack_require__(/*! ./header-admin.component.html */ "./src/app/component/header-admin/header-admin.component.html"),
            styles: [__webpack_require__(/*! ./header-admin.component.css */ "./src/app/component/header-admin/header-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_service_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], HeaderAdminComponent);
    return HeaderAdminComponent;
}());



/***/ }),

/***/ "./src/app/component/header-cliente/header-cliente.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/header-cliente/header-cliente.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-propio{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    display: inline-flex;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n.menu{\r\n    display: inline-flex;\r\n    margin-right: 0;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n.navbar-propio img{\r\n    height:5rem;\r\n}\r\n.navar-nav li>a{\r\n    display: flex;\r\n}\r\n.nav-link{\r\n    padding: 0;\r\n}\r\n.navbar-nav>li>ul{\r\n    display: none;\r\n}\r\n.navbar-nav>li:hover>ul{\r\n    display: block;\r\n}\r\n.dropdown-item:hover{\r\n    background-color: rgba(0,0,0,0.5);\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/header-cliente/header-cliente.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/header-cliente/header-cliente.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 m-0 p-0\">\r\n    <nav class=\"navbar navbar-expand-sm bg-white navbar-light navbar-propio\">\r\n\r\n      <a class=\"navbar-brand logo col-1\" routerLink=\"/home\">\r\n        <img alt=\"uMakeIT! Logo\" src=\"assets/logo.bmp\">\r\n      </a>\r\n      <div class=\"col-8\"></div>\r\n      <div class=\"menu\">\r\n        <nav class=\"navbar navbar-expand-sm bg-white navbar-light\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link dropdown-toggle\" id=\"navbardrop\" data-toggle=\"dropdown\"><strong>{{name}}</strong></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a class=\"dropdown-item\" routerLink=\"/cambio-clave\">Cambiar Clave</a></li>\r\n                <li><a class=\"dropdown-item\" routerLink=\"/compras\">Compras</a></li>\r\n                <li><a class=\"dropdown-item\" routerLink=\"/home\">Menú de platos</a></li>\r\n                <li><a class=\"dropdown-item\" routerLink=\"/orden\">Orden</a></li>\r\n                <li><a class=\"dropdown-item\" routerLink=\"/login\" (click)=\"onClickLogout()\">Salir</a></li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n\r\n    </nav>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/header-cliente/header-cliente.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/header-cliente/header-cliente.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderClienteComponent", function() { return HeaderClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/users/users.service */ "./src/app/service/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderClienteComponent = /** @class */ (function () {
    function HeaderClienteComponent(userService, route, afAuth) {
        this.userService = userService;
        this.route = route;
        this.afAuth = afAuth;
        this.profile$ = this.userService.profile$;
    }
    HeaderClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profile$.subscribe(function (data) {
            _this.name = data.firstName + " " + data.lastName;
        });
    };
    HeaderClienteComponent.prototype.onClickLogout = function () {
        this.userService.logout();
    };
    HeaderClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-cliente',
            template: __webpack_require__(/*! ./header-cliente.component.html */ "./src/app/component/header-cliente/header-cliente.component.html"),
            styles: [__webpack_require__(/*! ./header-cliente.component.css */ "./src/app/component/header-cliente/header-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_service_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], HeaderClienteComponent);
    return HeaderClienteComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-propio{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    display: inline-flex;\r\n    max-width: 100%;\r\n    z-index: 0;\r\n    max-height: 100%;\r\n}\r\n.navbar-propio img{\r\n    z-index: 0;\r\n    height:5rem;\r\n}\r\n.container-header{\r\n    height: 5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 m-0 p-0\">\r\n    <nav class=\"navbar navbar-expand-sm bg-white navbar-light navbar-propio\">\r\n\r\n      <a class=\"navbar-brand col-1\" href=''>\r\n        <img alt=\"uMakeIT! Logo\" src=\"assets/logo.bmp\">\r\n      </a>\r\n      \r\n    </nav>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/navbar-searcher/navbar-searcher.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/navbar-searcher/navbar-searcher.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-propio{\r\n    border-radius: 5rem;\r\n    margin-top: 2rem;\r\n}\r\n.searcher{\r\n    border-radius: 5rem;\r\n    text-align: center;\r\n}\r\n.submit-searcher{\r\n    border-radius: 5rem;\r\n}\r\n.mensaje{\r\n    color: white;\r\n    border-radius: 5rem;\r\n}\r\n.separador-espacio{\r\n    width: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/component/navbar-searcher/navbar-searcher.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/navbar-searcher/navbar-searcher.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark navbar-propio\">\r\n  <form class=\"form-inline\" (ngSubmit)=\"onShowTableFiltered()\">\r\n    <div class=\"mensaje\">Ingrese la palabra clave del producto que desea buscar (Nombre, Precio o Disponibilidad)</div>\r\n    <div class=\"separador-espacio\"></div>\r\n    <input class=\"form-control mr-sm-2 searcher\" type=\"text\" placeholder=\"Palabra Clave\" [(ngModel)]=\"product.name\"\r\n      name=\"name\">\r\n    <input class=\"btn btn-success submit-searcher\" type=\"submit\" value=\"Buscar\">\r\n  </form>\r\n</nav>"

/***/ }),

/***/ "./src/app/component/navbar-searcher/navbar-searcher.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/navbar-searcher/navbar-searcher.component.ts ***!
  \************************************************************************/
/*! exports provided: NavbarSearcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarSearcherComponent", function() { return NavbarSearcherComponent; });
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

var NavbarSearcherComponent = /** @class */ (function () {
    function NavbarSearcherComponent() {
        this.product = {};
        this.filteredTable = false;
    }
    NavbarSearcherComponent.prototype.onShowTableFiltered = function () {
        this.filteredTable = true;
    };
    NavbarSearcherComponent.prototype.ngOnInit = function () {
    };
    NavbarSearcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-searcher',
            template: __webpack_require__(/*! ./navbar-searcher.component.html */ "./src/app/component/navbar-searcher/navbar-searcher.component.html"),
            styles: [__webpack_require__(/*! ./navbar-searcher.component.css */ "./src/app/component/navbar-searcher/navbar-searcher.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarSearcherComponent);
    return NavbarSearcherComponent;
}());



/***/ }),

/***/ "./src/app/component/new-product-form/new-product-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/new-product-form/new-product-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-propio-rl:hover{\r\n    background-color: #F9B53C;\r\n}\r\n\r\n.registro-login-propio{\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.inicio-registro{\r\n    background-color: rgba(255, 21, 0, 0.25);\r\n    padding: 2%;\r\n    border-radius: 5%;\r\n    max-width: 100%;\r\n}\r\n\r\n.titulo-inicio-registro{\r\n    text-align: center;\r\n    border-radius: 5%;\r\n}\r\n\r\n.inicio-sesion{\r\n    background-color: rgba(255, 21, 0, 0.25);\r\n    padding: 2%;\r\n    border-radius: 5%;\r\n    max-width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.titulo-inicio-sesion{\r\n    text-align: center;\r\n    border-radius: 5%;\r\n}\r\n\r\n.boton-inicio-sesion{\r\n    background-color: #ff0000b8;\r\n    border-color: #df00002b;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    color: white;\r\n}\r\n\r\n.boton-inicio-sesion:hover{\r\n    background-color: #F9B53C;\r\n}\r\n\r\n.input-imagen{\r\n    height: 100%;\r\n}\r\n\r\n.separador{\r\n    margin-top: 0.1rem;\r\n}"

/***/ }),

/***/ "./src/app/component/new-product-form/new-product-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/new-product-form/new-product-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <br>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-4 \"></div>\r\n  <div class=\"col-4 inicio-registro\">\r\n    <form (ngSubmit)=\"onCreateProduct()\">\r\n      <div class=\"form-group\">\r\n        <h1 class=\"inicio-registro titulo-inicio-registro\">Agregar Producto</h1>\r\n        <label for=\"text\">Imagen:</label>\r\n        <input type=\"file\" (change)=\"uploadFile($event)\" [(ngModel)]=\"product.name_img\" name=\"img\" accept=\"jpg, jpeg\">\r\n        <div class=\"separador\"></div>\r\n        <div class=\"progress\" id=\"progreso\" *ngIf=\"subiendoImagen === true\">\r\n          <div class=\"progress-bar progress-bar-striped bg-success\" id=\"barra-progreso\" role=\"progressbar\"\r\n            aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"imagenSubida === true\">\r\n        Imagen disponible en: <a [href]=\"downloadURL\" id=\"myimg\">{{downloadURL}}</a>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"text\">Nombre:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"nombre\" placeholder=\"Ingrese nombre del producto aqui\" name=\"nombre\"\r\n          [(ngModel)]=\"product.name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"text\">Tipo de plato:</label>\r\n        <select type=\"text\" class=\"form-control\" id=\"tipo\" [(ngModel)]=\"product.plato\" name=\"tipo\">\r\n          <option selected>Principal</option>\r\n          <option>Ración</option>\r\n          <option>Aderezo</option>\r\n          <option>Jugo</option>\r\n          <option>Postre</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"text\">Precio en Bs.:</label>\r\n        <input type=\"number\" value=\"\" class=\"form-control\" min=\"0\" id=\"precio\" placeholder=\"Indique el precio\" name=\"precio\"\r\n          [(ngModel)]=\"product.price\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"text\">Disponibilidad:</label>\r\n        <select type=\"select\" class=\"form-control\" id=\"disponibilidad\" [(ngModel)]=\"product.available\" name=\"available\">\r\n          <option selected>Disponible</option>\r\n          <option>No Disponible</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <input type=\"submit\" value=\"Agregar\" class=\"btn btn-secondary\">\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"form-group caja-mensaje alert alert-success row\" *ngIf=\"agregado === true\">\r\n        <strong class=\"col-8\">¡Producto agregado exitosamente!</strong>\r\n        <a class=\"col-4\" routerLink=\"/home-admin\">\r\n          <button type=\"button\" class=\"btn btn-success\">Finalizar</button>\r\n        </a>\r\n      </div>\r\n      <div class=\"form-group caja-mensaje alert alert-warning row\" *ngIf=\"faltanDatos === true\">\r\n        <strong class=\"col-8\">¡Faltan campos por rellenar!</strong>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-4\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/new-product-form/new-product-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/new-product-form/new-product-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductFormComponent", function() { return NewProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_products_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/products/products.service */ "./src/app/service/products/products.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewProductFormComponent = /** @class */ (function () {
    function NewProductFormComponent(productsService, storage) {
        this.productsService = productsService;
        this.storage = storage;
        this.product = {};
        this.agregado = false;
        this.faltanDatos = false;
        this.subiendoImagen = false;
        this.imagenSubida = false;
        this.product.name = "";
        this.product.name_img = "";
    }
    NewProductFormComponent.prototype.uploadFile = function (event) {
        this.file = event.target.files[0];
        this.filePath = 'platos_principales/' + this.file.name;
    };
    NewProductFormComponent.prototype.onAgregar = function () {
        this.agregado = true;
    };
    NewProductFormComponent.prototype.onCreateProduct = function () {
        var _this = this;
        if (this.product.name != "" && this.product.name_img != "" && this.product.price != null && this.product.plato != "" && this.product.available != "") {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
            var uploadTask_1 = storageRef.child(this.filePath).put(this.file);
            this.subiendoImagen = true;
            uploadTask_1.on('state_changed', function (snapshot) {
                var barraProgreso = (uploadTask_1.snapshot.bytesTransferred / uploadTask_1.snapshot.totalBytes) * 100;
                document.getElementById('barra-progreso').style.width = barraProgreso + "%";
            }, function (error) {
                console.log(error);
            }, function () {
                uploadTask_1.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    _this.downloadURL = downloadURL;
                    var data = {
                        name: _this.product.name,
                        plato: _this.product.plato,
                        price: _this.product.price,
                        available: _this.product.available,
                        name_img: _this.file.name,
                        url_img: _this.downloadURL
                    };
                    _this.subiendoImagen = false;
                    document.getElementById('barra-progreso').style.width = "0%";
                    _this.productsService.createProduct(data);
                    _this.agregado = true;
                    _this.faltanDatos = false;
                    console.log(_this.downloadURL);
                    _this.imagenSubida = true;
                });
            });
        }
        else {
            this.faltanDatos = true;
        }
    };
    NewProductFormComponent.prototype.ngOnInit = function () {
    };
    NewProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product-form',
            template: __webpack_require__(/*! ./new-product-form.component.html */ "./src/app/component/new-product-form/new-product-form.component.html"),
            styles: [__webpack_require__(/*! ./new-product-form.component.css */ "./src/app/component/new-product-form/new-product-form.component.css")]
        }),
        __metadata("design:paramtypes", [_service_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], NewProductFormComponent);
    return NewProductFormComponent;
}());



/***/ }),

/***/ "./src/app/component/new-user-registration-form/new-user-registration-form.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/component/new-user-registration-form/new-user-registration-form.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-propio-rl{\r\n    background-color: #ff0000b8;\r\n    border-color: #df00002b;    \r\n    -ms-grid-row-align: left;    \r\n        align-self: left;\r\n    color: white;\r\n}\r\n\r\n.btn-propio-rl:hover{\r\n    background-color: #F9B53C;\r\n}\r\n\r\n.registro-login-propio{\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.inicio-registro{\r\n    background-color: rgba(255, 21, 0, 0.25);\r\n    padding: 2%;\r\n    border-radius: 5%;\r\n    max-width: 100%;\r\n}\r\n\r\n.titulo-inicio-registro{\r\n    text-align: center;\r\n    border-radius: 5%;\r\n}\r\n\r\n.inicio-sesion{\r\n    background-color: rgba(255, 21, 0, 0.25);\r\n    padding: 2%;\r\n    border-radius: 5%;\r\n    max-width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.titulo-inicio-sesion{\r\n    text-align: center;\r\n    border-radius: 5%;\r\n}\r\n\r\n.boton-inicio-sesion{\r\n    background-color: #ff0000b8;\r\n    border-color: #df00002b;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    color: white;\r\n}\r\n\r\n.boton-inicio-sesion:hover{\r\n    background-color: #F9B53C;\r\n}\r\n\r\n.redondeo-checkbox{\r\n    border-radius: 15%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/new-user-registration-form/new-user-registration-form.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/component/new-user-registration-form/new-user-registration-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"separador\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 \"></div>\r\n    <div class=\"col-4 inicio-registro\">\r\n      <form (ngSubmit)=\"onCreateUser()\">\r\n        <div class=\"form-group\">\r\n          <h1 class=\"inicio-registro titulo-inicio-registro\">Registro</h1>\r\n          <label for=\"text\">Nombre:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"nombre\" placeholder=\"Ingrese nombre\" name=\"nombre\" [(ngModel)]=\"user.firstName\"\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"text\">Apellido:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"apellido\" placeholder=\"Ingrese apellido\" name=\"apellido\"\r\n            [(ngModel)]=\"user.lastName\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Ingrese email\" name=\"email\" [(ngModel)]=\"user.email\"\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pwd\">Contraseña:</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Ingrese contraseña\" name=\"pwd\" [(ngModel)]=\"user.psw\"\r\n            required>\r\n        </div>\r\n        <input type=\"submit\" class=\"btn btn-primary btn-propio-rl\" value=\"Registrar\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"separador\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group caja-mensaje alert alert-success row\" *ngIf=\"newAdmin === true\">\r\n          <strong class=\"col-8\">¡El usuario ha sido registrado con exito!</strong>\r\n          <a class=\"col-4\" routerLink=\"/home-admin\">\r\n            <button type=\"button\" class=\"btn btn-success\">Finalizar</button>\r\n          </a>\r\n        </div>\r\n        <div class=\"form-group caja-mensaje alert alert-danger row\" *ngIf=\"newAdmin1 === true && newAdmin === false\">\r\n            <strong class=\"col-8\">¡Ya existe un usuario registrado con el email indicado!</strong>\r\n          </div>\r\n        <div class=\"form-group caja-mensaje alert alert-warning row\" *ngIf=\"newAdmin2 === true\">\r\n          <strong class=\"col-8\">¡Faltan campos por rellenar, recuerde que no debe haber ningún campo vacío!</strong>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/new-user-registration-form/new-user-registration-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/new-user-registration-form/new-user-registration-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NewUserRegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserRegistrationFormComponent", function() { return NewUserRegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/users/users.service */ "./src/app/service/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewUserRegistrationFormComponent = /** @class */ (function () {
    function NewUserRegistrationFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {};
        this.newAdmin = false;
        this.newAdmin1 = false;
        this.newAdmin2 = false;
        this.user.email = "";
        this.user.firstName = "";
        this.user.lastName = "";
        this.user.psw = "";
    }
    NewUserRegistrationFormComponent.prototype.onCreateUser = function () {
        var _this = this;
        this.newAdmin = false;
        this.newAdmin1 = false;
        this.newAdmin2 = false;
        if (this.user.email != "" && this.user.firstName != "" && this.user.lastName != "" && this.user.psw != "") {
            var email_1 = this.user.email;
            var password = this.user.psw;
            var rol_1 = 'Administrador';
            var firstName_1 = this.user.firstName;
            var lastName_1 = this.user.lastName;
            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('/users/').doc(this.user.email).onSnapshot(function (data) {
                if (data.get('email') === email_1) {
                    _this.newAdmin1 = true;
                }
                else {
                    _this.newAdmin1 = false;
                    _this.newAdmin = true;
                }
            });
            this.user.firstName = "";
            this.user.lastName = "";
            this.user.email = "";
            this.user.psw = "";
            this.userService.registerUser(email_1, password)
                .then(function (res) {
                var data = {
                    email: email_1,
                    firstName: firstName_1,
                    lastName: lastName_1,
                    psw: null,
                    pswn: null,
                    pswnc: null,
                    rol: rol_1
                };
                _this.userService.createUser(data, email_1);
            }).catch(function (err) {
                console.log(err);
            });
            this.newAdmin2 = false;
        }
        else {
            this.newAdmin2 = true;
        }
    };
    NewUserRegistrationFormComponent.prototype.ngOnInit = function () {
        this.newAdmin = false;
        this.newAdmin1 = false;
        this.newAdmin2 = false;
    };
    NewUserRegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user-registration-form',
            template: __webpack_require__(/*! ./new-user-registration-form.component.html */ "./src/app/component/new-user-registration-form/new-user-registration-form.component.html"),
            styles: [__webpack_require__(/*! ./new-user-registration-form.component.css */ "./src/app/component/new-user-registration-form/new-user-registration-form.component.css")]
        }),
        __metadata("design:paramtypes", [_service_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewUserRegistrationFormComponent);
    return NewUserRegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/component/orden/orden.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/orden/orden.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #343a40;\r\n    position: flex;\r\n    margin-left: 0.25rem;\r\n    margin-top: 1rem;\r\n    margin-right: 0.25rem;\r\n    border-radius: 0.25rem; \r\n    text-align: center;\r\n    align-content: center;\r\n    overflow-x: hidden;\r\n}\r\n.sub{\r\n    color: white;\r\n}\r\nh3{\r\n    color: #343a40;\r\n    text-align: left;\r\n}\r\nthead{\r\n    background-color: #343a40;\r\n    color: white;\r\n    text-align: center;\r\n}\r\ntbody{\r\n    background-color: white;\r\n}\r\n.img1{\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/orden/orden.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/orden/orden.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"row inline-flex\">\r\n  <div class=\"col-12\"><h3>Lista de platos en el pedido</h3></div>\r\n</div>\r\n<div class=\"table-responsive table\">\r\n    <h5 class=\"sub\">Platos pertenecientes a la orden del cliente</h5>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Imagen</th>\r\n        <th>Nombre del plato</th>\r\n        <th>Modificar</th>\r\n        <th>Eliminar</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <tr *ngFor=\"let order of orders\">\r\n        <td class=\"img1\" [ngStyle]=\"{'background-image': 'url(' + order.url_img + ')'}\"></td>\r\n        <td>{{order.name || async}}</td>\r\n        <td><button class=\"btn btn-warning\" (click)='onShowProductCustomization(order.name)'>Editar plato</button></td>\r\n        <td><button class=\"btn btn-danger\" (click)='eliminarPlato(order.idPlate)'>Eliminar plato</button></td>\r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n      <button type=\"button\" class=\"btn btn-dark\" routerLink=\"/finalize-order\">Finalizar Pedido</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/component/orden/orden.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/orden/orden.component.ts ***!
  \****************************************************/
/*! exports provided: OrdenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenComponent", function() { return OrdenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/orders/orders.service */ "./src/app/service/orders/orders.service.ts");
/* harmony import */ var _service_plates_plates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/plates/plates.service */ "./src/app/service/plates/plates.service.ts");
/* harmony import */ var _service_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/products/products.service */ "./src/app/service/products/products.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrdenComponent = /** @class */ (function () {
    function OrdenComponent(ordersService, platesService, productsService, router) {
        this.ordersService = ordersService;
        this.platesService = platesService;
        this.productsService = productsService;
        this.router = router;
        this.orders = [];
        this.eliminar = false;
    }
    OrdenComponent.prototype.onShowProductCustomization = function (name) {
        this.platesService.setAgregar(false);
        this.platesService.setEditar(true);
        this.router.navigate(["/product-customization/" + name]);
    };
    OrdenComponent.prototype.eliminarPlato = function (idPlate) {
        var _this = this;
        var mensaje = confirm("¿Estás seguro de que deseas eliminar el producto? Si haces click en 'Aceptar', el mismo no podrá ser recuperado.");
        if (mensaje) {
            this.ordersService.getOrders().subscribe(function (orderSnapshot) {
                orderSnapshot.forEach(function (orderData) {
                    firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection('/orders/').doc(orderData.payload.doc.id).onSnapshot(function (data) {
                        data.get('plates_references').forEach(function (res) {
                            if (res === idPlate) {
                                _this.platesService.deletePlate(idPlate);
                                alert("¡El plato ha sido eliminado con éxito!");
                            }
                        });
                    });
                });
            });
        }
        /*if (mensaje) {
    
          this.ordersService.getOrders().subscribe( orderSnapshot => {
            orderSnapshot.forEach( (orderData: any) => {
                if(orderData.payload.doc.data().reference_user === firebase.auth().currentUser.email && orderData.payload.doc.data().actual) {
                  this.platesService.deletePlate(idPlate).then(res => {
                    alert("¡Plato eliminado exitosamente!");
                  })
                  this.ordersService.getOrder(orderData.payload.doc.id).update({
                  plates_references: firebase.firestore.FieldValue.arrayRemove(idPlate)
                  })
                }
            })
          })
        }*/
    };
    OrdenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordersService.getOrders().subscribe(function (orderSnapshot) {
            _this.orders = [];
            orderSnapshot.forEach(function (orderData) {
                if (orderData.payload.doc.data().reference_user === firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email && orderData.payload.doc.data().actual) {
                    var arrayPlates = orderData.payload.doc.data().plates_references;
                    _this.idOrder = orderData.payload.id;
                    for (var i = 0; i < arrayPlates.length; i++) {
                        _this.platesService.getPlate(arrayPlates[i]).snapshotChanges().subscribe(function (dataPlate) {
                            var idProduct = dataPlate.payload.get('reference_plate');
                            _this.productsService.getProduct(idProduct).snapshotChanges().subscribe(function (dataProduct) {
                                _this.orders.push({
                                    idOrder: orderData.payload.id,
                                    idPlate: dataPlate.payload.id,
                                    name: dataProduct.payload.get('name'),
                                    url_img: dataProduct.payload.get('url_img'),
                                    name_img: dataProduct.payload.get('name_img')
                                });
                            });
                        });
                    }
                }
            });
        });
    };
    OrdenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orden',
            template: __webpack_require__(/*! ./orden.component.html */ "./src/app/component/orden/orden.component.html"),
            styles: [__webpack_require__(/*! ./orden.component.css */ "./src/app/component/orden/orden.component.css")]
        }),
        __metadata("design:paramtypes", [_service_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _service_plates_plates_service__WEBPACK_IMPORTED_MODULE_2__["PlatesService"],
            _service_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], OrdenComponent);
    return OrdenComponent;
}());



/***/ }),

/***/ "./src/app/component/order-summary/order-summary.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/order-summary/order-summary.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead{\r\n    background-color: darkslategray;\r\n    font-style: italic; \r\n}\r\ntbody{\r\n    background-color: white;\r\n    font-style: italic;\r\n}\r\nh5{\r\n    font-style: italic;\r\n    color: darkslategray;\r\n}\r\n.box-btn{\r\n    text-align: center;\r\n    align-content: center;\r\n}"

/***/ }),

/***/ "./src/app/component/order-summary/order-summary.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/order-summary/order-summary.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-6\">\r\n    <h5 class=\"sub\">Productos añadidos a la orden</h5>\r\n    <table class=\"table\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th>Nombre del plato</th>\r\n          <th>Precio</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n\r\n        <tr *ngFor=\"let productoComprar of productosComprar\">\r\n          <td>{{productoComprar.name}}</td>\r\n          <td>{{productoComprar.price}} Bs.</td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <h5 class=\"sub\">Costo de la orden</h5>\r\n    <table class=\"table\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th>Descripción</th>\r\n          <th>Monto</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Sub-total:</td>\r\n          <td>{{subtotal}} Bs.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Iva (16%):</td>\r\n          <td>{{iva}} Bs.</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Total:</td>\r\n          <td>{{total}} Bs.</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"row box-btn\">\r\n  <div class=\"col-4\">\r\n    <form (ngSubmit)=\"initConfig()\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\r\n      <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\r\n      <input type=\"hidden\" name=\"hosted_button_id\" value=\"FR82DLEJ7TDZJ\">\r\n      <input type=\"image\" src=\"https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif\" border=\"0\" name=\"submit\"\r\n        alt=\"PayPal - The safer, easier way to pay online!\">\r\n    </form>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onPay()\" routerLink=\"/compras\">Pagar</button>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <button type=\"button\" class=\"btn btn-dark\" routerLink=\"/orden\">Volver a orden</button>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/home\">Cancelar operación</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/order-summary/order-summary.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/order-summary/order-summary.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/orders/orders.service */ "./src/app/service/orders/orders.service.ts");
/* harmony import */ var _service_plates_plates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/plates/plates.service */ "./src/app/service/plates/plates.service.ts");
/* harmony import */ var _service_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/products/products.service */ "./src/app/service/products/products.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent(ordersService, platesService, productsService) {
        this.ordersService = ordersService;
        this.platesService = platesService;
        this.productsService = productsService;
        this.productosComprar = [];
        this.platesMostrar = [];
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordersService.getOrders().subscribe((function (orderSnapshot) {
            _this.productosComprar = [];
            _this.platesMostrar = [];
            _this.iva = 0;
            _this.total = 0;
            _this.subtotal = 0;
            orderSnapshot.forEach(function (dataOrder) {
                if (dataOrder.payload.doc.data().reference_user === firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email && dataOrder.payload.doc.data().actual) {
                    dataOrder.payload.doc.data().plates_references.forEach(function (plates) {
                        _this.platesService.getPlate(plates).snapshotChanges().subscribe(function (dataPlates) {
                            var precioPorPlato = 0;
                            dataPlates.payload.get('products_plate').forEach(function (productsPlate) {
                                _this.productsService.getProduct(productsPlate.id).snapshotChanges().subscribe(function (platoSecundario) {
                                    /*this.productosComprar.push({
                                        name: platoSecundario.payload.get('name'),
                                        price: platoSecundario.payload.get('price')*productsPlate.cant
                                    })*/
                                    _this.subtotal += platoSecundario.payload.get('price') * productsPlate.cant;
                                    precioPorPlato += platoSecundario.payload.get('price') * productsPlate.cant;
                                });
                            });
                            _this.productsService.getProduct(dataPlates.payload.get('reference_plate')).snapshotChanges().subscribe(function (platoPrincipal) {
                                precioPorPlato += platoPrincipal.payload.get('price') * dataPlates.payload.get('cant_plate');
                                _this.productosComprar.push({
                                    name: platoPrincipal.payload.get('name'),
                                    price: precioPorPlato
                                });
                                _this.subtotal += platoPrincipal.payload.get('price') * dataPlates.payload.get('cant_plate');
                                _this.iva = (_this.subtotal * 0.16);
                                _this.total = (_this.iva + _this.subtotal);
                            });
                        });
                    });
                }
            });
            console.log(_this.platesMostrar);
            console.log(_this.productosComprar);
        }));
    };
    OrderSummaryComponent.prototype.initConfig = function () {
        this.payPalConfig = new ngx_paypal__WEBPACK_IMPORTED_MODULE_5__["PayPalConfig"](ngx_paypal__WEBPACK_IMPORTED_MODULE_5__["PayPalIntegrationType"].ClientSideREST, ngx_paypal__WEBPACK_IMPORTED_MODULE_5__["PayPalEnvironment"].Sandbox, {
            commit: true,
            client: {
                sandbox: 'AWchik9_2W3vdEYgkB5xb6V4PKBC0x7F4q7li3XYk9xKv8y5pxGg0BLDrTjPWkcwfi4rFD4x7nRBkdoq'
            },
            button: {
                label: 'paypal',
            },
            onPaymentComplete: function (data, actions) {
                console.log('OnPaymentComplete');
            },
            onCancel: function (data, actions) {
                console.log('OnCancel');
            },
            onError: function (err) {
                console.log('OnError');
            },
            transactions: [{
                    amount: {
                        currency: 'USD',
                        total: this.total
                    }
                }]
        });
    };
    OrderSummaryComponent.prototype.onPay = function () {
        var _this = this;
        this.ordersService.getOrders().subscribe(function (actualOrder) {
            actualOrder.forEach(function (actualOrderData) {
                if (actualOrderData.payload.doc.data().reference_user === firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email) {
                    if (actualOrderData.payload.doc.data().actual && actualOrderData.payload.doc.data().plates_references.length != 0) {
                        //var id_order = actualOrderData.payload.doc.id;
                        _this.ordersService.getOrder(actualOrderData.payload.doc.id).update({
                            actual: false
                        }).then(function (res) {
                            var orden = {
                                reference_user: firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email,
                                actual: true,
                                plates_references: []
                            };
                            firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection('/orders').add(orden).then(function (res) {
                                console.log(res.get());
                            });
                        });
                        console.log(actualOrderData.payload.doc.id);
                    }
                }
            });
        });
        /*var cont = 0
        this.ordersService.getOrders().subscribe( orderSnapshot => {
            var id_order: string
            orderSnapshot.forEach( dataOrder => {
                if( dataOrder.payload.doc.get('reference_user') === firebase.auth().currentUser.email && dataOrder.payload.doc.get('plates_references').length === 0){
                    if(cont === 0){
                        this.ordersService.getOrder(dataOrder.payload.doc.id).update({
                            actual: true
                        })
                        cont++
                    }
                }
            })
        })*/
    };
    OrderSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-summary',
            template: __webpack_require__(/*! ./order-summary.component.html */ "./src/app/component/order-summary/order-summary.component.html"),
            styles: [__webpack_require__(/*! ./order-summary.component.css */ "./src/app/component/order-summary/order-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_service_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _service_plates_plates_service__WEBPACK_IMPORTED_MODULE_2__["PlatesService"],
            _service_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "./src/app/component/pending-orders-list/pending-orders-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/pending-orders-list/pending-orders-list.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".special-card{\r\n    border: 5px solid var(--dark);\r\n}"

/***/ }),

/***/ "./src/app/component/pending-orders-list/pending-orders-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/pending-orders-list/pending-orders-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card special-card\"  *ngFor=\"let a of aux\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Pedido pendiente 1</h5>\r\n          <ul class=\"list-group\">\r\n              <li class=\"list-group-item\">\r\n                <input class=\"col-1 elegir-comida\" type=\"checkbox\" name=\"comida1\">\r\n                {{aux}}\r\n              </li>\r\n          </ul>\r\n            <br>\r\n          <a href=\"#\" class=\"btn btn-outline-secondary\">Entregado</a>\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  </div>"

/***/ }),

/***/ "./src/app/component/pending-orders-list/pending-orders-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/pending-orders-list/pending-orders-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: PendingOrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingOrdersListComponent", function() { return PendingOrdersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/orders/orders.service */ "./src/app/service/orders/orders.service.ts");
/* harmony import */ var _service_plates_plates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/plates/plates.service */ "./src/app/service/plates/plates.service.ts");
/* harmony import */ var _service_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/products/products.service */ "./src/app/service/products/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingOrdersListComponent = /** @class */ (function () {
    function PendingOrdersListComponent(ordersService, platesService, productsService, router) {
        this.ordersService = ordersService;
        this.platesService = platesService;
        this.productsService = productsService;
        this.router = router;
        this.orders = [];
        this.aux = [];
    }
    PendingOrdersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordersService.getOrders().subscribe(function (orderSnapshot) {
            _this.orders = [];
            _this.aux = [];
            orderSnapshot.forEach(function (dataOrder) {
                if (dataOrder.payload.doc.get('actual')) {
                    dataOrder.payload.doc.get('plates_references').forEach(function (platosOrden) {
                        _this.platesService.getPlate(platosOrden).snapshotChanges().subscribe(function (dataPlate) {
                            _this.productsService.getProduct(dataPlate.payload.get('reference_plate')).snapshotChanges().subscribe(function (dataProduct) {
                                _this.aux.push(dataProduct.payload.get('name'));
                            });
                            //console.log(this.aux)
                        });
                    });
                }
            });
        });
    };
    PendingOrdersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-orders-list',
            template: __webpack_require__(/*! ./pending-orders-list.component.html */ "./src/app/component/pending-orders-list/pending-orders-list.component.html"),
            styles: [__webpack_require__(/*! ./pending-orders-list.component.css */ "./src/app/component/pending-orders-list/pending-orders-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"],
            _service_plates_plates_service__WEBPACK_IMPORTED_MODULE_2__["PlatesService"],
            _service_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PendingOrdersListComponent);
    return PendingOrdersListComponent;
}());



/***/ }),

/***/ "./src/app/component/product-customization/product-customization.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/component/product-customization/product-customization.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-img-plato-select{\r\n    height: 15rem;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    position: flex;\r\n    margin-left: 1rem;\r\n    margin-right: 0.3rem;\r\n}\r\n.center{\r\n    align-content: center;\r\n}\r\n.nombre{\r\n    width: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    font-size: 120%;\r\n    font-style: italic; \r\n    font-weight: bold;\r\n    color: white;\r\n    background-color: rgba(0,0,0,0.7);\r\n    word-break: break-all;\r\n    text-align: center;\r\n}\r\n.titulo{\r\n    width: 100%;\r\n    font-size: 120%;\r\n    font-style: italic; \r\n    font-weight: bold;\r\n    color: white;\r\n    background-color: rgba(0,0,0,0.7);\r\n}\r\n.plato-seleccionado{\r\n    background-image: url('/src/assets/ejemplo1-customization.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n    color: white;\r\n    font-size: 120%;\r\n    font-style: italic; \r\n}\r\n.nombre-plato{\r\n    width: 100%;\r\n    background-color: rgba(0,0,0,0.7);\r\n}\r\n.container-propio{\r\n    margin: 0;\r\n    background-color: white;\r\n    height: 100%;\r\n    margin-left: 1rem;\r\n    z-index: 1;\r\n    display: flex;\r\n    position: flex;\r\n\r\n}\r\n.container-plato-principal{\r\n    text-align: center;\r\n}\r\n.label-plato-principal{\r\n    padding-right: 1rem;\r\n    background-color: rgba(0,0,0,0.7);\r\n    margin-left: 0;\r\n    width: 20%;\r\n    margin-right: 0;\r\n    color: white;\r\n    position: center;\r\n    border-radius: 5%;\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n    float: center;\r\n}\r\n.label{\r\n    padding-right: 1rem;\r\n    background-color: rgba(0,0,0,0.7);\r\n    width: 100%;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    color: white;\r\n    position: flex;\r\n    border-radius: 5%;\r\n    text-align: center;\r\n}\r\n.agregar-al-plato{\r\n    width: 70%;\r\n    color: white;\r\n    background-color: rgba(0, 0, 0, 0.781);\r\n    text-align: center;\r\n    border-radius: 5%;\r\n    border: none;\r\n    align-content: center;\r\n    cursor: pointer;\r\n    font-style: italic;\r\n    font-size: 90%;\r\n}\r\n.container-boton{\r\n    padding-left: 2.5rem;\r\n}\r\nselect{\r\n    font-style: italic;\r\n    font-size: 90%;\r\n    background-color: rgba(50, 87, 87,0.8);\r\n    color: white;\r\n}\r\n.container1{\r\n    background-image: url('/src/assets/papas.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n.container2{\r\n    background-image: url('/src/assets/aderezos.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n.container3{\r\n    background-image: url('/src/assets/jugos.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n.container4{\r\n    background-image: url('/src/assets/batidos.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n.input-cantidad{\r\n    text-align: right;\r\n}\r\n.principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/component/product-customization/product-customization.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/product-customization/product-customization.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n\r\n<div class=\"row box-img-plato-select\" [ngStyle]=\"{'background-image': 'url(' + product.url_img + ')'}\">\r\n  <div class=\"col-12 container-plato-principal\">\r\n    <div class=\"nombre\">{{product.name}}</div>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <form>\r\n      <div class=\"form-group label-plato-principal col-12\">\r\n        <label for=\"cantidad\">Cantidad:</label>\r\n        <br>\r\n        <input class=\"input-cantidad\" type=\"number\" min=\"1\" max=\"100\" step=\"1\" value=\"1\" [(ngModel)]=\"plate.cant\" name=\"cant\" />\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n<div class=\"row container-propio\">\r\n  <div class=\"col-3 container1\">\r\n    <form (ngSubmit)=\"agregarRacion()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"raciones\">Raciones:</label>\r\n        <select class=\"form-control\" id=\"raciones\" [(ngModel)]=\"racion.name\" name=\"name\">\r\n          <option selected>Seleccione</option>\r\n          <option *ngFor=\"let racion1 of raciones\">{{racion1.data.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group label\">\r\n        <label for=\"cantidad\">Cantidad:</label>\r\n        <br>\r\n        <input class=\"input-cantidad\" type=\"number\" min=\"0\" max=\"100\" step=\"1\" value=\"0\" [(ngModel)]=\"racion.cant\" name=\"cant\" />\r\n      </div>\r\n\r\n      <div class=\"row container-boton\">\r\n        <div class=\"col-12\">\r\n          <input type=\"submit\" class=\"agregar-al-plato\" value=\"Agregar al plato\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"col-3 container2\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"aderezos\">Aderezos:</label>\r\n        <select class=\"form-control\" id=\"aderezos\" [(ngModel)]=\"aderezo.name\" name=\"name\">\r\n          <option selected>Seleccione</option>\r\n          <option *ngFor=\"let aderezo1 of aderezos\">{{aderezo1.data.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group label\">\r\n        <label for=\"cantidad\">Cantidad:</label>\r\n        <br>\r\n        <input class=\"input-cantidad\" type=\"number\" min=\"0\" max=\"100\" step=\"1\" value=\"0\" [(ngModel)]=\"aderezo.cant\" name=\"cant\" />\r\n      </div>\r\n      <div class=\"row container-boton\">\r\n        <div class=\"col-12\">\r\n          <button class=\"agregar-al-plato\" (click)=\"agregarAderezo()\">\r\n            <div>Agregar al plato</div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"col-3 container3\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"bebidas\">Jugos:</label>\r\n        <select class=\"form-control\" id=\"jugos-naturales\" [(ngModel)]=\"jugo.name\" name=\"name\">\r\n          <option selected>Seleccione</option>\r\n          <option *ngFor=\"let jugo1 of jugos\">{{jugo1.data.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group label\">\r\n        <label for=\"cantidad\">Cantidad:</label>\r\n        <br>\r\n        <input class=\"input-cantidad\" type=\"number\" min=\"0\" max=\"100\" step=\"1\" value=\"0\" [(ngModel)]=\"jugo.cant\" name=\"cant\" />\r\n      </div>\r\n      <div class=\"row container-boton\">\r\n        <div class=\"col-12\">\r\n          <button class=\"agregar-al-plato\" (click)=\"agregarJugo()\">\r\n            <div>Agregar al plato</div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-3 container4\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"bebidas\">Postres:</label>\r\n        <select class=\"form-control\" id=\"postres\" [(ngModel)]=\"postre.name\" name=\"name\" >\r\n          <option selected>Seleccione</option>\r\n          <option *ngFor=\"let postre1 of postres\">{{postre1.data.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group label\">\r\n        <label for=\"cantidad\">Cantidad:</label>\r\n        <br>\r\n        <input class=\"input-cantidad\" type=\"number\" min=\"0\" max=\"100\" step=\"1\" value=\"0\" [(ngModel)]=\"postre.cant\" name=\"cant\"/>\r\n      </div>\r\n      <div class=\"row container-boton\">\r\n        <div class=\"col-12\">\r\n          <button class=\"agregar-al-plato\" (click)=\"agregarPostre()\">\r\n            <div>Agregar al plato</div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-propio1\">\r\n  <div class=\"col-9\"></div>\r\n  <div clas=\"col-3;\"></div>\r\n</div>\r\n\r\n\r\n<div class=\"separador\"></div>\r\n<div class=\"separador\"></div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-3\"></div>\r\n  <div class=\"col-3\"></div>\r\n  <div class=\"col-3\"></div>\r\n  <div class=\"col-3 center\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" *ngIf=\"agregar === true\" (click)=\"agregarPlato()\">Agregar al pedido</button>\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" *ngIf=\"editar === true\" (click)=\"editarPlato()\">Editar plato</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/product-customization/product-customization.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/product-customization/product-customization.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductCustomizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCustomizationComponent", function() { return ProductCustomizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_products_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/products/products.service */ "./src/app/service/products/products.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/orders/orders.service */ "./src/app/service/orders/orders.service.ts");
/* harmony import */ var src_app_service_plates_plates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/plates/plates.service */ "./src/app/service/plates/plates.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductCustomizationComponent = /** @class */ (function () {
    function ProductCustomizationComponent(router, productsService, ordersService, platesService) {
        this.router = router;
        this.productsService = productsService;
        this.ordersService = ordersService;
        this.platesService = platesService;
        this.product = {};
        this.plate = {};
        this.order = {};
        this.racion = {};
        this.aderezo = {};
        this.jugo = {};
        this.postre = {};
        this.raciones = [];
        this.aderezos = [];
        this.jugos = [];
        this.postres = [];
        this.plato = [];
        this.orden = [];
        this.references_plates = [];
        this.editar = false;
        this.agregar = true;
    }
    ProductCustomizationComponent.prototype.limpiarCampos = function () {
        this.plate.name = "";
        this.plate.cant = null;
        this.aderezo.name = "";
        this.aderezo.cant = null;
        this.racion.name = "";
        this.racion.cant = null;
        this.jugo.name = "";
        this.jugo.cant = null;
        this.postre.name = "";
        this.postre.cant = null;
    };
    ProductCustomizationComponent.prototype.agregarPlato = function () {
        var _this = this;
        if (this.name != "" && this.plate.cant != null) {
            this.productsService.getProducts().subscribe(function (productSnapshot) {
                productSnapshot.forEach(function (productData) {
                    if (productData.payload.doc.data().name === _this.name) {
                        var reference = productData.payload.doc.id;
                        var plato = {
                            reference_plate: reference,
                            cant_plate: _this.plate.cant,
                            products_plate: _this.plato
                        };
                        firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('/plates/').add(plato).then(function (res) {
                            //Aquí estoy verificando el id con el console.log
                            console.log(res.id);
                            /*this.references_plates.push({
                                id_plates: res.id
                            })*/
                            _this.ordersService.getOrders().subscribe(function (orderSnapshot) {
                                var cont = 0;
                                var id_order;
                                orderSnapshot.forEach(function (orderData) {
                                    if (orderData.payload.doc.data().reference_user === firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email) {
                                        if (orderData.payload.doc.data().actual) {
                                            cont++;
                                            id_order = orderData.payload.doc.id;
                                        }
                                    }
                                });
                                if (cont === 0) {
                                    //plates_r.push(id_plato);
                                    _this.references_plates.push({
                                        id_plates: res.id
                                    });
                                    var orden = {
                                        reference_user: firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email,
                                        actual: true,
                                        plates_references: []
                                    };
                                    _this.ordersService.createOrder(orden);
                                    var plates_references_1 = res.id;
                                    _this.ordersService.getOrders().subscribe(function (actualOrder) {
                                        actualOrder.forEach(function (actualOrderData) {
                                            if (actualOrderData.payload.doc.data().reference_user === firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email) {
                                                if (actualOrderData.payload.doc.data().actual) {
                                                    id_order = actualOrderData.payload.doc.id;
                                                    _this.ordersService.getOrder(id_order).update({
                                                        plates_references: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(plates_references_1)
                                                    });
                                                }
                                            }
                                        });
                                    });
                                }
                                else if (cont === 1) {
                                    var plates_references = res.id;
                                    _this.ordersService.getOrder(id_order).update({
                                        plates_references: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(plates_references)
                                    });
                                    /*const orden: any = {
                                        reference_user: firebase.auth().currentUser.email,
                                        actual: true,
                                        plates_references: this.references_plates
                                    }
                                    this.ordersService.updateOrder(orden, id_order);*/
                                }
                            });
                        });
                        _this.limpiarCampos();
                        _this.router.navigate(['/orden']);
                    }
                });
            });
        }
    };
    ProductCustomizationComponent.prototype.editarPlato = function () {
        var _this = this;
        if (this.name != "" && this.plate.cant != null) {
            this.productsService.getProducts().subscribe(function (productSnapshot) {
                productSnapshot.forEach(function (productData) {
                    if (productData.payload.doc.data().name === _this.name) {
                        var reference = productData.payload.doc.id;
                        var plato = {
                            reference_plate: reference,
                            cant_plate: _this.plate.cant,
                            products_plate: _this.plato
                        };
                        _this.platesService.updatePlate(plato, _this.idPlatoEditable).then(function (res) {
                            _this.limpiarCampos();
                            _this.platesService.setAgregar(!_this.agregar);
                            _this.platesService.setEditar(!_this.editar);
                            _this.editar = false;
                            _this.agregar = true;
                        });
                    }
                });
            });
        }
    };
    ProductCustomizationComponent.prototype.agregarRacion = function () {
        var _this = this;
        if (this.racion.name != "" && this.racion.cant != null) {
            this.productsService.getProducts().subscribe(function (productSnapshot) {
                productSnapshot.forEach(function (productData) {
                    if (productData.payload.doc.data().name === _this.racion.name) {
                        _this.plato.push({
                            id: productData.payload.doc.id,
                            cant: _this.racion.cant
                        });
                        _this.racion.cant = null;
                        console.log(_this.plato);
                    }
                });
            });
        }
    };
    ProductCustomizationComponent.prototype.agregarAderezo = function () {
        var _this = this;
        if (this.aderezo.name != "" && this.aderezo.cant != null) {
            this.productsService.getProducts().subscribe(function (productSnapshot) {
                productSnapshot.forEach(function (productData) {
                    if (productData.payload.doc.data().name === _this.aderezo.name) {
                        _this.plato.push({
                            id: productData.payload.doc.id,
                            cant: _this.aderezo.cant
                        });
                        _this.aderezo.cant = null;
                        console.log(_this.plato);
                    }
                });
            });
        }
    };
    ProductCustomizationComponent.prototype.agregarJugo = function () {
        var _this = this;
        if (this.jugo.name != "" && this.jugo.cant != null) {
            this.productsService.getProducts().subscribe(function (productSnapshot) {
                productSnapshot.forEach(function (productData) {
                    if (productData.payload.doc.data().name === _this.jugo.name) {
                        _this.plato.push({
                            id: productData.payload.doc.id,
                            cant: _this.jugo.cant
                        });
                        _this.jugo.cant = null;
                        console.log(_this.plato);
                    }
                });
            });
        }
    };
    ProductCustomizationComponent.prototype.agregarPostre = function () {
        var _this = this;
        if (this.postre.name != "" && this.postre.cant != null) {
            this.productsService.getProducts().subscribe(function (productSnapshot) {
                productSnapshot.forEach(function (productData) {
                    if (productData.payload.doc.data().name === _this.postre.name) {
                        _this.plato.push({
                            id: productData.payload.doc.id,
                            cant: _this.postre.cant
                        });
                        _this.postre.cant = null;
                        console.log(_this.plato);
                    }
                });
            });
        }
    };
    ProductCustomizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agregar = this.platesService.getAgregar();
        this.editar = this.platesService.getEditar();
        this.productsService.getProducts().subscribe(function (productSnapshot) {
            productSnapshot.forEach(function (productData) {
                firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('/products/').doc(productData.payload.doc.id).onSnapshot(function (data) {
                    if (data.get('name') === _this.name) {
                        _this.product.name_img = data.get('name_img');
                        _this.product.name = data.get('name');
                        _this.product.plato = data.get('plato');
                        _this.product.price = data.get('price');
                        _this.product.available = data.get('available');
                        _this.product.url_img = data.get('url_img');
                        _this.productID = productData.payload.doc.id;
                    }
                });
            });
        });
        this.productsService.getProducts().subscribe(function (productSnapshot) {
            productSnapshot.forEach(function (productData) {
                if (productData.payload.doc.data().plato === "Ración" && productData.payload.doc.data().available === "Disponible") {
                    _this.raciones.push({
                        id: productData.payload.doc.id,
                        data: productData.payload.doc.data()
                    });
                }
                else if (productData.payload.doc.data().plato === "Aderezo" && productData.payload.doc.data().available === "Disponible") {
                    _this.aderezos.push({
                        id: productData.payload.doc.id,
                        data: productData.payload.doc.data()
                    });
                }
                else if (productData.payload.doc.data().plato === "Jugo" && productData.payload.doc.data().available === "Disponible") {
                    _this.jugos.push({
                        id: productData.payload.doc.id,
                        data: productData.payload.doc.data()
                    });
                }
                else if (productData.payload.doc.data().plato === "Postre" && productData.payload.doc.data().available === "Disponible") {
                    _this.postres.push({
                        id: productData.payload.doc.id,
                        data: productData.payload.doc.data()
                    });
                }
            });
        });
        if (!this.agregar && this.editar) {
            this.ordersService.getOrders().subscribe(function (orderSnapshot) {
                orderSnapshot.forEach(function (orderData) {
                    if (orderData.payload.doc.data().reference_user === firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email && orderData.payload.doc.data().actual) {
                        var arrayPlates = orderData.payload.doc.data().plates_references;
                        for (var i = 0; i < arrayPlates.length; i++) {
                            _this.platesService.getPlate(arrayPlates[i]).snapshotChanges().subscribe(function (dataPlate) {
                                var idProduct = dataPlate.payload.get('reference_plate');
                                _this.productsService.getProduct(idProduct).snapshotChanges().subscribe(function (dataProduct) {
                                    if (dataProduct.payload.get('name') === _this.name) {
                                        _this.idPlatoEditable = dataPlate.payload.id;
                                        /*this.editar = true;
                                        this.agregar = false;*/
                                        _this.plate.cant = dataPlate.payload.get('cant_plate');
                                        _this.buscarAderezo(dataPlate.payload.id);
                                        _this.buscarRacion(dataPlate.payload.id);
                                        _this.buscarJugo(dataPlate.payload.id);
                                        _this.buscarPostre(dataPlate.payload.id);
                                    }
                                });
                            });
                        }
                    }
                });
            });
        }
    };
    ProductCustomizationComponent.prototype.buscarAderezo = function (idPLate) {
        var _this = this;
        this.platesService.getPlate(idPLate).snapshotChanges().subscribe(function (dataPlate) {
            var products_plate = dataPlate.payload.get('products_plate');
            var _loop_1 = function (i) {
                _this.productsService.getProduct(products_plate[i].id).snapshotChanges().subscribe(function (dataProduct) {
                    if (dataProduct.payload.get('plato') === 'Aderezo') {
                        _this.aderezo.name = dataProduct.payload.get('name');
                        _this.aderezo.cant = products_plate[i].cant;
                    }
                });
            };
            for (var i = 0; i < products_plate.length; i++) {
                _loop_1(i);
            }
        });
    };
    ProductCustomizationComponent.prototype.buscarRacion = function (idPLate) {
        var _this = this;
        this.platesService.getPlate(idPLate).snapshotChanges().subscribe(function (dataPlate) {
            var products_plate = dataPlate.payload.get('products_plate');
            var _loop_2 = function (i) {
                _this.productsService.getProduct(products_plate[i].id).snapshotChanges().subscribe(function (dataProduct) {
                    if (dataProduct.payload.get('plato') === 'Ración') {
                        _this.racion.name = dataProduct.payload.get('name');
                        _this.racion.cant = products_plate[i].cant;
                    }
                });
            };
            for (var i = 0; i < products_plate.length; i++) {
                _loop_2(i);
            }
        });
    };
    ProductCustomizationComponent.prototype.buscarJugo = function (idPLate) {
        var _this = this;
        this.platesService.getPlate(idPLate).snapshotChanges().subscribe(function (dataPlate) {
            var products_plate = dataPlate.payload.get('products_plate');
            var _loop_3 = function (i) {
                _this.productsService.getProduct(products_plate[i].id).snapshotChanges().subscribe(function (dataProduct) {
                    if (dataProduct.payload.get('plato') === 'Jugo') {
                        _this.jugo.name = dataProduct.payload.get('name');
                        _this.jugo.cant = products_plate[i].cant;
                    }
                });
            };
            for (var i = 0; i < products_plate.length; i++) {
                _loop_3(i);
            }
        });
    };
    ProductCustomizationComponent.prototype.buscarPostre = function (idPLate) {
        var _this = this;
        this.platesService.getPlate(idPLate).snapshotChanges().subscribe(function (dataPlate) {
            var products_plate = dataPlate.payload.get('products_plate');
            var _loop_4 = function (i) {
                _this.productsService.getProduct(products_plate[i].id).snapshotChanges().subscribe(function (dataProduct) {
                    if (dataProduct.payload.get('plato') === 'Postre') {
                        _this.postre.name = dataProduct.payload.get('name');
                        _this.postre.cant = products_plate[i].cant;
                    }
                });
            };
            for (var i = 0; i < products_plate.length; i++) {
                _loop_4(i);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductCustomizationComponent.prototype, "name", void 0);
    ProductCustomizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-customization',
            template: __webpack_require__(/*! ./product-customization.component.html */ "./src/app/component/product-customization/product-customization.component.html"),
            styles: [__webpack_require__(/*! ./product-customization.component.css */ "./src/app/component/product-customization/product-customization.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _service_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], src_app_service_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], src_app_service_plates_plates_service__WEBPACK_IMPORTED_MODULE_4__["PlatesService"]])
    ], ProductCustomizationComponent);
    return ProductCustomizationComponent;
}());



/***/ }),

/***/ "./src/app/component/table/table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/table/table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #343a40;\r\n    position: flex;\r\n    margin-left: 0.25rem;\r\n    margin-top: 1rem;\r\n    margin-right: 0.25rem;\r\n    border-radius: 0.25rem; \r\n    text-align: center;\r\n    align-content: center;\r\n    overflow-x: hidden;\r\n}\r\nthead{\r\n    background-color: #343a40;\r\n    color: white;\r\n    text-align: center;\r\n}\r\ntbody{\r\n    background-color: white;\r\n}\r\n.editar, .eliminar{\r\n    color:#343a40;\r\n}\r\n.img1{\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: flex;\r\n}\r\n.navbar-propio{\r\n    border-radius: 5rem;\r\n    margin-top: 2rem;\r\n}\r\n.searcher{\r\n    border-radius: 5rem;\r\n    text-align: center;\r\n}\r\n.submit-searcher{\r\n    border-radius: 5rem;\r\n}\r\n.mensaje{\r\n    color: white;\r\n    border-radius: 5rem;\r\n}\r\n.separador-espacio{\r\n    width: 1rem;\r\n}\r\n.fila{\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/component/table/table.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/table/table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark navbar-propio\">\r\n    <form class=\"form-inline\" (ngSubmit)=\"onShowTableFiltered()\">\r\n        <div class=\"mensaje\">Ingrese la palabra clave del producto que desea buscar (Nombre, Precio o Disponibilidad)</div>\r\n        <div class=\"separador-espacio\"></div>\r\n        <input class=\"form-control mr-sm-2 searcher\" type=\"text\" placeholder=\"Palabra Clave\" [(ngModel)]=\"product.name\"\r\n            name=\"name\">\r\n        <input class=\"btn btn-success submit-searcher\" type=\"submit\" value=\"Buscar\">\r\n    </form>\r\n</nav>\r\n<div class=\"table-responsive table\">\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th>Imagen</th>\r\n                <th>Nombre</th>\r\n                <th>Precio</th>\r\n                <th>Disponibilidad</th>\r\n                <th class=\"editar\">Editar</th>\r\n                <th class=\"eliminar\">Eliminar</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n            <tr *ngFor=\"let product1 of products\">\r\n                <td>\r\n                    <div class=\"img1\" [ngStyle]=\"{'background-image': 'url(' + product1.data.url_img + ')'}\"></div>\r\n                </td>\r\n                <td>{{product1.data.name}}</td>\r\n                <td>{{product1.data.price}} Bs.</td>\r\n                <td>{{product1.data.available}}</td>\r\n                <td><button class=\"btn btn-warning\" (click)='onShowFormProduct(product1.data.name)'>Editar</button></td>\r\n                <td><button class=\"btn btn-danger\" (click)='onShowAlert(product1.data.name)'>Eliminar</button></td>\r\n            </tr>\r\n\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/component/table/table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/table/table.component.ts ***!
  \****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_products_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/products/products.service */ "./src/app/service/products/products.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = /** @class */ (function () {
    function TableComponent(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.products = [];
        this.product = {};
        this.product.name = "";
    }
    TableComponent.prototype.onShowFormProduct = function (name) {
        this.router.navigate(["/product-edit/" + name]);
    };
    TableComponent.prototype.onShowAlert = function (name) {
        var _this = this;
        var mensaje = confirm("¿Estás seguro de que deseas eliminar el producto? Si haces click en 'Aceptar', el mismo no podrá ser recuperado.");
        //Detectamos si el usuario acepto el mensaje
        if (mensaje) {
            this.productsService.getProducts().subscribe(function (productSnapshot) {
                productSnapshot.forEach(function (productData) {
                    firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('/products/').doc(productData.payload.doc.id).onSnapshot(function (data) {
                        if (data.get('name') === name) {
                            _this.productsService.deleteProduct(productData.payload.doc.id);
                            alert("¡El producto ha sido eliminado con éxito!");
                        }
                    });
                });
            });
        }
    };
    TableComponent.prototype.onShowTableFiltered = function () {
        this.filtro = this.product.name;
        this.getProductsFiltro();
    };
    TableComponent.prototype.getProductsFiltro = function () {
        var _this = this;
        if (this.filtro != "") {
            this.productsService.getProducts().subscribe(function (productSnapshot) {
                _this.products = [];
                productSnapshot.forEach(function (productData) {
                    firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('/products/').doc(productData.payload.doc.id).onSnapshot(function (data) {
                        if (data.get('name') === _this.filtro || data.get('available') === _this.filtro || data.get('price').toString() === _this.filtro) {
                            _this.products.push({
                                id: productData.payload.doc.id,
                                data: productData.payload.doc.data()
                            });
                        }
                    });
                });
            });
        }
        else {
            this.productsService.getProducts().subscribe(function (productSnapshot) {
                _this.products = [];
                productSnapshot.forEach(function (productData) {
                    _this.products.push({
                        id: productData.payload.doc.id,
                        data: productData.payload.doc.data()
                    });
                });
            });
        }
    };
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getProducts().subscribe(function (productSnapshot) {
            _this.products = [];
            productSnapshot.forEach(function (productData) {
                _this.products.push({
                    id: productData.payload.doc.id,
                    data: productData.payload.doc.data()
                });
            });
        });
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/component/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/component/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_service_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth-admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/auth-admin.guard.ts ***!
  \********************************************/
/*! exports provided: AuthAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function() { return AuthAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/users/users.service */ "./src/app/service/users/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthAdminGuard = /** @class */ (function () {
    function AuthAdminGuard(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    AuthAdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.usersService.profile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                if (user.rol === "Administrador") {
                    console.log("Acceso consedido");
                    return true;
                }
                else if (user.rol === "Cliente") {
                    console.log("Acceso denegado");
                    _this.router.navigate(['/home']);
                    alert("Acceso denegado!! No tiene privilegios de administrador");
                    return false;
                }
                else {
                    console.log("Acceso denegado");
                    _this.router.navigate(['/login']);
                    alert("Acceso denegado!! Usted no es un usuario registrado");
                    return false;
                }
            }
            else {
                console.log("Acceso denegado");
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    AuthAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthAdminGuard);
    return AuthAdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/users/users.service */ "./src/app/service/users/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.usersService.profile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                if (user.rol === "Cliente") {
                    console.log("Acceso consedido");
                    return true;
                }
                else if (user.rol === "Administrador") {
                    console.log("Acceso denegado");
                    _this.router.navigate(['/home-admin']);
                    alert("Acceso denegado!! No tiene privilegios de cliente");
                    return false;
                }
                else {
                    console.log("Acceso denegado");
                    _this.router.navigate(['/login']);
                    alert("Acceso denegado!! Usted no es un usuario registrado");
                    return false;
                }
            }
            else {
                console.log("Acceso denegado");
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-admin></app-header-admin>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AdministratorHomeNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorHomeNavigationComponent", function() { return AdministratorHomeNavigationComponent; });
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

var AdministratorHomeNavigationComponent = /** @class */ (function () {
    function AdministratorHomeNavigationComponent() {
    }
    AdministratorHomeNavigationComponent.prototype.ngOnInit = function () {
    };
    AdministratorHomeNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administrator-home-navigation',
            template: __webpack_require__(/*! ./administrator-home-navigation.component.html */ "./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.html"),
            styles: [__webpack_require__(/*! ./administrator-home-navigation.component.css */ "./src/app/navigation/administrator-home-navigation/administrator-home-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdministratorHomeNavigationComponent);
    return AdministratorHomeNavigationComponent;
}());



/***/ }),

/***/ "./src/app/navigation/home-navigation/home-navigation.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/navigation/home-navigation/home-navigation.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/home-navigation/home-navigation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/navigation/home-navigation/home-navigation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-cliente></app-header-cliente>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/navigation/home-navigation/home-navigation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/navigation/home-navigation/home-navigation.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomeNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNavigationComponent", function() { return HomeNavigationComponent; });
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

var HomeNavigationComponent = /** @class */ (function () {
    function HomeNavigationComponent() {
    }
    HomeNavigationComponent.prototype.ngOnInit = function () {
    };
    HomeNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-navigation',
            template: __webpack_require__(/*! ./home-navigation.component.html */ "./src/app/navigation/home-navigation/home-navigation.component.html"),
            styles: [__webpack_require__(/*! ./home-navigation.component.css */ "./src/app/navigation/home-navigation/home-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeNavigationComponent);
    return HomeNavigationComponent;
}());



/***/ }),

/***/ "./src/app/navigation/login-navigation/login-navigation.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/navigation/login-navigation/login-navigation.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/login-navigation/login-navigation.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/navigation/login-navigation/login-navigation.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigation/login-navigation/login-navigation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/navigation/login-navigation/login-navigation.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoginNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginNavigationComponent", function() { return LoginNavigationComponent; });
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

var LoginNavigationComponent = /** @class */ (function () {
    function LoginNavigationComponent() {
    }
    LoginNavigationComponent.prototype.ngOnInit = function () {
    };
    LoginNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-navigation',
            template: __webpack_require__(/*! ./login-navigation.component.html */ "./src/app/navigation/login-navigation/login-navigation.component.html"),
            styles: [__webpack_require__(/*! ./login-navigation.component.css */ "./src/app/navigation/login-navigation/login-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginNavigationComponent);
    return LoginNavigationComponent;
}());



/***/ }),

/***/ "./src/app/prepa/prepa5/prepa5.component.css":
/*!***************************************************!*\
  !*** ./src/app/prepa/prepa5/prepa5.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rojo{\r\n    color:red;\r\n}\r\n\r\n.verde{\r\n    color:green;\r\n}"

/***/ }),

/***/ "./src/app/prepa/prepa5/prepa5.component.html":
/*!****************************************************!*\
  !*** ./src/app/prepa/prepa5/prepa5.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ng-container *ngFor='let product of products'>\r\n    <div [ngClass]=\"!product.active? 'rojo':'verde'\" [ngStyle]=\"{'background-image': 'url('+ product.route + ')'}\">\r\n      <h1>{{product.price}}</h1>\r\n    </div>\r\n  </ng-container>\r\n</div>"

/***/ }),

/***/ "./src/app/prepa/prepa5/prepa5.component.ts":
/*!**************************************************!*\
  !*** ./src/app/prepa/prepa5/prepa5.component.ts ***!
  \**************************************************/
/*! exports provided: Prepa5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prepa5Component", function() { return Prepa5Component; });
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

var Prepa5Component = /** @class */ (function () {
    function Prepa5Component() {
        this.products = [
            { name: "Pizza",
                price: 5000,
                active: true,
                color: "blue",
                route: "/src/assets/ratatouille.jpg" },
            { name: "Hamburguesa",
                price: 6000,
                active: true,
                color: "green",
                route: "/src/assets/ratatouille.jpg" },
            { name: "Pan",
                price: 3000,
                active: false,
                color: "red",
                route: "/src/assets/ratatouille.jpg" }
        ];
    }
    Prepa5Component.prototype.ngOnInit = function () {
    };
    Prepa5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prepa5',
            template: __webpack_require__(/*! ./prepa5.component.html */ "./src/app/prepa/prepa5/prepa5.component.html"),
            styles: [__webpack_require__(/*! ./prepa5.component.css */ "./src/app/prepa/prepa5/prepa5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Prepa5Component);
    return Prepa5Component;
}());



/***/ }),

/***/ "./src/app/service/orders/orders.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/orders/orders.service.ts ***!
  \**************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersService = /** @class */ (function () {
    function OrdersService(afs) {
        this.afs = afs;
    }
    OrdersService.prototype.getOrders = function () {
        return this.afs.collection('/orders/').snapshotChanges();
    };
    OrdersService.prototype.getOrder = function (id) {
        return this.afs.collection('/orders/').doc(id);
    };
    OrdersService.prototype.createOrder = function (data) {
        this.afs.collection('/orders/').add(data);
    };
    OrdersService.prototype.updateOrder = function (data, id) {
        return this.afs.collection('/orders/').doc(id).set(data);
    };
    OrdersService.prototype.deleteOrder = function (id) {
        return this.afs.collection('/orders/').doc(id).delete();
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/service/plates/plates.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/plates/plates.service.ts ***!
  \**************************************************/
/*! exports provided: PlatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatesService", function() { return PlatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlatesService = /** @class */ (function () {
    function PlatesService(afs) {
        this.afs = afs;
        this.agregar = true;
        this.editar = false;
    }
    PlatesService.prototype.setAgregar = function (a) {
        this.agregar = a;
    };
    PlatesService.prototype.getAgregar = function () {
        return this.agregar;
    };
    PlatesService.prototype.setEditar = function (e) {
        this.editar = e;
    };
    PlatesService.prototype.getEditar = function () {
        return this.editar;
    };
    PlatesService.prototype.getPlates = function () {
        return this.afs.collection('/plates/').snapshotChanges();
    };
    PlatesService.prototype.getPlate = function (id) {
        return this.afs.collection('/plates/').doc(id);
    };
    PlatesService.prototype.createPlate = function (data) {
        this.afs.collection('/plates/').add(data);
    };
    PlatesService.prototype.updatePlate = function (data, id) {
        return this.afs.collection('/plates/').doc(id).set(data);
    };
    PlatesService.prototype.deletePlate = function (id) {
        return this.afs.collection('/plates/').doc(id).delete();
    };
    PlatesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], PlatesService);
    return PlatesService;
}());



/***/ }),

/***/ "./src/app/service/products/products.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/products/products.service.ts ***!
  \******************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = /** @class */ (function () {
    function ProductsService(afs) {
        this.afs = afs;
        this.productos = [];
        this.products = this.afs.collection('products').valueChanges();
    }
    ProductsService.prototype.getProducts = function () {
        return this.afs.collection('/products/').snapshotChanges();
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.afs.collection('/products/').doc(id);
    };
    ProductsService.prototype.createProduct = function (data) {
        this.afs.collection('/products/').add(data);
    };
    ProductsService.prototype.updateProduct = function (data, id) {
        return this.afs.collection('/products/').doc(id).set(data);
    };
    ProductsService.prototype.deleteProduct = function (id) {
        return this.afs.collection('/products/').doc(id).delete();
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/service/storage/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/storage/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
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

var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/service/users/users.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/users/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../orders/orders.service */ "./src/app/service/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsersService = /** @class */ (function () {
    function UsersService(afs, afAuth, router, ordersService) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ordersService = ordersService;
        this.loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
        this.claveInvalida = false;
        this.rol = "";
        this.profile$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (userData) {
            if (userData) {
                return _this.afs.doc("users/" + userData.email).snapshotChanges();
            }
            else {
                return _this.afs.doc("users/unregistred@gmail.com").snapshotChanges();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (profile) {
            return profile.payload.data();
        }));
    }
    UsersService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', 'true');
    };
    UsersService.prototype.registerUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) {
                console.log(userData);
                resolve(userData),
                    function (err) { return reject(err); };
            });
        });
    };
    UsersService.prototype.loginUser = function (email, password, firstName, lastName, rol) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) {
                _this.afAuth.authState;
                if (_this.loggedInStatus === true) {
                    _this.afAuth.auth.signInWithEmailAndPassword(email, password);
                }
                var user = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
                if (user != null) {
                    user.updateProfile({ displayName: firstName + " " + lastName, photoURL: "..." }).then(function (res) {
                        _this.setLoggedIn(true);
                        console.log(res);
                        console.log(user);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
                console.log(userData);
                console.log(user);
                resolve(userData),
                    function (err) { return reject(err); };
            }).catch(function (err) {
                //this.claveInvalida = true;
                alert("¡Contraseña inválida!");
                console.log(err);
                //this.router.navigate(['/login']);
            });
        });
    };
    UsersService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) { return auth; }));
    };
    UsersService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    UsersService.prototype.ngOnInit = function () {
    };
    /* //Obtener usuarios
    public getUsers(){
      return this.user$;
      //return this.afs.collection(this.path).snapshotChanges();
    } */
    //Obtener usuario
    UsersService.prototype.getUser = function (id) {
        return this.afs.collection('/users/').doc(id);
    };
    //Crear un usuario
    UsersService.prototype.createUser = function (user, id) {
        return this.afs.collection('/users/').doc(id).set(user);
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _orders_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/view/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/view/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/view/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-view-dashboard></app-view-dashboard>\r\n"

/***/ }),

/***/ "./src/app/view/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/home/home.component.ts ***!
  \*********************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/view/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/view/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/view/order-completion-view/order-completion-view.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/view/order-completion-view/order-completion-view.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n    color: darkslategray;\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/view/order-completion-view/order-completion-view.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/view/order-completion-view/order-completion-view.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h3>Finalización de Orden</h3>\r\n<app-order-summary></app-order-summary>"

/***/ }),

/***/ "./src/app/view/order-completion-view/order-completion-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/view/order-completion-view/order-completion-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderCompletionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCompletionViewComponent", function() { return OrderCompletionViewComponent; });
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

var OrderCompletionViewComponent = /** @class */ (function () {
    function OrderCompletionViewComponent() {
    }
    OrderCompletionViewComponent.prototype.ngOnInit = function () {
    };
    OrderCompletionViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-completion-view',
            template: __webpack_require__(/*! ./order-completion-view.component.html */ "./src/app/view/order-completion-view/order-completion-view.component.html"),
            styles: [__webpack_require__(/*! ./order-completion-view.component.css */ "./src/app/view/order-completion-view/order-completion-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderCompletionViewComponent);
    return OrderCompletionViewComponent;
}());



/***/ }),

/***/ "./src/app/view/product-edit-view/product-edit-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/view/product-edit-view/product-edit-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/product-edit-view/product-edit-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/view/product-edit-view/product-edit-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-product [name]=\"name\"></app-form-product>"

/***/ }),

/***/ "./src/app/view/product-edit-view/product-edit-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/view/product-edit-view/product-edit-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductEditViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditViewComponent", function() { return ProductEditViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductEditViewComponent = /** @class */ (function () {
    function ProductEditViewComponent(route) {
        this.route = route;
    }
    ProductEditViewComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.paramMap.get('name');
    };
    ProductEditViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit-view',
            template: __webpack_require__(/*! ./product-edit-view.component.html */ "./src/app/view/product-edit-view/product-edit-view.component.html"),
            styles: [__webpack_require__(/*! ./product-edit-view.component.css */ "./src/app/view/product-edit-view/product-edit-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProductEditViewComponent);
    return ProductEditViewComponent;
}());



/***/ }),

/***/ "./src/app/view/product-search-view/product-search-view.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/view/product-search-view/product-search-view.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    color: #343a40;\r\n}\r\n\r\n.principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/view/product-search-view/product-search-view.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/view/product-search-view/product-search-view.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h1>Listado de Productos</h1>\r\n<app-table></app-table>"

/***/ }),

/***/ "./src/app/view/product-search-view/product-search-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/view/product-search-view/product-search-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductSearchViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchViewComponent", function() { return ProductSearchViewComponent; });
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

var ProductSearchViewComponent = /** @class */ (function () {
    function ProductSearchViewComponent() {
    }
    ProductSearchViewComponent.prototype.ngOnInit = function () {
    };
    ProductSearchViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-search-view',
            template: __webpack_require__(/*! ./product-search-view.component.html */ "./src/app/view/product-search-view/product-search-view.component.html"),
            styles: [__webpack_require__(/*! ./product-search-view.component.css */ "./src/app/view/product-search-view/product-search-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductSearchViewComponent);
    return ProductSearchViewComponent;
}());



/***/ }),

/***/ "./src/app/view/registro-login/registro-login.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view/registro-login/registro-login.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-propio-rl{\r\n    background-color: #ff0000b8;\r\n    border-color: #df00002b;    \r\n    -ms-grid-row-align: left;    \r\n        align-self: left;\r\n    color: white;\r\n}\r\n\r\n.btn-propio-rl:hover{\r\n    background-color: #F9B53C;\r\n}\r\n\r\n.registro-login-propio{\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.inicio-registro{\r\n    background-color: rgba(255, 21, 0, 0.25);\r\n    padding: 2%;\r\n    border-radius: 5%;\r\n    max-width: 100%;\r\n}\r\n\r\n.titulo-inicio-registro{\r\n    text-align: center;\r\n    border-radius: 5%;\r\n}\r\n\r\n.inicio-sesion{\r\n    background-color: rgba(255, 21, 0, 0.25);\r\n    padding: 2%;\r\n    border-radius: 5%;\r\n    max-width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.titulo-inicio-sesion{\r\n    text-align: center;\r\n    border-radius: 5%;\r\n}\r\n\r\n.boton-inicio-sesion{\r\n    background-color: #ff0000b8;\r\n    border-color: #df00002b;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    color: white;\r\n}\r\n\r\n.boton-inicio-sesion:hover{\r\n    background-color: #F9B53C;\r\n}\r\n\r\n.redondeo-checkbox{\r\n    border-radius: 15%;\r\n}\r\n\r\n.principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/view/registro-login/registro-login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/view/registro-login/registro-login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(mostrarRegistro === true)\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"separador\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 \"></div>\r\n    <div class=\"col-4 inicio-registro\">\r\n      <form (ngSubmit)=\"onCreateUser()\">\r\n        <div class=\"form-group\">\r\n          <h1 class=\"inicio-registro titulo-inicio-registro\">Registro</h1>\r\n          <label for=\"text\">Nombre:</label>\r\n          <input type=\"text\" class=\"form-control required\" id=\"nombre\" placeholder=\"Ingrese nombre\" name=\"firstName\"\r\n            [(ngModel)]=\"user.firstName\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"text\">Apellido:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"apellido\" placeholder=\"Ingrese apellido\" name=\"lastName\"\r\n            [(ngModel)]=\"user.lastName\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Ingrese email\" name=\"email\" [(ngModel)]=\"user.email\"\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pwd\">Contraseña:</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Ingrese contraseña\" name=\"psw\" [(ngModel)]=\"user.psw\"\r\n            required>\r\n        </div>\r\n        <input type=\"submit\" class=\"btn btn-primary btn-propio-rl\" value=\"Registrar\">\r\n        <div class=\"form-group\" *ngIf=\"cuentaExistente === true\">\r\n          Ya hay un usuario con el mismo email, si posee cuenta puede iniciar sesión.\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"(mostrarLogin === true)\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"separador\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4\"></div>\r\n    <div class=\"col-4 inicio-sesion\">\r\n      <form (ngSubmit)=\"onIniciarSesion()\">\r\n        <div class=\"form-group\">\r\n          <h1 class=\"i nicio-sesion titulo-inicio-sesion\">Inicio de Sesión</h1>\r\n          <label for=\"email\">Email:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Ingrese email\" name=\"email\" [(ngModel)]=\"user.email\"\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pwd\">Contraseña:</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Ingrese contraseña\" name=\"psw\" [(ngModel)]=\"user.psw\"\r\n            required>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-outline active boton-inicio-sesion\">Iniciar Sesión</button>\r\n        <div class=\"form-group\" *ngIf=\"cuentaInexistente === true\">\r\n          El correo que usted ha ingresado no se encuentra registrado.\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"claveIncorrecta === true\">\r\n          Contraseña incorrecta.\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row registro-login-propio\">\r\n  <div class=\"col-4 p-1\"></div>\r\n  <div class=\"col-4 p-1 btn-group d-inline-flex justify-content-center p-3\">\r\n    <button class=\"btn btn-outline active btn-propio-rl\" (click)=\"onShowHideRegistro()\">Registro</button>\r\n    <button class=\"btn btn-outline active btn-propio-rl\" (click)=\"onShowHideLogin()\">Login</button>\r\n  </div>\r\n  <div class=\"col-4 p-1\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/view/registro-login/registro-login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/registro-login/registro-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegistroLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroLoginComponent", function() { return RegistroLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/users/users.service */ "./src/app/service/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_orders_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/orders/orders.service */ "./src/app/service/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroLoginComponent = /** @class */ (function () {
    function RegistroLoginComponent(userService, ordersService, router) {
        this.userService = userService;
        this.ordersService = ordersService;
        this.router = router;
        this.user = {};
        this.mostrarLogin = true;
        this.mostrarRegistro = false;
        this.cuentaExistente = false;
        this.cuentaInexistente = false;
        this.claveIncorrecta = false;
    }
    RegistroLoginComponent.prototype.onShowHideRegistro = function () {
        this.mostrarLogin = false;
        this.mostrarRegistro = true;
    };
    RegistroLoginComponent.prototype.onShowHideLogin = function () {
        this.mostrarLogin = true;
        this.mostrarRegistro = false;
    };
    RegistroLoginComponent.prototype.onCreateUser = function () {
        var _this = this;
        var email = this.user.email;
        var password = this.user.psw;
        var rol = 'Cliente';
        var firstName = this.user.firstName;
        var lastName = this.user.lastName;
        this.userService.registerUser(email, password)
            .then(function (res) {
            _this.userService.loginUser(email, password, firstName, lastName, rol);
            var user = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
            if (user != null) {
                var data = {
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                    psw: null,
                    pswn: null,
                    pswnc: null,
                    rol: rol
                };
                _this.userService.createUser(data, user.email).then(function (data) {
                    var orden = {
                        reference_user: user.email,
                        actual: true,
                        plates_references: []
                    };
                    _this.ordersService.createOrder(orden);
                });
                user.updateProfile({ displayName: firstName + " " + lastName, photoURL: "..." }).then(function (res) {
                    console.log(res);
                    console.log(user);
                }).catch(function (err) {
                    console.log(err);
                });
            }
            _this.onIniciarSesion();
        }).catch(function (err) {
            console.log(err);
        });
    };
    RegistroLoginComponent.prototype.onIniciarSesion = function () {
        var _this = this;
        var email = this.user.email;
        var password = this.user.psw;
        this.user.email = "";
        this.user.psw = "";
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('/users/').doc(email).onSnapshot(function (data) {
            var firstName = data.get('firstName');
            var lastName = data.get('lastName');
            var rol = data.get('rol');
            if (data.get('email') != email) {
                _this.cuentaInexistente = true;
            }
            _this.userService.loginUser(email, password, firstName, lastName, rol)
                .then(function (res) {
                firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('/users/').doc(email).onSnapshot(function (data) {
                    if (data.get('rol') === "Administrador") {
                        _this.router.navigate(['/home-admin']);
                    }
                    else if (data.get('rol') === "Cliente") {
                        _this.router.navigate(['/home']);
                    }
                });
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    RegistroLoginComponent.prototype.ngOnInit = function () {
    };
    RegistroLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro-login',
            template: __webpack_require__(/*! ./registro-login.component.html */ "./src/app/view/registro-login/registro-login.component.html"),
            styles: [__webpack_require__(/*! ./registro-login.component.css */ "./src/app/view/registro-login/registro-login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _service_orders_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistroLoginComponent);
    return RegistroLoginComponent;
}());



/***/ }),

/***/ "./src/app/view/view-add-product/view-add-product.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/view/view-add-product/view-add-product.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/view-add-product/view-add-product.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/view/view-add-product/view-add-product.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-new-product-form></app-new-product-form>\r\n"

/***/ }),

/***/ "./src/app/view/view-add-product/view-add-product.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/view/view-add-product/view-add-product.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewAddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAddProductComponent", function() { return ViewAddProductComponent; });
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

var ViewAddProductComponent = /** @class */ (function () {
    function ViewAddProductComponent() {
    }
    ViewAddProductComponent.prototype.ngOnInit = function () {
    };
    ViewAddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-add-product',
            template: __webpack_require__(/*! ./view-add-product.component.html */ "./src/app/view/view-add-product/view-add-product.component.html"),
            styles: [__webpack_require__(/*! ./view-add-product.component.css */ "./src/app/view/view-add-product/view-add-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewAddProductComponent);
    return ViewAddProductComponent;
}());



/***/ }),

/***/ "./src/app/view/view-cambio-clave/view-cambio-clave.component.css":
/*!************************************************************************!*\
  !*** ./src/app/view/view-cambio-clave/view-cambio-clave.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/view-cambio-clave/view-cambio-clave.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/view/view-cambio-clave/view-cambio-clave.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cambio-clave></app-cambio-clave>"

/***/ }),

/***/ "./src/app/view/view-cambio-clave/view-cambio-clave.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/view/view-cambio-clave/view-cambio-clave.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewCambioClaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCambioClaveComponent", function() { return ViewCambioClaveComponent; });
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

var ViewCambioClaveComponent = /** @class */ (function () {
    function ViewCambioClaveComponent() {
    }
    ViewCambioClaveComponent.prototype.ngOnInit = function () {
    };
    ViewCambioClaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-cambio-clave',
            template: __webpack_require__(/*! ./view-cambio-clave.component.html */ "./src/app/view/view-cambio-clave/view-cambio-clave.component.html"),
            styles: [__webpack_require__(/*! ./view-cambio-clave.component.css */ "./src/app/view/view-cambio-clave/view-cambio-clave.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewCambioClaveComponent);
    return ViewCambioClaveComponent;
}());



/***/ }),

/***/ "./src/app/view/view-compras/view-compras.component.css":
/*!**************************************************************!*\
  !*** ./src/app/view/view-compras/view-compras.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/view-compras/view-compras.component.html":
/*!***************************************************************!*\
  !*** ./src/app/view/view-compras/view-compras.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h1 class=\"principal-header\">Órdenes Previas</h1>\r\n<br>\r\n<app-compras></app-compras>"

/***/ }),

/***/ "./src/app/view/view-compras/view-compras.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/view/view-compras/view-compras.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewComprasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComprasComponent", function() { return ViewComprasComponent; });
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

var ViewComprasComponent = /** @class */ (function () {
    function ViewComprasComponent() {
    }
    ViewComprasComponent.prototype.ngOnInit = function () {
    };
    ViewComprasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-compras',
            template: __webpack_require__(/*! ./view-compras.component.html */ "./src/app/view/view-compras/view-compras.component.html"),
            styles: [__webpack_require__(/*! ./view-compras.component.css */ "./src/app/view/view-compras/view-compras.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewComprasComponent);
    return ViewComprasComponent;
}());



/***/ }),

/***/ "./src/app/view/view-dashboard/view-dashboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view/view-dashboard/view-dashboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/view-dashboard/view-dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/view/view-dashboard/view-dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>"

/***/ }),

/***/ "./src/app/view/view-dashboard/view-dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/view-dashboard/view-dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDashboardComponent", function() { return ViewDashboardComponent; });
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

var ViewDashboardComponent = /** @class */ (function () {
    function ViewDashboardComponent() {
    }
    ViewDashboardComponent.prototype.ngOnInit = function () {
    };
    ViewDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-dashboard',
            template: __webpack_require__(/*! ./view-dashboard.component.html */ "./src/app/view/view-dashboard/view-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./view-dashboard.component.css */ "./src/app/view/view-dashboard/view-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewDashboardComponent);
    return ViewDashboardComponent;
}());



/***/ }),

/***/ "./src/app/view/view-orden/view-orden.component.css":
/*!**********************************************************!*\
  !*** ./src/app/view/view-orden/view-orden.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/view-orden/view-orden.component.html":
/*!***********************************************************!*\
  !*** ./src/app/view/view-orden/view-orden.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-orden></app-orden>\r\n"

/***/ }),

/***/ "./src/app/view/view-orden/view-orden.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/view-orden/view-orden.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewOrdenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrdenComponent", function() { return ViewOrdenComponent; });
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

var ViewOrdenComponent = /** @class */ (function () {
    function ViewOrdenComponent() {
    }
    ViewOrdenComponent.prototype.ngOnInit = function () {
    };
    ViewOrdenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-orden',
            template: __webpack_require__(/*! ./view-orden.component.html */ "./src/app/view/view-orden/view-orden.component.html"),
            styles: [__webpack_require__(/*! ./view-orden.component.css */ "./src/app/view/view-orden/view-orden.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewOrdenComponent);
    return ViewOrdenComponent;
}());



/***/ }),

/***/ "./src/app/view/view-pending-orders/view-pending-orders.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/view/view-pending-orders/view-pending-orders.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/view-pending-orders/view-pending-orders.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/view/view-pending-orders/view-pending-orders.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h1 class=\"principal-header\">Pedidos Pendientes</h1>\r\n<br>\r\n<app-pending-orders-list></app-pending-orders-list>"

/***/ }),

/***/ "./src/app/view/view-pending-orders/view-pending-orders.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/view/view-pending-orders/view-pending-orders.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewPendingOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPendingOrdersComponent", function() { return ViewPendingOrdersComponent; });
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

var ViewPendingOrdersComponent = /** @class */ (function () {
    function ViewPendingOrdersComponent() {
    }
    ViewPendingOrdersComponent.prototype.ngOnInit = function () {
    };
    ViewPendingOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-pending-orders',
            template: __webpack_require__(/*! ./view-pending-orders.component.html */ "./src/app/view/view-pending-orders/view-pending-orders.component.html"),
            styles: [__webpack_require__(/*! ./view-pending-orders.component.css */ "./src/app/view/view-pending-orders/view-pending-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewPendingOrdersComponent);
    return ViewPendingOrdersComponent;
}());



/***/ }),

/***/ "./src/app/view/view-product-customization/view-product-customization.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/view/view-product-customization/view-product-customization.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/view/view-product-customization/view-product-customization.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/view/view-product-customization/view-product-customization.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h1 class=\"principal-header\">Personalice su plato</h1>\r\n<app-product-customization [name]=\"name\"></app-product-customization>\r\n"

/***/ }),

/***/ "./src/app/view/view-product-customization/view-product-customization.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/view/view-product-customization/view-product-customization.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewProductCustomizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductCustomizationComponent", function() { return ViewProductCustomizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewProductCustomizationComponent = /** @class */ (function () {
    function ViewProductCustomizationComponent(route) {
        this.route = route;
    }
    ViewProductCustomizationComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.paramMap.get('name');
    };
    ViewProductCustomizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-product-customization',
            template: __webpack_require__(/*! ./view-product-customization.component.html */ "./src/app/view/view-product-customization/view-product-customization.component.html"),
            styles: [__webpack_require__(/*! ./view-product-customization.component.css */ "./src/app/view/view-product-customization/view-product-customization.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ViewProductCustomizationComponent);
    return ViewProductCustomizationComponent;
}());



/***/ }),

/***/ "./src/app/view/view-register-new-admin/view-register-new-admin.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/view/view-register-new-admin/view-register-new-admin.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal-header {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 200%;\r\n    color: darkslategray;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/view/view-register-new-admin/view-register-new-admin.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/view/view-register-new-admin/view-register-new-admin.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-new-user-registration-form></app-new-user-registration-form>"

/***/ }),

/***/ "./src/app/view/view-register-new-admin/view-register-new-admin.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/view/view-register-new-admin/view-register-new-admin.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewRegisterNewAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRegisterNewAdminComponent", function() { return ViewRegisterNewAdminComponent; });
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

var ViewRegisterNewAdminComponent = /** @class */ (function () {
    function ViewRegisterNewAdminComponent() {
    }
    ViewRegisterNewAdminComponent.prototype.ngOnInit = function () {
    };
    ViewRegisterNewAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-register-new-admin',
            template: __webpack_require__(/*! ./view-register-new-admin.component.html */ "./src/app/view/view-register-new-admin/view-register-new-admin.component.html"),
            styles: [__webpack_require__(/*! ./view-register-new-admin.component.css */ "./src/app/view/view-register-new-admin/view-register-new-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewRegisterNewAdminComponent);
    return ViewRegisterNewAdminComponent;
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
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAXqJ8D6uUbT0ZwvzpWLzgEunh124W6eL8",
        authDomain: "umakeit-aa.firebaseapp.com",
        databaseURL: "https://umakeit-aa.firebaseio.com",
        projectId: "umakeit-aa",
        storageBucket: "umakeit-aa.appspot.com",
        messagingSenderId: "1086017335579"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aran_\uMakeIT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map