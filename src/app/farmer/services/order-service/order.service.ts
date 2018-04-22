import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { microServicesUrl } from '../../config/microServicesUrl.config';

@Injectable()
export class OrderService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  //getting list of orders according to farmer id
  getOrderListFromFarmerId(farmerId) {
    return this.http.get(microServicesUrl.orderStatus+farmerId)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }


   //Error handler
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

}
