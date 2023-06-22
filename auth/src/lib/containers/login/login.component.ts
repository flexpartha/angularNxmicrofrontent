import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Authenticate } from '@customer-admin-portal/data-models';

@Component({
  selector: 'customer-admin-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService){}

  ngOnInit(): void {
    
  }

  loginForm(authenticate:any){
    this.auth.login(authenticate).subscribe();
    console.log(authenticate);
  }
}
