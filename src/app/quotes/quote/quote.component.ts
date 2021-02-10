import { Component, Input, OnInit } from '@angular/core';
import { character } from 'src/app/shared/models/character.model';
import { quote } from 'src/app/shared/models/quote.model';
import { QuotesService } from 'src/app/shared/services/quotes.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  @Input() quote: quote;
  @Input() index: number;
  characterID : number = 0;
  constructor(private quoteService : QuotesService) {}


  ngOnInit(): void {
    this.quoteService.getCharacter(this.index).subscribe((character) => {
      this.characterID = character.id;
    });
  }



}
