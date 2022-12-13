import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as productModel from './../store/product/model';
import { Subscription } from 'rxjs';
import * as productSelector from './../store/product/selector';
import * as productAction from './../store/product/action';
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  pageSize = 10;
  page = 1;
  getproductList!:Subscription;
  productList:productModel.Product[] = [];
  constructor(private store:Store<productModel.ProductState>,private router : Router) { }

  ngOnInit() {
    this.store.dispatch(new productAction.GetProductListAction(""));  // empty string for now
    this.subscriptionInit();
  }
  subscriptionInit(){
    this.getproductList = this.store.select(productSelector.getProductList).subscribe(
      (products:productModel.Product[])=>{
        console.log(products)
        if(products){
        this.productList =  products;
        }
      }
    )
  }
  viewDetails(uid:any){
    this.router.navigateByUrl("/product-detail/"+uid)
  }
}
