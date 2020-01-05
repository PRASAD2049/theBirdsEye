import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';

/** components */
import {HeaderComponent} from './commons-views/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CommonsModule { }
