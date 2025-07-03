import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router : Router) {}
  navigateCardSearch(){
    this.router.navigate(["card-search"])
  }
  navigateDecks(){
    this.router.navigate(["deck-list"])
  }
  navigateOptions(){
    this.router.navigate(["options-menu"])
  }
}

