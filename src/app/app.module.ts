import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** components */
import { NotFoundComponent } from './views/components/not-found/not-found.component';

/** feature modules */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './modules/commons/commons.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { AdminsModule } from './modules/admins/admins.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    DashboardModule,
    ProjectsModule,
    AdminsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
