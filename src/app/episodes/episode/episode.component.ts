import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { character } from 'src/app/characters/character/character.model';
import { episode } from '../episode.model';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit, OnDestroy {
  id: number;
  episode: episode;
  private subParams: Subscription;
  private subEpisode: Subscription;
  private subCharacter: Subscription;
  characters: character[] = [];

  constructor(private route: ActivatedRoute, private API: EpisodesService) {}

  ngOnInit(): void {
    this.subParams = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.episode = this.API.getEpisode(this.id - 1);
      this.API.getListOfCharacters(this.id-1);
    });
    this.subEpisode = this.API.episodesChanged.subscribe((data) => {
      this.episode = this.API.getEpisode(this.id - 1);
      this.API.getListOfCharacters(this.id-1);
    });
    this.subCharacter = this.API.charactersChanged.subscribe((characters) => {
      this.characters = characters;
    });
  }

  ngOnDestroy(): void {
    this.subParams.unsubscribe();
    this.subEpisode.unsubscribe();
    this.subCharacter.unsubscribe();
  }
}
