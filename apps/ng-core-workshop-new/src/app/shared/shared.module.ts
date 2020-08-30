import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CustomersStatusComponent } from './customers-status/customers-status.component';
import { CustomerGroupStatusComponent } from './customer-group-status/customer-group-status.component';
import { MaterialModule } from '@angular-core-workplace-new/material';
import { CoreDataModule } from '@angular-core-workplace-new/core-data';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CoreDataModule
  ],
  exports: [
    CustomersStatusComponent,
    CustomerGroupStatusComponent,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CoreDataModule
  ],
  declarations: [CustomersStatusComponent, CustomerGroupStatusComponent]
})
export class SharedModule {
}
