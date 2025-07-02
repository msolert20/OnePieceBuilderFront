import { Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'
import { CardSearchService } from '../../services/card-search.service';

@Component({
  selector: 'app-card-search-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card-search-filters.component.html',
  styleUrl: './card-search-filters.component.css'
})
export class CardSearchFiltersComponent {
  @Output() cardsFetched = new EventEmitter<any[]>();

  constructor (private cardSearchService: CardSearchService) {}
  searchFiltersForm = new FormGroup({
    name: new FormControl(''),
    text: new FormControl(''),
    character: new FormControl(''),
    leader: new FormControl(''),
    event: new FormControl(''),
    stage: new FormControl(''),
    red: new FormControl(''),
    green: new FormControl(''),
    purple: new FormControl(''),
    blue: new FormControl(''),
    black: new FormControl(''),
    yellow: new FormControl(''),
    cost: new FormControl('', [Validators.pattern("^[0-9]*$")]),
    costOperator: new FormControl('='),
    power: new FormControl('', [Validators.pattern("^[0-9]*$")]),
    powerOperator: new FormControl('='),
    counter: new FormControl(''),
    type: new FormControl(''),
    set: new FormControl(''),
    id: new FormControl(''),
  })

  submitForm() {
    if(this.searchFiltersForm.valid){
      let possibleCategories = []
      let possibleColors = []
      let formCardCategories = [
        this.searchFiltersForm.value.character ? "Character" : null,
        this.searchFiltersForm.value.leader ? "Leader" : null,
        this.searchFiltersForm.value.stage ? "Stage" : null,
        this.searchFiltersForm.value.event ? "Event" : null
      ]
      let formColors = [
        this.searchFiltersForm.value.red ? "Red" : null,
        this.searchFiltersForm.value.green ? "Green" : null,
        this.searchFiltersForm.value.purple ? "Purple" : null,
        this.searchFiltersForm.value.blue ? "Blue" : null,
        this.searchFiltersForm.value.black ? "Black" : null,
        this.searchFiltersForm.value.yellow ? "Yellow" : null,
      ]
      for(let category of formCardCategories){
        if(category){
          possibleCategories.push(category)
        }
      }
      for(let color of formColors){
        if(color){
          possibleColors.push(color)
        }
      }
    
      var cardSearchObject ={ 
        cardSearchObject: {
          name: this.searchFiltersForm.value.name,
          text: this.searchFiltersForm.value.text,
          category: possibleCategories,
          color: possibleColors,
          cost: {
            value: this.searchFiltersForm.value.cost,
            operator: this.searchFiltersForm.value.costOperator,
          },
          power: {
            value: this.searchFiltersForm.value.power,
            operator: this.searchFiltersForm.value.powerOperator
          }, 
          counter: this.searchFiltersForm.value.counter,
          type: this.searchFiltersForm.value.type,
          set: this.searchFiltersForm.value.set,
          id: this.searchFiltersForm.value.id      
        }
      }
      this.cardSearchService.searchCards(cardSearchObject).subscribe({
        next: (response) => {
          var cardArray = response.cards
          this.cardsFetched.emit(cardArray)
        },
        error: (error) => console.log(error)
      })
    } 
  }
}
