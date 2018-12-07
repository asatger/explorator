import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnvironmentPage } from '../environment/environment';

import { AlimentationPage } from "../alimentation/alimentation";
import { EnvironmentPage } from "../environment/environment";
import { WeatherPage } from '../weather/weather';

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
private navPush;

  private toEnvironment;
  private toWeather;
  private toAlimentation;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toEnvironment = EnvironmentPage;
    this.toAlimentation = AlimentationPage;
    this.toWeather = WeatherPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CockpitPage');
  }

}
