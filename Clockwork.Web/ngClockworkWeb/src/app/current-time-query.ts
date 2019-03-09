import { TimeQuery } from './timequery';

export class CurrentTimeQuery extends TimeQuery {
  id: number;
  utcTime: string;
}
