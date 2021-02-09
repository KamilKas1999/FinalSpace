import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { APICharactersService } from '../apiCharacter.service';
import { character } from '../../shared/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit, OnDestroy {

  character: character;
  id: number;
  private subParams : Subscription;
  private subCharacter : Subscription;

  constructor(
    private route: ActivatedRoute,
    private API: APICharactersService
  ) {}


  ngOnInit(): void {
    this.subParams = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.character = this.API.getCharacter(this.id - 1);
    });
    this.subCharacter = this.API.charactersSubject.subscribe((data) => {
      this.character = this.API.getCharacter(this.id - 1);
    });
  }

  ngOnDestroy(): void {
    this.subParams.unsubscribe();
    this.subCharacter.unsubscribe();
  }
}
