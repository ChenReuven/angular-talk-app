import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FilterComponent } from './filter.component';
import { TalkListComponent } from './talklist.component';
import { TalkComponent } from './talk.component';
import { FormmatedRatingComponent } from './formatted.rating.component';
import { WatchButtonComponent } from './watch.button.component';
import { RateButtonComponent } from './rate.button.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    FilterComponent,
    TalkListComponent,
    TalkComponent,
    FormmatedRatingComponent,
    WatchButtonComponent,
    RateButtonComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
