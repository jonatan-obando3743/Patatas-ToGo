import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateSubscribersComponent } from './create-subscribers/create-subscribers.component';
import { HomeSubscribersComponent } from './home-subscribers/home-subscribers.component';
import { ListSubscribersComponent } from './list-subscribers/list-subscribers.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubscribersRoutingModule} from './subscribers-routing.module';



@NgModule({

    declarations: [CreateSubscribersComponent, ListSubscribersComponent, NavBarComponent, HomeSubscribersComponent],
    imports: [
        SubscribersRoutingModule,
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class subscribersModule {
}
