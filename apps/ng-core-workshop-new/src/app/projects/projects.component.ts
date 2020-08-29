import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@angular-core-workplace-new/core-data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;
  primaryColor = 'red';

  constructor(private projectsService: ProjectsService) {
  }//end of constructor
  ngOnInit(): void {
    this.getProjects();
    this.resetProject();
  }//end of ngOnInit
  getProjects() {
    this.projects$ = this.projectsService.all();
  }//end of getProjects
  selectProject(project: Project) {
    this.selectedProject = project;
  }//end of selectProject
  cancel() {
    this.resetProject();
  }//end of cancel
  deleteProject(project) {
    this.projectsService.delete(project.id).subscribe(result => {
      this.getProjects();
    });
  }//end of deleteProject
  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }//end of saveProject
  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject);

  }//end of resetProject
  createProject(project) {
    this.projectsService.create(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    });
  }//end of createProject
  updateProject(project) {
    this.projectsService.update(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    });
  }//end of updateProject
}//end of CLass
