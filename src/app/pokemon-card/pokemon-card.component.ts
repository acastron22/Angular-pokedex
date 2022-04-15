import { getPokemonImage, getPokemonNumber, Pokemon } from './../../_model/Pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input()
  public 'pokemon': Pokemon;

  public getPokemonNumber = getPokemonNumber
  public getPokemonImage = getPokemonImage

  constructor() {}

  ngOnInit(): void {}
}
