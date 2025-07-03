import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  @Input() card:any = null

  onImageError(event:Event, cardId:string){
    (event.target as HTMLImageElement).src = `cards/${cardId}.jpg`
  }
}
