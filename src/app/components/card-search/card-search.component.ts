import { Component, ViewChild } from '@angular/core' 
import { CommonModule } from '@angular/common' 
import { CardSearchFiltersComponent } from '../card-search-filters/card-search-filters.component' 
import { Router } from '@angular/router'
@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [CommonModule, CardSearchFiltersComponent,] ,
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.css'
})
export class CardSearchComponent {
  isExpanded: boolean = true 
  cards: any [] | null = null

  @ViewChild(CardSearchFiltersComponent) searchFiltersComponent!: CardSearchFiltersComponent 
  constructor(private router: Router){}

  onCardsFetched(data: any []){
    this.isExpanded = false
    this.cards = data
  }

  navigateHome(){
    this.router.navigate(["/"])
  }

  onImageError(event:Event, cardId:string){
    (event.target as HTMLImageElement).src = `cards/${cardId}.jpg`
  }

  onOverlayClick() {
    this.isExpanded = false
  }
}
