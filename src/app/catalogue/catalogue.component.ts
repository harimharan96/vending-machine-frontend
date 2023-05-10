import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit{

  constructor(private cartService: CartService){}

  infoString:string = ''
  isInfo:boolean=false;
  showIndex:any
  products:any = []

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(
      res => this.products = res
    )
  }

  info(i:any){
    // console.log(product)
    this.isInfo = !this.isInfo;    
    this.showIndex = i;
  }
  addToCart(item:any){
    // console.log(item)
    this.cartService.sendItem(item)
    alert(`${item.title} added to cart`)
  }
}
