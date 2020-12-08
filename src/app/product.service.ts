import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productsList: Product[] = [
    {_id: 1, name: 'Product 1', price: 10},
    {_id: 2, name: 'Product 2', price: 20},
    {_id: 3, name: 'Product 3', price: 30},
    {_id: 4, name: 'Product 4', price: 40},
    {_id: 5, name: 'Product 5', price: 50},
    {_id: 6, name: 'Product 6', price: 60}
  ];

  constructor() { }

  getProducts() {
    return this.productsList;
  }
}
