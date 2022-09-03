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
    email: new FormControl(null, [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });

  constructor(private readonly router: Router,
    private service: LoginService) {

    }
  ngOnInit(): void {
    
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
        'UserName' : this.loginForm.value.email,
        'Password': this.loginForm.value.Password
      }
      console.log(ObjUser);
      this.service.login(ObjUser).subscribe(data => {
      localStorage.setItem("token", data.Token)
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
