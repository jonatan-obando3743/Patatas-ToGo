import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSubscribersComponent } from './create-subscribers/create-subscribers.component';
import { EditSubscribersComponent } from './edit-subscribers/edit-subscribers.component';
import { ListSubscribersComponent } from './list-subscribers/list-subscribers.component';


const routes: Routes = [
  { path: 'list', component: ListSubscribersComponent },
  { path: 'edit/:id', component: EditSubscribersComponent },
  { path: 'create', component: CreateSubscribersComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/users/list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribersRoutingModule {
}
