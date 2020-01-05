import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsOverviewComponent } from './admins-views/components/admins-overview/admins-overview.component';
import { AdminsListComponent } from './admins-views/components/admins-list/admins-list.component';
import { AdminProfileComponent } from './admins-views/components/admin-profile/admin-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'admins', pathMatch: 'full' },
  {
    path: 'admins', component: AdminsOverviewComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: AdminsListComponent },
      { path: 'profile/:id', component: AdminProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
