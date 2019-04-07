import { Component, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from 'angularfire2/auth';
import { rootRenderNodes } from '@angular/core/src/view';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component ({
  template: '<ion-nav #myNav [root]="root"></ion-nav>'
})

export class AppComponent {
  @ViewChild('myNav') nav: NavController;
  public root = 'login';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private angularFireAuth: AngularFireAuth) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
      angularFireAuth.auth.onAuthStateChanged(function(user) {
        if (user) {
          this.root = 'home';
        } else {
          this.root = 'login';
        }
      });
    });
  }
// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.nav.push(this.root);
  }
}
