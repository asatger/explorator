import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';

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

  @ViewChild('map') mapContainer : ElementRef;
  map : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.loadmap();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CockpitPage');
  }

  loadmap() {

    this.map = leaflet.map('map', { 
      attributionControl : false ,
      center : [24.11604, -5.624658],
      zoom : 7
    });

    this.map.removeControl(this.map.zoomControl);

    var Icon = leaflet.Icon.extend({
      options: {
          iconSize: 50
      }
    });

    var usedIcon = new Icon({iconUrl: '../assets/imgs/location.png'});

    leaflet.icon = function (options) {
      return new leaflet.Icon(options);
  };

    leaflet.marker([24.11604, -5.624658], {icon: usedIcon}).addTo(this.map);

    var Stamen_Toner = leaflet.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	    minZoom: 0,
      maxZoom: 20,
	    ext: 'png'
    }).addTo(this.map);
    // this.map.locate({
    //   watch: true,
    //   setView: true,
    //   maxZoom: 20
    // }).on('locationfound', (e) => {
    //   leaflet.marker([e.latitude, e.longitude]).bindPopup("YOU ARE HERE!").addTo(this.map);
    //   })
  }

}
