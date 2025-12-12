import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { RouterLink} from "@angular/router";

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
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
      <a [routerLink]="['/details', housingLocation().id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.css'
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>()
}
