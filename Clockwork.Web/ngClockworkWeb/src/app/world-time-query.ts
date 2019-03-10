import { TimeQuery } from './timequery';

export class WorldTimeQuery extends TimeQuery {
  worldTimeQueryId: number;
  convertedDateTime: string;
  requestedTimeZone: string;
  utcTime: string;
}
