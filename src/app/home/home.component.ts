import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getProductList();
  }
 removeProduct(id) {
    
  }
}
