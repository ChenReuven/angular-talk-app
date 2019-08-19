/**
 * Created by reuvec on 9/14/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Talk } from './talk';

@Component({
  selector: 'watch-button',
  template: `
    <a [href]="talk.watch">Watch</a>
  `
})
export class WatchButtonComponent{
  @Input() talk: Talk;
}
