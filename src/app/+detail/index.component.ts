import { Component } from '@angular/core';
import { threeSixty } from './threesixty.directive';

@Component({
  selector: 'index',
  styleUrls: ['threesixty.css'],
  templateUrl: 'detail.html',
  directives: [threeSixty]
})
export class Index {
  constructor() {

  }

  ngOnInit() {
  }
}
