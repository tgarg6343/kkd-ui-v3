import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {CartConfig} from '../configs/cart.config'
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

  constructor(private http:Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

  getCartItems(){
   return this.http.get(CartConfig.cartUrl).
    map(data=>
      data.json(),
    error=> {
      console.log(error);
    });
  }

deleteCartItem(cartItem){
  return this.http.delete(CartConfig.deleteItem+cartItem.cartId,{headers: this.headers}).
  map(
    data=> console.log("deleting"),
    err=> console.log(err)
  );
}

}
