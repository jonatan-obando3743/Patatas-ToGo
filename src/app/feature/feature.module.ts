import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    TranslateModule,
    NgSelectModule
  ]
})
export class FeatureModule { }
