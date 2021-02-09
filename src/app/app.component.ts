import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APICharactersService } from './characters/apiCharacter.service';
import { EpisodesService } from './episodes/episodes.service';
import { LocationsService } from './locations/locations.service';


interface data {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Final Space';

  constructor(private http: HttpClient, private APIcharacters : APICharactersService, private APIepisodes : EpisodesService, private APIlocations : LocationsService) {}

  ngOnInit(){
    this.APIcharacters.getCharacters();
    this.APIepisodes.getEpisodes();
    this.APIlocations.getLocations();
    
  }
}
