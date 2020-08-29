import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@angular-core-workplace-new/core-data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  primaryColor = 'red';

  constructor() {
  }//end of constructor

  ngOnInit(): void {
  }//end of ngOnInit

}//end of Class
