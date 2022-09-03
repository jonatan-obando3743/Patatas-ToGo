import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscribersService } from './shared/services/subscribers/subscribers.service';


@Component({
  selector: 'app-create-subscribers',
  templateUrl: './create-subscribers.component.html',
  styleUrls: ['./create-subscribers.component.scss'],
})
export class CreateSubscribersComponent implements OnInit {
  infCreate = true;
  errroNamee = null;
  erroJob = null;
  Obje : any;
  profileForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Job: new FormControl('', [Validators.required])
  })

  constructor(
    private readonly service: SubscribersService,
    private readonly router: Router
  ) {
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  onSubmit(){

  }

 creacteNewUser(){
   if(this.profileForm.status){
   
    this.Obje= this.profileForm.value.Name
    this.infCreate = false;
      this.infCreate = true;
      
      this.redirectToListUsers()    
   }else{

   }
 }
  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
  }

