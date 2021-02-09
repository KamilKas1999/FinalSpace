import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { character } from '../shared/models/character.model';
import { location } from '../shared/models/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  locations: location[] = [];
  locationsChanged = new Subject<null>();
  charactersChanged = new Subject<character[]>();
  constructor(private http: HttpClient) {}

  getLocations() {
    this.http
      .get<location[]>('https://finalspaceapi.com/api/v0/location/')
      .subscribe((data) => {
        this.locations = data;
        this.locationsChanged.next();
      });
  }

  getLocation(index : number) {
    return this.locations[index];
  }

  getListOfCharacters(index: number) {
    const location = this.locations[index];
    let characters: character[] = [];
    if (location) {
      for (let url of location.notable_residents) {
        this.http.get<character>(url).subscribe((data) => {
          characters.push(data);
          this.charactersChanged.next(characters);
        });
      }

    }
  }
}
