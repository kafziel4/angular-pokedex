import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    component.pokemon = {
      image: '/assets/images/blank.jpg',
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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have card', () => {
    const pokemonCard: DebugElement = de.query(By.css('.pokemon-card'));

    expect(pokemonCard).toBeTruthy();
  });

  it('should have image', () => {
    const pokemonImage: DebugElement = de.query(By.css('.pokemon-card__image'));

    expect(pokemonImage.properties['src']).toBe('/assets/images/blank.jpg');
    expect(pokemonImage.properties['alt']).toBe('pokemonName image');
  });

  it('should have number', () => {
    const pokemonNumber: DebugElement = de.query(
      By.css('.pokemon-card__number')
    );

    expect(pokemonNumber.properties['innerText']).toBe('#001');
  });

  it('should have name', () => {
    const pokemonName: DebugElement = de.query(By.css('.pokemon-card__name'));

    expect(pokemonName.properties['innerText']).toBe('PokemonName');
  });

  it('should have types', () => {
    const pokemonTypes: DebugElement = de.query(By.css('.pokemon-card__types'));

    expect(pokemonTypes).toBeTruthy();
  });

  it('should have type', () => {
    const pokemonType: DebugElement = de.query(By.css('.pokemon-card__type'));

    expect(pokemonType.properties['className']).toContain(
      'pokemon-card__type--pokemontype'
    );
    expect(pokemonType.properties['innerText']).toBe('PokemonType');
  });

  it('should have measure', () => {
    const pokemonMeasure: DebugElement = de.query(
      By.css('.pokemon-card__measure')
    );

    expect(pokemonMeasure.properties['innerText']).toBeTruthy();
  });

  it('should have height', () => {
    const pokemonHeight: DebugElement = de.query(
      By.css('.pokemon-card__height')
    );

    expect(pokemonHeight.properties['innerText']).toBe('Height: 1 m');
  });

  it('should have weight', () => {
    const pokemonWeight: DebugElement = de.query(
      By.css('.pokemon-card__weight')
    );

    expect(pokemonWeight.properties['innerText']).toBe('Weight: 1 kg');
  });

  it('should have stats', () => {
    const pokemonStats: DebugElement = de.query(By.css('.pokemon-card__stats'));

    expect(pokemonStats).toBeTruthy();
  });

  it('should have stats-table', () => {
    const pokemonStatsTable: DebugElement = de.query(
      By.css('.pokemon-card__stats-table')
    );

    expect(pokemonStatsTable).toBeTruthy();
  });

  it('should have stat hp', () => {
    const pokemonHp: DebugElement = de.query(By.css('.pokemon-card__stat--hp'));

    expect(pokemonHp).toBeTruthy();
  });

  it('should have stat hp name', () => {
    const pokemonHpName: DebugElement = de.query(
      By.css('.pokemon-card__stat-name--hp')
    );

    expect(pokemonHpName.properties['innerText']).toBe('Hp:');
  });

  it('should have stat hp value', () => {
    const pokemonHpValue: DebugElement = de.query(
      By.css('.pokemon-card__stat-value--hp')
    );

    expect(pokemonHpValue.properties['innerText']).toBe('10');
  });

  it('should have stat hp bar', () => {
    const pokemonHpBar: DebugElement = de.query(
      By.css('.pokemon-card__bar--hp')
    );

    expect(parseFloat(pokemonHpBar['styles']['width'] as string)).toBeCloseTo(
      3.9,
      1
    );
  });

  it('should have stat att', () => {
    const pokemonAtt: DebugElement = de.query(
      By.css('.pokemon-card__stat--att')
    );

    expect(pokemonAtt).toBeTruthy();
  });

  it('should have stat att name', () => {
    const pokemonAttName: DebugElement = de.query(
      By.css('.pokemon-card__stat-name--att')
    );

    expect(pokemonAttName.properties['innerText']).toBe('Att:');
  });

  it('should have stat att value', () => {
    const pokemonAttValue: DebugElement = de.query(
      By.css('.pokemon-card__stat-value--att')
    );

    expect(pokemonAttValue.properties['innerText']).toBe('50');
  });

  it('should have stat att bar', () => {
    const pokemonAttBar: DebugElement = de.query(
      By.css('.pokemon-card__bar--att')
    );

    expect(parseFloat(pokemonAttBar['styles']['width'] as string)).toBeCloseTo(
      19.6,
      1
    );
  });

  it('should have stat def', () => {
    const pokemonDef: DebugElement = de.query(
      By.css('.pokemon-card__stat--def')
    );

    expect(pokemonDef).toBeTruthy();
  });

  it('should have stat def name', () => {
    const pokemonDefName: DebugElement = de.query(
      By.css('.pokemon-card__stat-name--def')
    );

    expect(pokemonDefName.properties['innerText']).toBe('Def:');
  });

  it('should have stat def value', () => {
    const pokemonDefValue: DebugElement = de.query(
      By.css('.pokemon-card__stat-value--def')
    );

    expect(pokemonDefValue.properties['innerText']).toBe('100');
  });

  it('should have stat def bar', () => {
    const pokemonDefBar: DebugElement = de.query(
      By.css('.pokemon-card__bar--def')
    );

    expect(parseFloat(pokemonDefBar['styles']['width'] as string)).toBeCloseTo(
      39.2,
      1
    );
  });

  it('should have stat satt', () => {
    const pokemonSatt: DebugElement = de.query(
      By.css('.pokemon-card__stat--satt')
    );

    expect(pokemonSatt).toBeTruthy();
  });

  it('should have stat satt name', () => {
    const pokemonSattName: DebugElement = de.query(
      By.css('.pokemon-card__stat-name--satt')
    );

    expect(pokemonSattName.properties['innerText']).toBe('Satt:');
  });

  it('should have stat satt value', () => {
    const pokemonSattValue: DebugElement = de.query(
      By.css('.pokemon-card__stat-value--satt')
    );

    expect(pokemonSattValue.properties['innerText']).toBe('150');
  });

  it('should have stat satt bar', () => {
    const pokemonSattBar: DebugElement = de.query(
      By.css('.pokemon-card__bar--satt')
    );

    expect(parseFloat(pokemonSattBar['styles']['width'] as string)).toBeCloseTo(
      58.8,
      1
    );
  });

  it('should have stat sdef', () => {
    const pokemonSdef: DebugElement = de.query(
      By.css('.pokemon-card__stat--sdef')
    );

    expect(pokemonSdef).toBeTruthy();
  });

  it('should have stat sdef name', () => {
    const pokemonSdefName: DebugElement = de.query(
      By.css('.pokemon-card__stat-name--sdef')
    );

    expect(pokemonSdefName.properties['innerText']).toBe('Sdef:');
  });

  it('should have stat sdef value', () => {
    const pokemonSdefValue: DebugElement = de.query(
      By.css('.pokemon-card__stat-value--sdef')
    );

    expect(pokemonSdefValue.properties['innerText']).toBe('200');
  });

  it('should have stat sdef bar', () => {
    const pokemonSdefBar: DebugElement = de.query(
      By.css('.pokemon-card__bar--sdef')
    );

    expect(parseFloat(pokemonSdefBar['styles']['width'] as string)).toBeCloseTo(
      78.4,
      1
    );
  });

  it('should have stat spd', () => {
    const pokemonSpd: DebugElement = de.query(
      By.css('.pokemon-card__stat--spd')
    );

    expect(pokemonSpd).toBeTruthy();
  });

  it('should have stat spd name', () => {
    const pokemonSpdName: DebugElement = de.query(
      By.css('.pokemon-card__stat-name--spd')
    );

    expect(pokemonSpdName.properties['innerText']).toBe('Spd:');
  });

  it('should have stat spd value', () => {
    const pokemonSpdValue: DebugElement = de.query(
      By.css('.pokemon-card__stat-value--spd')
    );

    expect(pokemonSpdValue.properties['innerText']).toBe('250');
  });

  it('should have stat spd bar', () => {
    const pokemonSpdBar: DebugElement = de.query(
      By.css('.pokemon-card__bar--spd')
    );

    expect(parseFloat(pokemonSpdBar['styles']['width'] as string)).toBeCloseTo(
      98.0,
      1
    );
  });
});
