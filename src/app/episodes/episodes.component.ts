import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { episode } from '../shared/models/episode.model';
import { EpisodesService } from '../shared/services/episodes.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit, OnDestroy {
  season1: episode[];
  season2: episode[];
  private sub : Subscription;

  constructor(private API: EpisodesService) {}


  ngOnInit(): void {
    this.season1 = this.API.season1;
    this.season2 = this.API.season2;
    this.sub = this.API.episodesChanged.subscribe(() => {
      this.season1 = this.API.season1;
      this.season2 = this.API.season2;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
