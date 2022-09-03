import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  valorEmail = true;
  valorPassword = true;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    Password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private readonly router: Router,
    private service: LoginService) {

    }
  ngOnInit(): void {
    localStorage.setItem("token", 'QpwL5tke4Pnpja7X4')
  }

  /**
   * Login
   */
  public value() {
    if(!this.loginForm.status){
    }else{
      if (this.loginForm.controls.email.invalid) {

        this.valorEmail = false;
        localStorage.removeItem('token');

      } else {
        this.valorEmail = true;
      }
      if (this.loginForm.controls.Password.invalid) {
        this.valorPassword = false;
        localStorage.removeItem('token');

      } else {
        this.valorPassword = true;
      }
    }
    
  }

  submit() {
    if (this.loginForm.valid) {
      this.redirectUsers();
      const ObjUser ={
        'email' : this.loginForm.value.email,
        'password': this.loginForm.value.Password
      }
      
     this.service.login(ObjUser).subscribe(data => {
      localStorage.setItem("token", data.token)
     })
    } else {  
      this.value();
    }
  }
  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
