/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import {Location} from '@angular/common';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  templateUrl: 'templates/index.html'
})
export class App {
  loading = false;
  name = '360 Design Prototype';
  url = 'http://www.cimpress.com.cn';

  constructor(
    public appState: AppState,
    public _location: Location) {

  }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
}
