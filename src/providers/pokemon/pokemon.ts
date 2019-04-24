import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
 
/*
  Generated class for the PokemonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PokemonProvider Provider');
  }
getPokemonType():Observable<any>{
  return this.http.get("https://pokeapi.co/api/v2/type/")
}


getPokemonLocation():Observable<any>{
  return this.http.get("https://pokeapi.co/api/v2/location/")
}

getPokemonSpecies():Observable<any>{
  return this.http.get("https://pokeapi.co/api/v2/pokemon-species/")
}

getPokemonMovie():Observable<any>{
  return this.http.get("http://www.omdbapi.com/?apikey=dd0133f8&s=pokemon");
}

}
