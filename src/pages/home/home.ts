import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pokemon:any=[];
  location:any[];
  species:any[];
  constructor(public navCtrl: NavController,
  private pokeProvider:PokemonProvider) {
  }

  ionViewDidLoad(){
    this.pokeProvider.getPokemonType().subscribe((data)=>
  {
    this.pokemon=data.results;
  })
  }

  ionViewDidLoaded(){
    this.pokeProvider.getPokemonLocation().subscribe((data)=>
  {
    this.location=data.results;
  })
  }

  ionViewHasLoaded(){
    this.pokeProvider.getPokemonSpecies().subscribe((data)=>
  {
    this.species=data.results;
  })
  }

}
