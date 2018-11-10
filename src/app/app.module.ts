import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { RegistroLoginComponent } from './view/registro-login/registro-login.component';
import { AlertModule } from 'ngx-bootstrap';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { ComprasComponent } from './component/compras/compras.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './view/home/home.component';
import { LoginNavigationComponent } from './navigation/login-navigation/login-navigation.component';
import { HomeNavigationComponent } from './navigation/home-navigation/home-navigation.component';
import { ViewDashboardComponent } from './view/view-dashboard/view-dashboard.component';
import { ViewComprasComponent } from './view/view-compras/view-compras.component';
import { OrdenComponent } from './component/orden/orden.component';
import { ViewOrdenComponent } from './view/view-orden/view-orden.component';
import { HeaderClienteComponent } from './component/header-cliente/header-cliente.component';
import { CambioClaveComponent } from './component/cambio-clave/cambio-clave.component';
import { ViewCambioClaveComponent } from './view/view-cambio-clave/view-cambio-clave.component';
import { ProductCustomizationComponent } from './component/product-customization/product-customization.component';
import { ViewProductCustomizationComponent } from './view/view-product-customization/view-product-customization.component';
import { AdministratorHomeNavigationComponent } from './navigation/administrator-home-navigation/administrator-home-navigation.component';
import { ProductSearchViewComponent } from './view/product-search-view/product-search-view.component';
import { TableComponent } from './component/table/table.component';
import { NavbarSearcherComponent } from './component/navbar-searcher/navbar-searcher.component';
import { ViewRegisterNewAdminComponent } from './view/view-register-new-admin/view-register-new-admin.component';
import { NewUserRegistrationFormComponent } from './component/new-user-registration-form/new-user-registration-form.component';
import { FormProductComponent } from './component/form-product/form-product.component';
import { ProductEditViewComponent } from './view/product-edit-view/product-edit-view.component';
import { ViewPendingOrdersComponent } from './view/view-pending-orders/view-pending-orders.component';
import { PendingOrdersListComponent } from './component/pending-orders-list/pending-orders-list.component';
import { HeaderAdminComponent } from './component/header-admin/header-admin.component';
import { ViewAddProductComponent } from './view/view-add-product/view-add-product.component';
import { NewProductFormComponent } from './component/new-product-form/new-product-form.component';
import { OrderCompletionViewComponent } from './view/order-completion-view/order-completion-view.component';
import { OrderSummaryComponent } from './component/order-summary/order-summary.component';
import { Prepa5Component } from './prepa/prepa5/prepa5.component';
import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from './service/users/users.service';
import { StorageService } from './service/storage/storage.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthAdminGuard } from './guards/auth-admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroLoginComponent,
    DashboardComponent,
    FooterComponent,
    ComprasComponent,
    HomeComponent,
    LoginNavigationComponent,
    HomeNavigationComponent,
    RegistroLoginComponent,
    ViewDashboardComponent,
    ViewComprasComponent,
    OrdenComponent,
    ViewOrdenComponent,
    HeaderClienteComponent,
    CambioClaveComponent,
    ViewCambioClaveComponent,
    ProductCustomizationComponent,
    ViewProductCustomizationComponent,
    AdministratorHomeNavigationComponent,
    ProductSearchViewComponent,
    TableComponent,
    NavbarSearcherComponent,
    ViewRegisterNewAdminComponent,
    NewUserRegistrationFormComponent,
    FormProductComponent,
    ProductEditViewComponent,
    ViewPendingOrdersComponent,
    PendingOrdersListComponent,
    NewProductFormComponent,
    HeaderAdminComponent,
    ViewAddProductComponent,
    OrderCompletionViewComponent,
    OrderSummaryComponent,
    Prepa5Component
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireStorageModule
  ],
  providers: [
    AngularFirestore, 
    AngularFireAuth, 
    UsersService, 
    AuthGuard, 
    AuthAdminGuard, 
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
