import { Component, OnInit } from '@angular/core';
import { WorldTimeQuery } from '../world-time-query';
import { TimeZoneId } from '../timezone-id';
import { TimezoneService } from '../timezone.service';

@Component({
  selector: 'app-timezone-selector',
  templateUrl: './timezone-selector.component.html',
  styleUrls: ['./timezone-selector.component.css']
})
export class TimezoneSelectorComponent implements OnInit {
  constructor(private timeZoneService: TimezoneService) { }

  timeZoneIds: Array<TimeZoneId> = [];
  selectedTimeZoneId: string;
  selectedTime: string;
  worldTime: WorldTimeQuery;
  allWorldTimeQueries: WorldTimeQuery[];

  ngOnInit() {
    this.getTimeZones();
    this.getAllWorldTimeQueries();
  }

  getTimeZones() {
    this.timeZoneService.getAllTimezones()
    .subscribe((data: TimeZoneId[]) => {
      this.timeZoneIds = data;
    });
  }

  displayTime() {
    this.timeZoneService.getSpecificTimeZone(this.selectedTimeZoneId)
    .subscribe((data: WorldTimeQuery) => {
      this.worldTime = data;
    });
    this.getAllWorldTimeQueries();
  }

  getAllWorldTimeQueries() {
    this.timeZoneService.getAllWorldTimeQueries()
    .subscribe((data: WorldTimeQuery[]) => {
    this.allWorldTimeQueries = data;
    });
  }
}
