import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@angular-core-workplace-new/core-data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects :Project[];
  selectedProject;
  primaryColor='red';
  constructor(private projectsService:ProjectsService) {}//end of constructor
  ngOnInit(): void {
    this.getProjects();
  }//end of ngOnInit
  getProjects(){
    return this.projects=this.projectsService.all();
  }//end of getProjects
  selectProject(project:object){
    this.selectedProject=project;
  }//end of selectProject
  cancel(){
    this.selectProject(null);
  }//end of cancel
}//end of CLass
