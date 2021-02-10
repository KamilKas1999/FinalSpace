import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APICharactersService } from './shared/services/apiCharacter.service';
import { EpisodesService } from './shared/services/episodes.service';
import { LocationsService } from './shared/services/locations.service';
import { QuotesService } from './shared/services/quotes.service';



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

  constructor(private http: HttpClient, private APIcharacters : APICharactersService, private APIepisodes : EpisodesService, private APIlocations : LocationsService, private APIquotes : QuotesService) {}

  ngOnInit(){
    this.APIcharacters.getCharacters();
    this.APIepisodes.getEpisodes();
    this.APIlocations.getLocations();
    this.APIquotes.getQuotes();
    
  }
}
