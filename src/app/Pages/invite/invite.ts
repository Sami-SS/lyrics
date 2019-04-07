import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@IonicPage()
@Component({
  selector: 'invite',
  templateUrl: 'invite.html',
})
// tslint:disable-next-line: class-name
export class invite {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad invite');
  }

  sendEmail() {
    const email = {
      to: '',
      cc: '',
      attachments: [

      ],
      subject: 'Join the band and see instant lyrics updates',
      body: 'Check out the app on the appstore or googleplay',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
