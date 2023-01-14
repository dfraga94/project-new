import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList : Product [] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe( 
      (products : any) => {
        this.productList = products;
      }
    )
  }

}
