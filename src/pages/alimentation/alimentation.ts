import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlimentationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alimentation',
  templateUrl: 'alimentation.html',
})
export class AlimentationPage {

  //Nous on aime quand il y a plein de varriables ! pourquoi faire simple quand on peut faire compliquer sérieusement ?
  private hoursEat;
  private minutesEat;
  private secondsEat;
  private preventEat;

  private hoursDrink;
  private minutesDrink;
  private secondsDrink;
  private preventDrink;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Un petit "date" avec l'équipe ? ;)
    var lastEat = new Date(2018, 11, 6, 20, 0, 0, 0);
    var lastDrink = new Date(2018, 11, 6, 20, 0, 0, 0);

    var now = new Date();

    this.hoursEat = Math.trunc(now.getTime() / 1000 / 60 / 60 - lastEat.getTime() / 1000 / 60 / 60);
    this.minutesEat = Math.trunc(now.getTime() / 1000 / 60 - lastEat.getTime() / 1000 / 60 - this.hoursEat * 60);
    this.secondsEat = Math.trunc(now.getTime() / 1000 - lastEat.getTime() / 1000 - this.hoursEat * 3600 - this.minutesEat * 60);

    this.hoursDrink = Math.trunc(now.getTime() / 1000 / 60 / 60 - lastDrink.getTime() / 1000 / 60 / 60);
    this.minutesDrink = Math.trunc(now.getTime() / 1000 / 60 - lastDrink.getTime() / 1000 / 60 - this.hoursDrink * 60);
    this.secondsDrink = Math.trunc(now.getTime() / 1000 - lastDrink.getTime() / 1000 - this.hoursDrink * 3600 - this.minutesDrink * 60);

    this.timer();

    this.preventEat = "";
    this.preventDrink = "";

  }

  timer() {
    setInterval(function () {
      //Un petit "date" avec l'équipe ? ;)
      var lastEat = new Date(2018, 11, 6, 20, 0, 0, 0);
    var lastDrink = new Date(2018, 11, 6, 20, 0, 0, 0);

      var now = new Date();
      console.log(this.secondsEat);

      this.hoursEat = Math.trunc(now.getTime() / 1000 / 60 / 60 - lastEat.getTime() / 1000 / 60 / 60);
      this.minutesEat = Math.trunc(now.getTime() / 1000 / 60 - lastEat.getTime() / 1000 / 60 - this.hoursEat * 60);
      this.secondsEat = Math.trunc(now.getTime() / 1000 - lastEat.getTime() / 1000 - this.hoursEat * 3600 - this.minutesEat * 60);

      this.hoursDrink = Math.trunc(now.getTime() / 1000 / 60 / 60 - lastDrink.getTime() / 1000 / 60 / 60);
      this.minutesDrink = Math.trunc(now.getTime() / 1000 / 60 - lastDrink.getTime() / 1000 / 60 - this.hoursDrink * 60);
      this.secondsDrink = Math.trunc(now.getTime() / 1000 - lastDrink.getTime() / 1000 - this.hoursDrink * 3600 - this.minutesDrink * 60);

      //On s'est dit que toutes les 3 heures, c'était bien pour manger un petit do-mac entre deux foullées
      if (this.hoursEat > 3) {
        this.preventEat = "Il serait peut-être temps de manger un en-cas pour rester en forme !";
      }
    }, 60000);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentationPage');
  }

}
