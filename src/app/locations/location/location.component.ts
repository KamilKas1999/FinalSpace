import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { character } from 'src/app/shared/models/character.model';
import { location } from 'src/app/shared/models/location.model';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit, OnDestroy {
  id: number;
  location: location;
  residents: character[];
  private paramsSub: Subscription;
  private APIsub: Subscription;
  private residentsSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private APIlocations: LocationsService
  ) {}

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params: Params) => {
      this.residents = [];
      this.id = +params['id'];
      this.location = this.APIlocations.getLocation(this.id - 1);
      this.APIlocations.getListOfCharacters(this.id - 1);
    });
    this.APIsub = this.APIlocations.locationsChanged.subscribe(() => {
      this.residents = [];
      this.location = this.APIlocations.getLocation(this.id - 1);
      this.APIlocations.getListOfCharacters(this.id - 1);
    });
    this.residentsSub = this.APIlocations.charactersChanged.subscribe(
      (residents) => {
        this.residents = residents;
        console.log(this.residents);
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.APIsub.unsubscribe();
  }
}
