import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './containers/products/products.component';
import { RouterModule, Route } from '@angular/router';
import { Routes } from './lib.routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
