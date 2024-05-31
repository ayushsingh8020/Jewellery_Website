import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList:any = [];
public productList:any = new BehaviorSubject<any>([]);
public search = new BehaviorSubject<string>("");



  
constructor() { }

getProduct(){
  return this.productList.asObservable();
}

setProduct(product:any){
  this.cartItemList.push(...product);
  this.productList.next(product)
}


addtoCart(product:any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
console.log(this.cartItemList);

}


getTotalPrice():number{
  let grandTotal = 0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
  })
  return this.getTotalPrice();
}

getProductQuantity():number{
  let itemQuantity = 1;
  this.cartItemList.map((a:any)=>{itemQuantity += a.quantity})
return itemQuantity;
}

removeAllItem(){
this.cartItemList = [];
this.productList.next(this.cartItemList)
}

removeCartItem(product:any){
this.cartItemList.map((a:any, index:any)=>{
  if(product.id === a.id){
    this.cartItemList.splice(index,1)
  }
})
}



}