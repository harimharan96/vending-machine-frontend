import { Component } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  
  constructor(private cartService:CartService){}
  
  productData:any={}
  isAdmin:boolean= false
  wrongCred:boolean=false
  adminData:any={
    email:"a@a.com",
    password:"aaa"
  }

  auth(email:any,password:any){
    if(email!=this.adminData.email || password!=this.adminData.password){
      this.wrongCred=true;
    }else{
      this.wrongCred=false;
      // this.router.navigate(['add-product'])
      this.isAdmin=true;
    }
  }
  addProduct(){
    console.log(this.productData);
    this.cartService.addProduct(this.productData)
    .subscribe(
      res=>{
        this.productData = {}
      }
    )
  }

}
