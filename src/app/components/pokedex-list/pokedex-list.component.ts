import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getAllPokemonData(url:string){
    return this.http.get(url)
    // fetch('https://pokeapi.co/api/v2/pokemon/')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       data.results.forEach((pokemon:object) => {
    //       console.log(pokemon)
    //       });
    //     });

}}
