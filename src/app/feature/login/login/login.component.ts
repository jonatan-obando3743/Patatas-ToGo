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

  submit() {
    if (this.loginForm.valid) {
      const ObjUser ={
        'UserName' : this.loginForm.value.email,
        'Password': this.loginForm.value.Password
      }
     
      this.service.login(ObjUser).subscribe(
        (res : any) =>{
          localStorage.setItem("token", res.Token)
          this.redirectUsers();
          
        }, error => {
          this.valorEmail = false
        })
        
      
      
      
     
    }
  }
  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
