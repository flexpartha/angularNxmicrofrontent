import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate, User } from '@customer-admin-portal/data-models';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userSubject$!: BehaviorSubject<User>;
  user$!: Observable<User>;
  user:any;
  constructor(private httpClient:HttpClient) {
    this.userSubject$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    console.log(this.userSubject$.value);
    this.user$ = this.userSubject$.asObservable();
    this.user = localStorage.getItem('user');
    if(this.user){
      this.userSubject$.next(JSON.parse(this.user));
      let user = this.userSubject$.next(JSON.parse(this.user));
      console.log(user);
    }
   }

  login(authenticate:Authenticate): Observable<User>{
    return this.httpClient.post<User>('http://localhost:3000/login',authenticate)
    .pipe(map((user:User)=> {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject$.next(user);
      return user
    }));
  }
  public get currentUserValue(): User {
    return this.userSubject$.value;
  }

  logout(){
    localStorage.removeItem('user');
    this.userSubject$.next(null!);
    this.userSubject$.unsubscribe;
  }
}
