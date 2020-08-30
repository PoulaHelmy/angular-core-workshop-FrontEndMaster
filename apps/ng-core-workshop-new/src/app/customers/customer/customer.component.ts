import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer, CustomersService } from '@angular-core-workplace-new/core-data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer$: Observable<Customer>;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomersService
  ) {
  }

  ngOnInit() {
    this.customer$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.customerService.load(params.get('id')))
    );
  }
}
