import { Component } from '@angular/core';
import { EventbindingComponent } from '../eventbinding/eventbinding.component';

@Component({
  selector: 'app-newcomponent',
  standalone: true,
  imports: [EventbindingComponent],
  templateUrl: './newcomponent.component.html',
  styles: [
    `
      .text-success {
        color: green;
      }
    `,
  ],
})
export class NewcomponentComponent {
  public myId = 'value';
  public disabled = 'false';
  public textColor ='text-success'
}
