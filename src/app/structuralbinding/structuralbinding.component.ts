import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structuralbinding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structuralbinding.component.html',
  styleUrl: './structuralbinding.component.css',
})
export class StructuralbindingComponent {
  public displayvalue = true;
  public color = 'red';
  public colors = ['reed', 'green'];
}
