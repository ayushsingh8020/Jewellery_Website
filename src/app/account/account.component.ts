import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
// imgURL:string = 'https://gjepc.org/solitaire/wp-content/uploads/2023/11/polki-1-900x540.jpg';

  constructor(private router:Router){
  }

  submit(f:NgForm){
    console.log(f);
    
  }


  getValue(f:any){
console.log(f.value);

  }

  ngOnInit(): void {
    
  }

  submited(){
    this.router.navigate([''])
    alert('You Sign Up Successfull')

    }
    
  }

