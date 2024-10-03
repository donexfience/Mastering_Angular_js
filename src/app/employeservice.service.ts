import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeserviceService {
  constructor() {}
  getEmployees() {
    return [
      { _id: 1, name: 'donex', age: 21 },
      { _id: 2, name: 'naji', age: 33 },
    ];
  }
}
