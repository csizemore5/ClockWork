import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
      return this.http.get<TimeZoneId[]>(this.API_URL + 'timezoneids')
      .pipe(
        catchError(this.handleError)
      );
    }

    getSpecificTimeZone(id: string): Observable<WorldTimeQuery> {
      return this.http.get<WorldTimeQuery>(this.API_URL + 'worldtime/' + id)
      .pipe(
        catchError(this.handleError)
      );
    }

    getCurrentTime(): Observable<CurrentTimeQuery> {
      return this.http.get<CurrentTimeQuery>(this.API_URL + 'currenttime')
      .pipe(
        catchError(this.handleError)
      );
    }

    getAllCurrentTimeQueries(): Observable<CurrentTimeQuery[]> {
      return this.http.get<CurrentTimeQuery[]>(this.API_URL + 'currenttime/all')
      .pipe(
        catchError(this.handleError)
      );
    }

    getAllWorldTimeQueries(): Observable<WorldTimeQuery[]> {
      return this.http.get<WorldTimeQuery[]>(this.API_URL + 'worldtime/all')
      .pipe(
        catchError(this.handleError)
      );
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occured. Handle it.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body my contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later');
    }
}

