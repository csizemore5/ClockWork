import { Component, OnInit, Input } from '@angular/core';


import { WorldTimeQuery } from '../world-time-query';
import { TimeZoneId } from '../timezone-id';
import { TimezoneService } from '../timezone.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-timezone-selector',
  templateUrl: './timezone-selector.component.html',
  styleUrls: ['./timezone-selector.component.css']
})
export class TimezoneSelectorComponent implements OnInit {
  constructor(private timeZoneService: TimezoneService) { }
  @Input() timezoneid: TimeZoneId;

  timeZoneIds: Array<TimeZoneId> = [];

  selectedTimeZoneId = this.timeZoneIds[0];

  getTimeZones() {
    this.timeZoneService.getAllTimezones()
    .subscribe((data: TimeZoneId[]) => {
      this.timeZoneIds = data;
    });
  }

  timeZoneChanged(timeZoneIdVal: number) {
    this.selectedTimeZoneId = this.timeZoneIds[timeZoneIdVal];
  }

  displayTime(id: string) {

  }

  ngOnInit() {
    this.getTimeZones();
  }

}
