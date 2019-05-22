import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {SearchLocationPage} from "../search-location/search-location";

@IonicPage({
  name: 'page-search-trips',
  segment: 'search-trips'
})

@Component({
  selector: 'page-search-trips',
  templateUrl: 'search-trips.html'
})
export class SearchTripsPage {
  // search condition
  public search = {
    name: "Miami, Florida",
    date: new Date().toISOString()
  }

  constructor(private storage: Storage, public nav: NavController) {
  }

  ionViewWillEnter() {
    // this.search.pickup = "Miami, Florida";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      // console.log(val)
      if (val === null) {
        this.search.name = "Miami, Florida"
      } else {
        this.search.name = val;
      }
      // this.search.pickup = val;
      // console.log(this.search.pickup)
    }).catch((err) => {
      console.log(err)
    });
  }

  // go to result page
  doSearch() {
    this.nav.push('page-trips');
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }
}
