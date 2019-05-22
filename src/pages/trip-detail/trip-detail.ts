import {Component} from "@angular/core";
import {IonicPage, NavParams, NavController} from "ionic-angular";
import {TripService} from "../../providers/trip-service";

@IonicPage({
  name: 'page-trip-detail',
  segment: 'trip-detail/:id'
})

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {
  param: number;
  // trip info
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  constructor(public nav: NavController, public navParams: NavParams, public tripService: TripService) {
    // set sample data
    this.param = this.navParams.get('id');
    this.trip = this.tripService.getItem(this.param) ? this.tripService.getItem(this.param) : this.tripService.getAll()[0];
  }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout(trip) {
    this.nav.push('page-checkout-trip', {
      'id': trip.id
    });
  }
}
