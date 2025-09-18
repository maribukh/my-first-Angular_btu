import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface DropdownItem {
  icon?: string;
  label: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  // @Input() items: DropdownItem[] = [];
  @Input() variant: 'Features' | 'Company' = 'Features';

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  Features = [
    { icon: 'icon-todo.svg', label: 'Todo List' },
    { icon: 'icon-calendar.svg', label: 'Calendar' },
    { icon: 'icon-reminders.svg', label: 'Reminders' },
    { icon: 'icon-planning.svg', label: 'Planning' },
  ];

  Company = [{ label: 'History' }, { label: 'Our Team' }, { label: 'Blog' }];
}
