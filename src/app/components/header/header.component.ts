import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  @Output()
  sideNavToggled : EventEmitter<any> = new EventEmitter();

  toggle() {
    this.sideNavToggled.emit(null);
  }

}
