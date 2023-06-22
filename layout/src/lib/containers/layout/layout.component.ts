import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  User} from '@customer-admin-portal/data-models'
import { AuthService} from '@customer-admin-portal/auth'
import { Router } from '@angular/router';
@Component({
  selector: 'customer-admin-portal-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
