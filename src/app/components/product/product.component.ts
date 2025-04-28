import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input()
  categories : Category[] = [];

  
  product : Product = {} as Product;

  save(){
    console.log(this.product);
  }

}
