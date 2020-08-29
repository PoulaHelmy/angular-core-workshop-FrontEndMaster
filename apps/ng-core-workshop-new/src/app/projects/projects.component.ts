import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false,
    },
    {
      id: '2',
      title: 'Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false,
    },
    {
      id: '3',
      title: 'Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true,
    }
  ];
  selectedProject;
  primaryColor='red';
  constructor() {}//end of constructor
  ngOnInit(): void {
    console.log(this.selectedProject);
  }//end of ngOnInit
  selectProject(project:object){
    this.selectedProject=project;
  }//end of selectProject
  cancel(){
    this.selectProject(null);
  }//end of cancel
}//end of CLass
