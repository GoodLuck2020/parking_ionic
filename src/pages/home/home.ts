import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, MenuController, ModalController, PopoverController} from "ionic-angular";
import {NotificationsPage} from "../notifications/notifications";
import {LotService} from "../../providers/lot-service";
import {PlaceService} from "../../providers/place-service"
import { Platform} from "ionic-angular"
import { Geolocation } from "@ionic-native/geolocation"
import {easyParkingApp} from "../../app/app.component";
import {isUndefined} from "ionic-angular/util/util";

declare var google: any;

@IonicPage({
  name: 'page-home',
  segment: 'home',
  priority: 'high'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  dDate: Date = new Date();


  searchQuery: string = '';

  // search filter items
  items: string[];
  // search filter data
  searchItems: string[];

  showItems: boolean = false;
  // is loading all data
  isInitialized = false;

  public map: any;
  public childs: any;
  public full_name: string = "";
  public lotlocation: string;
  public geolocation: Geolocation;


  // list of lots
  public lots: any;

  // search conditions
  public checkin = {
    name: "Check-in",
    date: this.dDate.toISOString()
  }

  public checkout = {
    name: "Check-out",
    date: new Date(this.dDate.setDate(this.dDate.getDate() + 1)).toISOString()
  }

  constructor(public nav: NavController, public navParams: NavParams, public menuCtrl: MenuController
              , public modalCtrl: ModalController, public popoverCtrl: PopoverController
              , public lotService: LotService, public platform: Platform, public app: easyParkingApp
             ) {
    // set sample data
    this.menuCtrl.swipeEnable(true, 'authenticated');
    this.menuCtrl.enable(true);

    lotService.getPlaces().then(data => {
      if(data) {
        this.searchItems = Array.from(lotService.items.keys());
        this.items = this.searchItems;
        this.isInitialized = true;
        this.lots = lotService.lots;
        console.log(this.lots);
        this.initializeMap();
      }
    })

  }

  ionViewDidLoad() {
    // init map
    this.platform.ready().then(() => this.initializeDevice());

  }

  initializeDevice() {
    this.geolocation = new Geolocation();

    this.geolocation.getCurrentPosition().then((data) => {
      this.app.coordinate = data.coords;
    }).catch((error) => {
      console.log('Can\'t get current location');
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.app.coordinate = data.coords;
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

    this.map = new google.maps.Map(document.getElementById("home-map"), mapOptions);

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

  itemSelected(item: string) {
    this.lotlocation = item;
    this.showItems = false;
  }

  childrenArr(chil) {
    let child = Number(chil);
    this.childs = Array(child).fill(0).map((v,i) => i);
  }

  getItems(ev: any) {
    // Reset items back to all of the items

    if(this.isInitialized == false)
      return;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.showItems = true;
      this.items = this.searchItems.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.showItems = false;
    }
  }

  // view lot detail
  viewLot(lot) {
    console.log(lot);
    this.nav.push('page-lot-detail', {
      'id': lot.idx
    });
  }

  // view all lots
  viewLots() {
    let data = this.lotService.items.get(this.lotlocation);
    if(isUndefined(data))
      return;
    let key = data.join(' ');
    this.nav.push('page-lot', {q: key});
  }

  // go to search car page
  searchCar() {
    this.nav.push('page-search-cars');
  }

  // go to search trip page
  searchTrip() {
    this.nav.push('page-search-trips');
  }

  // to go account page
  goToAccount() {
    this.nav.push('page-account');
  }

  presentNotifications(myEvent) {
    // console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}

//
