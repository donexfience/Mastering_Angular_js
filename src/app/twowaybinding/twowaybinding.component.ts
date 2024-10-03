import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-twowaybinding',
  standalone: true,
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css'], // Fixed the typo (styleUrls)
})
export class TwowaybindingComponent {
  public name = ''; // This will be bound with ngModel
  public event = '';
  public displayValue = true;
}
