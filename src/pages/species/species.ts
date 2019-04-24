import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';
import {LocationsPage} from '../locations/locations';
import{HomePage} from '../home/home';
import {MoviesPage} from '../movies/movies';

/**
 * Generated class for the SpeciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-species',
  templateUrl: 'species.html',
})
export class SpeciesPage {
  species:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private pokeProvider:PokemonProvider) {
  }

  ionViewDidLoad(){
    this.pokeProvider.getPokemonSpecies().subscribe((data)=>
  {
    this.species=data.results;
  })
  }

  openHomePage(){
    this.navCtrl.push(HomePage);
  }
  openLocationPage(){
    this.navCtrl.push('LocationsPage');
  }
  openMoviePage(){
    this.navCtrl.push('MoviesPage');
  }
}
