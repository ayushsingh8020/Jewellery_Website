import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
productName:string ='';
productImage:string ='';
description:string ='';
imageURL:string = 'https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg'

public totalPrice :number = 0;
public totalItem: number = 0;
public itemQuantity !: number;
public products:any[] =[];
public grandTotal !: number;


constructor(private cart:CartService){
  const data = localStorage.getItem('products');
  
  if(data){
    this.products =JSON.parse(data);
  }
}
doTotalPrice(){
  let total = 0;
  let quantity = 1
  this.products.forEach((item: { price: number, quantity: number }) => {
    item.quantity = 1;
    total += item.price * item.quantity
  });
  this.totalPrice = total;
  this.itemQuantity = quantity;
  
}

ngOnInit(): void {
  this.cart.getProduct().subscribe((result:any)=>{
    this.products = result;
    this.grandTotal = this.cart.getTotalPrice();
  })
  
  
  this.itemQuantity = this.cart.getProductQuantity();
  this.doTotalPrice();
  // this.doQuantity();
}

removeItem(item: any){
  this.cart.removeCartItem(item);
  // confirm("are you want to delete your cart item?")
}
emptycart(){
    this.cart.removeAllItem();
    // confirm("are you want to empty your cart ?")
  }
  

  
   qnt:number = 1;
   i = 1;

   plus(){
   if(this.i !=5){
    this.i++;
  this.qnt = this.i;
} 



  }


minus(){
   if(this.i !=1){
    this.i--;
  this.qnt = this.i;
} 
  }

}









