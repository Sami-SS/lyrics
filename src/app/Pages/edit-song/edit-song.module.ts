import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { editsong } from './edit-song';

@NgModule({
  declarations: [
    editsong,
  ],
  imports: [
    IonicPageModule.forChild(editsong),
  ],
})
// tslint:disable-next-line: class-name
export class editsongModule {}
