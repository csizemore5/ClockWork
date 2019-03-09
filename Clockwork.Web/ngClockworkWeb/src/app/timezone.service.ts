import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../environments/environment';
import { TimeZoneId } from './timezone-id';


@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  constructor(private http: HttpClient) { }
    API_URL = environment.apiUrl;
    getAllTimezones(): Observable<TimeZoneId[]> {
      return this.http.get<TimeZoneId[]>(this.API_URL + 'timezoneids');
    }


}
