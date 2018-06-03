import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmationModalPage } from './confirmation-modal';

@NgModule({
  declarations: [
    ConfirmationModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmationModalPage),
  ],
})
export class ConfirmationModalPageModule {}
