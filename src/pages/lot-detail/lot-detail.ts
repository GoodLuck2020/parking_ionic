import {Component, ViewChild} from "@angular/core";
import {IonicPage, NavController, NavParams, Platform, ToastController, Content} from "ionic-angular";
import {LotService} from "../../providers/lot-service";

declare var google: any;

@IonicPage({
  name: 'page-lot-detail',
  segment: 'lot-detail/:id'
})

@Component({
  selector: 'page-lot-detail',
  templateUrl: 'lot-detail.html'
})
export class LotDetailPage {
  @ViewChild(Content) content: Content;
  param: number;
  // lot info
  public lot: any;
  // Map
  public map: any;
  //
  public arr: any = Array;

  constructor(public nav: NavController, public navParams: NavParams, public lotService: LotService, public platform: Platform, public toastCtrl: ToastController) {
    // set sample data
    this.param = this.navParams.get('id');
    this.lot = this.lotService.getItem(this.param);
  }

  ionViewDidLoad() {
    // init map
    this.initializeMap();
  }

  initializeMap() {
    let latLng = new google.maps.LatLng(this.lot.location.lat, this.lot.location.lon);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }

    this.map = new google.maps.Map(document.getElementById("map-detail"), mapOptions);
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 300);
  }

  scrollTo(element: string) {
    let elem = document.getElementById(element);
    let box = elem.getBoundingClientRect();

    let body = document.body;
    let docEl = document.documentElement;

    let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    let clientTop = docEl.clientTop || body.clientTop || 0;
    let top  = box.top +  scrollTop - clientTop;
    let cDim = this.content.getContentDimensions();

    let scrollOffset = Math.round(top) + cDim.scrollTop - cDim.contentTop;

    this.content.scrollTo(0, scrollOffset, 500);
  }

  // view a spot
  viewSpot(spot) {
    for (let i = 0; i < this.lot.spots.length; i++) {
      this.lot.spots[i].active = false;
    }

    spot.active = true;
  }

  // go to reviews page
  viewReviews() {
    this.nav.push('page-reviews');
  }

  // go to checkout page
  checkout(lot) {
    this.nav.push('page-checkout-lot', {
      'id': lot.id
    });
  }

  favorite(lot) {
      this.lotService.favorite(lot)
          .then(property => {
              let toast = this.toastCtrl.create({
                  message: 'Lot added to your favorites',
                  cssClass: 'mytoast',
                  duration: 2000
              });
              toast.present(toast);
          });
  }

}
