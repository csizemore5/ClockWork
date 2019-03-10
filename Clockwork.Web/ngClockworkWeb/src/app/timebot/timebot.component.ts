import { Component, OnInit, NgModule } from '@angular/core';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material';

import { CurrentTimeQuery } from '../current-time-query';
import { TimezoneService } from '../timezone.service';

@Component({
  selector: 'app-timebot',
  templateUrl: './timebot.component.html',
  styleUrls: ['./timebot.component.css']
})
@NgModule({
  imports: [
    MatSidenavContainer,
    MatSidenavContent
  ]
})
export class TimebotComponent implements OnInit {

  constructor(private timeZoneService: TimezoneService) { }

  error: string;
  currentTime: CurrentTimeQuery;
  allCurrentTimeQueries: CurrentTimeQuery[];

  ngOnInit() {
    this.displayAllCurrentTimeQueries();
  }

  displayCurrentTime() {
    this.timeZoneService.getCurrentTime()
    .subscribe(
      (data: CurrentTimeQuery) => { this.currentTime = data; },
      error => this.error = error,
      () => this.displayAllCurrentTimeQueries());
  }

  displayAllCurrentTimeQueries() {
    this.timeZoneService.getAllCurrentTimeQueries()
    .subscribe((data: CurrentTimeQuery[]) => { this.allCurrentTimeQueries = data; },
    error => this.error = error);
  }

}
