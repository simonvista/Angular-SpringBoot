import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/api/v1/employees';
  constructor(private hc: HttpClient) {}
  getAllEmps(): Observable<Employee[]> {
    return this.hc.get<Employee[]>(this.baseURL);
  }
  /* createEmp(emp: Employee): Observable<Object> {
    return this.hc.post(this.baseURL, emp);
  } */
  createEmp(emp: Employee): Observable<Employee> {
    return this.hc.post<Employee>(this.baseURL, emp);
  }
}
