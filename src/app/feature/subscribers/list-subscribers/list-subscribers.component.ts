import { Component, OnInit } from '@angular/core';
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

  constructor(private readonly service: SubscribersService) {}

  ngOnInit() {
    this.service.getUsers().subscribe((x) => {this.array = x.Data}); 
    setTimeout(() => {
    }, 1500);
   
  }
 

  idExiste(id: number) {
   // this.objectDelet = this.array.filter((item) => item.id === id);
    
      this.deleteContact(id);
    
  }

  deleteContact(Id: number) {
    this.array = this.array.filter(((item: any) => item.Id !== Id));
    console.log(Id)
    this.service.deleteUserForIndex(Id).subscribe();
  }
}




