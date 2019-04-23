import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pokemon:any=[];
  constructor(public navCtrl: NavController,
  private pokeProvider:PokemonProvider) {
  }

  ionViewDidLoad(){
    this.pokeProvider.getPokemon().subscribe((data)=>
  {
    this.pokemon=data.results;
  })
  }
}
