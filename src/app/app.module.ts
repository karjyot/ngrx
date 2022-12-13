import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';
import { ProductService, ProductEffect, reducer as productReducer } from "./store/product";
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { EffectsModule } from "@ngrx/effects";
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    StoreModule.forRoot(productReducer),  
    StoreModule.forFeature("product", productReducer),

    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ProductEffect]),

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
