import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';
import {LocationsPage} from '../locations/locations';
import{SpeciesPage} from '../species/species';
import {MoviesPage} from '../movies/movies';

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
    this.pokeProvider.getPokemonType().subscribe((data)=>
  {
    this.pokemon=data.results;
  })
  }

  openLocationPage(){
    this.navCtrl.push('LocationsPage');
  }
  openIconicPage(){
    this.navCtrl.push('SpeciesPage');
  }
  openMoviePage(){
    this.navCtrl.push('MoviesPage');
  }
}
