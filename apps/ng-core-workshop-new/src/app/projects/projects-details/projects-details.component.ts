import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@angular-core-workplace-new/core-data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  currentProject: Project;
  originalTitle;
  @Output() cancelled = new EventEmitter();
  @Output() saveProject = new EventEmitter();


  @Input() set selectedProject(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
