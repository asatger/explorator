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
  private preventEat;
  private colorEat;

  private hoursDrink;
  private minutesDrink;
  private preventDrink;
  private colorDrink;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.colorEat = "secondary"; //et non uber-eats attention 
    this.colorDrink = "secondary";
    this.refresh();
    this.timer();

  }

  refresh() {
    var lastEat = new Date(2018, 11, 6, 20, 0, 0, 0);
    var lastDrink = new Date(2018, 11, 7, 4, 30, 0, 0);

    //Un petit "date" avec l'équipe ? ;)
    var now = new Date();

    this.hoursEat = Math.trunc(now.getTime() / 1000 / 60 / 60 - lastEat.getTime() / 1000 / 60 / 60);
    this.minutesEat = Math.trunc(now.getTime() / 1000 / 60 - lastEat.getTime() / 1000 / 60 - this.hoursEat * 60);

    this.hoursDrink = Math.trunc(now.getTime() / 1000 / 60 / 60 - lastDrink.getTime() / 1000 / 60 / 60);
    this.minutesDrink = Math.trunc(now.getTime() / 1000 / 60 - lastDrink.getTime() / 1000 / 60 - this.hoursDrink * 60);
  

    //On s'est dit que toutes les 3 heures, c'était bien pour manger un petit do-mac entre deux foullées
    if (this.hoursEat > 3) {
      this.preventEat = "Il serait peut-être temps de manger un en-cas pour rester en forme !"; //on fait de la prévention ;)
      this.colorEat = "danger";
    }
    //Si on part du principe que le climat est le même partout (ce qui n'est pas le cas bien évidemment), il faudrait s'hydrater toutes les 30 minutes (voir 15 si c'est possible et si on aime beaucoup l'eau !)
    if (this.minutesDrink >= 30 || this.hoursDrink > 0) {
      this.preventDrink = "Il serait peut-être temps de boire un peu d'eau pour rester en forme !"; //on fait de la prévention ;)
      this.colorDrink = "danger";
    }

  }

  // on actualise le temps toutes les minutes, faudrait quand meme pas afficher les secondes non plus !
  timer() {
    setInterval(() => {
      this.refresh()
    }, 60000);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentationPage');
  }

}
