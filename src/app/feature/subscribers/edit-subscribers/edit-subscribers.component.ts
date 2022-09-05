import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SubscribersService } from '../create-subscribers/shared/services/subscribers/subscribers.service';

@Component({
  selector: 'app-edit-subscribers',
  templateUrl: './edit-subscribers.component.html',
  styleUrls: ['./edit-subscribers.component.scss'],
})
export class EditSubscribersComponent implements OnInit {
  public Idearly: any;
  public valorEmail = true;
  public ObjeSuscriber: any;

  edictForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    ContryCode: new FormControl('', [Validators.required]),
    ContryName: new FormControl('', [Validators.required]),
    Phonecode: new FormControl('', [Validators.required]),
    phomeNumber: new FormControl('', [Validators.required]),
    JobTitle: new FormControl('', [Validators.required]),
    Area: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly service: SubscribersService,
    private readonly router: Router,
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.Idearly = 0;
    this.activatedRoute.params.subscribe((data) => {
      this.Idearly = data;
      setTimeout(() => {
        if (this.Idearly !== 0) {
          this.service.getUsers(this.Idearly.id).subscribe((x) => {
            this.ObjeSuscriber = x;
          });
          
          setTimeout(() => {
            console.log(this,this.ObjeSuscriber)
            this.edictForm.get('Name')?.setValue(this.ObjeSuscriber.Name);
            this.edictForm.get('Email')?.setValue(this.ObjeSuscriber.Email);
            this.edictForm.get('ContryCode')?.setValue(this.ObjeSuscriber.CountryCode);
            this.edictForm.get('ContryName')?.setValue(this.ObjeSuscriber.ContryName);
            this.edictForm.get('Phonecode')?.setValue(this.ObjeSuscriber.Phonecode);
            this.edictForm.get('phomeNumber')?.setValue(this.ObjeSuscriber.PhoneNumber);
            this.edictForm.get('JobTitle')?.setValue(this.ObjeSuscriber.JobTitle);
            this.edictForm.get('Area')?.setValue(this.ObjeSuscriber.Area);
          }, 350);

          this.valorEmail = false;
        } else {
          this.valorEmail = true;
        }
      }, 50);
    });
  }
  onSubmit() {
    const Object = {
      Id: this.Idearly.id,
      Name: this.edictForm.value.Name,
      Email: this.edictForm.value.Email,
      CountryCode: this.edictForm.value.ContryCode,
      CountryName: this.edictForm.value.ContryName,
      PhoneCode: this.edictForm.value.Phonecode,
      PhoneNumber: this.edictForm.value.phomeNumber,
      JobTitle: this.edictForm.value.JobTitle,
      Area: this.edictForm.value.Area,
      Topics: [],
    };

    this.service.editSubcribers(Object, this.Idearly.id).subscribe(
      (res: any) => {
        this.router.navigateByUrl('/users/list');
      },
      (error) => {
        window.confirm(error.error.error);
      }
    );
  }

  creacteNewUser() {
    if (this.edictForm.status) {
      this.redirectToListUsers();
    } else {
    }
  }

  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
