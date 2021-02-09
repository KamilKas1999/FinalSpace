import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationsComponent } from './locations/locations.component';
import { QuotesComponent } from './quotes/quotes.component';
import { EpisodeComponent } from './episodes/episode/episode.component';
import { MiniCharacterComponent } from './episodes/episode/mini-character/mini-character.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './shared/loading/loading.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersComponent,
    CharacterComponent,
    EpisodesComponent,
    LocationsComponent,
    QuotesComponent,
    EpisodeComponent,
    MiniCharacterComponent,
    HomeComponent,
    LoadingComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
