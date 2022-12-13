import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as model from "./model";

export const getProducttState = createFeatureSelector<model.ProductState>("product");

export const getProductList = createSelector(
    getProducttState,
  (state: model.ProductState): model.Product[] => state.products
);


