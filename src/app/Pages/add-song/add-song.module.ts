import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { addsong } from './add-song';

@NgModule({
  declarations: [
    addsong,
  ],
  imports: [
    IonicPageModule.forChild(addsong),
  ],
})
// tslint:disable-next-line: class-name
export class addsongModule {}
