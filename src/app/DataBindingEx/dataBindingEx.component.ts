import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding-ex',
  templateUrl: './dataBindingEx.component.html',
  styleUrls: ['./dataBindingEx.component.css'],
})
export class DataBindingEx implements OnInit {
  isDisabled: boolean = false;
  subTitle: string = 'Exploring DataBinding';
  luckyNumber: number = 1;
  version: string = 'Angular ' + this.luckyNumber;

  constructor() {}
  ngOnInit() {}

  onClick() {
    console.log('Button has clicked');
    this.luckyNumber = ~~(Math.random() * 10);
  }
}
