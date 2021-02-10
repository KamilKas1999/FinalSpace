import { Component, OnInit } from '@angular/core';
import { character } from '../shared/models/character.model';
import { quote } from '../shared/models/quote.model';
import { QuotesService } from '../shared/services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes: quote[];



  constructor(private quoteService: QuotesService) {}

  ngOnInit(): void {
    this.quotes = this.quoteService.quotes;
    this.quoteService.quotesChanged.subscribe(() => {
      this.quotes = this.quoteService.quotes;
    });
  }


}
