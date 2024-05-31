import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
public totalItem : number = 0;
public searchTerm !: string;
showMenu=false;


@Output()searchItem = new EventEmitter

search(input:any){
  console.log(input.value);
  this.searchItem.emit(input.value);
}

constructor(private cart : CartService){

}

ngOnInit(): void {
this.cart.getProduct().subscribe((result:any)=>{
this.totalItem = result.length
})




}

searchItems(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cart.search.next(this.searchTerm);
}


}
