import { Component, OnInit } from '@angular/core';
import { EmployeserviceService } from '../employeservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employelist.component.html',
  styleUrl: './employelist.component.css',
})
export class EmployelistComponent implements OnInit {
  public employees: any[] = [];
  constructor(private _employeservice: EmployeserviceService) {}
  ngOnInit(): void {
    this.employees = this._employeservice.getEmployees();
  }
}
