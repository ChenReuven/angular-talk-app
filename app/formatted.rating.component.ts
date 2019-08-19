/**
 * Created by reuvec on 9/14/2016.
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { Talk } from './talk';

@Directive({
  selector: 'formmated-rating'
})
export class FormmatedRatingComponent{
  @Input() rating: number;
}
