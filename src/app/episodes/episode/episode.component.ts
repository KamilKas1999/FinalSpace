import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { character } from 'src/app/shared/models/character.model';
import { EpisodesService } from 'src/app/shared/services/episodes.service';
import { episode } from '../../shared/models/episode.model';


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
  isLoading = false;

  constructor(private route: ActivatedRoute, private API: EpisodesService) {}

  ngOnInit(): void {
    this.subParams = this.route.params.subscribe((params: Params) => {
      this.startLoading();
      this.id = +params['id'];
      this.episode = this.API.getEpisode(this.id - 1);
      this.API.getListOfCharacters(this.id - 1);
    });
    this.subEpisode = this.API.episodesChanged.subscribe((data) => {
      this.startLoading();
      this.episode = this.API.getEpisode(this.id - 1);
      this.API.getListOfCharacters(this.id - 1);
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

  startLoading() {
    this.isLoading = true;
    console.log("true")
    setTimeout(()=> {
      this.isLoading = false;
      console.log("false");
    }, 500)
  }
}
