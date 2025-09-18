import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../ui/dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
