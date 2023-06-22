import { Route } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';

export const Routes: Route[] = [
    {
        path: '', component:ProductsComponent
    }
];