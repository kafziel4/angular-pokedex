import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { of } from 'rxjs';

import { Pokemon } from '../../models/pokemon/pokemon';
import { SinglePokemonResponse } from '../../models/single-pokemon/single-pokemon-response';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let de: DebugElement;

  let pokemonService: PokemonService;
  let spy: jasmine.Spy;

  const firstPokemon: SinglePokemonResponse = {
    id: 1,
    name: 'pokemonName',
    height: 10,
    weight: 10,
    sprites: {
      other: { ['official-artwork']: { front_default: 'url.jpg' } },
    },
    stats: [
      { base_stat: 10 },
      { base_stat: 50 },
      { base_stat: 100 },
      { base_stat: 150 },
      { base_stat: 200 },
      { base_stat: 250 },
    ],
    types: [{ type: { name: 'pokemonType' } }],
  };

  const secondPokemon: SinglePokemonResponse = {
    id: 2,
    name: 'pokemonName',
    height: 10,
    weight: 10,
    sprites: {
      other: { ['official-artwork']: { front_default: 'url.jpg' } },
    },
    stats: [
      { base_stat: 10 },
      { base_stat: 50 },
      { base_stat: 100 },
      { base_stat: 150 },
      { base_stat: 200 },
      { base_stat: 250 },
    ],
    types: [{ type: { name: 'pokemonType' } }],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent, MockComponent(PokemonCardComponent)],
      imports: [HttpClientModule, InfiniteScrollModule],
      providers: [PokemonService],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    pokemonService = de.injector.get(PokemonService);
    spy = spyOn(pokemonService, 'getPokemon')
      .withArgs(0)
      .and.returnValue(of(firstPokemon))
      .withArgs(20)
      .and.returnValue(of(secondPokemon));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPokemon on init', () => {
    expect(spy).toHaveBeenCalledOnceWith(0);
  });

  it('should have first pokemon', () => {
    const expectedPokemon: Pokemon = {
      image: 'url.jpg',
      number: 1,
      name: 'pokemonName',
      types: ['pokemonType'],
      height: 10,
      weight: 10,
      stats: {
        hp: 10,
        att: 50,
        def: 100,
        satt: 150,
        sdef: 200,
        spd: 250,
      },
    };

    expect(component.pokemons).toHaveSize(1);
    expect(component.pokemons[0]).toEqual(expectedPokemon);
  });

  it('should call getPokemon on scroll', () => {
    component.onScroll();

    expect(spy).toHaveBeenCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should add second pokemon', () => {
    const expectedPokemon: Pokemon = {
      image: 'url.jpg',
      number: 2,
      name: 'pokemonName',
      types: ['pokemonType'],
      height: 10,
      weight: 10,
      stats: {
        hp: 10,
        att: 50,
        def: 100,
        satt: 150,
        sdef: 200,
        spd: 250,
      },
    };

    component.onScroll();

    expect(component.pokemons).toHaveSize(2);
    expect(component.pokemons[1]).toEqual(expectedPokemon);
  });

  it('should have pokemon list', () => {
    const pokemonList: DebugElement = de.query(By.css('.pokemon-list'));

    expect(pokemonList).toBeTruthy();
  });

  it('should have pokemon card', () => {
    const pokemonCardElement = fixture.debugElement.query(
      By.css('app-pokemon-card:nth-child(1)')
    );
    const pokemonCard: PokemonCardComponent =
      pokemonCardElement.componentInstance;

    expect(pokemonCard).toBeTruthy();
  });

  it('should pass first pokemon input', () => {
    const expectedPokemon: Pokemon = {
      image: 'url.jpg',
      number: 1,
      name: 'pokemonName',
      types: ['pokemonType'],
      height: 10,
      weight: 10,
      stats: {
        hp: 10,
        att: 50,
        def: 100,
        satt: 150,
        sdef: 200,
        spd: 250,
      },
    };

    const pokemonCardElement = fixture.debugElement.query(
      By.css('app-pokemon-card:nth-child(1)')
    );
    const pokemonCard: PokemonCardComponent =
      pokemonCardElement.componentInstance;

    expect(pokemonCard.pokemon).toEqual(expectedPokemon);
  });

  it('should trigger scroll event', () => {
    const pokemonList: DebugElement = de.query(By.css('.pokemon-list'));

    pokemonList.triggerEventHandler('scrolled');

    expect(spy).toHaveBeenCalledWith(20);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should add pokemon card', () => {
    const pokemonList: DebugElement = de.query(By.css('.pokemon-list'));

    pokemonList.triggerEventHandler('scrolled');
    fixture.detectChanges();

    const pokemonCardElement = fixture.debugElement.query(
      By.css('app-pokemon-card:nth-child(2)')
    );
    const pokemonCard: PokemonCardComponent =
      pokemonCardElement.componentInstance;

    expect(pokemonCard).toBeTruthy();
  });

  it('should pass second pokemon input', () => {
    const expectedPokemon: Pokemon = {
      image: 'url.jpg',
      number: 2,
      name: 'pokemonName',
      types: ['pokemonType'],
      height: 10,
      weight: 10,
      stats: {
        hp: 10,
        att: 50,
        def: 100,
        satt: 150,
        sdef: 200,
        spd: 250,
      },
    };

    const pokemonList: DebugElement = de.query(By.css('.pokemon-list'));

    pokemonList.triggerEventHandler('scrolled');
    fixture.detectChanges();

    const pokemonCardElement = fixture.debugElement.query(
      By.css('app-pokemon-card:nth-child(2)')
    );
    const pokemonCard: PokemonCardComponent =
      pokemonCardElement.componentInstance;

    expect(pokemonCard.pokemon).toEqual(expectedPokemon);
  });
});
