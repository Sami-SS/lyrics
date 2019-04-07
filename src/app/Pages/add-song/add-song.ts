import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { song } from '../../models/song.model';
import { songsservice } from '../../services/songs.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation , GeolocationOptions , Geoposition , PositionError } from '@ionic-native/geolocation/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { MediaCapture, CaptureVideoOptions, MediaFile } from '@ionic-native/media-capture/ngx';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file/ngx';

const MEDIA_FILES_KEY = 'mediaFiles';

@IonicPage()
@Component({
  selector: 'add-song',
  templateUrl: 'add-song.html',
})
// tslint:disable-next-line: class-name
export class addsong {

  @ViewChild('myvideo') myVideo: any;
  mediaFiles = [];
  song: song = {
    title: '',
    chords: '',
    lyrics: '',
    band: ''
 };

  public base64Image: string;
  public geoLocation: string;
  options: GeolocationOptions;
  currentPos: Geoposition;

  recording: boolean = false;
  filePath: string;
  fileName: string;
  audioList: any[] = [];
  audio: MediaObject;

// tslint:disable-next-line: max-line-length
  constructor (private storage: Storage, private mediaCapture: MediaCapture, public platform: Platform, private file: File, private media: Media, public navCtrl: NavController, public navParams: NavParams,
  private songs: songsservice, private camera: Camera, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad addsong');
      this.storage.get(MEDIA_FILES_KEY).then(res => {
        this.mediaFiles = JSON.parse(res) || [];
      });
}
refreshAudioVideoList() {
  this.storage.get(MEDIA_FILES_KEY).then(res => {
    this.mediaFiles = JSON.parse(res) || [];
  });
}
captureAudio() {
  this.mediaCapture.captureAudio().then(res => {
    this.storeMediaFiles(res);
  });
  this.refreshAudioVideoList();
}
captureVideo() {
const options: CaptureVideoOptions = {
  limit: 1,
  duration: 600
};

  this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
    const capturedFile = res[0];
    console.log('my file: ', capturedFile);

    const fileName = capturedFile.name;
    const dir = capturedFile['localURL'].split('/');
    dir.pop();
    const fromDirectory = dir.join('/');
    const toDirectory = this.file.dataDirectory;
    console.log('store files from ' + fromDirectory + ' to ' + toDirectory);
// tslint:disable-next-line: no-shadowed-variable
    this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then( res => {
      const url = res.nativeURL.replace(/^file:\/\//, '');
      this.storeMediaFiles([{name: fileName, size: capturedFile.size}]);
    });
  });
  this.refreshAudioVideoList();
}

playFile(myFileUrl, myFileName) {
  if (myFileName.indexOf('.mp4') > -1) {
    console.log('playing video: ' + myFileUrl);
      const path = this.file.dataDirectory + myFileName;
      const url = path.replace(/^file:\/\//, '');
      const video = this.myVideo.nativeElement;
      video.src = url;
      video.play();
    } else {
      console.log('playing: audio: ' + myFileUrl);
    const audioFile: MediaObject = this.media.create(myFileUrl);
    audioFile.play();
}
}
storeMediaFiles(files) {
  this.storage.get(MEDIA_FILES_KEY).then(res => {
    if (res) {
      let arr = JSON.parse(res);
      arr = arr.concat(files);
      this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
    } else {
      this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
    }
    this.mediaFiles = this.mediaFiles.concat(files);
  });
}

  getUserPosition() {
    this.options = {
        enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

        this.currentPos = pos;
        this.geoLocation = 'Latitude: ' + pos.coords.latitude + ' Longitude: ' + pos.coords.longitude;
        console.log(pos);

    }, ( err: PositionError) => {
        console.log('error : ' + err.message);
    });
}
  openCamera() {
    const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
  };

  this.camera.getPicture(options).then((imageData) => {

  this.base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {

});
this.getUserPosition();
}


 getGeolocation() {
   this.geolocation.getCurrentPosition().then((resp) => {

}).catch((error) => {
  console.log('Error getting location', error);
});

const watch = this.geolocation.watchPosition();
watch.subscribe((_data) => {

});
 }

// tslint:disable-next-line: no-shadowed-variable
  addsong(song: song) {
    this.songs.addsong(song).then(ref => {
      this.navCtrl.setRoot('Home', {key: ref.key});
    });
  }
}
