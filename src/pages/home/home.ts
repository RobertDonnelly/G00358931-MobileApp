import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';
import {LocationsPage} from '../locations/locations';
import{SpeciesPage} from '../species/species';
import {MoviesPage} from '../movies/movies';
import{Storage} from '@ionic/storage';
import {GamePage} from '../game/game';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pokemon:any=[];
  information:string;
  constructor(public navCtrl: NavController,
  private pokeProvider:PokemonProvider,
  private storage: Storage) {
  }

  ionViewDidLoad(){
    this.pokeProvider.getPokemonType().subscribe((data)=>
  {
    this.pokemon=data.results;
  })
  }
 
  ionViewWillEnter(){
    this.storage.get("favorite")
    .then((val)=>
  {
    this.information = val;
  })
  .catch((err)=>
  {
    alert("error accessing storage")
  })
  }
  
  openFavorite(){
    this.navCtrl.push('GamePage');
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
