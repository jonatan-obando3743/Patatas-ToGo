import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubscribersComponent } from './home-subscribers.component';

describe('HomeSubscribersComponent', () => {
  let component: HomeSubscribersComponent;
  let fixture: ComponentFixture<HomeSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
