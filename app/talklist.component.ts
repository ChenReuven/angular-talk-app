 /**
 * Created by reuvec on 9/17/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TalkComponent } from './talk.component';
import { Talk } from './talk';

@Component({
  selector: 'talk-list',
  template: `
    <ul>
      <li *ngFor="let talk of talks">
        <talk-cmp [talk]="talk"></talk-cmp>
      </li>
    </ul>
      `
})
export class TalkListComponent {
  @Input() filter:any;
  @Input() talks:any;

}
