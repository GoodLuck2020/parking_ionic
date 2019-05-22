import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, Platform} from "ionic-angular";
import {LotService} from "../../providers/lot-service";
import {isUndefined} from "ionic-angular/util/util";

declare var google: any;

@IonicPage({
  name: 'page-lot',
  segment: 'places'
})

@Component({
  selector: 'page-lot',
  templateUrl: 'lot.html'
})
export class LotPage {
  // list of lots
  public lots: any;
  // Map
  public map: any;

  constructor(public nav: NavController, public navParams: NavParams, public lotService: LotService, public platform: Platform) {
    // set sample data
    let q = this.navParams.get('q');
    if( isUndefined(q) || q.trim() == '') {
      this.lots = lotService.getAll();
    } else {
      this.lots = lotService.findByName(q);
    }

  }

  ionViewDidLoad() {
    // init map
    this.initializeMap();
  }

  // view lot detail
  viewLot(lot) {
    // console.log(lot.id)
    this.nav.push('page-lot-detail', {
      'id': lot.idx
    });
  }

  initializeMap() {
    let latLng = new google.maps.LatLng(this.lots[0].location.lat, this.lots[0].location.lon);

    let mapOptions = {
      center: latLng,
      zoom: 11,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // add markers to map by lot
    for (let i = 0; i < this.lots.length; i++) {
      let lot = this.lots[i];
      new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(lot.location.lat, lot.location.lon)
      });
    }

    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 300);
  }

  // view all lots
  viewLots() {
    this.nav.push('page-lot');
  }
}
