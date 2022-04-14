import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/Pokemon';
import { Type } from 'src/_model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  public pokemons: Pokemon[] = [
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbassaur',
      types: [Type.Grass, Type.Poison],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: 'Ivysaur',
      types: [Type.Grass, Type.Poison],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: 'Venossaur',
      types: [Type.Grass, Type.Poison],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
