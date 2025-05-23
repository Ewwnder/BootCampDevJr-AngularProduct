import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  categories : Category[] = [];

  product : Product = {} as Product;
  products : Product[] = [];

  constructor(private categoryService: CategoryService, private productService:ProductService) { }   //Injetando esse objeto dentro do componente. Para injetar o serviço utilizamos o constructor

  ngOnInit(): void{
    this.categories = this.categoryService.getCategories();
    this.products = this.productService.getProducts();
  }

  saveProduct(){
    this.productService.save(this.product);
    this.product = {} as Product;
  }

}
