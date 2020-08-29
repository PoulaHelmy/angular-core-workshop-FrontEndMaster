import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@angular-core-workplace-new/core-data';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject:Project;
  primaryColor='red';
  constructor(private projectsService:ProjectsService) {}//end of constructor
  ngOnInit(): void {
    this.getProjects();
  }//end of ngOnInit
  getProjects(){
    this.projects$=this.projectsService.all();
  }//end of getProjects
  selectProject(project:Project){
    this.selectedProject=project;
  }//end of selectProject
  cancel(){
    this.selectProject(null);
  }//end of cancel
  deleteProject(project){
    this.projectsService.delete(project.id).subscribe(result => {
      this.getProjects();
    });
  }//end of deleteProject
}//end of CLass
