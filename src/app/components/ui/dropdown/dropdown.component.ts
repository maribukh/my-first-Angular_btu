import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, HostListener } from '@angular/core';

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
  @Input() variant: 'Features' | 'Company' = 'Features';
  isOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target) && this.isOpen) {
      this.isOpen = false;
    }
  }

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
