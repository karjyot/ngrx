import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes: Routes = [ {
  path : '', 
  component : ProductsComponent,
  pathMatch : 'full'
},{
  path : 'product-detail/:id', 
  component : ProductDetailComponent,
  pathMatch : 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
