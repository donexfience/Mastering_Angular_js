import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-piping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './piping.component.html',
  styleUrl: './piping.component.css',
})
export class PipingComponent {
  public name = 'DOnex';
}
