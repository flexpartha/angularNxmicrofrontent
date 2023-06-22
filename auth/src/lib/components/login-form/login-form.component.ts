import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Authenticate } from '@customer-admin-portal/data-models';
@Component({
  selector: 'customer-admin-portal-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() submit = new EventEmitter<Authenticate>();
  
  loginForm!:FormGroup
  submitted = false;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  login(){
    this.submitted = true;
    // this.loginForm.get('username')?.setValidators([Validators.required]);
    // this.loginForm.get('username')?.updateValueAndValidity();
    // this.loginForm.get('password')?.setValidators([Validators.required]);
    // this.loginForm.get('password')?.updateValueAndValidity();
    this.loginForm.controls['username'].setValidators([Validators.required]);
    this.loginForm.controls['username'].updateValueAndValidity();
    this.loginForm.controls['password'].setValidators([Validators.required]);
    this.loginForm.controls['password'].updateValueAndValidity();
    if(this.loginForm.invalid){
      console.log(this.loginForm);
      return;
    }
    else{
      console.log("this.loginForm");
      this.submit.emit({
        username: this.loginForm?.get('username')?.value,
        password: this.loginForm?.get('password')?.value,
      } as Authenticate);
    }
  }
  get f() { return this.loginForm.controls; }
}
