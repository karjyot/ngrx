import { Component, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as model from "./model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class ProductService {
  url ="https://random-data-api.com/api/coffee/random_coffee?size=50";
  constructor(private http: HttpClient) {}
  getProductList(): Observable<model.Product[]> {
    return this.http.get(this.url).pipe(
      map(rep => {
        
        const response: any = rep || {};
        if (response.status) {
          throw {};
        } else {
          return <model.Product[]>rep;
        }
      })
    );
  }
}
