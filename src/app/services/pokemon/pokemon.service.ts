import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable, Subject, takeUntil } from 'rxjs';

import { AllPokemonResponse } from '../../models/all-pokemon/all-pokemon-response';
import { SinglePokemonResponse } from '../../models/single-pokemon/single-pokemon-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  private limit: number = 20;

  constructor(private httpClient: HttpClient) {}

  public getPokemon(offset: number): Observable<SinglePokemonResponse> {
    const params: HttpParams = new HttpParams()
      .set('limit', this.limit)
      .set('offset', offset);

    return this.httpClient.get<AllPokemonResponse>(this.url, { params }).pipe(
      map((res) => res.results),
      mergeMap((results) => {
        return from(results).pipe(
          mergeMap((result) =>
            this.httpClient.get<SinglePokemonResponse>(result.url)
          )
        );
      }),
      takeUntil(new Subject())
    );
  }
}
