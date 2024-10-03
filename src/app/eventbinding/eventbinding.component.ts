import { Component } from '@angular/core';

@Component({
  selector: '[app-eventbinding]',
  standalone: true,
  imports: [],
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css',
})
export class EventbindingComponent {
  public name = 'donex';
  public greeting = '';
  onClick() {
    console.log('message coming ');
  }
  EventPrinter(event: Event) {
    console.log(event);
  }
}
