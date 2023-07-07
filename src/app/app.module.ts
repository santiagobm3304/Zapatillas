import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { ProductComponent } from './components/product/product.component';
import { GetProductsService } from './services/get-products.service';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CartComponent } from './components/cart/cart.component';
import { FiltroProductPipe } from './pipes/filtro-product.pipe';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OrdenComponent } from './components/orden/orden.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProductComponent,
    CardProductComponent,
    CartComponent,
    FiltroProductPipe,
    LoginComponent,
    OrdenComponent,
    CreateProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
