import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DailywearComponent } from './dailywear/dailywear.component';
import { Product2Component } from './product2/product2.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CartItemsComponent,
    AccountComponent,
    LoginComponent,
    DailywearComponent,
    Product2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
