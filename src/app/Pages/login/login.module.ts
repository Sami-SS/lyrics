import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { login } from './login';

@NgModule({
  declarations: [
    login,
  ],
  imports: [
    IonicPageModule.forChild(login),
  ],
})
// tslint:disable-next-line: class-name
export class loginModule {}
