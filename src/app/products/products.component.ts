import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

@Input() nome: string;

  products = [
    {id: 1, name: 'Prod1', price: 10},
    {id: 2, name: 'Prod2', price: 20},
    {id: 3, name: 'Prod3', price: 30},
    {id: 4, name: 'Prod4', price: 40},
    {id: 5, name: 'Prod5', price: 50},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
