import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';
import{HomePage} from '../home/home';
import{SpeciesPage} from '../species/species';
import {LocationsPage} from '../locations/locations';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  movies:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private pokeProvider:PokemonProvider) {
  }

  ionViewDidLoad(){
    this.pokeProvider.getPokemonMovie().subscribe((data)=>
  {
    this.movies=data.Search;
  })
  }
  openHomePage(){
    this.navCtrl.push(HomePage);
  }
  openLocationPage(){
    this.navCtrl.push('LocationsPage');
  }
  openIconicPage(){
    this.navCtrl.push('SpeciesPage');
  }

}
