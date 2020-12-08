import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(productsList: Product[], valor?:number): Product[] {
    const price = valor ? valor : 0;
    return productsList.filter(
      (product) => product.price > price
    );
  }

}
