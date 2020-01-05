/** Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing Module */
import { ProjectsRoutingModule } from './projects-routing.module';

/** components */
import { ProjectsOverviewComponent } from './projects-views/components/projects-overview/projects-overview.component';

@NgModule({
  declarations: [ProjectsOverviewComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
