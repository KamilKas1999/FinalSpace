import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { location } from '../shared/models/location.model';
import { LocationsService } from '../shared/services/locations.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations: location[];
  constructor(private APIlocations: LocationsService, private router : Router) {}

  ngOnInit(): void {
    this.locations = this.APIlocations.locations;
    this.APIlocations.locationsChanged.subscribe(() => {
      this.locations = this.APIlocations.locations;
    });
  }

  navigate(id : number){
    this.router.navigate(['/', 'locations', id])
  }


}
