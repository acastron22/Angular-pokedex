import { PokemonService } from './../../_services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/Pokemon';
import { Type } from 'src/_model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {

  constructor(
    public pokemonService: PokemonService
  ) {}

  ngOnInit(): void {}
}
