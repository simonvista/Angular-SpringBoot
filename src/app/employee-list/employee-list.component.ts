import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private es: EmployeeService, private router: Router) {}
  employees: Employee[];
  ngOnInit(): void {
    this.getAllEmps();
    /* this.employees = [
      { id: 1, firstName: 'John', lastName: 'Adam', emailId: 'ja@xyz.net' },
      {
        id: 2,
        firstName: 'Susan',
        lastName: 'Collines',
        emailId: 'sc@xyz.com',
      },
    ]; */
  }
  private getAllEmps() {
    this.es.getAllEmps().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }
  updateEmployee(id) {
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id) {
    this.es.deleteEmp(id).subscribe(
      (data) => {
        console.log(data);
        this.getAllEmps();
      },
      (err) => console.log(err)
    );
  }
}
