/**
 * Created by reuvec on 9/14/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Talk } from './talk';

@Component({
  selector: 'talk-cmp',
  template: `
    <div>
      {{talk.title}}
      {{talk.speaker}}
    </div>
    <div>
      <formmated-rating [rating]="2"></formmated-rating>
      <watch-button [talk]="talk"></watch-button>
      <rate-button [talk]="talk" (rateUp)="onRateUp($event)" (rateDown)="onRateDown($event)"></rate-button>
    </div>
  `
})
export class TalkComponent {
  @Input() talk: any;

  onRateUp($event:any) {
    alert($event);
    this.talk.rate = $event + 1;
  }

  onRateDown($event:any){
    this.talk.rate= $event - 1;
  }
}
