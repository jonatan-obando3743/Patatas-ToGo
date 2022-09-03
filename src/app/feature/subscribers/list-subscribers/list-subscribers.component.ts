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
    this.array = this.service.getUsers().subscribe((x) => {this.array = x.Data}); 
    setTimeout(() => {
      console.log(this.array)
    }, 1500);
   
  }
 

  idExiste(id: number) {
   // this.objectDelet = this.array.filter((item) => item.id === id);
    if (this.array.includes(this.objectDelet[0])) {
      this.deleteContact(id);
    } else {
    } 
  }

  deleteContact(id: number) {
    //this.objectDelet = this.array.filter((item) => item.id === id);
    this.bolDivAlert = false;
    setTimeout(() => {
      this.bolDivAlert = true;
    }, 1500);
    //this.array = this.array.filter((item) => item.id !== id);
    this.service.deleteUserForIndex(id).subscribe();
  }
}




