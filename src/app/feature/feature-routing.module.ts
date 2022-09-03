import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSubscribersComponent } from './subscribers/home-subscribers/home-subscribers.component';

const routes: Routes = [
  {
    path: 'users',
    component: HomeSubscribersComponent,
   // canActivate: [TokenGuard],
    loadChildren: () => import('./subscribers/subscribers.module').then(i => i.subscribersModule),
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(i => i.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}
