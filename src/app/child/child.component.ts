import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() public newName: string = '';
  @Input() public parentData: string = '';
  @Output() public childEvent = new EventEmitter();
  @Output() public childEvent2 = new EventEmitter();
  constructor() {
    this.childEvent2.emit('donex');
  }
  fireEvent() {
    this.childEvent.emit('hey emiting');
  }
}
