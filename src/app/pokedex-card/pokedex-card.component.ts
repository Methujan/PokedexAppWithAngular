import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.css']
})
export class PokedexCardComponent implements OnInit {
  @Input() card:any;
  constructor() { }

  ngOnInit(): void {
  }

}
