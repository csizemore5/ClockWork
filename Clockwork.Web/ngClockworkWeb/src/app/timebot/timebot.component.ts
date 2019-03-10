import { Component, OnInit } from '@angular/core';

import { CurrentTimeQuery } from '../current-time-query';
import { TimezoneService } from '../timezone.service';

@Component({
  selector: 'app-timebot',
  templateUrl: './timebot.component.html',
  styleUrls: ['./timebot.component.css']
})
export class TimebotComponent implements OnInit {

  constructor(private timeZoneService: TimezoneService) { }

  currentTime: CurrentTimeQuery;
  allCurrentTimeQueries: CurrentTimeQuery[];

  ngOnInit() {
    this.displayAllCurrentTimeQueries();
  }

  displayCurrentTime() {
    this.timeZoneService.getCurrentTime()
    .subscribe((data: CurrentTimeQuery) => {
    this.currentTime = data;
    });
  }

  displayAllCurrentTimeQueries() {
    this.timeZoneService.getAllCurrentTimeQueries()
    .subscribe((data: CurrentTimeQuery[]) => {
      this.allCurrentTimeQueries = data;
    });
  }

}