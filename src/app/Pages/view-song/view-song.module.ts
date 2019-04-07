import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { viewsong } from './view-song';

@NgModule({
  declarations: [
    viewsong,
  ],
  imports: [
    IonicPageModule.forChild(viewsong),
  ],
})
// tslint:disable-next-line: class-name
export class viewsongModule {}
