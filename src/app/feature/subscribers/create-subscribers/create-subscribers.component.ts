import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
    Email: new FormControl('', [Validators.required]),
    ContryCode: new FormControl('', [Validators.required]),
    ContryName: new FormControl('', [Validators.required]),
    Phonecode: new FormControl('', [Validators.required]),
    phomeNumber: new FormControl('', [Validators.required]),
    JobTitle: new FormControl('', [Validators.required]),
    Area: new FormControl('', [Validators.required])
   
  })

  constructor(
    private readonly service: SubscribersService,
    private readonly router: Router,
    private translate: TranslateService,
  ) {
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  onSubmit(){
    
      const Object = {
        
        'Subscribers': [
          {
          'Name': this.profileForm.value.Name,
          'Email': this.profileForm.value.Email,
          'CountryCode': this.profileForm.value.ContryCode,
          'CountryName': this.profileForm.value.ContryName,
          'PhoneCode': this.profileForm.value.Phonecode,
          'PhoneNumber': this.profileForm.value.phomeNumber,
          'JobTitle': this.profileForm.value.JobTitle,
          'Area': this.profileForm.value.Area,
          'Topics': []
          }
          ]   
      };
      var resultado = window.confirm('Estas seguro?');
      if (resultado === true) {
        this.service.createSubcribers(Object).subscribe();
        console.log(Object);
      } else {
        window.alert('Pareces indeciso');
      }
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

