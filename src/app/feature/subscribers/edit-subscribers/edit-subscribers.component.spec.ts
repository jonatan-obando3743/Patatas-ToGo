import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubscribersComponent } from './edit-subscribers.component';

describe('EditSubscribersComponent', () => {
  let component: EditSubscribersComponent;
  let fixture: ComponentFixture<EditSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
