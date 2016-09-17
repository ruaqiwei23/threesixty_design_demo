import { Component,ViewEncapsulation } from '@angular/core';
import { threeSixty } from './threesixty.directive';
import {Location} from '@angular/common';

@Component({
  selector: 'preview',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['threesixty.css','detail.css'],
  templateUrl: 'preview.html',
  directives: [threeSixty],
})
export class Preview {
  constructor(private _location: Location) {
  }
  backClicked() {
    this._location.back();
  }
}
