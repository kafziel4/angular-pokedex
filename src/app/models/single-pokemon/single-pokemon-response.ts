import { PokemonSprites } from './pokemon-sprites';
import { PokemonStat } from './pokemon-stat';
import { PokemonType } from './pokemon-type';

export interface SinglePokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
}
