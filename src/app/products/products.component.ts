import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {

  products: Product[] = [];

  test: Product[] = [
    {_id: 1, name: 'Product 1', price: 10},
    {_id: 2, name: 'Product 2', price: 20},
    {_id: 3, name: 'Product 3', price: 30},
    {_id: 4, name: 'Product 4', price: 40},
    {_id: 5, name: 'Product 5', price: 50},
    {_id: 6, name: 'Product 6', price: 60}
  ];

  constructor(
    private productService: ProductService,
    private router: Router
    ) {  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnChanges() {
    console.log("Atualizando lista");
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        //this.products = data;
        this.products = this.test;
      },
      error => alert("Error "+error)
    );
  }
}
