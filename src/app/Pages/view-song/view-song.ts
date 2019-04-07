import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { song } from '../../models/song.model';


@IonicPage()
@Component({
  selector: 'view-song',
  templateUrl: 'view-song.html',
})
// tslint:disable-next-line: class-name
export class viewsong {
  song: song;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.song = this.navParams.get('song');
  }

}
