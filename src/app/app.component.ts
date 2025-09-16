import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-app';
}
