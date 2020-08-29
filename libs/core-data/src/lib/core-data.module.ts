import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './projects/projects.service';
import { StatusPipe } from './status/status.pipe';

@NgModule({
  imports: [CommonModule],
  providers:[
    ProjectsService
  ],
  declarations: [StatusPipe],
})
export class CoreDataModule {}
