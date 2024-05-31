import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit{

  submit(f:NgForm){
    console.log(f);
    
  }


  getValue(f:any){
console.log(f.value);

  }

  ngOnInit(): void {
    
  }

  submited(){
alert("Thanks for your Feedback!")
this.submited.caller()

}
}
