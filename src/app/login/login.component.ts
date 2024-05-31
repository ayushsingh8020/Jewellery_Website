import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

submit(f:NgForm){
console.log(f);
}


getValue(f:any){

}
  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }


  submited(){
this.router.navigate(['']);
alert('You Logged IN')
  }
}
