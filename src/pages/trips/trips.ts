import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {TripService} from "../../providers/trip-service";

@IonicPage({
  name: 'page-trips',
  segment: 'trips'
})

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;

  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    this.trips = tripService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push('page-trip-detail', {
      'id': id
    });
  }
}
