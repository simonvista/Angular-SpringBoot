import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor() {}
  employees: Employee[];
  ngOnInit(): void {
    this.employees = [
      { id: 1, firstName: 'John', lastName: 'Adam', emailId: 'ja@xyz.net' },
      {
        id: 2,
        firstName: 'Susan',
        lastName: 'Collines',
        emailId: 'sc@xyz.com',
      },
    ];
  }
}
