import { Component,ViewEncapsulation } from '@angular/core';
import { threeSixty } from './threesixty.directive';

@Component({
  selector: 'index',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['threesixty.css','detail.css'],
  templateUrl: 'detail.html',
  directives: [threeSixty],
})
export class Index {
  constructor() {

  }

  ngOnInit() {
  }
}
