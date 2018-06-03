import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorPassModalPage } from './visitor-pass-modal';

@NgModule({
  declarations: [
    VisitorPassModalPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorPassModalPage),
  ],
})
export class VisitorPassModalPageModule {}
