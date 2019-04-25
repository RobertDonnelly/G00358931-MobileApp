import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';
import{HomePage} from '../home/home';
import{SpeciesPage} from '../species/species';
import {MoviesPage} from '../movies/movies';

/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {
    location:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private pokeProvider:PokemonProvider) {
  }

  ionViewDidLoad(){
    this.pokeProvider.getPokemonLocation().subscribe((data)=>
  {
    this.location=data.locations;
  })
  }

  openHomePage(){
    this.navCtrl.push(HomePage);
  }
  openIconicPage(){
    this.navCtrl.push('SpeciesPage');
  }
  openMoviePage(){
    this.navCtrl.push('MoviesPage');
  }
}
