import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { invite } from './invite';

@NgModule({
  declarations: [
    invite,
  ],
  imports: [
    IonicPageModule.forChild(invite),
  ],
})
// tslint:disable-next-line: class-name
export class inviteModule {}
