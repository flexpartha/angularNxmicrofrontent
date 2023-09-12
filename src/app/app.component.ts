import { Component, OnInit } from '@angular/core';
import { Product } from '@customer-admin-portal/data-models';
import { ProductService } from 'services/src/lib/product.service';

@Component({
  selector: 'customer-admin-portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'customer-admin-portal';

  products:any;
  constructor(private prod:ProductService){

  }
  ngOnInit(): void {
    this.getProductData2();
  }

  getProductData2(){
    this.prod.getProduct2().subscribe((res:Product[])=>{
      this.products = res
      console.log("this.products",this.products);
    })
  }
}
