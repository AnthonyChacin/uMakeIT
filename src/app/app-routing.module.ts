import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistroLoginComponent } from './view/registro-login/registro-login.component';
import { HomeNavigationComponent } from './navigation/home-navigation/home-navigation.component';
import { LoginNavigationComponent } from './navigation/login-navigation/login-navigation.component';
import { HomeComponent } from './view/home/home.component';
import { ViewComprasComponent } from './view/view-compras/view-compras.component';
import { ViewOrdenComponent } from './view/view-orden/view-orden.component';
import { ViewCambioClaveComponent } from './view/view-cambio-clave/view-cambio-clave.component';
import { ViewProductCustomizationComponent } from './view/view-product-customization/view-product-customization.component';
import { AdministratorHomeNavigationComponent } from './navigation/administrator-home-navigation/administrator-home-navigation.component';
import { ProductSearchViewComponent } from './view/product-search-view/product-search-view.component';
import { ViewRegisterNewAdminComponent } from './view/view-register-new-admin/view-register-new-admin.component';
import { ProductEditViewComponent } from './view/product-edit-view/product-edit-view.component';
import { ViewPendingOrdersComponent } from './view/view-pending-orders/view-pending-orders.component';
import { ViewAddProductComponent } from './view/view-add-product/view-add-product.component';
import { OrderCompletionViewComponent } from './view/order-completion-view/order-completion-view.component';
import { Prepa5Component } from './prepa/prepa5/prepa5.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: RegistroLoginComponent }
        ], component: LoginNavigationComponent
    },
    {
        path: '',
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'compras', component: ViewComprasComponent },
            { path: 'orden', component: ViewOrdenComponent },
            { path: 'cambio-clave', component: ViewCambioClaveComponent },
            { path: 'product-customization', component: ViewProductCustomizationComponent },
            { path: 'finalize-order', component: OrderCompletionViewComponent },
            { path: 'prepa', component: Prepa5Component}
        ], component: HomeNavigationComponent
    },
    {
        path: '',
        children: [
            { path: '', redirectTo: '/home-admin', pathMatch: 'full' },
            { path: 'home-admin/:name', component: ProductSearchViewComponent },
            { path: 'new-admin', component: ViewRegisterNewAdminComponent },
            { path: 'product-edit', component: ProductEditViewComponent },
            { path: 'pending-orders', component: ViewPendingOrdersComponent },
            { path: 'cambio-clave-admin', component: ViewCambioClaveComponent },
            { path: 'add-product', component: ViewAddProductComponent }
        ], component: AdministratorHomeNavigationComponent
    }/* ,

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

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
