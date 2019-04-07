import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.html',
})
// tslint:disable-next-line: class-name
export class login {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularFireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad login');
  }

  register(email, password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
      this.navCtrl.setRoot('register', {email});
    });
  }

  login(email, password) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.navCtrl.setRoot('home', {email});
    });
  }

}
