import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <section class="listing">
      <img 
        [src]="housingLocation().photo" 
        alt="Exteriror photo of {{ housingLocation().name }}" 
        class="listing-photo"
        crossorigin
      />
      <h2 class="listing-heading">{{housingLocation().name}}</h2>
      <p class="listing-location">{{housingLocation().city}}</p>
    </section>
  `,
  styleUrl: './housing-location.css'
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>()
}
