import { Component, ViewChild } from '@angular/core' 
import { CommonModule } from '@angular/common' 
import { CardSearchFiltersComponent } from '../card-search-filters/card-search-filters.component' 
@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [CommonModule, CardSearchFiltersComponent, ] ,
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.css'
})
export class CardSearchComponent {
  isExpanded: boolean = true 

  @ViewChild(CardSearchFiltersComponent) searchFiltersComponent!: CardSearchFiltersComponent 

  onOverlayClick() {
    this.isExpanded = false
  }
}
