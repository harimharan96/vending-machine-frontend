import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:any = []
  // subject = new Subject()
  private addProductUrl = "http://localhost:3000/add-products"
  private productUrl = "http://localhost:3000/products"
  constructor(private http:HttpClient){}

  sendItem(item:any){
    // this.subject.next(item)
    this.items.push(item)
    
  }
  getItem(){
    // return this.subject.asObservable()
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items
  }
  addProduct(product:any){
    return this.http.post(this.addProductUrl, product)
  }
  getProduct(){
    return this.http.get(this.productUrl)
  }
}
