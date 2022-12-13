import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import {EffectsModule, ofType,createEffect, Actions } from "@ngrx/effects";
import { Observable,mergeMap } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import * as actions from "./action";
import { ProductService } from "./service";
@Injectable()
export class ProductEffect {
  constructor(private actions$: Actions, private ser: ProductService) {}

//   getProductList$: Observable<Action> = createEffect(() => this.actions$
//     .pipe(
//         ofType(actions.actionType.GET_PRODUCT_LIST),
//     switchMap((action: actions.GetProductListAction) => {
//         return this.ser.getProductList().pipe(
//             map(rep=>{              
//                 return new actions.GetProductListActionSuccess(rep);
//             }),
//             catchError(err=>{
//                 throw err;
//                 })
//     )})));

loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(actions.actionType.GET_PRODUCT_LIST),
        mergeMap(() => this.ser.getProductList().pipe(
            map(products => new actions.GetProductListActionSuccess(products))
        ))
    )
})
}
