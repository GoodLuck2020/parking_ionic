import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {SearchLocationPage} from "../search-location/search-location";

@IonicPage({
  name: 'page-search-cars',
  segment: 'search-cars'
})

@Component({
  selector: 'page-search-cars',
  templateUrl: 'search-cars.html'
})
export class SearchCarsPage {
  // search condition
  public search: any = {
    pickup: "Miami, Florida",
    dropOff: "Same as pickup",
    from: new Date().toISOString(),
    to: new Date().toISOString()
  };

  constructor(private storage: Storage, public nav: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad')
  }

  ionViewWillEnter() {
    // this.search.pickup = "Miami, Florida";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      // console.log(val)
      if (val === null) {
        this.search.pickup = "Miami, Florida"
      } else {
        this.search.pickup = val;
      }
      // this.search.pickup = val;
      console.log(this.search.pickup)
    }).catch((err) => {
      console.log(err)
    });

    this.storage.get('dropOff').then((val) => {
      if (val === null) {
        this.search.dropOff = "Same as pickup"
      } else {
        this.search.dropOff = val;
      }
      // this.search.dropOff = val;
    }).catch((err) => {
      console.log(err)
    });
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // go to result page
  doSearch() {
    this.nav.push('page-cars');
  }
}
