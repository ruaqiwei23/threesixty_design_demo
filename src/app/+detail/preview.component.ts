import { Component,ViewEncapsulation } from '@angular/core';
import { threeSixty } from './threesixty.directive';

@Component({
  selector: 'preview',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['threesixty.css','detail.css'],
  templateUrl: 'preview.html',
  directives: [threeSixty],
})
export class Preview {
  constructor() {
  }
}
