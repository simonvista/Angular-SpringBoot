import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
// need ActivatedRoute is retrieve id value from URL
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id: number;
  constructor(
    private es: EmployeeService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log(this.ar.snapshot.params.id);
    this.id = this.ar.snapshot.params.id;
    this.es.getEmpById(this.id).subscribe(
      (data) => (this.employee = data),
      (err) => console.log(err)
    );
  }
  goToEmpListPage() {
    // this.router.navigate(['/employees']);
    this.router.navigate(['employees']);
  }
  onSubmit() {
    this.es.updateEmp(this.id, this.employee).subscribe(
      (data) => this.goToEmpListPage(),
      (err) => console.log(err)
    );
  }
}
