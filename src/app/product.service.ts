import { Injectable } from '@angular/core';
import { Product } from './product';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

const apiUrl = 'http://localhost:3000/api/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  /* productsList: Product[] = [
    {_id: 1, name: 'Product 1', price: 10},
    {_id: 2, name: 'Product 2', price: 20},
    {_id: 3, name: 'Product 3', price: 30},
    {_id: 4, name: 'Product 4', price: 40},
    {_id: 5, name: 'Product 5', price: 50},
    {_id: 6, name: 'Product 6', price: 60}
  ]; */

  constructor(private http: HttpClient) { }

  /* getProducts() {
    return this.productsList;
  } */

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl).pipe(
      tap(products => console.log("Produtos ", products)),
      catchError(this.handleError('Listar Produtos',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
