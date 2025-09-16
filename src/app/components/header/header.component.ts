import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
