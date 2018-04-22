import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-customer-my-cart',
  templateUrl: './customer-my-cart.component.html',
  styleUrls: ['./customer-my-cart.component.css'],
  providers:[CartService]
})
export class CustomerMyCartComponent implements OnInit {  
  constructor(
    private cartService: CartService
  ) {
    
  }
  private items=[];
  x:number;

  ngOnInit() {
    this.getCartItems();
  }

  deleteItem(item,ind){
    this.cartService.deleteCartItem(item).subscribe(
      (res)=>{
        console.log("deleting");
        this.getCartItems();
      },
      (err)=> console.log(err)
    );
  }

  getCartItems(){
    this.cartService.getCartItems().subscribe( 
      (res)=> {
        this.items=res;
        console.log("result is:"+res[0].kkdCustId);
        console.log("items are"+ this.items);
      },
       (error)=> console.log(error)
    );
    this.x=this.items.reduce(function(sum,cartItem){ return sum+cartItem.price*cartItem.quantity},0);
  }

  // delete(i: number) {
  //   console.log(i);
  //   this.items.splice(i, 1);
  //   this.x=this.items.reduce(function(sum,cartItem){ return sum+cartItem.price*cartItem.quantity},0);
  // }

  // checkout() {
  //   this.items.map(order => this.cartService.addOrder(order));
  //   //this.items.map(order =>)
  // }

}

