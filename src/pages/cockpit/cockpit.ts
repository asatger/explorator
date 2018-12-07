import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlimentationPage } from "../alimentation/alimentation";

/**
 * Generated class for the CockpitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cockpit',
  templateUrl: 'cockpit.html',
})
export class CockpitPage {

  private pushPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPage = AlimentationPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CockpitPage');
  }

}
