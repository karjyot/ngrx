import { Action } from "@ngrx/store";
import * as model from "./model";

export const actionType = {
  GET_PRODUCT_LIST: "[Product] Get Product List",
  GET_PRODUCT_LIST_SUCCESS: "[Product] Get Product List success",
  GET_PRODUCT_LIST_FAIL: "[Product] Get Product List fail"
};
export class GetProductListAction implements Action {
  public readonly type = actionType.GET_PRODUCT_LIST;
  constructor(public payload: string) {}
}
export class GetProductListActionSuccess implements Action {
  public readonly type = actionType.GET_PRODUCT_LIST_SUCCESS;
  constructor(public payload: model.Product[]) {}
}
export class GetProductListActionFail implements Action {
  public readonly type = actionType.GET_PRODUCT_LIST_FAIL;
  constructor(public payload: any) {}
}
export type Actions = 
GetProductListAction |  
GetProductListActionFail |
GetProductListActionSuccess;