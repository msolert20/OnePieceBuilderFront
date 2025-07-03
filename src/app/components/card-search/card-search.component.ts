import { Component, ViewChild } from '@angular/core' 
import { CommonModule } from '@angular/common' 
import { CardSearchFiltersComponent } from '../card-search-filters/card-search-filters.component' 
import { Router } from '@angular/router'
import { CardInfoComponent } from '../card-info/card-info.component'
@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [CommonModule, CardSearchFiltersComponent, CardInfoComponent] ,
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.css'
})
export class CardSearchComponent {
  isExpanded: boolean = true 
  cards: any [] | null = null
  selectedCard: any = null

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

  openModal(card: any) {
    this.selectedCard = card
    const modal = new (window as any).bootstrap.Modal(document.getElementById('cardModal'))
    modal.show()
  }
}
