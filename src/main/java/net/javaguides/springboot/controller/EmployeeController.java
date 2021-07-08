package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;

// @CrossOrigin -> Allow Angular to access the same resources from front end
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
//	get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
//	create employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee emp) {
		return employeeRepository.save(emp);
	}
//	get employee by id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee emp=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee with the id: "+id+" you provided, does not exist"));
		return ResponseEntity.ok(emp);
	}
//	update employee 
	@PutMapping("employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee emp1){
		Employee emp=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee with the id: "+id+" you provided, does not exist"));
		emp.setFirstName(emp1.getFirstName());
		emp.setLastName(emp1.getLastName());
		emp.setEmailId(emp1.getEmailId());
		Employee updatedEmp=employeeRepository.save(emp);
		return ResponseEntity.ok(updatedEmp);
	}
}
