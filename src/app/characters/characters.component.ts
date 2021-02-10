import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { character } from '../shared/models/character.model';
import { APICharactersService } from '../shared/services/apiCharacter.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: character[];
  private sub: Subscription;

  constructor(private api: APICharactersService) {}


  ngOnInit(): void {
    this.characters = this.api.characters;
     this.sub = this.api.charactersSubject.subscribe((data) => (this.characters = data));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
