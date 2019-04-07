import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { home } from './home';


@NgModule({
  declarations: [
    home,

  ],
  imports: [
    IonicPageModule.forChild(home)],
    entryComponents: [
      home
  ],
})
// tslint:disable-next-line: class-name
export class homeModule {}
