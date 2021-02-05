import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { character } from './character/character.model';

@Injectable({
  providedIn: 'root',
})
export class APICharactersService {

  characters: character[] = [];
  charactersSubject = new Subject<character[]>();

  constructor(private http: HttpClient) {}

  getCharacters() {
    console.log("pobieram")
    this.http
      .get<character[]>('https://finalspaceapi.com/api/v0/character/').subscribe( data =>{
        this.characters = data;
        this.charactersSubject.next(this.characters);
      }
        
      )
  }

  getCharacter(index: number) {
    return this.characters[index];
  }
}
