import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@customer-admin-portal/data-models'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }

  getProduct():Observable<Product[]>{
    return this._httpClient.get<Product[]>('http://localhost:3000/products');
  }
  getProduct2():Observable<Product[]>{
    return this._httpClient.get<Product[]>('http://localhost:3000/products2');
  }
}
