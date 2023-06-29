import { Stats } from './stats';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
  stats: Stats;
}
