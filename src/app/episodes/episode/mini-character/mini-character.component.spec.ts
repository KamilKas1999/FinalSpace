import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCharacterComponent } from './mini-character.component';

describe('MiniCharacterComponent', () => {
  let component: MiniCharacterComponent;
  let fixture: ComponentFixture<MiniCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
