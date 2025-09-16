import { Component } from '@angular/core';
import { PartnerComponent } from '../ui/partner/partner.component';

@Component({
  selector: 'app-hero-section',
  imports: [PartnerComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
