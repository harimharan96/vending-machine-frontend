import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent{
  
  items=this.cartService.getItem();

  constructor(private cartService: CartService){}

  clearCart(){
   this.items = this.cartService.clearCart();
  }
}
