// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Router
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../../services/auth/auth.service';
// import { map } from 'rxjs/operators';

import { inject } from "@angular/core"
import { AuthService } from "../../services/auth/auth.service"
import { Router } from "@angular/router";
import { map } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private authService: AuthService) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> {
//     return this.authService.user$.pipe(
//       map(user => {
//         if (user) {
//           return true;
//         } else {
//           this.router.navigate([`/auth/login`]);
//           return false;
//         }
//       })
//     );
//   }
// }

// FUNCTIONAL ROUTE GUARDS STARTS FROM HERE <----
export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    map(user =>{
      if(user) {
        return true;
      } else {
        router.navigate([`/auth/login`]);
        return false;
      }
    })
  )
}

// FUNCTIONAL ROUTE GUARDS ENDS FROM HERE ---->