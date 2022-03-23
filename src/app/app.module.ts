import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';
import { PokedexSearchComponent } from './components/pokedex-search/pokedex-search.component';
import { PokedexCardComponent } from './pokedex-card/pokedex-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexListComponent,
    PokedexSearchComponent,
    PokedexCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
