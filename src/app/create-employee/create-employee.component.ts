import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private es: EmployeeService, private router: Router) {}

  ngOnInit(): void {}
  createEmp() {
    this.es.createEmp(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.goToEmpListPage();
      },
      (err) => console.log(err)
    );
  }
  goToEmpListPage() {
    // this.router.navigate(['/employees']);
    this.router.navigate(['employees']);
  }
  onSubmit() {
    console.log(this.employee);
    this.createEmp();
  }
}
