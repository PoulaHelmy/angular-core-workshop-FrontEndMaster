import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '@angular-core-workplace-new/core-data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  @Input() customers: Customer[];
  @Output() selected = new EventEmitter();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['lastName', 'email', 'phone', 'title', 'status'];

  constructor() {
  }

  ngOnInit() {
  }

  selectCustomer(customer) {
    this.selected.emit(customer);
  }
}
