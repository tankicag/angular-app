import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: ` Filter: <input type="text" [(ngModel)]="filter" /> `,
})
export class FilterTextboxComponent implements OnInit {
  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.chnaged.emit(this.filter); //Raise changed event
  }

  @Output() chnaged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
