import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header', () => {
    const header: DebugElement = de.query(By.css('.header'));

    expect(header).toBeTruthy();
  });

  it('should have logo', () => {
    const headerImage: DebugElement = de.query(By.css('.header__logo'));

    expect(headerImage.properties['src']).toContain('Pokemon');
    expect(headerImage.properties['alt']).toBe('Pokémon logo');
  });

  it('should have text', () => {
    const headerText: DebugElement = de.query(By.css('.header__text'));

    expect(headerText).toBeTruthy();
  });

  it('should have data text', () => {
    const dataText: DebugElement = de.query(By.css('.header__data-provider'));

    expect(dataText.properties['innerText']).toContain('Data provided by');
  });

  it('should have link', () => {
    const headerLink: DebugElement = de.query(By.css('.pokeapi-link'));

    expect(headerLink.properties['innerText']).toBe('PokéAPI');
    expect(headerLink.properties['href']).toContain('pokeapi');
  });

  it('should have trademark text', () => {
    const trademarkText: DebugElement = de.query(By.css('.header__trademarks'));

    expect(trademarkText.properties['innerText']).toContain('trademarks');
  });
});
