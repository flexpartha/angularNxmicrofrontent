import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
export { Authenticate } from './authenticate';
export { User } from './users' ;
export { Product } from './product';
@NgModule({
  imports: [CommonModule],
})
export class DataModelsModule {}
