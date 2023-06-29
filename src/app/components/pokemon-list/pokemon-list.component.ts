import { Component } from '@angular/core';

import { Pokemon } from '../../models/pokemon/pokemon';
import { SinglePokemonResponse } from '../../models/single-pokemon/single-pokemon-response';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [];

  private offset: number = 0;

  constructor(private pokemonService: PokemonService) {}

  public ngOnInit(): void {
    this.callPokemonService(this.offset);
  }

  public onScroll(): void {
    this.offset += 20;
    this.callPokemonService(this.offset);
  }

  private callPokemonService(offset: number): void {
    this.pokemonService.getPokemon(offset).subscribe((pokemonResponse) => {
      this.pokemons[pokemonResponse.id - 1] =
        this.transformPokemonData(pokemonResponse);
    });
  }

  private transformPokemonData(
    pokemonResponse: SinglePokemonResponse
  ): Pokemon {
    return {
      image: pokemonResponse.sprites.other['official-artwork'].front_default,
      number: pokemonResponse.id,
      name: pokemonResponse.name,
      types: pokemonResponse.types.map((type) => type.type.name),
      height: pokemonResponse.height,
      weight: pokemonResponse.weight,
      stats: {
        hp: pokemonResponse.stats[0].base_stat,
        att: pokemonResponse.stats[1].base_stat,
        def: pokemonResponse.stats[2].base_stat,
        satt: pokemonResponse.stats[3].base_stat,
        sdef: pokemonResponse.stats[4].base_stat,
        spd: pokemonResponse.stats[5].base_stat,
      },
    };
  }
}
