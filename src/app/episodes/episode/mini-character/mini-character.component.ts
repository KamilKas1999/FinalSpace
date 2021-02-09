import { Component, Input, OnInit } from '@angular/core';
import { character } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-mini-character',
  templateUrl: './mini-character.component.html',
  styleUrls: ['./mini-character.component.scss']
})
export class MiniCharacterComponent implements OnInit {

  @Input() character: character;
  constructor() { }

  ngOnInit(): void {
  }

}
