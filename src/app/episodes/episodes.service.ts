import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { character } from '../characters/character/character.model';
import { episode } from './episode.model';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  episodes: episode[] = [];
  season1: episode[] = [];
  season2: episode[] = [];
  episodesChanged = new Subject<null>();
  //characters: character[] = [];
  charactersChanged = new Subject<character[]>();

  constructor(private http: HttpClient) {}

  getEpisodes() {
    this.http
      .get<episode[]>('https://finalspaceapi.com/api/v0/episode/')
      .subscribe((data) => {
        this.episodes = data;
        this.season1 = this.episodes.slice(0, 10);
        this.season2 = this.episodes.slice(10, 23);
        this.episodesChanged.next();
      });
  }

  getEpisode(index: number) {
    //this.getListOfCharacters(index);
    return this.episodes[index];
  }

  getListOfCharacters(index: number) {
    const episode = this.episodes[index];
    let characters: character[] = [];
    if (episode) {
      for (let url of episode.characters) {
        this.http.get<character>(url).subscribe((data) => {
          characters.push(data);
          this.charactersChanged.next(characters);
        });
      }

    }
  }
}
