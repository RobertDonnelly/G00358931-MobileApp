import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Storage} from '@ionic/storage';
import{HomePage} from '../home/home';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  myfavorite :String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }


  updateFavorite(){
    this.storage.set("favorite",this.myfavorite);
    this.navCtrl.push(HomePage);
  }

 
}
