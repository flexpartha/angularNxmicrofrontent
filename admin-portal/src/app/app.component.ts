import { Component, OnInit } from '@angular/core';
import { Product } from '@customer-admin-portal/data-models';
import { ProductService } from 'services/src/lib/product.service';

@Component({
  selector: 'customer-admin-portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admin-portal';

  products :any;
  constructor(private productSrv:ProductService) {}

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    this.productSrv.getProduct().subscribe((res:Product[])=>{
      this.products = res
      console.log("this.products",this.products);
    })
  }
}
