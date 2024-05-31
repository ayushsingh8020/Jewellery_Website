import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{


  productsResponse: any = {
    products: [
    
      {
        id: 1,
        title: 'Design Ear Ring',
        description:
          '22 karat Gold design ear ring ',
        price: 18999,
        brand: 'Jewellery Store',
        category: 'Ear Rings',
        thumbnail: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8ff450a7/images/hi-res/500104SQAABAPL_1.jpg?sw=360&sh=360',
        images: [
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8ff450a7/images/hi-res/500104SQAABAPL_1.jpg?sw=360&sh=360',
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8ff450a7/images/hi-res/500104SQAABAPL_1.jpg?sw=360&sh=360',
          'https://cdn.dummyjson.com/product-images/1/3.jpg',
          'https://cdn.dummyjson.com/product-images/1/4.jpg',
          'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
        ],
      },
    
      {
        id: 2,
        title: 'Necklace for Women',
        description: 'Diamond Necklace for Women',
        price: 450000,
        brand: 'Jewellery Store',
        category: 'Necklace',
        thumbnail: 'https://i.pinimg.com/736x/bc/7d/3b/bc7d3bb0c5552ee193fe16a22bd16787.jpg',
        images: [
          'https://i.pinimg.com/736x/bc/7d/3b/bc7d3bb0c5552ee193fe16a22bd16787.jpg',
          'https://i.pinimg.com/736x/bc/7d/3b/bc7d3bb0c5552ee193fe16a22bd16787.jpg',
          'https://i.pinimg.com/736x/bc/7d/3b/bc7d3bb0c5552ee193fe16a22bd16787.jpg',
          'https://cdn.dummyjson.com/product-images/12/4.jpg',
          'https://cdn.dummyjson.com/product-images/12/thumbnail.jpg',
        ],
      },
      {
        id: 3,
        title: 'Gold Watch For Man',
        description:
          'Gold Watch for Man 24 karat',
        price: 900000,
        brand: 'Jewellery Store',
        category: 'Gold Watch',
        thumbnail: 'https://i.pinimg.com/564x/2b/2f/01/2b2f0191bbb697f64503fbcc060d8927.jpg',
        images: [
          'https://i.pinimg.com/564x/2b/2f/01/2b2f0191bbb697f64503fbcc060d8927.jpg',
          'https://i.pinimg.com/564x/2b/2f/01/2b2f0191bbb697f64503fbcc060d8927.jpg',
          'https://cdn.dummyjson.com/product-images/13/3.jpg',
          'https://cdn.dummyjson.com/product-images/13/4.jpg',
          'https://cdn.dummyjson.com/product-images/13/thumbnail.webp',
        ],
      },
      {
        id: 4,
        title: 'Man Ring ',
        description:
          'Man Ring 22 Karat',
        price: 210000,
        brand: 'Jewellery Store',
        category: 'Man Ring',
        thumbnail: 'https://i.pinimg.com/564x/99/56/56/995656ceb062c52653c3210bbd530a1f.jpg',
        images: [
          'https://i.pinimg.com/564x/99/56/56/995656ceb062c52653c3210bbd530a1f.jpg',
          'https://i.pinimg.com/564x/99/56/56/995656ceb062c52653c3210bbd530a1f.jpg',
          'https://cdn.dummyjson.com/product-images/14/3.jpg',
          'https://cdn.dummyjson.com/product-images/14/thumbnail.jpg',
        ],
      },
      {
        id: 5,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
        images: [
          'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
          'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
          'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },
      {
        id: 6,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/736x/eb/08/2c/eb082ced1aacd6c440e11aa01d996f4b.jpg',
        images: [
          'https://i.pinimg.com/736x/eb/08/2c/eb082ced1aacd6c440e11aa01d996f4b.jpg',
          'https://i.pinimg.com/736x/eb/08/2c/eb082ced1aacd6c440e11aa01d996f4b.jpg',
          'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },
      {
        id: 7,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/736x/86/53/d5/8653d5dfe942229b0667c221131d8ee1.jpg',
        images: [
          'https://i.pinimg.com/564x/9a/5c/65/9a5c65860bf538520ef5fa8a1ab4c872.jpg',
          'https://i.pinimg.com/564x/9a/5c/65/9a5c65860bf538520ef5fa8a1ab4c872.jpg',
          'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },
      {
        id: 8,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/564x/b6/3c/ca/b63ccae097473ec3add38040bc36740e.jpg',
        images: [
          'https://i.pinimg.com/564x/b6/3c/ca/b63ccae097473ec3add38040bc36740e.jpg',
          'https://i.pinimg.com/564x/b6/3c/ca/b63ccae097473ec3add38040bc36740e.jpg',
          'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },
      {
        id: 9,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/564x/86/53/d5/8653d5dfe942229b0667c221131d8ee1.jpg',
        images: [
          'https://i.pinimg.com/564x/86/53/d5/8653d5dfe942229b0667c221131d8ee1.jpg',
          'https://i.pinimg.com/564x/86/53/d5/8653d5dfe942229b0667c221131d8ee1.jpg',
          'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },
      {
        id: 10,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/736x/08/6f/49/086f49836f295cee64884c1a60c07bbb.jpg',
        images: [
          'https://i.pinimg.com/736x/08/6f/49/086f49836f295cee64884c1a60c07bbb.jpg',
          'https://i.pinimg.com/736x/08/6f/49/086f49836f295cee64884c1a60c07bbb.jpg',
          'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },

    ],
    total: 100,
    skip: 0,
    limit: 30,
  };

  allProducts: any = [];
  products: any = [];

constructor(private cart:CartService){}

  ngOnInit(): void {
    console.log(this.productsResponse);
    this.allProducts = this.productsResponse.products;
    this.products = JSON.parse(JSON.stringify(this.allProducts));
    console.log(this.allProducts);
    // this.CartService.getProduct().subscribe((res)=>{
    //   this.totalItem = res.length
    //   })



    // this.productList.forEach((a:any) => {
    //   Object.assign(a,{quantity:1, total:a.price})
    //   });



  }

  searchItem(query: any) {
    console.log(query);
    // map, filter, reduce (copy banante hain)
    // forEach (original ko ched dega)
    this.products = this.allProducts.filter((product: any) => {
      return (
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

addtocart(product:any){
this.cart.addtoCart(product)

}

getitemQuantity(){
  this.cart.getProductQuantity();
}


}
