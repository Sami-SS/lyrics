
import {map} from 'rxjs/operators';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable } from 'rxjs';


import { band } from '../../models/band.model';
import { songsservice } from '../../services/songs.service';
import { song } from '../../models/song.model';

@IonicPage()
@Component({
  selector: 'home',
  templateUrl: 'home.html',
})
// tslint:disable-next-line: class-name
export class home {

  songsList$: Observable<song[]>;
  bandsList$: Observable<band[]>;

  band: band = {
    name: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private songsService: songsservice) {
    this.songsList$ = this.songsService.getsongsList().snapshotChanges().pipe(map(changes => {
      return changes.map (c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    }));
  }

  ionViewWillLoad() {
    this.bandsList$ = this.songsService.getbandList().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    }));
  }

  onContextChange(ctxt: string): void {
    this.songsList$ = this.songsService.assemblebandFilteredList(ctxt).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  showAllSongs() {
    this.songsList$ = this.songsService.getsongsList().snapshotChanges().pipe(map(changes => {
      return changes.map (c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    }));
  }
}
