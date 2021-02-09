import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('hov', [

      state(
        'start',
        style({
          opacity : 1
        })
      ),
      transition('void => *', [style({
        opacity : 0
      }),animate('500ms ease-out')]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  @HostListener('mo')
  state = 'noHover';

  constructor() {}

  ngOnInit(): void {}
}
