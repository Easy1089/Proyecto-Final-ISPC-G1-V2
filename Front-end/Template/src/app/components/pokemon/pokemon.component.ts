import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  searchForm!: FormGroup; // Formulario para buscar el pokemon
  pokemon: any; // Objeto que almacena la información del pokemon

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {
    this.searchForm = this.fb.group({
      pokemonName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // Función para buscar el pokemon
  searchPokemon() {
    const pokemonName = this.searchForm.controls['pokemonName'].value;
    this.pokemonService.getPokemon(pokemonName)
      .subscribe((data) => {
        this.pokemon = data;
      });
  }
  
}

