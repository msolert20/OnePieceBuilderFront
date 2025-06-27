import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CardSearchService {
  private apiUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) {}

  getCard(cardId : any) : Observable<any>{
    return this.http.post(`${this.apiUrl}/card`, cardId)
  }

  searchCards(cardSearchObject : any) : Observable<any>{
    let url = this.apiUrl + "/api/cardsearch"
    return this.http.post(url, cardSearchObject)
  }
}