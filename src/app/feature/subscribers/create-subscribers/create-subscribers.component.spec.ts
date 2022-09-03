import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubscribersComponent } from './create-subscribers.component';

describe('CreateUserComponent', () => {
  let component: CreateSubscribersComponent;
  let fixture: ComponentFixture<CreateSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
