import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { character } from '../models/character.model';
import { quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  quotes: quote[] = [];
  quotesChanged = new Subject<null>();
  constructor(private http: HttpClient) {}
  getQuotes() {
    this.http
      .get<quote[]>('https://finalspaceapi.com/api/v0/quote/')
      .subscribe((data) => {
        this.quotes = data;
        this.quotesChanged.next();
      });
  }
  getCharacter(index : number) {
    const url = this.quotes[index].character;

      return this.http.get<character>(url);

  }
}
