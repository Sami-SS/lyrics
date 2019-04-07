import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { songsservice } from '../../services/songs.service';
import { song } from '../../models/song.model';



@IonicPage()
@Component({
  selector: 'edit-song',
  templateUrl: 'edit-song.html',
})
// tslint:disable-next-line: class-name
export class editsong {

  song: song;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private songs: songsservice) {
  }

  ionViewWillLoad() {
   this.song = this.navParams.get('song');
  }


// tslint:disable-next-line: no-shadowed-variable
  saveSong(song: song) {
    this.songs.editsong(song).then(() => {
  this.navCtrl.setRoot('home');
  });
  }


// tslint:disable-next-line: no-shadowed-variable
  deleteSong(song: song) {
    this.songs.removesong(song).then(() => {
      this.navCtrl.setRoot('home');
    });
  }

}
