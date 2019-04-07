import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from 'angularfire2/';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from './firebase.credentials';

import { AppComponent } from './app.component';

import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { songsservice } from './Services/songs.service';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    songsservice,
    AngularFireAuth,
    Camera,
    Geolocation,
    Media,
    File,
    MediaCapture,
    EmailComposer
  ]
})
export class AppModule {}
