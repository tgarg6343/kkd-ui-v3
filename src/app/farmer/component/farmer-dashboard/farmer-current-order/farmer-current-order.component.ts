import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order-service/order.service';

@Component({
  selector: 'app-farmer-current-order',
  templateUrl: './farmer-current-order.component.html',
  styleUrls: ['./farmer-current-order.component.css'],
  providers:[OrderService]
})
export class FarmerCurrentOrderComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  public orderList=[];

  ngOnInit() {
    //code to get the list of orders according to farmer id
    this.orderService.getOrderListFromFarmerId("kkdfarm1001").subscribe((res) =>{
      this.orderList = res;
      console.log(this.orderList);
    }, (error) =>{})

  }
}
