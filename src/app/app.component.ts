import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormsModule } from '@angular/forms';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { StructuralbindingComponent } from './structuralbinding/structuralbinding.component';
import { ParentComponent } from './parent/parent.component';
import { PipingComponent } from './piping/piping.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewcomponentComponent,
    SecondcomponentComponent,
    EventbindingComponent,
    FormsModule,
    TwowaybindingComponent,
    StylebindingComponent,
    TemplatereferencevariableComponent,
    StructuralbindingComponent,
    ParentComponent,
    PipingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public name = 'donex';
  title = 'Welcome to Donex webstie';
}
