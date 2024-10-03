import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stylebinding.component.html',
  styleUrl: './stylebinding.component.css',
})
export class StylebindingComponent {
  public hasError = true;
  public orangset = 'orange';
  public styleObject: Object = {
    fontsize: '12px',
    fontweight: 'bold',
  };
}
