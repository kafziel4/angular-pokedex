import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { AllPokemonResponse } from '../../models/all-pokemon/all-pokemon-response';
import { SinglePokemonResponse } from '../../models/single-pokemon/single-pokemon-response';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let httpTestingController: HttpTestingController;
  let pokemonService: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    pokemonService = TestBed.inject(PokemonService);
  });

  it('should return pokemon response', (done: DoneFn) => {
    const limit: number = 20;
    const offset: number = 0;

    const allPokemonUrl: string = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const singlePokemonUrl: string = 'someUrl';

    const getAllPokemonResponse: AllPokemonResponse = {
      results: [{ url: singlePokemonUrl }],
    };

    const getSinglePokemonResponse: SinglePokemonResponse = {
      id: 1,
      name: 'pokemonName',
      height: 10,
      weight: 10,
      sprites: {
        other: { ['official-artwork']: { front_default: 'url.jpg' } },
      },
      stats: [{ base_stat: 10 }],
      types: [{ type: { name: 'pokemonType' } }],
    };

    let finalResponse: unknown;

    const httpSubscription: Subscription = pokemonService
      .getPokemon(offset)
      .subscribe((response) => (finalResponse = response));

    const getAllPokemonCall = httpTestingController.expectOne(allPokemonUrl);
    expect(getAllPokemonCall.request.method).toEqual('GET');
    getAllPokemonCall.flush(getAllPokemonResponse);

    const getSinglePokemonCall =
      httpTestingController.expectOne(singlePokemonUrl);
    expect(getSinglePokemonCall.request.method).toEqual('GET');
    getSinglePokemonCall.flush(getSinglePokemonResponse);

    expect(finalResponse).toEqual(getSinglePokemonResponse);
    done();
  });
});
