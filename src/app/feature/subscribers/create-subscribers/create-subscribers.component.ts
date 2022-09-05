import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { SubscribersService } from './shared/services/subscribers/subscribers.service';

@Component({
  selector: 'app-create-subscribers',
  templateUrl: './create-subscribers.component.html',
  styleUrls: ['./create-subscribers.component.scss'],
})
export class CreateSubscribersComponent implements OnInit {
  public Idearly: any;
  public valorEmail = true;
  public ObjeSuscriber: any;
  public lisCountries = [];
  public selectedCar: any;
  public loading: any;
  profileForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl(''),
    ContryCode: new FormControl(''),
    ContryName: new FormControl(''),
    Phonecode: new FormControl(''),
    phomeNumber: new FormControl(''),
    JobTitle: new FormControl(''),
    Area: new FormControl(''),
  });


  constructor(
    private readonly service: SubscribersService,
    private readonly router: Router,
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loading = true;
    const getDeps = forkJoin({
      AllAlerTypes:  this.service.getListCountries(),
    });
    getDeps.subscribe(
      resp => {
        this.lisCountries = resp.AllAlerTypes.Data;
        this.loading = false;
      },
      error => {
        this.loading = false;
    });
    setTimeout(() => {
      console.log(this.lisCountries)
    }, 1500);
   
} 
 Validator(){
  if (this.profileForm.valid){
    this.onSubmit() 
    
  }else {
    
      window.confirm('Algunos campos tienen valores incorrectos o incompletos, vuelva al formulario y corríjalos');
     
   
  }
 }

onSubmit() {
    const Object = {
      Subscribers: [
        {
          Name: this.profileForm.value.Name,
          Email: this.profileForm.value.Email,
          CountryCode: this.profileForm.value.ContryCode,
          CountryName: this.profileForm.value.ContryName,
          PhoneCode: this.profileForm.value.Phonecode,
          PhoneNumber: this.profileForm.value.phomeNumber,
          JobTitle: this.profileForm.value.JobTitle,
          Area: this.profileForm.value.Area,
          Topics: [],
        },
      ],
    };

    this.service.createSubcribers(Object).subscribe(
      (res: any) => {

        this.router.navigateByUrl('/users/list');
      },
      (error) => {
        window.confirm(error.error.error);
      }
    );
  }

}
