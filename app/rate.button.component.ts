/**
 * Created by reuvec on 9/14/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Talk } from './talk';

@Component({
  selector: 'rate-button',
  template: `
    {{talk.rate}}
    <button (click)="onClick()"> + </button>
    <button (click)="rateDown.emit(talk.rate)"> - </button>
  `
})
export class RateButtonComponent{
  @Input() talk: Talk;
  @Output() rateUp = new EventEmitter();
  @Output() rateDown = new EventEmitter();

  onClick(){
    this.rateUp.emit(this.talk.rate)
  }
}
