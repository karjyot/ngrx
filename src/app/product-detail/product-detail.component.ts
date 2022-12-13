import { Component } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import * as productSelector from './../store/product/selector';
import * as productModel from './../store/product/model';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productDetails : any
constructor(private routerInfo : Router,private router : ActivatedRoute,
  private store:Store<productModel.ProductState>
  ){}

ngOnInit() {
  let uid = this.router.snapshot.paramMap.get('id'); 
  this.store.select(productSelector.getProductList).subscribe(
    (products:productModel.Product[])=>{
      if(products){
        this.productDetails = products.filter(e => e.uid == uid)[0];
      }
    }
  )
}
back(){
  this.routerInfo.navigateByUrl('/');
}
}
