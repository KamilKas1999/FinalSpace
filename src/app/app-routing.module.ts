import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { character } from './shared/models/character.model';
import { CharacterComponent } from './characters/character/character.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationsComponent } from './locations/locations.component';
import { QuotesComponent } from './quotes/quotes.component';
import { episode } from './shared/models/episode.model';
import { EpisodeComponent } from './episodes/episode/episode.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './locations/location/location.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'characters',
    component: CharactersComponent,
    children: [{ path: ':id', component: CharacterComponent }],
  },
  {
    path: 'episodes',
    component: EpisodesComponent,
    children: [{ path: ':id', component: EpisodeComponent }],
  },
  { path: 'locations', component: LocationsComponent, children: 
    [{ path: ':id', component : LocationComponent}]
   },
  { path: 'quotes', component: QuotesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
