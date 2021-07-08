import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  emp: Employee = new Employee();
  constructor(private ar: ActivatedRoute, private es: EmployeeService) {}

  ngOnInit(): void {
    this.id = this.ar.snapshot.params.id;
    // console.log(this.ar.snapshot.params.id);
    this.es.getEmpById(this.id).subscribe(
      (data) => (this.emp = data),
      (err) => console.log(err)
    );
  }
}
