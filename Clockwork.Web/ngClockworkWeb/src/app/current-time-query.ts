import { TimeQuery } from './timequery';

export class CurrentTimeQuery extends TimeQuery {
  currentTimeQueryId: number;
  utcTime: string;
  time: string;
}
