import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereferencevariable',
  standalone: true,
  imports: [],
  templateUrl: './templatereferencevariable.component.html',
  styleUrl: './templatereferencevariable.component.css',
})
export class TemplatereferencevariableComponent {
  onClick(value: any) {
    console.log(value);
  }
}
