import { Route } from '@angular/router';
import { authRoutes, authGuard } from '@customer-admin-portal/auth';  

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    {
        path: 'auth', 
        loadChildren: ()=> import('@customer-admin-portal/auth').then(mod => mod.AuthModule)
    },
    { 
        path: 'products',
        canActivate: [authGuard],
        loadChildren: ()=> import('@customer-admin-portal/products').then(mod => mod.ProductsModule) 
    },
];
