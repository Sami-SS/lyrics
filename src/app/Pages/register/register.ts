import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { band } from '../../models/band.model';
import { songsservice } from '../../services/songs.service';



@IonicPage()
@Component({
  selector: 'register',
  templateUrl: 'register.html',
})
// tslint:disable-next-line: class-name
export class register {

  band: band = {
    name: ''};


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private regband: songsservice) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad register');
  }

  addband(band: band) {
    this.regband.addband(band).then(ref => {
      this.navCtrl.setRoot('Home', {key: ref.key});
    });
  }

}
