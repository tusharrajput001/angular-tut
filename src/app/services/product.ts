import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http: HttpClient) {
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

  getProductList() {
    const url = 'https://dummyjson.com/products';
    return this.http.get(url);
  }
}
