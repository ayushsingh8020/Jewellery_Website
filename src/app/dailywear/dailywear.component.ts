import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-dailywear',
  templateUrl: './dailywear.component.html',
  styleUrls: ['./dailywear.component.scss']
})

export class DailywearComponent  implements OnInit{

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
        thumbnail: 'https://i.pinimg.com/736x/81/07/ae/8107ae4a3f4af85b604904e94af50991.jpg',
        images: [
          'https://i.pinimg.com/736x/81/07/ae/8107ae4a3f4af85b604904e94af50991.jpg',
          'https://i.pinimg.com/736x/81/07/ae/8107ae4a3f4af85b604904e94af50991.jpg',
          'ites-Tanishq-product-catalog/default/dw8ff450a7/images/hi-res/500104SQAABAPL_1.jpg?sw=360&sh=360',
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
        thumbnail: 'https://i.pinimg.com/564x/75/fb/3e/75fb3e55aeab91b2d787fa741a7dd508.jpg',
        images: [
          'https://i.pinimg.com/564x/75/fb/3e/75fb3e55aeab91b2d787fa741a7dd508.jpg',
          'https://i.pinimg.com/564x/75/fb/3e/75fb3e55aeab91b2d787fa741a7dd508.jpg',
          'https://i.pinimg.com/564x/75/fb/3e/75fb3e55aeab91b2d787fa741a7dd508.jpg',
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
        thumbnail: 'https://i.pinimg.com/564x/fa/ad/ad/faadad8dc8bf43be23d996c300e41b0b.jpg',
        images: [
          'https://i.pinimg.com/564x/fa/ad/ad/faadad8dc8bf43be23d996c300e41b0b.jpg',
          'https://i.pinimg.com/564x/fa/ad/ad/faadad8dc8bf43be23d996c300e41b0b.jpg',
          'https://i.pinimg.com/564x/fa/ad/ad/faadad8dc8bf43be23d996c300e41b0b.jpg',
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
        thumbnail: 'https://i.pinimg.com/564x/25/af/3e/25af3e0b8c27a3ae664368b69a6d81a4.jpg',
        images: [
          'https://i.pinimg.com/564x/25/af/3e/25af3e0b8c27a3ae664368b69a6d81a4.jpg',
          'https://i.pinimg.com/564x/99/56/56/995656ceb062c52653c3210bbd530a1f.jpg',
          'https://i.pinimg.com/564x/25/af/3e/25af3e0b8c27a3ae664368b69a6d81a4.jpg',
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
        thumbnail: 'https://i.pinimg.com/736x/3a/ba/d8/3abad8e6dfbf878202a3421863c79a5f.jpg',
        images: [
          'https://i.pinimg.com/736x/3a/ba/d8/3abad8e6dfbf878202a3421863c79a5f.jpg',
          'https://i.pinimg.com/736x/3a/ba/d8/3abad8e6dfbf878202a3421863c79a5f.jpg',
          'https://i.pinimg.com/736x/3a/ba/d8/3abad8e6dfbf878202a3421863c79a5f.jpg',
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
        thumbnail: 'https://i.pinimg.com/564x/c4/cf/02/c4cf020d02f14ddf7db0232c695fd939.jpg',
        images: [
          'https://i.pinimg.com/564x/c4/cf/02/c4cf020d02f14ddf7db0232c695fd939.jpg',
          'https://i.pinimg.com/564x/c4/cf/02/c4cf020d02f14ddf7db0232c695fd939.jpg',
          'https://i.pinimg.com/564x/c4/cf/02/c4cf020d02f14ddf7db0232c695fd939.jpg',
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
        thumbnail: 'https://i.pinimg.com/564x/0d/5a/5b/0d5a5b754e7e4021aab8de37eacd68c9.jpg',
        images: [
          'https://i.pinimg.com/564x/0d/5a/5b/0d5a5b754e7e4021aab8de37eacd68c9.jpg',
          'https://i.pinimg.com/564x/0d/5a/5b/0d5a5b754e7e4021aab8de37eacd68c9.jpg',
          'https://i.pinimg.com/564x/0d/5a/5b/0d5a5b754e7e4021aab8de37eacd68c9.jpg',
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
      {
        id: 11,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/564x/1a/65/65/1a6565d5ecf476ef5a4508de01a18611.jpg',
        images: [
          'https://i.pinimg.com/564x/1a/65/65/1a6565d5ecf476ef5a4508de01a18611.jpg',
          'https://i.pinimg.com/564x/1a/65/65/1a6565d5ecf476ef5a4508de01a18611.jpg',
          'https://i.pinimg.com/564x/1a/65/65/1a6565d5ecf476ef5a4508de01a18611.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },
      {
        id: 12,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/736x/a9/4e/da/a94edae3a3c2f3613e079e24f9ea853b.jpg',
        images: [
          'https://i.pinimg.com/736x/a9/4e/da/a94edae3a3c2f3613e079e24f9ea853b.jpg',
          'https://i.pinimg.com/736x/a9/4e/da/a94edae3a3c2f3613e079e24f9ea853b.jpg',
          'https://i.pinimg.com/564x/35/a2/c0/35a2c0fe4a2495da21322b8ce49647e3.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },
      {
        id: 13,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/564x/ca/b8/f8/cab8f8b29c725a0f12e02af13b292556.jpg',
        images: [
          'https://i.pinimg.com/564x/ca/b8/f8/cab8f8b29c725a0f12e02af13b292556.jpg',
          'https://i.pinimg.com/564x/ca/b8/f8/cab8f8b29c725a0f12e02af13b292556.jpg',
          'https://i.pinimg.com/564x/ca/b8/f8/cab8f8b29c725a0f12e02af13b292556.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },
      {
        id: 14,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/564x/e2/f3/a1/e2f3a1e4c313e289c3ab14a4ec0dab0d.jpg',
        images: [
          'https://i.pinimg.com/564x/e2/f3/a1/e2f3a1e4c313e289c3ab14a4ec0dab0d.jpg',
          'https://i.pinimg.com/564x/e2/f3/a1/e2f3a1e4c313e289c3ab14a4ec0dab0d.jpg',
          'https://i.pinimg.com/564x/e2/f3/a1/e2f3a1e4c313e289c3ab14a4ec0dab0d.jpg',
          'https://cdn.dummyjson.com/product-images/15/4.jpg',
          'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg',
        ],
      },
      {
        id: 15,
        title: 'Kada for Man',
        description:
          'Golden kada for Man',
        price: 300000,
        brand: 'Jewellery Store',
        category: 'Mans Kada',
        thumbnail: 'https://i.pinimg.com/564x/c6/6b/2b/c66b2bdbe1ddfe96b0ab8be68aa66dbf.jpg',
        images: [
          'https://i.pinimg.com/564x/c6/6b/2b/c66b2bdbe1ddfe96b0ab8be68aa66dbf.jpg',
          'https://i.pinimg.com/564x/c6/6b/2b/c66b2bdbe1ddfe96b0ab8be68aa66dbf.jpg',
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