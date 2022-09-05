import { Xmb } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribersService } from '../create-subscribers/shared/services/subscribers/subscribers.service';


@Component({
  selector: 'list-users',
  templateUrl: './list-subscribers.component.html',
  styleUrls: ['./list-subscribers.component.scss'],
})
export class ListSubscribersComponent implements OnInit {
  array: any;
  filterPost = '';
  arrayDelec: any;
  objectDelet: any;
  bolDivAlert = true;
  arrayUsers: any;

  constructor(private readonly service: SubscribersService,
    private readonly router: Router,) {}

  ngOnInit() {
    this.service.getListUsers().subscribe((x) => {this.array = x.Data}); 
    setTimeout(() => {
    }, 1500);
   
  }
 

  idExiste(id: number) {
   // this.objectDelet = this.array.filter((item) => item.id === id);
    
      this.deleteContact(id);
    
  }
  idEdit(id: number) {
    this.router.navigateByUrl('/users/edit/' + id);
   }

  deleteContact(Id: number) {
   
    var resultado = window.confirm('Estas seguro?');
      if (resultado === true) {
        this.array = this.array.filter((x:any)=> x.Id !== Id)
        this.service.deleteUserForIndex(Id).subscribe();    

      } else {
      }
   
  }
}




