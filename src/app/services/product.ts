import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor() {
    console.log('product service');
  }

  //service 1 

  getProductData() {
    return [
      { name: 'iphone', branch: 'apple', price: '120000' },
      { name: 'laptop', branch: 'Msi', price: '150000' },
      { name: 'Tv', branch: 'Sony', price: '80000' },
    ];
  }
}
