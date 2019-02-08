import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, AfterViewInit, Input} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  @ViewChild('sidenav') sidenavr: MatSidenav;
  
  constructor() {}

  toggle: Function;

  ngAfterViewInit() {
    this.toggle = () => {
      console.log(this.sidenavr);
      this.sidenavr.toggle();
      // this.sidenavr.open();
    };
  };
}
