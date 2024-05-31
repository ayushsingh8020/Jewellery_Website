import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { DailywearComponent } from './dailywear/dailywear.component';
import { Product2Component } from './product2/product2.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products',component:ProductsComponent },
  {path:'cart', component:CartItemsComponent},
  {path:'account', component:AccountComponent},
  {path:'log', component:LoginComponent},
  {path:'dailywear', component:DailywearComponent},
  {path:'product', component:Product2Component},
  {path:'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
