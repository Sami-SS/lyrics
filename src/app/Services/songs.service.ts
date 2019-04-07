import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { song} from './../models/song.model';
import { band } from './../models/band.model';


@Injectable()
// tslint:disable-next-line: class-name
export class songsservice {

    private songListRef = this.db.list<song>('song-list');
    private bandListRef = this.db.list<band>('band-list');
    private band: band = {
        name: ''
    };

    constructor(private db: AngularFireDatabase) {}

    getsongsList() {
        return this.songListRef;
    }

// tslint:disable-next-line: no-shadowed-variable
    filterByString(band: string) {
        return this.db.list('/song-list', ref => ref.orderByChild('band').equalTo(band));
    }

    assemblebandFilteredList(ctxt: string): any {
        return(this.filterByString(ctxt));
    }

// tslint:disable-next-line: no-shadowed-variable
    addsong(song: song) {
        return this.songListRef.push(song);
    }

// tslint:disable-next-line: no-shadowed-variable
    addband(band: band) {
        return this.bandListRef.push(band);
    }
    getbandList() {
        return this.bandListRef;
    }
// tslint:disable-next-line: no-shadowed-variable
    editsong(song: song) {
        return this.songListRef.update(song.key, song);
    }
// tslint:disable-next-line: no-shadowed-variable
    removesong(song: song) {
        return this.songListRef.remove(song.key);
    }
}
