import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { OrdenComponent } from './components/orden/orden.component';
import { AdminGuard } from './guards/admin.guard';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  { 
    path:'login',
    component: LoginComponent
  },
  { 
    path:'orden',
    component: OrdenComponent
  },
  {
    path:'new',
    component: CreateProductComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'product/:_id',
    component: ProductComponent
  },
  {
    path: 'update/:_id',
    component: UpdateProductComponent,
    canActivate: [AdminGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
