import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';

import { environment } from '../environments/environment';
import { TimeZoneId } from './timezone-id';
import { CurrentTimeQuery } from './current-time-query';
import { WorldTimeQuery } from './world-time-query';


@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  constructor(private http: HttpClient) { }
    API_URL = environment.apiUrl;
    getAllTimezones(): Observable<TimeZoneId[]> {
      return this.http.get<TimeZoneId[]>(this.API_URL + 'timezoneids');
    }

    getSpecificTimeZone(id: string): Observable<WorldTimeQuery> {
      return this.http.get<WorldTimeQuery>(this.API_URL + 'worldtime/' + id);
    }

    getCurrentTime(): Observable<CurrentTimeQuery> {
      return this.http.get<CurrentTimeQuery>(this.API_URL + 'currenttime');
    }

    getAllCurrentTimeQueries(): Observable<CurrentTimeQuery[]> {
      return this.http.get<CurrentTimeQuery[]>(this.API_URL + 'currenttime/all');
    }

    getAllWorldTimeQueries(): Observable<WorldTimeQuery[]> {
      return this.http.get<WorldTimeQuery[]>(this.API_URL + 'worldtime/all');
    }

}
