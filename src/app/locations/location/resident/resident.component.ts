import { Component, Input, OnInit } from '@angular/core';
import { character } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss'],
})
export class ResidentComponent implements OnInit {
  @Input() resident: character;
  constructor() {}

  ngOnInit(): void {}
}
