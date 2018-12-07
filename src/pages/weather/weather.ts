import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  private latt;
  private long;
  private data;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.latt = 44.8404400;
    this.long = -0.5805000;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');

    var weatherUrl = "http://api.openweathermap.org/data/2.5/find?lat=" 
    + this.latt + "&lon=" + this.long + "&cnt=10&APPID=420e2c45d6abda1e76dd06c135074d0b";

    console.log(weatherUrl);

  
    this.http.get(weatherUrl).map(res => res.json()).subscribe(data => {
      this.data = data;
      console.log(this.data);
  });
  }

}
