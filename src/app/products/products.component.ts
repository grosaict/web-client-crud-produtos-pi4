import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

@Input() nome: string;

  /* products = [
    {id: 1, name: 'Product 1', price: 10},
    {id: 2, name: 'Product 2', price: 20},
    {id: 3, name: 'Product 3', price: 30},
    {id: 4, name: 'Product 4', price: 40},
    {id: 5, name: 'Product 5', price: 50}
  ]; */

  products = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}
