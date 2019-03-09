import { TimeQuery } from './timequery';

export class WorldTimeQuery extends TimeQuery {
  worldTimeQueryId: number;
  requestedTimeZone: string;
  convertedDateTime: string;
}
