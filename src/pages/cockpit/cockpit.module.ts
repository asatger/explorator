import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CockpitPage } from './cockpit';

@NgModule({
  declarations: [
    CockpitPage,
  ],
  imports: [
    IonicPageModule.forChild(CockpitPage),
  ],
})
export class CockpitPageModule {}
