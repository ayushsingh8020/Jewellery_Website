import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
public safeURL:any;
  constructor(private __sanitizer:DomSanitizer){

  }

  ngOnInit(): void {
this.safeURL = this.__sanitizer.bypassSecurityTrustResourceUrl('https://youtu.be/zcAalMeaKso?si=hxP4fdOfpsg6W1ym'); 
 }
}
