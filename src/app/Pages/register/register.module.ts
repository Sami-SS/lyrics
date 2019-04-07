import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { register } from './register';

@NgModule({
  declarations: [
    register,
  ],
  imports: [
    IonicPageModule.forChild(register),
  ],
})
// tslint:disable-next-line: class-name
export class registerModule {}
