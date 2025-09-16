import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// Интерфейс должен быть выше декоратора
interface DropdownItem {
  icon?: string; // путь к иконке (опционально)
  label: string; // текст пункта
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() title!: string;
  @Input() items: DropdownItem[] = [];
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
