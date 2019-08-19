import { Component } from '@angular/core';
import { TalksAppBackendService } from './talks.app.backend.service';
import { TalkListComponent } from './talklist.component';
import { FilterComponent } from './filter.component';


@Component({
    selector: 'my-app',
    providers: [TalksAppBackendService],
    template: `
      <h1>Talk Apps</h1>
      <filter (search)="onSearch($event)"></filter>
      <talk-list [talks]="talks"></talk-list>
    `
})
export class AppComponent { 
  private talks:any;

  constructor(public backendService:TalksAppBackendService){
    this.talks = backendService.fetchTalks('');
  }

  onSearch($event:any){
    let value = $event.value;
    this.talks = this.backendService.fetchTalks(value);
  }
}
