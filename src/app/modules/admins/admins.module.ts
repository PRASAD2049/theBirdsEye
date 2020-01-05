import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsOverviewComponent } from './admins-views/components/admins-overview/admins-overview.component';
import { AdminsListComponent } from './admins-views/components/admins-list/admins-list.component';
import { AdminProfileComponent } from './admins-views/components/admin-profile/admin-profile.component';


@NgModule({
  declarations: [AdminsOverviewComponent, AdminsListComponent, AdminProfileComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule
  ]
})
export class AdminsModule { }
